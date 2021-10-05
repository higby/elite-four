const { JSDOM } = require("jsdom");
const sharp = require('sharp');
const fetch = require('node-fetch');
const htmlmin = require("html-minifier");

async function imageData(content, outputPath) {
  if( outputPath && outputPath.endsWith(".html") ) {
    const dom = new JSDOM(content);
    const images = [...dom.window.document.querySelectorAll("img:not([width]):not([height])")];
    for (var i = 0; i < images.length; i++) {
      let src = images[i].src;
      if (src.startsWith('http')) {
        const res = await fetch(src);
        const buffer = await res.buffer();
        elem = await sharp(buffer).metadata();
      }
      else {
        let url = "./src/assets/static" + src;
        elem = await sharp(url).metadata();
      }
      images[i].setAttribute('loading', 'lazy');
      images[i].setAttribute('width', elem.width);
      images[i].setAttribute('height', elem.height);
    }
    content = dom.serialize();
  }
  return content;
}

async function htmlMin(content, outputPath) {
  if( outputPath && outputPath.endsWith(".html") ) {
    let minified = htmlmin.minify(content, {
      useShortDoctype: true,
      removeComments: false,
      collapseWhitespace: true
    });
    return minified;
  }
  return content;
}

async function safeLinks(content, outputPath) {
  if( outputPath && outputPath.endsWith(".html") ) {
    const dom = new JSDOM(content);
    const links = [...dom.window.document.querySelectorAll("a[href^='http://']:not([rel]),a[href^='https://']:not([rel])")];
    for (var i = 0; i < links.length; i++) {
      links[i].setAttribute('rel', 'noopener noreferrer');
    }
    content = dom.serialize();
  }
  return content;
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addTransform("imageSizes", imageData);
  eleventyConfig.addTransform("htmlmin", htmlMin);
  eleventyConfig.addTransform("safeLinks", safeLinks);
};