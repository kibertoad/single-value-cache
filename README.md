# single-value-cache

[![npm version](http://img.shields.io/npm/v/single-value-cache.svg)](https://npmjs.org/package/single-value-cache)
![](https://github.com/kibertoad/single-value-cache/workflows/unit-tests/badge.svg)
[![Coverage Status](https://coveralls.io/repos/kibertoad/single-value-cache/badge.svg?branch=master)](https://coveralls.io/r/kibertoad/single-value-cache?branch=master)

Simple, TTL-based Node.js cache for single values.
Returns `undefined` if user attempts to retrieve expired value.

## Usage

### Setting new value
```js
import { SingleValueCache } from 'single-value-cache'

const cache = new SingleValueCache(500) // TTL in msecs
cache.set('token')
const token = cache.get()
expect(token).toEqual('token')
```

### Clearing cache
```js
import { SingleValueCache } from 'single-value-cache'

const cache = new SingleValueCache(500) // TTL in msecs
cache.set('token')
cache.clear()
const token = cache.get()
expect(token).toBeUndefined()
```

### Updating value
```js
import { SingleValueCache } from 'single-value-cache'

const cache = new SingleValueCache(500) // TTL in msecs
cache.set('token')
cache.set('token2')
const token = cache.get()
expect(token).toEqual('token2')
```
