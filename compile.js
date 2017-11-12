function isJavaScript(chunk) {
	return /^(js|javascript)\s*\n/.test(chunk);
}

module.exports = function compile(markdown) {
	const chunks = markdown.split(/^```/gm);

	return '(async () => {' + chunks
		.map((chunk, i) => {
			if (i % 2 && isJavaScript(chunk)) {
				return chunk.replace(/^.+/, '');
			}

			return chunk.replace(/^.+$/gm, '');
		})
		.join('') + '})();';
};