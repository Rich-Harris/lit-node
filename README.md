# lit-node

Self-documenting Node scripts through literate programming. Based on [lit](https://github.com/vijithassar/lit) by [Vijith Assar](https://twitter.com/vijithassar).


## Quickstart

Create a file, `test.md`:

~~~
# this is a markdown file!

It can have *all the usual markdown stuff*, but only the code blocks run:

```js
console.log('it works!')
```
~~~

```bash
npm i -g lit-node
lit-node test.md
```

## More examples

~~~
You can require other markdown files (extension optional):

```js
const thing = require('./thing.md');
console.log(thing);
```
~~~

~~~
You can even use top-level await, because that's really useful in the context of a script:

```js
const request = require('request-promise');
console.log(await request('https://example.com'));
```
~~~

Non-JS code blocks (e.g. Bash instructions) will be ignored.


## License

[LIL](LICENSE)
