> [!WARNING]
> **Deprecation Notice**: As of [Jest 26](https://jestjs.io/blog/2020/05/05/jest-26#a-new-way-to-consume-jest---jestglobals), the [`@jest/globals` package can be used](https://jestjs.io/docs/api) to explicitly `import` Jest functions:
>
> ```typescript
> import { describe, it, expect } from '@jest/globals'
> ```
>
> Jest [26.5](https://github.com/jestjs/jest/blob/v29.7.0/CHANGELOG.md#2650) further added the [`injectGlobals` config](https://jestjs.io/docs/configuration#injectglobals-boolean) that you can set to `false` to disable globals in your test files:
>
> ```js
> // jest.config.js
> /** @type {import('jest').Config} */
> const config = {
>   injectGlobals: false,
> };
>
> module.exports = config;
> ```
>
> For versions of Jest older than 26, you can use the `jest-without-globals` package as described below.

# jest-without-globals

<!-- releases / versioning -->
[![package-json](https://img.shields.io/github/package-json/v/agilgur5/jest-without-globals.svg)](https://npmjs.org/package/jest-without-globals)
[![releases](https://img.shields.io/github/tag-pre/agilgur5/jest-without-globals.svg)](https://github.com/agilgur5/jest-without-globals/releases)
[![commits](https://img.shields.io/github/commits-since/agilgur5/jest-without-globals/latest?sort=semver&include_prereleases.svg)](https://github.com/agilgur5/jest-without-globals/commits/master)
<br><!-- downloads -->
[![dt](https://img.shields.io/npm/dt/jest-without-globals.svg)](https://npmjs.org/package/jest-without-globals)
[![dy](https://img.shields.io/npm/dy/jest-without-globals.svg)](https://npmjs.org/package/jest-without-globals)
[![dm](https://img.shields.io/npm/dm/jest-without-globals.svg)](https://npmjs.org/package/jest-without-globals)
[![dw](https://img.shields.io/npm/dw/jest-without-globals.svg)](https://npmjs.org/package/jest-without-globals)
<br><!-- status / activity -->
[![typings](https://img.shields.io/npm/types/jest-without-globals.svg)](https://github.com/agilgur5/jest-without-globals/blob/master/src/index.ts)
[![build status](https://img.shields.io/travis/agilgur5/jest-without-globals/master.svg)](https://travis-ci.org/agilgur5/jest-without-globals)
[![code coverage](https://img.shields.io/codecov/c/gh/agilgur5/jest-without-globals/master.svg)](https://codecov.io/gh/agilgur5/jest-without-globals)

Explicitly import [Jest](https://github.com/facebook/jest) globals.

## Installation

```sh
npm i -D jest-without-globals
```

_(note that `jest` is a peer dependency)_

## Usage

```typescript
import { describe, it, expect } from 'jest-without-globals'

describe('describe should create a section', () => {
  it('it should checkmark', () => {
    expect('').toBe('')
  })
})
```

All of the functions available in [Jest's API](https://jestjs.io/docs/en/api), as well as `jest` and `expect`, can be imported from `jest-without-globals`.

## Examples

Can take a look at the [tests](./test/) for usage of more of the globals, but basically you can now just `import` any Jest global.

## How it works

Basically just takes Jest's globals and exports them.
The source code is currently shorter than this README, so [take a look under the hood](./src/)! :)

## Credits

Some inspiration came from [this workaround](https://github.com/facebook/jest/pull/7571#issuecomment-498634094) to avoid globals, which I had been using in projects previously.
I wanted a package I could re-use in all my projects' tests instead of constantly having to create a helper file and map its name, and so `jest-without-globals` was born!

Can also see [my PR](https://github.com/facebook/jest/pull/9306) for implementing this directly in Jest. It also adds a `noJestGlobals` configuration option that would prevent these globals from being inserted into your environment as well (which is something that isn't possible with a simple user-land library like this).
