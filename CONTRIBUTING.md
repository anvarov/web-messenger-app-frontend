# Contributing

- [How to Contribute](#how-to-contribute)
  * [Getting Code](#getting-code)
  * [Code Style](#code-style)
  * [API guidelines](#api-guidelines)
  * [Commit Messages](#commit-messages)
  * [Writing Documentation](#writing-documentation)
  * [Running & Writing Tests](#running--writing-tests)


## How to Contribute

### Getting Code

1. Clone this repository

```bash
git clone https://github.com/microsoft/Web Messenger
cd Web Messenger
```

2. Install dependencies

```bash
yarn install
```

3. Build Web Messenger

```bash
yarn run build
```

4. Run all Web Messenger tests locally. For more information about tests, read [Running & Writing Tests](#running--writing-tests).

```bash
yarn test
```

### Code reviews

All submissions, including submissions by project members, require review. We
use GitHub pull requests for this purpose. Consult
[GitHub Help](https://help.github.com/articles/about-pull-requests/) for more
information on using pull requests.

### Code Style

- Coding style is fully defined in [.eslintrc](https://github.com/microsoft/Web Messenger/blob/main/.eslintrc.js)
- Comments should be generally avoided. If the code would not be understood without comments, consider re-writing the code to make it self-explanatory.

To run code linter, use:

```bash
yarn run eslint
```

### API guidelines

When authoring new API methods, consider the following:

- Expose as little information as needed. When in doubt, don’t expose new information.
- Methods are used in favor of getters/setters.
  - The only exception is namespaces, e.g. `page.keyboard` and `page.coverage`
- All string literals must be lowercase. This includes event names and option values.
- Avoid adding "sugar" API (API that is trivially implementable in user-space) unless they're **very** common.

### Commit Messages

Commit messages should follow the Semantic Commit Messages format:

```
label(namespace): title

description

footer
```

1. *label* is one of the following:
    - `fix` - Web Messenger bug fixes.
    - `feat` - Web Messenger features.
    - `docs` - changes to docs, e.g. `docs(api.md): ..` to change documentation.
    - `test` - changes to Web Messenger tests infrastructure.
    - `devops` - build-related work, e.g. CI related patches and general changes to the browser build infrastructure
    - `chore` - everything that doesn't fall under previous categories
2. *namespace* is put in parenthesis after label and is optional. Must be lowercase.
3. *title* is a brief summary of changes.
4. *description* is **optional**, new-line separated from title and is in present tense.
5. *footer* is **optional**, new-line separated from *description* and contains "fixes" / "references" attribution to github issues.

Example:

```
fix(firefox): make sure session cookies work

This patch fixes session cookies in the firefox browser.

Fixes #123, fixes #234
```

### Writing Documentation

All API classes, methods, and events should have a description in [`docs/src`](https://github.com/microsoft/Web Messenger/blob/main/docs/src). There's a [documentation linter](https://github.com/microsoft/Web Messenger/tree/main/utils/doclint) which makes sure documentation is aligned with the codebase.

To run the documentation linter, use:

```bash
yarn run doc
```

### Adding New Dependencies

For all dependencies (both installation and development):
- **Do not add** a dependency if the desired functionality is easily implementable.
- If adding a dependency, it should be well-maintained and trustworthy.

A barrier for introducing new installation dependencies is especially high:
- **Do not add** installation dependency unless it's critical to project success.

### Running & Writing Tests

- Every feature should be accompanied by a test.
- Every public api event/method should be accompanied by a test.


Web Messenger tests are located in [`tests`](https://github.com/microsoft/Web Messenger/blob/main/tests) and use `jest` test runner.
These are integration tests, making sure public API methods and events work as expected.

- To run all tests:

```bash
yarn run test
```