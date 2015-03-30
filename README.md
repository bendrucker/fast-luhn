# fast-luhn [![Build Status](https://travis-ci.org/bendrucker/fast-luhn.svg?branch=master)](https://travis-ci.org/bendrucker/fast-luhn)

A fast Luhn algorithm for validating credit cards. Adapted from [ShirtlessKirk's popular gist](https://gist.github.com/ShirtlessKirk/2134376). 

## Installing

```sh
$ npm install fast-luhn
```

## API

##### `luhn(number)` -> `Boolean`

Accepts a `number` (String) and returns `true`/`false` depending on whether the Luhn checksum is valid.

## License

[WTFPL](http://www.wtfpl.net/)
