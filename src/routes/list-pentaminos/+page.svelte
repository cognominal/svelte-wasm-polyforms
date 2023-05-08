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


<ul>
  <li><a href="/">Pentamino Puzzle</a></li>
</ul>

<p>using SvelteKit<p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

