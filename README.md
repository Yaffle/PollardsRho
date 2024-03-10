Integer factorization using Pollard's rho algorithm with Brent cycle detection

Usage:

```
import PollardsRho64 from './PollardsRho64.js';

console.log(PollardsRho64(2n**64n - 59n, 2**20));
```

PollardsRho64 is only for 64 bit unsigned integers.
Do not call for prime numbers. It is very slow for them.
The second argument is maximum number of steps, you can use 2**20.
