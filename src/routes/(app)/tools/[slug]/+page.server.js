import { getSupabase } from "@supabase/auth-helpers-sveltekit";
import { fail, redirect } from "@sveltejs/kit";
import { generate } from "$lib/utils/generate";

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
  const { session, supabaseClient } = await getSupabase(event);

  if (!session) {
    throw redirect(303, "/login");
  }

  const getTool = async () => {
    const { data: tool } = await supabaseClient
      .from("tools")
      .select("*")
      .eq("slug", event.params.slug);

    return tool[0];
  };

  return {
    tool: getTool(),
  };
}

/** @type {import('./$types').Actions} */
export const actions = {
  generate: async event => {
    // TODO: prevent waterfall request, make them at the same time
    // TODO: add form validation

    const body = Object.fromEntries(await event.request.formData());

    const { session, supabaseClient } = await getSupabase(event);

    if (!session) {
      return redirect(303, "/login");
    }

    const { data: tool } = await supabaseClient
      .from("tools")
      .select("prompt, temperature")
      .eq("slug", event.params.slug);

    const { data: user } = await supabaseClient
      .from("profiles")
      .select("words_left");

    if (user[0].words_left <= 0) {
      return fail(400, {
        error: "You have run out of words.",
      });
    }

    const prompt = tool[0].prompt + " " + body.text;

    const data = await generate(prompt, tool[0].temperature);

    console.log("FORM SERVER", data.choices);

    // TODO: find a better way to get all words
    let words = 0;

    data.choices.forEach(choice => {
      words = words + choice.text.split(" ").length;
    });

    if (user[0].words_left - words > 0) {
      const { error: err } = await supabaseClient
        .from("profiles")
        .update({
          words_left: user[0].words_left - words,
        })
        .eq("id", event.locals.session.user.id);
    } else {
      const { error: err } = await supabaseClient
        .from("profiles")
        .update({
          words_left: 0,
        })
        .eq("id", event.locals.session.user.id);
    }

    return { success: true, aiOutput: data.choices };
  },
};
