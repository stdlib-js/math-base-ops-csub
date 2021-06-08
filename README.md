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

# subtract

> Subtract two complex numbers.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-ops-csub
```

</section>

<section class="usage">

## Usage

```javascript
var csub = require( '@stdlib/math-base-ops-csub' );
```

#### csub( \[out,] re1, im1, re2, im2 )

Subtracts two `complex` numbers where each `complex` number is comprised of a **real** component `re` and an **imaginary** component `im`.

```javascript
var v = csub( 5.0, 3.0, -2.0, 1.0 );
// returns [ 7.0, 2.0 ]
```

By default, the function returns real and imaginary components as a two-element `array`. To avoid unnecessary memory allocation, the function supports providing an output (destination) object.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var out = new Float64Array( 2 );

var v = csub( out, 5.0, 3.0, -2.0, 1.0 );
// returns <Float64Array>[ 7.0, 2.0 ]

var bool = ( v === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex128 = require( '@stdlib/complex-float64' );
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var real = require( '@stdlib/complex-real' );
var imag = require( '@stdlib/complex-imag' );
var csub = require( '@stdlib/math-base-ops-csub' );

var re;
var im;
var z1;
var z2;
var z3;
var o;
var i;

for ( i = 0; i < 100; i++ ) {
    re = round( randu()*100.0 ) - 50.0;
    im = round( randu()*100.0 ) - 50.0;
    z1 = new Complex128( re, im );

    re = round( randu()*100.0 ) - 50.0;
    im = round( randu()*100.0 ) - 50.0;
    z2 = new Complex128( re, im );

    o = csub( real(z1), imag(z1), real(z2), imag(z2) );
    z3 = new Complex128( o[ 0 ], o[ 1 ] );

    console.log( '(%s) - (%s) = %s', z1.toString(), z2.toString(), z3.toString() );
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-ops-csub/main/LICENSE

</section>

<!-- /.links -->
