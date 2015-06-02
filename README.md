# fast-luhn [![Build Status](https://travis-ci.org/bendrucker/fast-luhn.svg?branch=master)](https://travis-ci.org/bendrucker/fast-luhn)

> A fast [Luhn](http://en.wikipedia.org/wiki/Luhn_algorithm) algorithm for validating credit cards. Adapted from [ShirtlessKirk's popular gist](https://gist.github.com/ShirtlessKirk/2134376). 

## Installing

```sh
$ npm install fast-luhn
```

## API

#### `luhn(number)` -> `Boolean`

Returns `true`/`false` depending on whether the Luhn checksum is valid

##### number

*Required*  
Type: `string`

A credit card number.

## License

MIT © [Ben Drucker](http://bendrucker.me)
