<script lang="ts">
    import type { Pentamino } from './pentaminos'
    export let boardWidth: number
    export let boardHeight: number
    export let squareSize: number
    export let pentamino: Pentamino

    function gridrectClass(y: number, x: number) {
        return pentamino[y][x] == ' ' ? 'gridrect-free' : 'gridrect-occupied'
    }
</script>    

  



    
{#each Array(boardHeight+1) as _, i}
    <line x1="0" y1="{i * squareSize}" x2="{squareSize * boardWidth}" y2="{i * squareSize}" class="gridline" /> 
{/each}
{#each Array(boardWidth+1) as _, i}
    <line y1="0" x1="{i * squareSize}" y2="{squareSize * boardHeight}" x2="{i * squareSize}" class="gridline" />
{/each}


{#each pentamino as item, y }
    {#each item as _, x}
        <rect x="{x * squareSize}" y="{y * squareSize}" width="{squareSize}" height="{squareSize}" class="{gridrectClass(y, x)}" />
    {/each}
{/each}



<style>
        .gridline {
            stroke: grey;
            stroke-width: 0.5;
        }
        .gridrect-free {
            fill: rgb(93, 102, 29);
            fill-opacity: .1;
        }
        .gridrect-occupied {
            fill: lightgreen;
        }
        .gridrect-occupied:hover {
            fill: green;
        }
</style>