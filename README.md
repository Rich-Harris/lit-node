# lit-node

Self-documenting Node scripts through literate programming. Based on [lit](https://github.com/vijithassar/lit) by [Vijith Assar](https://twitter.com/vijithassar).


## Quickstart

Create a file, `test.md`:

```
TODO not quite sure how to show code blocks in a code block...
```

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