module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter("readableDate", function (dateObj) {
          const d = new Date(dateObj);
          return d.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
          });
    });

    return {
          dir: {
                  input: "src",
                  includes: "_includes",
                  output: "_site"
          }
    };
};
