import { getSupabase } from "@supabase/auth-helpers-sveltekit";
import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').LayoutServerLoad} */
export async function load(event) {
  const { session, supabaseClient } = await getSupabase(event);

  if (!session) {
    throw redirect(303, "/login");
  }

  // TODO: should check session here, or not necessary ?
  // TODO: add error handling
  // TODO: send only the needed columns from the table

  const getCategories = async () => {
    const { data: categories, error: err } = await supabaseClient
      .from("categories")
      .select("*");

    return categories;
  };

  const getTools = async () => {
    const { data: tools, error: err } = await supabaseClient
      .from("tools")
      .select("*");

    return tools;
  };

  const getWordsLeft = async () => {
    const { data: wordsLeft, error: err } = await supabaseClient
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
