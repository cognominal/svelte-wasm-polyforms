I intend to support polyforms including polyominos instead of only pentaminos.

# the broad lines of the implementation

We assume the basic concepts and vocabulary of [polyforms](https://en.wikipedia.org/wiki/Recreational_mathematics), a form of
[recreational mathematics](https://en.wikipedia.org/wiki/Recreational_mathematics) as known. We need to add some more concepts, vocabulary and data structures to describe the (future) implementation
generalizing our particular implemantation of pentaminos.

Representing and solving polyforms problems is a challenge because, except for
polyominoes, it needs some work to encode it as a matrix occupancy problem.
Even for polyominos, representing their perimeter, necessay to draw them, is
not obvious. The general idea is to represent a polyform as a list of
positioned cells. A square of a matrix is a number that encode a list of non
overlapping cells, possibly of different oriented polyform instances. We design
a general algorithm with a specific driver for each polyform type.

## Some vocabulary and data structures

A tile can be translated and may be rotated and flipped to be fitted on a
problem board. The possible rotations are specific to the polyform type. For
[polyominos](https://en.wikipedia.org/wiki/Polyomino) the are multiple of 90
degrees, for [polyalmonds](https://en.wikipedia.org/wiki/Polyiamond) multiple
of 120, for [polyabolos](https://en.wikipedia.org/wiki/Polyabolo) multiple of 45
and for [polyhexes](https://en.wikipedia.org/wiki/Polyhex) multiple of 30 and
so on. Some rotations and flips can lead to equivalent tiles. We say `ttile`
for a tile in its original orientation (t for template) and `otile` for an
oriented tile, and `ftile` for an otile fitted on a board. A ttile is just an
otile representative of a set of equivalent otiles modulo rotations and flips.

An otile is composed of cells. Each cell has a type representated by an
integer, and a relative position in the otile. In a board with ftiles each cell
of a ftile has a position in the board.

A ftile has a `Position` in a square grid, possibly a one conventional letter
name, an instance number each cell of a ftile belongs to one and only one
square of a matrix board. An integer of a matrix board square encodes the list
of (non everlapping) type cell that belong to the square. It does not encode to
which ftile the cell belongs to. This is the role of the ftile array name and
instance number.

A Board is interactive and represents a set of non overlapping ftiles placed on
a grid. A board is representated as a square matrix. For each square of the
matrix a integer value allows to determinate which ptile cells are owned by the
square.

A problem is a board that can fit an non overlapping group of otiles. Because
it is difficult to calculate the perimeter of a tile, we have a string
representation of a board to help debugging. The Board component can display
either the graphical board or its string representation. The string
representation is in fact semi-graphical. It show the matrix and for each
square the cells thare are owned by the square.


Each type of polyform has a driver to drive the general algorithm.

# flattened tile

Representing a tile as a matrix is inefficient because most of the squares are empty. A flattened tile is an array of PCells ordered on their position `x`, `y`.

type PCell = { cells: number,  x: number, y: number }

# Some random thoughts.

I have more or less curated the previous material. Now it is not.

Currently, we  have a type 

```
type PentaminoName = string //m& { length: 1 } TODO shut up compiler errors
export type Pentamino = PentaminoName[][]
```

Now we will store a number because on polyforms other than 
polyominos. Bits in that square will represent triangular cells within the square of the polyform. If the two cells are ocuppied they make a
square.
At least that will work for polyabolos.
I have to think the case of polyamonds or polyhexes where cells are
not squares but must be encoded in an integer.

```export type Polyomino = number[][]```

Below, more likely a enum and enum names should all uppercase?

type Polyform = Polyomino | Polyiamond | Polyhex | Polyabolo

# generating the polyforms

Generating the a n-form from a n-1 form will involve walking the
perimeter and for each segment of a parameter adding a cell.
For a polyomino the cell is a square, for a polyabolo there are two
way to add triangular cell.

I probably need to update the Board type so I can generate the 
svg to document. 

https://en.wikipedia.org/wiki/Polyabolo
https://en.wikipedia.org/wiki/Polyhex_%28mathematics%29