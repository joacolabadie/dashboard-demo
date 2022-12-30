<script>
  import CategoryListItem from "./CategoryListItem.svelte";

  export let tools;
</script>

<div class="my-2 pl-4 pr-2">
  <ul>
    {#each tools as tool}
      <CategoryListItem {tool} />
    {/each}
  </ul>
</div>
