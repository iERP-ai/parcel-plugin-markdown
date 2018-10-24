const assert = require('assert');
const mdasset = require('../MarkdownAsset');
const path = require('path');

describe('MarkdownAsset', function() {
    it('should parse markdown correctly.', async function() {
        const result = 'module.exports=`<h1 id="test">Test</h1>\n<h2 id="h2">H2</h2>\n`';
        const mdPath = path.resolve(__dirname, './index.md');
        const instance = new mdasset(mdPath, { rootDir: __dirname });
        const processed = await instance.process();

        assert.equal(processed.js, result);
    });
    it('should parse markdown with images correctly.', async function() {
        const result = 'module.exports=`<h1 id="test">Test</h1>\n<h2 id="h2">H2</h2>\n<p><img src="./img.jpg" alt=""></p>\n`';
        const Parser = require('parcel-bundler/src/Parser');
        const instance = new mdasset(path.resolve(__dirname, './index.img.md'), {
            rootDir: __dirname,
            parser: new Parser(),
            publicURL: '/'
        });
        const processed = await instance.process();
        assert.equal(processed.js, result);
    });
});
