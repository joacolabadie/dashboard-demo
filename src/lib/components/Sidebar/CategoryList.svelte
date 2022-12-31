<script>
  import CategoryListItem from "./CategoryListItem.svelte";

  export let tools;
</script>

<ul class="mt-2 px-2">
  {#each tools as tool (tool.name)}
    <CategoryListItem {tool} />
  {/each}
</ul>
