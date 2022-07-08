# @skcin7/inspire
A simple Node.js package that inspires you by printing an inspirational message.

Works both as a Node.js binary (prints the message in your terminal), or as a piece that can be imported and used into your JavaScript and/or TypeScript applications.

## Installation
To install it, you should use NPM:

```shell
npm i @skcin7/inspire --save-dev
```

## Usage
Once the package is installed, you have various ways in which you may use it.

#### Node.js:
```shell
inspire
```

#### JavaScript:
```javascript
var inspire = require("@skcin7/inspire");
inspire.printQuote(); // Prints the inspirational quote to your console.
```

#### TypeScript
```typescript
import * as inspire from '@skcin7/inspire';
inspire.printQuote(); // Prints the inspirational quote to your console.
```

## Bugs/Issues
If you notice any, please report them here: [https://github.com/skcin7/npm-inspire/issues](https://github.com/skcin7/npm-inspire/issues).

## License
This project is licensed under the terms of the [MIT license](/LICENSE).