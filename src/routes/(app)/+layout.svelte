<script>
  import Sidebar from "../../lib/components/Sidebar/Sidebar.svelte";

  /** @type {import('./$types').LayoutData} */
  export let data;
</script>

<main>
  <Sidebar
    categories={data.categories}
    tools={data.tools}
    wordsLeft={data.wordsLeft}
  />
  <slot />
</main>
