# lit-node

Self-documenting Node scripts through literate programming. Based on [lit](https://github.com/vijithassar/lit) by [Vijith Assar](https://twitter.com/vijithassar).


## Quickstart

Create a file, `test.md`:

~~~md
# this is a markdown file!

It can have *all the usual markdown stuff*, but only the code blocks run:

```js
console.log('it works!')
```

You can require other markdown files (extension optional):

```js
const thing = require('./thing.md');
console.log(thing);
```

You can even use top-level await:

```js
const request = require('request-promise');
console.log(await request('https://google.com'));
```
~~~

```bash
npm i -g lit-node
lit-node test.md
```


## Features

* Compiles modules on the fly, so you can `require` other markdown files
* Ignores non-JS code blocks
* Supports top-level `await`, because it's really useful in the context of a script


## License

[LIL](LICENSE)
