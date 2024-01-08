# Type Lib Example

The goal of this example is to show you (and me) how a library can expose its own types as global types.

The primary target of this are use cases where you want to run JS code not in a typical environment such as the browser
or Node.js, but in a different environment such as a game engine or a native app. In these environments,
there often don't exist APIs like the `window` or `console` API commonly used. Instead, you typically have
custom APIs.

This project explores how to provide such types and common logic as SDK.

## Usage

This project requires:

- yalc
- Taskfile

---

Install dependencies:

```shell
task install
```

Link SDK in consumer project with `yalc`:

```shell
task link
```

Start compilation of all projects in watch mode:

```shell
task dev -w
```
