import { getSupabase } from "@supabase/auth-helpers-sveltekit";
import { fail, redirect } from "@sveltejs/kit";
import { validateData } from "$lib/utils/validateData";
import { z } from "zod";

const accountSchema = z.object({
  firstName: z.string().trim(),
  lastName: z.string().trim(),
});

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
  const { session, supabaseClient } = await getSupabase(event);

  if (!session) {
    throw redirect(303, "/login");
  }
  const getName = async () => {
    const { data: name } = await supabaseClient
      .from("profiles")
      .select("first_name, last_name");

    return name[0];
  };

  return {
    name: getName(),
  };
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
  account: async event => {
    const { session, supabaseClient } = await getSupabase(event);

    if (!session) {
      return redirect(303, "/login");
    }

    const { formData, errors } = await validateData(
      await event.request.formData(),
      accountSchema
    );

    console.log(formData, "errors", errors);

    if (errors) {
      return fail(400, {
        error: errors.fieldErrors,
      });
    }

    const { error: err } = await supabaseClient
      .from("profiles")
      .update({
        first_name: formData.firstName,
        last_name: formData.lastName,
      })
      .eq("id", event.locals.session.user.id);

    if (err) {
      return fail(400, {
        error: "Something went wrong updating your personal information",
      });
    }

    return { success: true };
  },
};
