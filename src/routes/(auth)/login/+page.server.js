import { getSupabase } from "@supabase/auth-helpers-sveltekit";
import { AuthApiError } from "@supabase/supabase-js";
import { fail, redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
  const { session } = await getSupabase(event);

  if (session) {
    throw redirect(303, "/");
  }
}

/** @type {import('./$types').Actions} */
export const actions = {
  login: async event => {
    const body = Object.fromEntries(await event.request.formData());

    // TODO: form validation

    const { error: err } = await event.locals.sb.auth.signInWithPassword({
      email: body.email,
      password: body.password,
    });

    if (err) {
      if (
        err instanceof AuthApiError &&
        err.status >= 400 &&
        err.status < 500
      ) {
        return fail(err.status, {
          error: err.message,
        });
      }

      return fail(500, {
        error: "Server error. Please try again later.",
      });
    }

    throw redirect(303, "/");
  },
};
