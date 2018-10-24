const { Asset } = require('parcel-bundler');
const marked = require('marked');

module.exports = class MarkdownAsset extends Asset {
    constructor(name, options) {
        super(name, options);
        this.type = 'js';
    }

    async parse(code) {
        return marked(code);
    }

    async collectDependencies() { }

    async generate() {
        const code = this.ast.replace('`', '');

        return {
            'js': 'module.exports=`' + code + '`',
        }
    }
}
