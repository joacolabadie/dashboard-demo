<script>
  import { enhance } from "$app/forms";
  import Output from "$lib/components/AI/Output.svelte";

  /** @type {import('./$types').PageData} */
  export let data;
  console.log(data);

  /** @type {import('./$types').ActionData} */
  export let form;

  let loading = false;
</script>

<!-- <div class="text-sm font-medium text-gray-800">
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
      use:enhance={() => {
        loading = true;

        return async ({ update }) => {
          loading = false;

          await update();
        };
      }}
      class=" w-full max-w-2xl px-4"
    >
      <div class="flex flex-col">
        {#each data.tool.label2 as label (label)}
          <label for={label} class="mb-2">{label}</label>
          <textarea
            name={label}
            placeholder="Example"
            required
            rows="5"
            class="rounded-md border-2 p-2 shadow-sm outline-none placeholder:text-gray-400 resize-y focus:border-gray-400 mb-8"
          />
        {/each}
      </div>
      <button
        type="submit"
        disabled={loading}
        class="w-full p-2 border-2 disabled:cursor-not-allowed shadow-sm rounded-md mb-8"
        >{loading ? "Generating..." : "Generate"}</button
      >
      <div class="text-center font-normal">
        <p>
          You have {data.wordsLeft} words left. Need more? Upgrade now!
        </p>
      </div>
    </form>
    <div class="border w-full" />
    <div class="w-full max-w-2xl  px-4 space-y-4">
      <h3 class="text-xl">Outputs</h3>
      <div class="border" />
      <Output
        output={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure suscipit sequi quisquam distinctio velit tempora ad expedita aut ducimus, et similique earum, eos ex rerum quaerat voluptates impedit quos tenetur."}
      />
    </div>
  </div>
</div> -->

<div class="h-full text-sm font-medium text-gray-800">
  <div class="h-full flex flex-col">
    <div class="border-b-2 p-4">
      <div>
        <h3 class="mb-4 text-xl">{data.tool.name}</h3>
        <p class="font-normal">{data.tool.description}</p>
      </div>
    </div>
    <div class="h-0 flex-1">
      <div class="h-full flex-col lg:flex-row flex">
        <div class="w-full flex justify-center p-4 lg:overflow-y-auto">
          <form
            method="POST"
            action="?/generate"
            use:enhance={() => {
              loading = true;

              return async ({ update }) => {
                loading = false;

                await update();
              };
            }}
            class="w-full max-w-2xl"
          >
            {#each data.tool.label2 as label (label)}
              <div class="flex flex-col">
                <label for={label} class="mb-2">{label}</label>
                <textarea
                  name={label}
                  placeholder="Example"
                  required
                  rows="5"
                  class="rounded-md border-2 p-2 shadow-sm outline-none placeholder:text-gray-400 resize-y focus:border-gray-400 mb-8"
                />
              </div>
            {/each}
            <!-- <div class="flex items-center mb-8 space-x-4"> -->
            <div class="flex flex-col mb-8">
              <label for="" class="mb-2">Number of outputs</label>
              <input
                type="number"
                value="1"
                min="1"
                max="5"
                required
                class=" border-2 rounded-md p-2 outline-none focus:border-gray-400 w-fit"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              class="w-full p-2 border-2 disabled:cursor-not-allowed mb-8 shadow-sm rounded-md "
              >{loading ? "Generating..." : "Generate"}</button
            >
            <!-- </div> -->
            {#if form?.error}
              <div class=" mb-8 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="mr-2 h-5 min-h-[1.25rem] w-5 min-w-[1.25rem] fill-red-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>{form.error}</p>
              </div>
            {/if}
            <div class="text-center">
              <p>
                You have {data.profile.words_left} words left. Need more? Upgrade
                now!
              </p>
            </div>
          </form>
        </div>
        <div class="border" />
        <div class="w-full flex justify-center lg:overflow-y-auto p-4">
          <div class="w-full max-w-2xl space-y-4">
            {#if form?.success}
              <div class="w-full max-w-2xl">
                <h3 class="mb-2">Outputs</h3>
                <div class="border" />
                <div class="py-4 space-y-4">
                  {#each form.aiOutput as output}
                    <Output output={output.text} />
                  {/each}
                </div>
              </div>
            {:else}
              <div class=" text-center">
                <p>Your AI generated content will be shown here.</p>
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
