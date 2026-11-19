export default {
  eleventyComputed: {
    schema: (data) => {
      const base = data.site.url;
      const url = `${base}${data.page.url}`;
      if (data.page.url === "/brands/") {
        return {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Brand guides",
          url,
        };
      }
      if (data.schema && data.schema["@type"]) {
        return { ...data.schema, url };
      }
      return data.schema;
    },
  },
};
