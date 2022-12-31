<script>
  import CategoryList from "./CategoryList.svelte";

  export let group;

  let active = false;
</script>

<div>
  <div
    class="flex items-center cursor-pointer"
    on:click={() => (active = !active)}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class={`h-5 min-h-[1.25rem] w-5 min-w-[1.25rem] mr-2 transition-all ${
        active ? "rotate-90" : ""
      }`}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
    <span class="truncate">{group.category.name}</span>
  </div>
  {#if active}
    <CategoryList tools={group.tools} />
  {/if}
</div>
