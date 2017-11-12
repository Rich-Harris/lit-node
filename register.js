const fs = require('fs');
const compile = require('./compile.js');

// register .md extension with Node.js to enable imports
require.extensions['.md'] = function(module, filename) {
	const code = compile(fs.readFileSync(filename, 'utf-8'));
	return module._compile(code, filename);
};
