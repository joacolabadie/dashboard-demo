import { getSupabase } from "@supabase/auth-helpers-sveltekit";
import { fail, redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
  const { session } = await getSupabase(event);

  if (!session) {
    throw redirect(303, "/login");
  }
}

/** @type {import('./$types').Actions} */
export const actions = {
  logout: async event => {
    const { error: err } = await event.locals.sb.auth.signOut();

    if (err) {
      return fail(500, {
        error: "Something went wrong logging you out.",
      });
    }

    throw redirect(303, "/login");
  },
};
