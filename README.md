# Rolltip

> Yet another tooltip react component

## Get Started!

```bash
$ npm install @n370/rolltip
```

```jsx
// App.jsx

import React from 'react';
import { render } from 'react-dom';

import Rolltip from '@n370/rolltip';

const App = () => (
    <Rolltip spacing="10px" position="top">
        <div>This is your tooltip target!</div>
        <div>This is your tooltip content!</div>
    </Rolltip>
);

render(<App />, document.querySelector('[data-react-root]'));
```

## Props

### position {String}

> default: `'bottom'`

Control the positioning of your tooltip content.

**Possible values:**

-   `'top'`
-   `'right'`
-   `'bottom'`
-   `'left'`

### spacing {String}

> default: `0`

Control the distance between the tooltip content and the tooltip target.

**Possible values:**

All valid CSS number values.

---

Copyright 2020 Dylson Valente Neto

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
