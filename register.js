const fs = require('fs');
const compile = require('./compile.js');

require.extensions['.md'] = function(module, filename) {
	const code = compile(fs.readFileSync(filename, 'utf-8'));
	return module._compile(code, filename);
};