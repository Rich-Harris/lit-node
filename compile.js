// test whether a fenced code block specifies JavaScript
function isJavaScript(chunk) {
	return /^(js|javascript)\s*\n/.test(chunk);
}

// extract JavaScript code blocks from a Markdown string
function compile(markdown) {

	// split along backtick fences
	const chunks = markdown.split(/^```/gm);

	// filter down to only code blocks
	const code = chunks
		.map((chunk, i) => {
			const even = i % 2;
			if (even && isJavaScript(chunk)) {
				return chunk.replace(/^.+/, '');
			} else {
				return chunk.replace(/^.+$/gm, '');
			}
		});

	// output an async function
	return '(async () => {' + code.join('') + '})();';

};

// export
module.exports = compile;
