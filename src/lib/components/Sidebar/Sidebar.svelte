<script>
  import Category from "./Category.svelte";
  import CategoryList from "./CategoryList.svelte";
  import SearchBar from "./SearchBar.svelte";
  import Settings from "./Settings.svelte";
  import { sidebarState } from "../../stores/sidebarState";
  import { search } from "../../stores/sidebarSearch";

  export let categories, tools, wordsLeft;

  const groups = categories.map(category => {
    return {
      category,
      tools: tools.filter(tool => tool.category === category.name),
    };
  });
</script>

<div
  class={`border-gray-200 flex top-14 lg:top-0 left-0 h-[calc(100vh-3.5rem)] lg:h-screen lg:w-64 w-full  flex-col border-r-2 fixed bg-gray-50 p-4 text-sm font-medium text-gray-800 lg:translate-x-0 transition-all ${
    $sidebarState ? "translate-x-0" : "translate-x-[-100%]"
  }`}
>
  <div class="mb-4">
    <h2 class="mb-4 text-2xl font-semibold cursor-pointer hidden lg:block">
      TextmateAi
    </h2>
    <div class="mb-4">
      <div class="cursor-pointer flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-5 min-h-[1.25rem] w-5 min-w-[1.25rem] mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        <span>Dashboard</span>
      </div>
    </div>
    <SearchBar />
  </div>
  <div class="flex h-0 flex-1 flex-col justify-between">
    <div class="flex-1 overflow-y-auto mb-4">
      {#if $search === ""}
        <div class="space-y-2">
          {#each groups as group (group.category.name)}
            <Category {group} />
          {/each}
        </div>
      {:else}
        <!-- <CategoryList tools={filteredTools} /> -->
        <p>Searching...</p>
      {/if}
    </div>
    <Settings {wordsLeft} />
  </div>
</div>
