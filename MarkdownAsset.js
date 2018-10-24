const HTMLAsset = require('parcel-bundler/src/assets/HTMLAsset');
const marked = require('marked');

module.exports = class MarkdownAsset extends HTMLAsset {
    async parse(code) {
        code = marked(code);
        return await super.parse(code);
    }
}
