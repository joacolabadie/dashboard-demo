<script>
  import Output from "$lib/components/AI/Output.svelte";

  /** @type {import('./$types').PageData} */
  export let data;

  /** @type {import('./$types').ActionData} */
  export let form;
</script>

<div class="text-sm font-medium text-gray-800">
  <div class="border-b-2 border-gray-200 p-4">
    <div>
      <h3 class="mb-4 text-xl">{data.tool.name}</h3>
      <p class="font-normal">{data.tool.description}</p>
    </div>
  </div>
  <div class="flex my-12 flex-col items-center space-y-12">
    <form
      method="POST"
      action="?/generate"
      class="space-y-8 w-full max-w-2xl px-4"
    >
      <div class="flex flex-col">
        <label for="text" class="mb-2">{data.tool.label}</label>
        <textarea
          name="text"
          placeholder="Example: ..."
          required
          rows="5"
          class="rounded-md border-2 p-2 shadow-sm outline-none placeholder:text-gray-400 resize-y"
        />
      </div>
      <button type="submit" class="w-full p-2 border-2 shadow-sm rounded-md"
        >Generate</button
      >
      <div class="text-center font-normal">
        <p>
          You have {data.wordsLeft} words left. Need more? Upgrade now!
        </p>
      </div>
    </form>
    {#if form?.success}
      <div class="border w-full" />
      <div class="w-full max-w-2xl  px-4 space-y-4">
        <h3 class="text-xl">Outputs</h3>
        <div class="border" />
        {#each form.aiOutput as output}
          <Output output={output.text} />
        {/each}
      </div>
    {/if}
  </div>
</div>

<!-- TODO: no words left pop up modal, subscribe -->
