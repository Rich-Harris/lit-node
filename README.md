# lit-node

Self-documenting Node scripts through literate programming. Based on [lit](https://github.com/vijithassar/lit) by [Vijith Assar](https://twitter.com/vijithassar).

## Overview

`lit-node` is a lightweight wrapper for [Node.js](https://nodejs.org/en/) which allows you to import code blocks from [Markdown](https://daringfireball.net/projects/markdown/syntax) documents using the `require()` function. This enables first-class support for simple [literate programming](https://en.wikipedia.org/wiki/Literate_programming), a software development technique which emphasizes clear written documentation. It's sort of like [Jupyter](http://jupyter.org/) notebooks for Node. Jupyter... nodebooks? *[todo: should we delete this pun? it's really stupid.]*

## Quick Start

```bash
# install
$ npm install --global lit-node

# lit-node is just node with direct
# support for importing modules from
# Markdown code blocks
$ lit-node
```

## Instructions

First, install `lit-node`; a global install is probably most useful:

```bash
# install
$ npm install --global lit-node
```

Create a Markdown file into which to save your code and its Markdown documentation:

```bash
# create a file
$ touch test.md
```

Add some Markdown content to the file, including at least one code block demarcated by triple-backtick ["fenced code blocks"](https://help.github.com/articles/creating-and-highlighting-code-blocks/) as specified by [GitHub-Flavored Markdown](https://github.github.com/gfm/).

~~~
# this is a markdown file!

It can have *all the usual markdown stuff*, but only the JavaScript code blocks will run:

```javascript
// log a message
console.log('hello world');
```
~~~

Now you can **execute your Markdown file**!

```bash
$ lit-node ./test.md
```

You *must* include `js` or `javascript` as a language specifier after opening up a fenced code block. Fenced code blocks that specify any other language and fenced code blocks that do not specify a language at all will be ignored. This makes it possible for you to include other code in your Markdown file without that code being executed. This is particularly useful for including Bash installation commands.

## Miscellaneous

### require()

From within a script being executed by `lit-node`, you can `require()` other Markdown files, which will be parsed and executed just like any other module. The `.md` file extension is optional.

~~~

You can do this within test.md:

```javascript
// import module from a Markdown file
const thing = require('./thing.md');

// log the type of whatever was exported
console.log(typeof thing);
```
~~~

### REPL

Assuming you've installed globally as mentioned above, you can also launch an interactive [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) which will support Markdown imports.

```bash
$ lit-node
> const thing = require('./thing.md'); // import module from a Markdown file
```

### Top Level Await

Top-level use of `await` is [generally a bad idea](https://gist.github.com/Rich-Harris/0b6f317657f5167663b493c722647221), but allowed in this case because it can be useful for short scripts.

~~~
```javascript
const request = require('request-promise');
console.log(await request('https://example.com'));
```
~~~

## Other Tools

- **IRONCLAD MONEY-BACK GUARANTEE**: If you later decide literate programming in Markdown isn't for you, you can quickly and painlessly convert all your Markdown documents into regular JavaScript files by running them through [lit](https://github.com/vijithassar/lit) to strip out the prose. Try it today! There is no risk!
- [lit-web](https://github.com/vijithassar/lit-web) is a script that lets a browser execute the code blocks from a single Markdown document as JavaScript
- To interpret literate code for languages other than JavaScript, you can use either lit [with subshells](https://github.com/vijithassar/lit#logging) or [Blaze](https://github.com/0atman/blaze/), which is a drop-in replacement for `usr/bin/env`
- `lit-node` is just running Node.js internally and for a whole slew of complicated reasons Node.js doesn't yet support ES modules,  so for now `lit-node` likewise only supports [CommonJS](http://www.commonjs.org/) exports. To write literate JavaScript source code using ES module syntax, either bundle with [Rollup](https://rollupjs.org/) and the [rollup-plugin-markdown](https://www.npmjs.com/package/rollup-plugin-markdown) plugin, or else process the Markdown files with [lit](https://github.com/vijithassar/lit) and then do whatever else you want with other ES module tools.
- [Docco](http://ashkenas.com/docco/) and its many variants render literate source code into beautiful browsable HTML

## License

[LIL](LICENSE)
