<script lang="ts">
import Pentamino from '../Pentamino.svelte'
import { calcPentaminos, PentaminoMode, genOrientations, pentaminoString } from '../pentaminos'


let pentaminos = calcPentaminos()
// o =
</script>

{#each pentaminos as p}
  <p/>
    <Pentamino pentamino={p} squareSize="20" mode={PentaminoMode.Board}/>
    <!-- {genOrientations(p).length} -->
    <!-- <br>
    {#each genOrientations(p) as o}
      {@html pentaminoString(o)}

    {/each} -->


    {#each genOrientations(p) as o }
       <Pentamino pentamino={o} squareSize="8"/> 
    {/each}
  <hr/>
{/each}
