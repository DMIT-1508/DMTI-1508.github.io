(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{294:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"esp-1-handling-change-requests-with-alter-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esp-1-handling-change-requests-with-alter-table","aria-hidden":"true"}},[t._v("#")]),t._v(" ESP 1 - Handling Change Requests with Alter Table")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ***************************\n * Change Requests for Spec 1\n *  Perform table changes through ALTER statements.\n *  Syntax for ALTER TABLE can be found at\n *      http://msdn.microsoft.com/en-us/library/ms190273.aspx\n *  ALTER TABLE statements allow us to change an existing table without\n *  having ot drop it or lose information in the table\n * **************************/")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- A) Allow Address, City, Province, and Postal Code to be NULL")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--    SQL requires each column to be altered SEPARATELY.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" Customers\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COLUMN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v("\nGO "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('-- this statement helps to "separate" various DDL statements in our script. It\'s optional.')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" Customers\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COLUMN")]),t._v(" City "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("35")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v("\nGO\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" Customers\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COLUMN")]),t._v(" Province "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v("\nGO\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" Customers\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COLUMN")]),t._v(" PostalCode "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v("\nGO\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- B) Add a check constraint on the First and Last name to require at least two letters.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--    % is a wildcard for zero or more characters (letter, digit, or other character)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--    _ is a wildcard for a single character (letter, digit, or other character)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--    [] are used to represent a range or set of characters that are allowed")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" OBJECT_ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CK_Customers_FirstName'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 'C' specifies that I'm looking for a constraint")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" Customers "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CONSTRAINT")]),t._v(" CK_Customers_FirstName\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" Customers\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CONSTRAINT")]),t._v(" CK_Customers_FirstName\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHECK")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FirstName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[A-Z][A-Z]%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" OBJECT_ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CK_Customers_LastName'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" Customers "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CONSTRAINT")]),t._v(" CK_Customers_LastName\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" Customers\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CONSTRAINT")]),t._v(" CK_Customers_LastName\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHECK")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LastName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[A-Z][A-Z]%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Once the ALTER TABLE changes are made for A) and B),")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- we can insert Customer information allowing certain columns to be NULL.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" Customers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FirstName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" LastName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fred'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Flintstone'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" Customers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FirstName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" LastName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Barney'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Rubble'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" Customers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FirstName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" LastName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PhoneNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Wilma'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Slaghoople'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'(403)555-1212'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" Customers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FirstName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" LastName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" City"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Betty'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Mcbricker'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'103 Granite Road'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Bedrock'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Select the customer information")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v("  CustomerNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FirstName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" LastName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" City "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("', '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" Province "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Customer Address'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        PhoneNumber\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v("    Customers\nGO\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n    You can check that the constraints work on the first/last name\n    by highlighting and running these scripts. They should fail.\nINSERT INTO Customers(FirstName, LastName)\n    VALUES ('F', 'Flintstone')\nINSERT INTO Customers(FirstName, LastName)\n    VALUES ('Fred', 'F')\n*/")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- C) Add an extra bit of information on the Customer table. The client wants to")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--    start tracking customer emails, so they can send out statements for")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--    outstanding payments that are due at the end of the month.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" Customers\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" Email "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Adding this as a nullable column, because customers already")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- exist, and we don't have emails for those customers.")]),t._v("\nGO\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);