<script>
  import { sidebarState } from "../../stores/sidebarState";
</script>

<div
  class="lg:hidden flex h-14 items-center border-b-2 border-gray-200 bg-gray-50 px-4"
>
  {#if !$sidebarState}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="h-5 min-h-[1.25rem] w-5 min-w-[1.25rem] mr-4 cursor-pointer"
      on:click={() => sidebarState.update(n => !n)}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  {:else}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="h-5 min-h-[1.25rem] w-5 min-w-[1.25rem] mr-4 cursor-pointer"
      on:click={() => sidebarState.update(n => !n)}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  {/if}
  <h2 class="text-2xl font-semibold cursor-pointer">TextmateAi</h2>
</div>
