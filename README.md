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
<br>
[![NPM](https://nodei.co/npm/jest-without-globals.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.org/package/jest-without-globals)

Explicitly import [Jest](https://github.com/facebook/jest) globals.

## Installation

`npm i -D jest-without-globals`

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
