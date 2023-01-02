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

  const getWordsLeft = async () => {
    const { data: wordsLeft } = await supabaseClient
      .from("profiles")
      .select("words_left");

    return wordsLeft[0].words_left;
  };

  return {
    categories: getCategories(),
    tools: getTools(),
    wordsLeft: getWordsLeft(),
  };
}
