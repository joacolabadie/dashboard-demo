import "$lib/supabase";
import { getSupabase } from "@supabase/auth-helpers-sveltekit";

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  const { session, supabaseClient } = await getSupabase(event);

  event.locals.sb = supabaseClient;
  event.locals.session = session;

  return resolve(event);
}
