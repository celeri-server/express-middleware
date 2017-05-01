
### Install

```bash
$ npm install --save @celeri/express-middleware
```

### Import

#### ES6 Modules

```javascript
import { convertMiddleware } from '@celeri/express-middleware';
```

#### CommonJS Modules

```javascript
const { convertMiddleware } = require('@celeri/express-middleware');
```

### Usage

```javascript
const celeriMiddleware = convertMiddleware(expressMiddleware);
```
