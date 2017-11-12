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

When running scripts, it's really useful to be able to use `async`/`await`. lit-node wraps everything in an async IIFE to make that possible:

```js
const value = await Promise.resolve('delayed');
assert.equal(value, 'delayed');
success('supports async/await');
```

## Did it work?

If everything worked, we'll print a message to say as much:

```js
console.log(chalk.bold('🎉  everything worked! 🎉\n'));
```