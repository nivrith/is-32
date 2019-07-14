# is-32

[![CircleCI](https://circleci.com/gh/nivrith/is-32/tree/master.svg?style=svg)](https://circleci.com/gh/nivrith/is-32/tree/master)
[![NPM Downloads](https://img.shields.io/npm/dw/is-32.svg)](https://www.npmjs.com/package/is-32)
[![node](https://img.shields.io/node/v/is-32.svg)](https://www.npmjs.com/package/is-32)
[![License MIT](https://img.shields.io/github/license/nivrith/is-32.svg)](https://github.com/nivrith/is-32/blob/master/LICENSE)

check if a number is a 32 bit integer

## Highlights

- Written in Typescript

## Usage

> check if a number is a 32 bit integer

```js

  import is32 from 'is-32';

  is32(2147483647); //true
  is32(-2147483648); //true
  is32(Number.MAX_SAFE_INTEGER); //false
  is32(10); //true
  is32(-0); //true

```

## License

MIT © [Nivrith](https://github.com/nivrith)
