const assetProcessing = require('./src/asset-processing');
const eleventyDefaults = require('./src/eleventy-defaults');
const liquidExtensions = require('./src/liquid-extensions');
const markdownExtensions = require('./src/markdown-extensions');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(assetProcessing);
  eleventyConfig.addPlugin(eleventyDefaults);
  eleventyConfig.addPlugin(liquidExtensions);
  eleventyConfig.addPlugin(markdownExtensions);
}
