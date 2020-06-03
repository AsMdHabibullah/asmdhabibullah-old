const withSourceMaps = require('@zeit/next-source-maps')
const withCss = require("@zeit/next-css");
const withImages = require('next-images');


module.exports = withSourceMaps([withCss({ withImages })])