// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Convergent Facilitation";
export const SITE_DESCRIPTION =
  "Convergent Facilitation (CF) is a facilitated decision making process that helps groups come together and find solutions that work for everyone, even when there are divergent opinions and perspectives. It is a collaborative approach that emphasizes listening, understanding and empowering everyone to care for the whole.";
export const TWITTER_HANDLE = "@yourtwitterhandle";
export const MY_NAME = "Convergent Facilitation";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
