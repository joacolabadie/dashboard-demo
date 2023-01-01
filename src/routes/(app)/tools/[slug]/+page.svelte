<script>
  /** @type {import('./$types').PageData} */
  export let data;

  /** @type {import('./$types').ActionData} */
  export let form;
</script>

<div>
  <h3>{data.tool.name}</h3>
  <p>{data.tool.description}</p>
  <form method="POST" action="?/generate">
    <div>
      <label for="text">{data.tool.input}</label>
      <input type="text" name="text" placeholder="Example" required />
    </div>
    <button type="submit">Generate</button>
  </form>
  {#if form?.success}
    <span>{form.aiOutput}</span>
  {/if}
</div>
