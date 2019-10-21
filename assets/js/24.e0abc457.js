(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{229:function(e,t,s){e.exports=s.p+"assets/img/IQSchool-ERD.f2f3ede0.png"},280:function(e,t,s){"use strict";s.r(t);var a=s(2),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"introduction-to-sql-queries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-sql-queries","aria-hidden":"true"}},[e._v("#")]),e._v(" Introduction to SQL Queries")]),e._v(" "),a("p",[e._v("Queries are used to retrieve data from the database. They can be very flexible in what columns they select, what rows they select, and what aggregate calculations they return. Being able to write accurate and efficient queries is a critical skill when working with databases.")]),e._v(" "),a("p",[e._v("Queries are written with the "),a("code",[e._v("SELECT")]),e._v(" statement. The "),a("code",[e._v("SELECT")]),e._v(" syntax contains six clauses. In order, they are:")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("SELECT")]),e._v(" clause")]),e._v(" "),a("p",[e._v(":   A comma-separated list of column data to generate.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("FROM")]),e._v(" clause")]),e._v(" "),a("p",[e._v(":   Identifies the table(s) used as the source of the data to generate/retreive.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("WHERE")]),e._v(" clause")]),e._v(" "),a("p",[e._v(":   Filtering to be done on the rows of data.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("GROUP BY")]),e._v(" clause")]),e._v(" "),a("p",[e._v(":   A list of columns to group the data by for aggregation operations.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("HAVING")]),e._v(" clause")]),e._v(" "),a("p",[e._v(":   Filtering to be done on aggregate values.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("ORDER BY")]),e._v(" clause")]),e._v(" "),a("p",[e._v(":   Sorting of the final result set.")]),e._v(" "),a("p",[e._v("The full syntax available for a select statement can be expressed as:")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ALL")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("DISTINCT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" column_list\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INTO")]),e._v(" new_table_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" table_name\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INNER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("LEFT")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("OUTER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("RIGHT")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("OUTER")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("JOIN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" clause\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("GROUP")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("BY")]),e._v(" clause\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("HAVING")]),e._v(" clause\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ORDER")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("BY")]),e._v(" clause\n")])])]),a("p",[e._v("If it looks complex don't worry. All the \"clauses\" listed don't need to be used when creating a query. Only the "),a("code",[e._v("SELECT")]),e._v(" clause is required; the others are all optional. However, what clauses you do use "),a("em",[e._v("MUST")]),e._v(" be in the order shown above (for example: "),a("code",[e._v("HAVING")]),e._v(" MUST be after "),a("code",[e._v("GROUP BY")]),e._v(" and not vice versa). In addition, there is other functionality available in SQL beyond the syntax above, such as the ability to use string, date and aggregate functions in your queries. We will start by looking at simple queries and then adding in the additional clauses after that.")]),e._v(" "),a("p",[e._v("All the examples demonstrated can be executed in the IQSchool database so you can see the results.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(229),alt:"IQSchool ERD"}})]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"simple-sql-queries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-sql-queries","aria-hidden":"true"}},[e._v("#")]),e._v(" Simple SQL Queries")]),e._v(" "),a("p",[e._v("At the end of this topic, you should be able to:")]),e._v(" "),a("ul",[a("li",[e._v("List the six clauses of the SELECT statement in SQL")]),e._v(" "),a("li",[e._v("Identify the purpose of SELECT statements")]),e._v(" "),a("li",[e._v("Identify the general order in which the clauses of a SELECT statement are executed in SQL Server")]),e._v(" "),a("li",[e._v("Construct queries to perform simple selects on database tables")])]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"database-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database-functions","aria-hidden":"true"}},[e._v("#")]),e._v(" Database Functions")]),e._v(" "),a("p",[e._v("At the end of this topic, you should be able to:")]),e._v(" "),a("ul",[a("li",[e._v("List at least five SQL functions for working with strings")]),e._v(" "),a("li",[e._v("List at least five SQL functions for working with dates")]),e._v(" "),a("li",[e._v("List at least five SQL functions for working with aggregates")]),e._v(" "),a("li",[e._v("Identify the general order in which the clauses of a SELECT statement are executed in SQL Server")]),e._v(" "),a("li",[e._v("Construct queries to perform simple selects on database tables")])]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"multi-table-queries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi-table-queries","aria-hidden":"true"}},[e._v("#")]),e._v(" Multi-table Queries")]),e._v(" "),a("p",[e._v("At the end of this topic, you should be able to:")]),e._v(" "),a("ul",[a("li",[e._v("Explain the difference between inner and outer joins as it affects the data retrieved in a query")]),e._v(" "),a("li",[e._v("Construct queries to perform simple selects on related database tables using INNER JOINs")]),e._v(" "),a("li",[e._v("Create queries involving outer joins")]),e._v(" "),a("li",[e._v("Create queries involving subqueries")]),e._v(" "),a("li",[e._v("Create queries involving unions")])])])}),[],!1,null,null,null);t.default=r.exports}}]);