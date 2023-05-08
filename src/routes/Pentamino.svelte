<script lang="ts">
    import { calcPerimeter }  from './pentaminos'
    import { type Pentamino, type Coords, PentaminoMode } from './pentaminos'
    import Board from './Board.svelte'
    import { onMount } from 'svelte'
    export let pentamino: Pentamino
    export let mode: PentaminoMode = PentaminoMode.Free
    let pentaminoElt : SVGElement
    let gridElt : SVGElement
    let squareSize = 20

    function polylinePoints(pentomino: Pentamino) {
        let perimeter = calcPerimeter(pentamino);
        let points = perimeter.map(  (coord) => `${coord.x*squareSize},${coord.y*squareSize}` )
        return points.join(' ')
    }

</script>



<p><svg width="200" height="200" viewBox="-50 -50 150 150">
        {#if mode == PentaminoMode.Free}
            <Board boardWidth={5} boardHeight={5} squareSize={20} pentamino={pentamino}/>
        {/if}
        <polyline points={polylinePoints(pentamino)} class="pentamino draggable">
</svg></p>
    <p id="log"></p>

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
