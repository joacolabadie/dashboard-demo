<script>
  import Sidebar from "$lib/components/Sidebar/Sidebar.svelte";
  import Header from "$lib/components/Header/Header.svelte";

  /** @type {import('./$types').LayoutData} */
  export let data;
  // console.log(data);
</script>

<main class=" h-screen">
  <Sidebar
    categories={data.categories}
    tools={data.tools}
    wordsLeft={data.profile.words_left}
    favoriteTools={data.profile.fav}
  />
  <Header />
  <div class="lg:ml-64 lg:h-full h-[calc(100%-3.5rem)]">
    <slot />
  </div>
</main>
