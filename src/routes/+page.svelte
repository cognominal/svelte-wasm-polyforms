<script>
import Pentamino from './Pentamino.svelte'
import { calcPentaminos } from './pentaminos'

let pentaminos = calcPentaminos()
</script>

{#each pentaminos as pentamino}
  <p>
    <Pentamino {pentamino}/>
  </p>
{/each}



<p>using SvelteKit<p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

