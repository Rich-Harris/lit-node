# lit-node tests

This will test the behaviour of lit-node.

## Setup

First, we'll require a couple of modules:

```js
const assert = require('assert');
const chalk = require('chalk');

function success(msg) {
	console.log(chalk.green(`✓ ${msg}`));
}

function fail(msg) {
	console.log(chalk.red(`✗ ${msg}`));
}
```

## The actual tests

Check that `js` code blocks run...

```js
success('runs `js` code blocks');
```

...as do `javascript` ones...

```javascript
success('runs `javascript` code blocks');
```

...but that code blocks that specify an unsupported language *don't* run...

```bash
fail('should not run this');
```

...and neither do those with no language:

```
fail('should not run this');
```

For debugging, stack traces should point to the correct line:

```js
const err = new Error('something went wrong');
const line = err.stack.split('\n')[1];
const match = /test.md:(\d+):(\d+)/.exec(line);

assert.equal(match[1], '51'); // line
assert.equal(match[2], '13'); // column

success('preserves line/column in stack traces');
```

What about requiring other `.md` files?

```js
const answer = require('./the-answer.md');
assert.equal(answer, 42);

success('imports a `.md` file');
```

Even if the extension isn't specified?

```js
const problems = require('./problems');
assert.equal(problems, 99);

success('imports a `.md` file without specifying the extension');
```


## Did it work?

If everything worked, we'll print a message to say as much:

```js
console.log(chalk.bold('🎉  everything worked! 🎉\n'));
```
