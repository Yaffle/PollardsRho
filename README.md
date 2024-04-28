1. Integer factorization using Pollard's rho algorithm with Brent cycle detection

Usage:

```
import PollardsRho64 from './PollardsRho64.js';

console.log(PollardsRho64(2n**64n - 585n, 2**20)); // 9094863431n


import PollardsRho from './PollardsRho.js';

console.log(PollardsRho(2n**64n - 585n, 2**20)); // 9094863431n

```

PollardsRho64 is only for 64 bit unsigned integers.
Do not call for prime numbers. It is very slow for them.
The second argument is maximum number of steps, you can use 2**20.

2. Prime testing using Miller-Rabin algorithm:

Usage:

```
import isPrime64 from './isPrime64.js';

console.log(isPrime64(2n**64n - 585n)); // false


import isPrime from './isPrime.js';

console.log(PollardsRho(2n**64n - 585n)); // false

```
