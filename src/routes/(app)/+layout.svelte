<script>
  import Sidebar from "$lib/components/Sidebar/Sidebar.svelte";
  import Header from "$lib/components/Header/Header.svelte";

  /** @type {import('./$types').LayoutData} */
  export let data;
</script>

<main>
  <Sidebar
    categories={data.categories}
    tools={data.tools}
    wordsLeft={data.wordsLeft}
  />
  <Header />
  <div class="lg:ml-64">
    <slot />
  </div>
</main>
