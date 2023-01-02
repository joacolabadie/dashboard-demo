<script>
  import { page } from "$app/stores";

  let path;

  $: path = $page.url.pathname;
</script>

<div>
  <div class="border-b-2 border-gray-200 py-6 px-4">
    <ul class="flex space-x-4 text-sm font-medium text-gray-800">
      <li>
        <a
          href="/settings/account"
          class={`p-2 border-2 rounded-md ${
            "/settings/account" === path
              ? "border-gray-200 "
              : "border-transparent"
          }`}>Account</a
        >
      </li>
      <li>
        <a
          href="/settings/appearence"
          class={`p-2 border-2 rounded-md ${
            "/settings/appearence" === path
              ? "border-gray-200 "
              : "border-transparent"
          }`}>Appearence</a
        >
      </li>
      <li>
        <a
          href="/settings/subscription"
          class={`p-2 border-2 rounded-md ${
            "/settings/subscription" === path
              ? "border-gray-200 "
              : "border-transparent"
          }`}>Subscription</a
        >
      </li>
    </ul>
  </div>
  <slot />
</div>
