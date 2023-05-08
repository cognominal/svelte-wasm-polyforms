<script>
import Pentamino from '../Pentamino.svelte'
import { calcPentaminos } from '../pentaminos'

let pentaminos = calcPentaminos()
</script>

{#each pentaminos as pentamino}
  <p>
    <Pentamino {pentamino}/>
  </p>
{/each}


<ul>
  <li><a href="/">Pentamino Puzzle</a></li>
</ul>

<p>using SvelteKit<p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

