const buildTOC = require('./toc/BuildTOC')
const moment = require("moment-timezone");

module.exports = function (eleventy) {
  eleventy.addLiquidFilter("common", (date) => {
    const utc = date.toUTCString();
    return moment.utc(utc).format("MMM DD, YYYY");
  });
  eleventy.addLiquidFilter("encodeurl", (url) => {
    return encodeURIComponent(url);
  });
  eleventy.addLiquidFilter("technical", (date) => {
    const utc = Date.now();
    return moment.utc(utc).tz('America/Los_Angeles').format("YYYY-MM-DD, HH:mm:ss z");
  });
  eleventy.addLiquidFilter('toc', (content) => {
    return buildTOC(content);
  });
}
