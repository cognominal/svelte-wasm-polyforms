type PentaminoName = string //m& { length: 1 } TODO shut up compiler errors
export type Pentamino = PentaminoName[][]
export type Coords = { x: number, y: number, direction?: Direction }
export enum PentaminoMode { Board, Free }


export let pentaminos : Pentamino[]

// Not uses yet. Keep it as an example of using WASTM
async function square() {
    // Load the wasm module
    const module = await WebAssembly.instantiateStreaming(fetch("square.wasm"), {});

    // Get the input value
    const input = (document.getElementById("input") as HTMLInputElement).value;

    // Call the `square` function in the wasm module with the input value
    // @ts-ignore
    const result = module.instance.exports.square(input);

    // Display the result
    document.getElementById("result")!.textContent = `The square of ${input} is ${result}.`;
}

enum Direction { Right, Down, Left, Up }


const PentaminoSize = 5
let squareSize = 20

let pentaminoSize = 5
let inputBoardSize = 5
const right = { x: 1, y: 0 }
const down = { x: 0, y: 1 }
const left = { x: -1, y: 0 }
const up = { x: 0, y: -1 }
let walk = [right, down, left, up]

function equals_coords(pos1: Coords, pos2: Coords) { return pos1.x == pos2.x && pos1.y == pos2.y }

// stay blanks after the fifth column or in blanks line separator will confuse the algorithm
const pentaString = 
`ttt
 t
 t

u u
uuu

vvv
v
v

ww
 ww
  w

 x
xxx
 x

yyyy
 y

zz
 z
 zz

 ff
ff
 f

iiiii

llll
l

ppp
pp

nnn
  nn
`

export function calcPentaminos() : Pentamino[]{
    const pentaStrings = pentaString.split('\n\n')
    pentaminos = pentaStrings.map(
        (s) =>  calcPentaminoCoords(s) 
    )
    return pentaminos
}
calcPentaminos()


function calcPentaminoCoords(pentaString: string): Pentamino {
    // convert the string into an array of Pentamino
    let pentamino: Pentamino = []
    let si = 0

    for (let i = 0; i < PentaminoSize; i++) {
        pentamino.push([])
        for (let j = 0; j < PentaminoSize; j++) {
            const c = pentaString.charAt(si);
            pentamino[i][j] = c == '\n' || c == '' ? ' ' : pentaString.charAt(si++)
        }
        si++ // skip the newline
    }
    return pentamino
}

function connexParts(pentamino: Pentamino) {
    
}

export function calcPerimeter(pentamino: Pentamino) {

    let pos: Coords = { x: 0, y: 0 }
    let plPos: Coords = { x: 0, y: 0 }
    let direction: Direction = Direction.Right;
    let firstSquarePos: Coords | null = null
    let firstSquareDirection: Direction
    let svgPolyline: Coords[] = []
    let beginning = true

    function isOccupied(_pos = pos) {
        return _pos.y < inputBoardSize && _pos.x < inputBoardSize && _pos.y >= 0
            && _pos.x >= 0 && pentamino[_pos.y][_pos.x] != ' '
    }
    function backToBeginning() {
        if (beginning) {
            beginning = false
            return false
        }
        return firstSquarePos!.y == pos.y && firstSquarePos!.x == pos.x && firstSquareDirection == direction
    }
    function rightOfSquarePos() { return forwardSquarePos(rightDirection()) }
    function rightOfSquareOccupied() { return isOccupied(forwardSquarePos(direction + 1)) }
    function LeftOfSquarePos() { return forwardSquarePos(leftDirection()) }
    function LeftOfSquareOccupied() { return isOccupied(forwardSquarePos(direction + 3)) }
    function forwardSquareOccupied() { 
        let __pos = forwardSquarePos()
        let  bool = isOccupied(__pos)
        return bool
    }
    function goForward() { pos = forwardSquarePos() }
    function goLeft() { direction = (direction - 1 + 4) % 4; goForward() }
    // forward, right and left are relative to the current direction
    function forwardSquarePos(_direction = direction) {
        return { x: pos.x + walk[(_direction+4) % 4].x, y: pos.y + walk[(_direction + 4) % 4].y }
    }
    function rightDirection() { return (direction + 1) % 4 }
    function leftDirection() { return (direction + 3) % 4 }


    function pushCoords(init = false) {
        if (init) {
            plPos = { x: pos.x, y: pos.y, direction: direction }

        } else {
            plPos = { x: plPos.x + walk[(direction) % 4].x, y: plPos.y + walk[(direction) % 4].y, direction: direction }
        }
        svgPolyline.push(plPos);
        // DOMupdatePolyline()
        // the polyline direction is right orthogonal to the direction
    }
    
    while (!isOccupied()) {
        pos = forwardSquarePos()
    }
    firstSquarePos = pos
    firstSquareDirection = direction
    pushCoords(true)  // init

    while (1) {
        if (LeftOfSquareOccupied()) {
            goLeft()
            continue
        }
        while (!forwardSquareOccupied()) {
            pushCoords()
            direction = rightDirection()
            if (backToBeginning()) {
                return svgPolyline;
            }
        }
        pushCoords()
        goForward()
    }
    alert('should not be here')
    return svgPolyline;
}


// return Pentamino| boolean because we will enforce connexity
export function toggleSquare(p: Pentamino, x: number, y: number, 
    enforceConnexity = true) : Pentamino | boolean {
    let pentamino = pentaminos[0]
    pentamino[y][x] = pentamino[y][x] == ' ' ? 'X' : ' '
    return pentamino
}
