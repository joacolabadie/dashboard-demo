<script>
  import { invalidateAll } from "$app/navigation";
  import { supabaseClient } from "$lib/supabase";
  import { onMount } from "svelte";
  import "../app.css";

  onMount(() => {
    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange(() => {
      invalidateAll();
    });

    return () => {
      subscription.unsubscribe();
    };
  });
</script>

<svelte:head>
  <title>Textmate AI</title>
</svelte:head>

<slot />
