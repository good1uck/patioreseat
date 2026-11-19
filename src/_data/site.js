const url = (process.env.SITE_URL || "https://good1uck.github.io/patioreseat").replace(
  /\/$/,
  ""
);
const pathPrefix = process.env.PATH_PREFIX || "/patioreseat";

export default {
  name: "PatioReseat",
  tagline: "Keep the frame. Replace the cushions.",
  description:
    "A practical English-language guide to measuring patio furniture, choosing outdoor fabric, and finding replacement cushions for named collections. We do not invent sizes.",
  url,
  pathPrefix,
  language: "en",
  emailPlaceholder: "hello@patioreseat.com",
  built: "2026-11-18",
  builtNote:
    "Checked against public manufacturer pages on November 18, 2026 (America/New_York).",
};
