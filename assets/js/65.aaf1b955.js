(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{172:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("Youtube",{attrs:{id:"nA1tLoys0YU"}}),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),s("p",[t._v("It is often the case that we will want to retrieve a specific row or rows from a table. For example, we may want all of the products with the price less than $30.")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._m(16)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"select-statements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#select-statements","aria-hidden":"true"}},[this._v("#")]),this._v(" SELECT Statements")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"basic-select-statements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basic-select-statements","aria-hidden":"true"}},[this._v("#")]),this._v(" Basic SELECT Statements")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("SELECT")]),this._v(" statement is used to retrieve information from one or more database tables. It starts with the "),e("code",[this._v("SELECT")]),this._v(" keyword followed by a list of columns to return from the specified table or tables. Columns are separate by a comma. The asterisk ("),e("code",[this._v("*")]),this._v(") can be used to return all columns from the specified table or tables.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The following command will retrieve all columns and rows from the "),e("code",[this._v("products")]),this._v(" table.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[this._v("SELECT")]),this._v(" "),e("span",{attrs:{class:"token operator"}},[this._v("*")]),this._v(" "),e("span",{attrs:{class:"token keyword"}},[this._v("FROM")]),this._v(" products\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"filtered-select-statements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filtered-select-statements","aria-hidden":"true"}},[this._v("#")]),this._v(" Filtered SELECT Statements")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This filtered result can be accomplished using the "),e("code",[this._v("WHERE")]),this._v(" clause. The "),e("code",[this._v("WHERE")]),this._v(" clause is followed by a condition that is tested against each row. If the row meets that condition, it will be returned.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" \n"),s("span",{attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" products\n"),s("span",{attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" product_price "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("30.00")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"sorted-select-statements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sorted-select-statements","aria-hidden":"true"}},[this._v("#")]),this._v(" Sorted SELECT Statements")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("It is possible to sort the results using the "),s("code",[t._v("ORDER BY")]),t._v(" clause. The "),s("code",[t._v("ORDER BY")]),t._v(" clause is followed by the list of columns to sort. Columns can be sorted in ascending ("),s("code",[t._v("ASC")]),t._v(") or descending order ("),s("code",[t._v("DESC")]),t._v(") with ascending being the default.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" \n"),s("span",{attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" products\n"),s("span",{attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" product_price "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("30.00")]),t._v(" \n"),s("span",{attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" product_name "),s("span",{attrs:{class:"token keyword"}},[t._v("DESC")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"limited-select-statements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#limited-select-statements","aria-hidden":"true"}},[this._v("#")]),this._v(" Limited SELECT Statements")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("Another way to limit the results returned from the database is use the "),s("code",[t._v("LIMIT")]),t._v(" clause. For example, if we only want 5 rows to be returned. The "),s("code",[t._v("LIMIT")]),t._v(" clause is followed by a number, which is the number of rows to be return OR in the case of the "),s("code",[t._v("UPDATE")]),t._v(" or "),s("code",[t._v("DELETE")]),t._v(" command the number of rows affected.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" \n"),s("span",{attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" products\n"),s("span",{attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" product_price "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("30.00")]),t._v(" \n"),s("span",{attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" product_name "),s("span",{attrs:{class:"token keyword"}},[t._v("DESC")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("LIMIT")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("5")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("Pagination can be accomplished by inserting a second number after the "),s("code",[t._v("LIMIT")]),t._v(" clause. This "),s("code",[t._v("offset")]),t._v(" will be used to tell the database to start the "),s("code",[t._v("row count")]),t._v(" a specified number of rows. For MySQL the syntax is "),s("code",[t._v("LIMIT offset, row count")]),t._v(". So, if we wanted to retrieve the third page of products it can be accomplished with the following:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" \n"),s("span",{attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" products\n"),s("span",{attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" product_price "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("30.00")]),t._v(" \n"),s("span",{attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" product_name "),s("span",{attrs:{class:"token keyword"}},[t._v("DESC")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("LIMIT")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("10")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("5")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("Note")]),this._v(" "),e("p",[this._v("When using the "),e("code",[this._v("LIMIT")]),this._v(" clause, it is important to use an "),e("code",[this._v("ORDER BY")]),this._v(" clause to make sure that the rows in the returned are in a specified order.")])])}],!1,null,null,null);r.options.__file="sql-select-statements.md";e.default=r.exports}}]);