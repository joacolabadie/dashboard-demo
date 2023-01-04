<script>
  import { enhance } from "$app/forms";

  /** @type {import('./$types').ActionData} */
  export let form;
  console.log(form);

  let loading = false;
</script>

<div
  class="w-full h-screen flex flex-col justify-center items-center text-sm font-medium text-gray-800"
>
  <div class=" w-full max-w-lg space-y-4">
    <h2 class="text-xl font-medium">Log in or create an account</h2>
    <form method="POST" use:enhance class="flex flex-col space-y-4">
      <button
        formaction="?/login&provider=google"
        class="rounded-md border-2 disabled:cursor-not-allowed border-gray-200 p-2 shadow-sm flex justify-center"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 48 48"
          class="h-5 min-h-[1.25rem] w-5 min-w-[1.25rem] mr-2"
          ><defs
            ><path
              id="a"
              d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
            /></defs
          ><clipPath id="b"><use xlink:href="#a" overflow="visible" /></clipPath
          ><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" /><path
            clip-path="url(#b)"
            fill="#EA4335"
            d="M0 11l17 13 7-6.1L48 14V0H0z"
          /><path
            clip-path="url(#b)"
            fill="#34A853"
            d="M0 37l30-23 7.9 1L48 0v48H0z"
          /><path
            clip-path="url(#b)"
            fill="#4285F4"
            d="M48 48L17 24l-4-3 35-10z"
          /></svg
        >Continue with Google</button
      >
      <button
        formaction="?/login&provider=github"
        class="rounded-md border-2 disabled:cursor-not-allowed border-gray-200 p-2 shadow-sm flex justify-center"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0,0,256,256"
          width="30px"
          height="30px"
          class="h-5 min-h-[1.25rem] w-5 min-w-[1.25rem] mr-2"
          fill-rule="nonzero"
          ><g transform="translate(-25.6,-25.6) scale(1.2,1.2)"
            ><g
              fill="#000000"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style="mix-blend-mode: normal"
              ><g transform="scale(8.53333,8.53333)"
                ><path
                  d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z"
                /></g
              ></g
            ></g
          ></svg
        >Continue with Github</button
      >
    </form>
    <div class="flex justify-between items-center space-x-4 pt-2">
      <div class="border-b-2 flex-1" />
      <span>Or sign in with your email</span>
      <div class="border-b-2 flex-1" />
    </div>
    <form
      method="POST"
      action="?/login"
      use:enhance={({ form }) => {
        loading = true;

        return async () => {
          form.reset();

          loading = false;
        };
      }}
      class="space-y-4"
    >
      <div class="flex flex-col">
        <label for="email" class="mb-2">
          <span>Email</span>
        </label>
        <input
          type="text"
          name="email"
          required
          placeholder="name@example.com"
          class="rounded-md border-2 border-gray-200 p-2 shadow-sm outline-none focus:border-gray-400"
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={loading}
          class=" rounded-md border-2 disabled:cursor-not-allowed p-2 w-full"
          >Continue with Email</button
        >
      </div>
    </form>
    {#if form?.success}
      <div class="text-center">
        <p>Email sent! Please check your inbox</p>
      </div>
    {/if}
  </div>
</div>

<!-- FIXME: after loggin in with oauth the user sees this page before being redirected to the dashboard, the user is already logged in but can still interact with this page -->

<!-- TODO: disable on loading -->
