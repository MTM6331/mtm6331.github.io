(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{198:function(a,t,s){"use strict";s.r(t);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"php-simple-arrays"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#php-simple-arrays","aria-hidden":"true"}},[a._v("#")]),a._v(" PHP Simple Arrays")]),a._v(" "),s("h2",{attrs:{id:"what-is-a-simple-array"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-simple-array","aria-hidden":"true"}},[a._v("#")]),a._v(" What is a Simple Array")]),a._v(" "),s("p",[a._v("Simple arrays are arrays that are indexed using numbers and is the default behavior for arrays in PHP.")]),a._v(" "),s("h2",{attrs:{id:"declaring-an-array"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#declaring-an-array","aria-hidden":"true"}},[a._v("#")]),a._v(" Declaring an Array")]),a._v(" "),s("p",[a._v("There are two way to declare an array in PHP, with the array function OR using the array literal.")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token variable"}},[a._v("$names")]),a._v(" "),s("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{attrs:{class:"token keyword"}},[a._v("array")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{attrs:{class:"token variable"}},[a._v("$names")]),a._v(" "),s("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("Both methods create an empty array so that you can place items inside of it. If you want, you can create a simple array that contains items by added a comma-separated list, using either the array function or the array literal.")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token variable"}},[a._v("$names")]),a._v(" "),s("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{attrs:{class:"token keyword"}},[a._v("array")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{attrs:{class:"token double-quoted-string string"}},[a._v('"Oscar"')]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{attrs:{class:"token double-quoted-string string"}},[a._v('"Brent"')]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{attrs:{class:"token double-quoted-string string"}},[a._v('"Davis"')]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{attrs:{class:"token double-quoted-string string"}},[a._v('"Hank"')]),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{attrs:{class:"token variable"}},[a._v("$names")]),a._v(" "),s("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{attrs:{class:"token double-quoted-string string"}},[a._v('"Oscar"')]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{attrs:{class:"token double-quoted-string string"}},[a._v('"Brent"')]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{attrs:{class:"token double-quoted-string string"}},[a._v('"Davis"')]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{attrs:{class:"token double-quoted-string string"}},[a._v('"Hank"')]),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("Both examples will create an array with the four initial names but can still have more added afterwards.")]),a._v(" "),s("h2",{attrs:{id:"retrieving-array-values"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#retrieving-array-values","aria-hidden":"true"}},[a._v("#")]),a._v(" Retrieving Array Values")]),a._v(" "),s("p",[a._v("The items inside the array are numbered from zero to three. We could write these items out like this:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{attrs:{class:"token variable"}},[a._v("$names")]),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{attrs:{class:"token number"}},[a._v("0")]),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{attrs:{class:"token comment"}},[a._v("// Oscar")]),a._v("\n"),s("span",{attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{attrs:{class:"token variable"}},[a._v("$names")]),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{attrs:{class:"token number"}},[a._v("3")]),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{attrs:{class:"token comment"}},[a._v("// Hank")]),a._v("\n")])])]),s("h2",{attrs:{id:"retrieving-array-length"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#retrieving-array-length","aria-hidden":"true"}},[a._v("#")]),a._v(" Retrieving Array Length")]),a._v(" "),s("p",[a._v("If you want to find out how many items are inside an array, you can use either the "),s("code",[a._v("sizeof()")]),a._v(" OR "),s("code",[a._v("count()")]),a._v(" function. NOTE: Both functions are exactly the same, as "),s("code",[a._v("sizeof()")]),a._v(" is simply an alias of "),s("code",[a._v("count()")]),a._v(".")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{attrs:{class:"token function"}},[a._v("sizeof")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" "),s("span",{attrs:{class:"token variable"}},[a._v("$names")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{attrs:{class:"token comment"}},[a._v("//outputs 4")]),a._v("\n"),s("span",{attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{attrs:{class:"token function"}},[a._v("count")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" "),s("span",{attrs:{class:"token variable"}},[a._v("$names")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{attrs:{class:"token comment"}},[a._v("//outputs 4")]),a._v("\n")])])]),s("h2",{attrs:{id:"updating-array-values"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updating-array-values","aria-hidden":"true"}},[a._v("#")]),a._v(" Updating Array Values")]),a._v(" "),s("p",[a._v("If you want to update an item in an existing array, use the same syntax to retrieve followed by the assignment operator and the new value.")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token variable"}},[a._v("$names")]),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{attrs:{class:"token number"}},[a._v("1")]),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{attrs:{class:"token double-quoted-string string"}},[a._v('"Fitzy"')]),s("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{attrs:{class:"token comment"}},[a._v('// $names = ["Oscar", "Fitzy", "Davis", "Hank"]')]),a._v("\n"),s("span",{attrs:{class:"token variable"}},[a._v("$names")]),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{attrs:{class:"token number"}},[a._v("3")]),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{attrs:{class:"token double-quoted-string string"}},[a._v('"Bob"')]),s("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{attrs:{class:"token comment"}},[a._v('// $names = ["Oscar", "Fitzy", "Davis", "Bob"]')]),a._v("\n")])])]),s("p",[a._v('This will replace the name "Brent" with the name "Fitzy" and the name "Hank" with the name "Bob"')]),a._v(" "),s("h2",{attrs:{id:"adding-a-new-item-to-an-array"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-new-item-to-an-array","aria-hidden":"true"}},[a._v("#")]),a._v(" Adding a New Item to an Array")]),a._v(" "),s("p",[a._v("If you want to add a new item to an existing simple array then we use a similar syntax to the update. We add the square brackets after the array name but we leave them empty.")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token variable"}},[a._v("$names")]),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{attrs:{class:"token double-quoted-string string"}},[a._v('"Bill"')]),s("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{attrs:{class:"token comment"}},[a._v('// $names = ["Oscar", "Fitzy", "Davis", "Bob", "Bill"]')]),a._v("\n")])])]),s("p",[a._v('This will add the name "Bill" to the end of the array.')])])}],!1,null,null,null);e.options.__file="php-simple-arrays.md";t.default=e.exports}}]);