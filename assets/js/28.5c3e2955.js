(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{209:function(t,e,a){"use strict";a.r(e);var r=a(0),s=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("🗓 Week of November 5")]),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("PART 1")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("Now we will move beyond the router. In Model-View-Controller (MVC) Architecture, the controller is the brains. It is where all the logic is stored. We will learn how to create a controller and connect the routes to it.")]),t._v(" "),t._m(3),t._v(" "),a("p",[a("a",{attrs:{href:"https://laravel.com/docs/5.6/controllers",target:"_blank",rel:"noopener noreferrer"}},[t._v("View"),a("OutboundLink")],1)])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("PART 2")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("The Model refers the data and business rules, and in most cases this means a database. We will learn how to create a model, connect to the database, and write queries in our Controller using Laravel's Eloquent.")]),t._v(" "),t._m(5),t._v(" "),a("p",[a("a",{attrs:{href:"https://laravel.com/docs/5.6/eloquent",target:"_blank",rel:"noopener noreferrer"}},[t._v("View"),a("OutboundLink")],1)])]),t._v(" "),t._m(6),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("In-Class Exercise")]),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("With our templates in place, we will connect to the Seussology Database, retrieve the relevant data and push to the views.")]),t._v(" "),a("p",[a("router-link",{attrs:{to:"/exercises/week10/"}},[t._v("View")])],1)]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("Group Project")]),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("A working prototype of the project. The prototype does not need to be complete, but it does need to be functional.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://classroom.github.com/g/wLHIj7Ap",target:"_blank",rel:"noopener noreferrer"}},[t._v("View on GitHub Classroom"),a("OutboundLink")],1)])]),t._v(" "),t._m(9),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[a("Badge",{attrs:{text:"Laracasts"}})],1),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("Watch this simple to follow Free beginners course on Laravel. You will learn all the basics of using Laravel including: routes, views, controllers, databases, form handling and validation.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://laracasts.com/series/laravel-from-scratch-2018",target:"_blank",rel:"noopener noreferrer"}},[t._v("Watch"),a("OutboundLink")],1)])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[a("Badge",{attrs:{text:"PluralSight"}})],1),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("Watch this three-part course that digs into an overview of the Laravel framework. You will learn how to start building PHP applications with the MVC architecture.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://app.pluralsight.com/library/courses/code-school-try-laravel/description",target:"_blank",rel:"noopener noreferrer"}},[t._v("Watch"),a("OutboundLink")],1)])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[a("Badge",{attrs:{text:"Lynda"}})],1),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("Watch this course as it covers the basics you need to know to build elegant applications of any scale with Laravel. Learn how to work with the MVC architecture, bootstrap components with service providers, and incorporate the ORM Eloquent for simplified database integration.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.lynda.com/Laravel-tutorials/Laravel-5-Essential-Training-1-Basics/604257-2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Watch"),a("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"week-10-models-and-controllers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#week-10-models-and-controllers","aria-hidden":"true"}},[this._v("#")]),this._v(" Week 10: Models and Controllers")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"concepts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#concepts","aria-hidden":"true"}},[this._v("#")]),this._v(" Concepts")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"laravel-controllers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#laravel-controllers","aria-hidden":"true"}},[this._v("#")]),this._v(" Laravel: Controllers")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("The link below goes to the official Laravel Documentation")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"laravel-models"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#laravel-models","aria-hidden":"true"}},[this._v("#")]),this._v(" Laravel: Models")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("The link below goes to the official Laravel Documentation")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"practice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#practice","aria-hidden":"true"}},[this._v("#")]),this._v(" Practice")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"seussology"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#seussology","aria-hidden":"true"}},[this._v("#")]),this._v(" Seussology")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"project-prototype"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#project-prototype","aria-hidden":"true"}},[this._v("#")]),this._v(" Project Prototype")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"independent-study"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#independent-study","aria-hidden":"true"}},[this._v("#")]),this._v(" Independent Study")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"laravel-5-7-from-scratch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#laravel-5-7-from-scratch","aria-hidden":"true"}},[this._v("#")]),this._v(" Laravel 5.7 from Scratch")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"try-laravel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#try-laravel","aria-hidden":"true"}},[this._v("#")]),this._v(" Try Laravel")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"laravel-5-essential-training"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#laravel-5-essential-training","aria-hidden":"true"}},[this._v("#")]),this._v(" Laravel 5 Essential Training")])}],!1,null,null,null);s.options.__file="README.md";e.default=s.exports}}]);