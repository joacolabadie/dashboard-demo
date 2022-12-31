<script>
  import { search } from "../../stores/sidebarSearch";
</script>

<div class="flex items-center border-2 rounded-md p-2 shadow-sm bg-white">
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
      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    />
  </svg>
  <input
    type="text"
    placeholder="Find a tool"
    bind:value={$search}
    class="w-full outline-none"
  />
</div>
