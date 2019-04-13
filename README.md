# [eggless](#) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/chiaweilee/eggless/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/eggless.svg?style=flat)](https://www.npmjs.com/package/eggless) [![npm downloads](https://img.shields.io/npm/dm/eggless.svg)](https://npmcharts.com/compare/eggless?minimal=true) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#)

*YAML configurable built-in egg*

## Example

[eggless-example](https://github.com/chiaweilee/eggless-example)


## Installation

```
npm install eggless
```

## Usage

```json
{
  "name": "eggless-demo",
  "scripts": {
    "start": "eggless start",
    "stop": "eggless stop"
  },
  "dependencies": {
    "eggless": "latest",
  }
}
```

## Configuration

*create router.yml*

```yml
# router
# method path controller
- get / home.index
```
