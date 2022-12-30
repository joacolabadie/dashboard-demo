<script>
  import Category from "./Category.svelte";
  import SearchBar from "./SearchBar.svelte";
  import Settings from "./Settings.svelte";

  export let categories, tools, wordsLeft;

  const groups = categories.map(category => {
    return {
      category,
      tools: tools.filter(tool => tool.category === category.name),
    };
  });
</script>

<!-- <div
  class="fixed top-0 left-0 h-screen w-64 flex flex-col bg-gray-50 border-r-2 border-gray-200"
>
  <div>a</div>
</div> -->

<!-- <form method="POST" action="?/logout">
  <button type="submit">Logout</button>
</form> -->

<div
  class="lg:relative lg:h-screen lg:w-64 lg:border-r-2 border-gray-200 p-6 flex flex-col bg-gray-50 text-sm font-medium text-gray-800 h-[92vh] fixed top-[8vh] lg:top-0 w-full"
>
  <div class="mb-4">
    <h2 class="mb-4 cursor-pointer text-2xl font-semibold">TextmateAi</h2>
    <div class="mb-4">
      <div class="flex items-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="mr-2 h-5 min-h-[1.25rem] w-5 min-w-[1.25rem]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        <h3>Dashboard</h3>
      </div>
    </div>
    <SearchBar />
  </div>
  <div class="flex h-0 flex-col flex-1 justify-between">
    <div class="mb-4 overflow-y-auto flex-1">
      <div class="space-y-1">
        {#each groups as group}
          <Category {group} />
        {/each}
      </div>
    </div>
    <Settings />
  </div>
</div>

<!-- TODO: if height is not specified flex-1 does not work -->
