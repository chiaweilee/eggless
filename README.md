# [gge](#) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/chiaweilee/gge/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/gge.svg?style=flat)](https://www.npmjs.com/package/gge) [![npm downloads](https://img.shields.io/npm/dm/gge.svg)](https://npmcharts.com/compare/gge?minimal=true) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#)

*YAML configurable built-in egg*

## Installation

```
npm install gge
```

## Usage

```json
{
  "name": "gge-demo",
  "scripts": {
    "start": "gge start",
    "stop": "gge stop"
  },
  "dependencies": {
    "gge": "latest",
  }
}
```

## Configuration

*create router.yml*

```yml
config:
  default:
    keys: 'gee-test'
    static:
      prefix: '/'
      dir: 'dist'
router:
  - get / home.index
plugin:
  index:
    enable: true
    package: 'egg-index'

```
