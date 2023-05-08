<script lang="ts">
import Pentamino from '../Pentamino.svelte'
import { calcPentaminos, PentaminoMode, genOrientations, pentaminoString, normalizeOrientation } from '../pentaminos'


let pentaminos = calcPentaminos()
// o =
</script>

{#each pentaminos as p}
  <p/>
    <Pentamino pentamino={normalizeOrientation(p, 1)} squareSize="20" mode={PentaminoMode.Board}/>

  <hr/>
{/each}
