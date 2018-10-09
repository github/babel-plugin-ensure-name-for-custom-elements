# babel-plugin-ensure-name-for-custom-elements

This plugin makes sure that your custom elements always have a name property, even after minifying.

## Example

**In**

```js
// input code
class FooElement extends HTMLElement { }
```

**Out**

```js
"use strict";

class FooElement extends HTMLElement {
  static get name() {
    return "FooElement";
  }
}
```

## Installation

```sh
$ npm install babel-plugin-ensure-name-for-custom-elements
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["ensure-name-for-custom-elements"]
}
```

### Via CLI

```sh
$ babel --plugins ensure-name-for-custom-elements script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["ensure-name-for-custom-elements"]
});
```
