(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{219:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"php-syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php-syntax","aria-hidden":"true"}},[t._v("#")]),t._v(" PHP Syntax")]),t._v(" "),a("h3",{attrs:{id:"php-block"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php-block","aria-hidden":"true"}},[t._v("#")]),t._v(" PHP Block")]),t._v(" "),a("p",[t._v("From the Introduction to PHP, we know that PHP is compiled on the server and then passed to the browser as HTML. To let the server know that a file contains PHP, we use the .php extension (i.e. index.php ).")]),t._v(" "),a("p",[t._v("In addition to PHP, .php files can also contain HTML, CSS, and JavaScript. To help the compiler know where the PHP begins and ends, we place PHP code within "),a("code",[t._v("<?php")]),t._v(" and "),a("code",[t._v("?>")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("...\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("This is HTML"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token php language-php"}},[a("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//PHP Code! ?>")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("More HTML"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n...\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("If the .php file contain only PHP, the closing PHP block "),a("code",[t._v("?>")]),t._v(" can be and should be omitted.")])]),t._v(" "),a("h3",{attrs:{id:"echo-statement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#echo-statement","aria-hidden":"true"}},[t._v("#")]),t._v(" Echo Statement")]),t._v(" "),a("p",[t._v("PHP was designed to display content in a browser in the form of HTML. The simplest way to display the result of PHP code is to use the echo statement. The echo statement outputs a string that can be read by the browser.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("...\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("This is HTML"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token php language-php"}},[a("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"Hello, World!"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("More HTML"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n...\n")])])]),a("h3",{attrs:{id:"the-semicolon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-semicolon","aria-hidden":"true"}},[t._v("#")]),t._v(" The Semicolon")]),t._v(" "),a("p",[t._v("Each statement in PHP MUST end with a semicolon. An omitted semicolon will cause a syntax error.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("It is possible to omit the semicolon if it is the last statement in a PHP block, however, this goes against coding standards and best practices.")])]),t._v(" "),a("p",[t._v("The code below would result in a syntax error and would prevent the page from compiling properly.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("...\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("This is HTML"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token php language-php"}},[a("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" \n   "),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"Hello, World!"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"I am a PHP echo statement!"')]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// This will cause an error")]),t._v("\n   "),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"Oops, I forgot my semicolon"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("More HTML"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n...\n")])])]),a("h3",{attrs:{id:"comments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comments","aria-hidden":"true"}},[t._v("#")]),t._v(" Comments")]),t._v(" "),a("p",[t._v("Comments are an effective way to leave notes or instructions about the code you have written. It is important to use comments regularly and effectively. We will learn about how to do that later in the course. For now, we learn how to create a comment.")]),t._v(" "),a("p",[t._v("PHP, like JavaScript, has two types of comments. Single line comments that start begin with two forwards slashes ("),a("code",[t._v("//")]),t._v(") and continue to the end of the line. Multi-line comments start with a forward slash followed by a asterisk ("),a("code",[t._v("/*")]),t._v(") and will continue until an asterisk is followed by a forward slash ("),a("code",[t._v("*/")]),t._v(").")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token php language-php"}},[a("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// This is a single line comment")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("/* This is\n     a multiline comment */")]),t._v("\n"),a("span",{attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])])])])}],!1,null,null,null);e.options.__file="php-syntax.md";s.default=e.exports}}]);