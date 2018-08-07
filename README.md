# SalesforceFormulaParser

Parse Salesforce Formula and, Build AST in JavaScript

## Usage

```bash
$ npm install salesforce-formula-parser
```

```JavaScript
const parse = require('salesforce-formula-parser')
parse('IF(TRUE, "foo", IF(FALSE, "bar", "baz"))')

// => { type: 'function',
//      name: 'IF',
//      arguments:
//       [ { type: 'boolean', value: true },
//         { type: 'string', value: 'foo' },
//         { type: 'function',
//           name: 'IF',
//           arguments:
//            [ { type: 'boolean', value: false },
//              { type: 'string', value: 'bar' },
//              { type: 'string', value: 'baz' } ] } ] }
```
