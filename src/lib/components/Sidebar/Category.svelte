<script>
  import CategoryList from "./CategoryList.svelte";

  export let group;

  let active = false;

  function toggleList() {
    active = !active;
  }
</script>

<div>
  <!-- TODO: what is this -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="flex cursor-pointer items-center" on:click={toggleList}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class={`${
        active ? "rotate-90" : ""
      } mr-1 h-5 min-h-[1.25rem] w-5 min-w-[1.25rem] transition-all`}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
    <span>{group.category.name}</span>
  </div>
  {#if active}
    <CategoryList tools={group.tools} />
  {/if}
</div>
