<script lang="ts">
import Pentamino from '../Pentamino.svelte'
import { calcPentaminos } from '../pentaminos'
import { PentaminoMode } from '../pentaminos'

let pentaminos = calcPentaminos()
</script>

{#each pentaminos as pentamino}
  <p>
    <Pentamino {pentamino} squareSize="20" mode={PentaminoMode.Board}/>
  </p>
{/each}




