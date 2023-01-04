<script>
  import { enhance } from "$app/forms";

  /** @type {import('./$types').PageData} */
  export let data;
  console.log(data);

  /** @type {import('./$types').ActionData} */
  export let form;
  console.log(form);

  let loading = false;

  let changed = false;

  let firstName = data.name.first_name;
  let lastName = data.name.last_name;

  // $: firstName = data.name.first_name;
  // $: lastName = data.name.last_name;

  // $: console.log(firstName, lastName);
</script>

<div class="p-4 text-sm font-medium w-fit space-y-4">
  <!-- <div>
    <h3 class="text-xl mb-2">Account</h3>
    <p class=" font-normal">Manage your personal information and settings.</p>
  </div>
  <div class="border-b-2" /> -->
  <div>
    <h3 class="text-xl mb-2">Logout</h3>
    <form method="POST" action="?/logout">
      <button
        type="submit"
        class="flex cursor-pointer items-center border-2 rounded-md w-fit p-2"
      >
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
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
          />
        </svg>
        Logout
      </button>
    </form>
  </div>
  <div class="border-b-2" />
  <div>
    <h3 class="text-xl mb-2">Account</h3>
    <p class=" font-normal">Manage your personal information and settings.</p>
    <form
      method="POST"
      action="?/account"
      use:enhance={() => {
        loading = true;

        return async ({ update }) => {
          loading = false;
          changed = false;

          await update({ reset: false });
        };
      }}
      class="space-y-4 mt-4"
    >
      <div class="flex flex-col">
        <label for="firstName" class="mb-2">First name</label>
        <input
          type="text"
          name="firstName"
          bind:value={firstName}
          on:input={() => {
            if (firstName === data.name.first_name) {
              console.log(firstName, data.name.first_name);
              return (changed = false);
            }
            console.log(firstName, data.name.first_name);
            return (changed = true);
          }}
          class="rounded-md border-2 shadow-sm p-2 outline-none focus:border-gray-400 transition-all"
        />
      </div>
      <div class="flex flex-col">
        <label for="lastName" class="mb-2">Last name</label>
        <input
          type="text"
          name="lastName"
          bind:value={lastName}
          on:input={() => {
            if (lastName === data.name.last_name) {
              return (changed = false);
            }
            return (changed = true);
          }}
          class="rounded-md border-2 shadow-sm p-2 outline-none focus:border-gray-400 transition-all"
        />
      </div>
      <div class="flex flex-col">
        <span class="mb-2">Email</span>
        <span class="rounded-md border-2 shadow-sm p-2 outline-none"
          >{data.session.user.email}</span
        >
      </div>
      <button
        disabled={loading || !changed}
        class="rounded-md border-gray-200 border-2 p-2 w-full hover:bg-gray-50 hover:rounded-3xl transition-all shadow-sm disabled:cursor-not-allowed"
        >{loading ? "Loading..." : "Save changes"}</button
      >
    </form>
    {#if form?.error}
      <!-- {#if form.error.firstName or lastname} -->

      <!-- {/if} -->
      <p>{form.error}</p>
    {/if}
  </div>
</div>
