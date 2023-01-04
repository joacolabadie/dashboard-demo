import { getSupabase } from "@supabase/auth-helpers-sveltekit";
import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').LayoutServerLoad} */
export async function load(event) {
  const { session, supabaseClient } = await getSupabase(event);

  if (!session) {
    throw redirect(303, "/login");
  }

  const getCategories = async () => {
    const { data: categories } = await supabaseClient
      .from("categories")
      .select("name")
      .order("name", { ascending: true });

    return categories;
  };

  const getTools = async () => {
    const { data: tools } = await supabaseClient
      .from("tools")
      .select("category, name, slug")
      .order("name", { ascending: true });

    return tools;
  };

  const getProfile = async () => {
    const { data: profile } = await supabaseClient
      .from("profiles")
      .select("words_left");

    // return wordsLeft[0].words_left;
    return profile[0];
  };

  return {
    categories: getCategories(),
    tools: getTools(),
    profile: getProfile(),
  };
}

// TODO: insetad of passing data here, just get it in the components with $page
