<script lang="ts">
    import { calcPerimeter }  from './pentaminos'
    import { type Pentamino, type Coords, PentaminoMode } from './pentaminos'
    import Board from './Board.svelte'
    import { onMount } from 'svelte'
    export let pentamino: Pentamino
    export let mode: PentaminoMode = PentaminoMode.Free
    export let squareSize = 8
    let boardSize = 5*squareSize
    let pentaminoElt : SVGElement
    let gridElt : SVGElement

    function polylinePoints(pentomino: Pentamino) {
        let perimeter = calcPerimeter(pentamino);
        let points = perimeter.map(  (coord) => `${coord.x*squareSize},${coord.y*squareSize}` )
        return points.join(' ')
    }

</script>



<svg width="{boardSize}" height="{boardSize}" viewBox="0 0 {boardSize} {boardSize}">
        {#if mode == PentaminoMode.Board}
            <Board boardWidth={5} boardHeight={5} squareSize pentamino={pentamino}/>
        {/if}
        <polyline points={polylinePoints(pentamino)} class="pentamino draggable">
</svg>

<style>
    .pentamino {
        fill: lightblue;
        stroke: red;
        stroke-width: 2;
    }

    .draggable {
        cursor: move;
    }

    .pentamino:hover {
        fill: blue;
    }
    
</style>
