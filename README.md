# fast-luhn [![tests](https://github.com/bendrucker/fast-luhn/workflows/tests/badge.svg)](https://github.com/bendrucker/fast-luhn/actions?query=workflow%3Atests)

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
