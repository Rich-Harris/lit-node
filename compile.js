const ts = require('typescript');

// test whether a fenced code block specifies JavaScript
function isJavaScript(chunk) {
	return /^(js|javascript)\s*\n/.test(chunk);
}

function isTypeScript(chunk) {
	return /^(typescript)\s*\n/.test(chunk);
}

// extract JavaScript code blocks from a Markdown string
function compile(markdown) {

	// split along backtick fences
	const chunks = markdown.split(/^```/gm);

	// filter down to only code blocks
	const code = chunks
		.map((chunk, i) => {
			const odd = i % 2;
			if (odd && isJavaScript(chunk)) {
				return chunk.replace(/^.+/, '');
			} else if(odd && isTypeScript(chunk)) {
				return ts.transpile(chunk.replace(/^.+/, ''));
			} else {
				return chunk.replace(/^.+$/gm, '');
			}
		});

	// output an async function
	return code.join('');

};

// export
module.exports = compile;
