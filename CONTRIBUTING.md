# Contributing

- [How to Contribute](#how-to-contribute)
  - [Getting Code](#getting-code)
  - [Code Style](#code-style)
  - [Commit Messages](#commit-messages)
  <!-- - [Writing Documentation](#writing-documentation) -->
  - [Running & Writing Tests](#running--writing-tests)

## How to Contribute

### Getting Code

1. Clone this repository

```bash
git clone https://github.com/anvarov/web-messenger-app-frontend.git
cd web-messenger-app
```

2. Install dependencies

```bash
yarn install
```

3. Build Web Messenger

```bash
yarn run build
```

4. Run all Web Messenger tests locally. For more information about tests, read
   [Running & Writing Tests](#running--writing-tests).

```bash
yarn test
```

### Code Style

- Coding style is fully defined in
  [.eslintrc.js](https://github.com/anvarov/web-messenger-app-frontend/blob/main/.eslintrc.js)
- Comments should be generally avoided. If the code would not be understood
  without comments, consider re-writing the code to make it self-explanatory.

To run code linter, use:

```bash
yarn run lint
```

To run code formatter, use:

```bash
yarn run lint
```

### Commit Messages

Commit messages should follow the Semantic Commit Messages format:

```
label(namespace): title

description

footer
```

1. _label_ is one of the following:
   - `fix` - Web Messenger bug fixes.
   - `feat` - Web Messenger features.
   - `docs` - changes to docs, e.g. `docs(api.md): ..` to change documentation.
   - `test` - changes to Web Messenger tests infrastructure.
   - `devops` - build-related work, e.g. CI related patches and general changes
     to the browser build infrastructure
   - `chore` - everything that doesn't fall under previous categories
2. _namespace_ is put in parenthesis after label and is optional. Must be
   lowercase.
3. _title_ is a brief summary of changes.
4. _description_ is **optional**, new-line separated from title and is in
   present tense.
5. _footer_ is **optional**, new-line separated from _description_ and contains
   "fixes" / "references" attribution to github issues.

Example:

```
fix(webpack): make sure webpack dev server works correctly

This patch fixes webpack-dev-server issue when routing is not available.

Fixes #123, fixes #234
```

<!-- ### Writing Documentation

All API classes, methods, and events should have a description in
[`docs/src`](https://github.com/microsoft/Web Messenger/blob/main/docs/src).
There's a [documentation linter](https://github.com/microsoft/Web
Messenger/tree/main/utils/doclint) which makes sure documentation is aligned
with the codebase.

To run the documentation linter, use:

```bash
yarn run doc -->

````

### Adding New Dependencies

For all dependencies (both installation and development):

- **Do not add** a dependency if the desired functionality is easily
  implementable.
- If adding a dependency, it should be well-maintained and trustworthy.

A barrier for introducing new installation dependencies is especially high:

- **Do not add** installation dependency unless it's critical to project
  success.

### Running & Writing Tests

- Every feature should be accompanied by a test.
- Every public api event/method should be accompanied by a test.

Web Messenger tests are located in [`tests`](https://github.com/anvarov/web-messenger-app-frontend/blob/main/src/tests) and use `jest` test runner. These are integration
tests, making sure public API methods and events work as expected.

- To run all tests:

```bash
yarn run test
````
