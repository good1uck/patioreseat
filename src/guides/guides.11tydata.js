export default {
  eleventyComputed: {
    schema: (data) => {
      if (!data.schema) return data.schema;
      return { ...data.schema, url: `${data.site.url}${data.page.url}` };
    },
  },
};
