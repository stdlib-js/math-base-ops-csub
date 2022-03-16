<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# csub

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Subtract two double-precision complex floating-point numbers.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-ops-csub
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var csub = require( '@stdlib/math-base-ops-csub' );
```

#### csub( z1, z2 )

Subtracts two double-precision complex floating-point numbers.

```javascript
var Complex128 = require( '@stdlib/complex-float64' );
var real = require( '@stdlib/complex-real' );
var imag = require( '@stdlib/complex-imag' );

var z1 = new Complex128( 5.0, 3.0 );
var z2 = new Complex128( -2.0, 1.0 );

var v = csub( z1, z2 );
// returns <Complex128>

var re = real( v );
// returns 7.0

var im = imag( v );
// returns 2.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex128 = require( '@stdlib/complex-float64' );
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' ).factory;
var csub = require( '@stdlib/math-base-ops-csub' );

var rand;
var z1;
var z2;
var z3;
var i;

rand = discreteUniform( -50, 50 );
for ( i = 0; i < 100; i++ ) {
    z1 = new Complex128( rand(), rand() );
    z2 = new Complex128( rand(), rand() );
    z3 = csub( z1, z2 );
    console.log( '(%s) - (%s) = %s', z1.toString(), z2.toString(), z3.toString() );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/ops/csub.h"
```

#### stdlib_base_csub( z1, z2 )

Subtracts two double-precision complex floating-point numbers.

```c
#include <complex.h>

double complex z1 = 5.0 + 3.0*I;
double complex z2 = -2.0 + 1.0*I;

double complex out = stdlib_base_csub( z1, z2 );
// returns 7.0+2.0*I
```

The function accepts the following arguments:

-   **z1**: `[in] double complex` input value.
-   **z2**: `[in] double complex` input value.

```c
double complex stdlib_base_csub( const double complex z1, const double complex z2 );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/ops/csub.h"
#include <stdio.h>
#include <complex.h>

int main() {
    double complex x[] = { 3.14+1.5*I, -3.14-1.5*I, 0.0+0.0*I, 0.0/0.0+0.0/0.0*I };

    double complex v;
    double complex y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        v = x[ i ];
        y = stdlib_base_csub( v, v );
        printf( "z = %lf + %lfi\ncsub(z, z) = %lf + %lfi\n", creal( v ), cimag( v ), creal( y ), cimag( y ) );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-ops-csub.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-ops-csub

[test-image]: https://github.com/stdlib-js/math-base-ops-csub/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-ops-csub/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-ops-csub/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-ops-csub?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-ops-csub.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-ops-csub/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-ops-csub/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-ops-csub/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-ops-csub/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-ops-csub/main/LICENSE

</section>

<!-- /.links -->
