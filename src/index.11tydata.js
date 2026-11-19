export default {
  eleventyComputed: {
    schema: (data) => {
      const base = data.site.url;
      return {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            name: "PatioReseat",
            url: `${base}/`,
            description:
              "A practical English-language guide to patio furniture replacement cushions.",
          },
          {
            "@type": "Organization",
            name: "PatioReseat",
            url: `${base}/`,
            description:
              "Independent cushion-replacement guide. Not affiliated with furniture brands or fabric mills.",
          },
          {
            "@type": "ItemList",
            name: "Brand guides",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Brown Jordan replacement cushions",
                url: `${base}/brands/brown-jordan/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Homecrest replacement cushions",
                url: `${base}/brands/homecrest/`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Crate & Barrel outdoor replacement cushions",
                url: `${base}/brands/crate-and-barrel/`,
              },
            ],
          },
        ],
      };
    },
  },
};
