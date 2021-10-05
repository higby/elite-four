# elite four

An 11ty plugin that:

1. Minimizes HTML, CSS, and JS, inlining the latter two
2. Gives a few good Eleventy defaults
3. Adds several liquid shortcodes, filters, and transforms
4. Extends markdown-it's functionality

> This plugin is built entirely based on my preference and my workflow, there is **literally** no built-in customization

## Features:

### Asset Processing
- Get image dimensions and inline them in order to prevent content shifting
  - Inspired by [LazyImages](https://github.com/liamfiddler/eleventy-plugin-lazyimages/) and [Images, Correctly.](https://robert-buchberger.com/blog/2021/responsive_images.html/)
- Minimize HTML output using [HTMLMinifier](https://github.com/kangax/html-minifier)
- Automatically add `noopener noreferrer` to external links to make them safer

### Eleventy Defaults
- Serve [custom 404(https://www.11ty.dev/docs/quicktips/not-found/)] 
- [Syntax Highlighting](https://www.11ty.dev/docs/plugins/syntaxhighlight/)
- [Set Quiet Mode](https://www.11ty.dev/docs/config/#enable-quiet-mode-to-reduce-console-noise/)

### Liquid Extensions
- Variety of date filters
  - Modified from [Mark Thomas Miller's date fix](https://mtm.dev/eleventy-date-off-by-one-day/)
- URL Encoding
- Table of Contents
  - Modified from [eleventy-plugin-toc](https://github.com/jdsteinbach/eleventy-plugin-toc/)

### Markdown Extensions
- [markdown-it-anchor](https://github.com/valeriangalliat/markdown-it-anchor)
- [markdown-it-attrs](https://github.com/arve0/markdown-it-attrs)
- A [modified](/src/cite.js) version of [markdown-it-attribution](https://github.com/dweidner/markdown-it-attribution/)
- A [modified](/src/footnote.js) version of [markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote/)
- [markdown-it-image-figures](https://github.com/Antonio-Laguna/markdown-it-image-figures/)
- [markdown-it-mark](https://github.com/markdown-it/markdown-it-mark/)

## Usage
In your 11ty project:
```
npm i elite-four
```

then add this to your site's .eleventy.js (or equivalent):

```js
const eliteFour = require('elite-four');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eliteFour);
}
```
