const pathPrefix = process.env.PATH_PREFIX || "/patioreseat";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });

  eleventyConfig.addCollection("brands", (collectionApi) => {
    return collectionApi
      .getFilteredByTag("brand")
      .sort((a, b) => (a.data.title || "").localeCompare(b.data.title || ""));
  });

  eleventyConfig.addFilter("isoDate", (value) => {
    if (!value) return "";
    const d = value instanceof Date ? value : new Date(value);
    return d.toISOString().slice(0, 10);
  });

  eleventyConfig.addFilter("year", () => new Date().getFullYear());
  eleventyConfig.addFilter("jsonLd", (value) => JSON.stringify(value));

  eleventyConfig.addShortcode("affiliatePlaceholder", (merchant, href) => {
    const safeHref = href || "#";
    const label = merchant || "Partner";
    return `<aside class="affiliate-box" aria-label="Affiliate link placeholder">
  <p class="affiliate-box__kicker">Affiliate link — placeholder</p>
  <p>This will become a tracked partner link after programs are approved. <strong>No affiliate ID is attached yet.</strong> The destination is the merchant’s public site.</p>
  <p><a class="btn btn-secondary" href="${safeHref}" rel="nofollow sponsored noopener" target="_blank">${label} <span class="ext">↗</span></a></p>
</aside>`;
  });

  // Prefix root-relative href/src for GitHub project Pages (or any PATH_PREFIX).
  // Skip values that already include the prefix, protocol-relative URLs, and hashes.
  eleventyConfig.addTransform("pathPrefixHref", function (content) {
    if (typeof content !== "string") return content;
    if (!this.page?.outputPath?.endsWith(".html")) return content;
    const prefix = (pathPrefix || "/").replace(/\/$/, "");
    if (!prefix) return content;
    return content.replace(
      /(href|src)="(\/[^"]*)"/g,
      (match, attr, path) => {
        if (path.startsWith("//")) return match;
        if (path === prefix || path.startsWith(`${prefix}/`)) return match;
        return `${attr}="${prefix}${path}"`;
      }
    );
  });

  return {
    pathPrefix,
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"],
  };
}
