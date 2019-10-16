(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{321:function(e,t,a){"use strict";a.r(t);var s=a(2),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"video-rental-view-solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#video-rental-view-solution","aria-hidden":"true"}},[e._v("#")]),e._v(" Video Rental View - Solution")]),e._v(" "),a("p",[e._v("The following is the solution to the specs for the first view in Joe's videos.")]),e._v(" "),a("h3",{attrs:{id:"legend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#legend","aria-hidden":"true"}},[e._v("#")]),e._v(" Legend")]),e._v(" "),a("p",[e._v("This legend is a guide to reading and interpreting the table listings under 0NF through 3NF.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("TableName:")]),e._v(" - Table names will be bolded and end with a colon. (e.g.: "),a("code",[e._v("**TableName:**")]),e._v(")")]),e._v(" "),a("li",[e._v("(Column, Names) - Column names for a table will be enclosed in (rounded parenthesis).")]),e._v(" "),a("li",[a("b",{staticClass:"pk"},[e._v("PrimaryKeyFields")]),e._v(" - Primary key fields will be bold and inside a box. (e.g.: "),a("code",[e._v('<b class="pk">PrimaryKeyFields</b>')]),e._v(")")]),e._v(" "),a("li",[a("u",{staticClass:"fk"},[e._v("ForeignKeyFields")]),e._v(" - Foreign key fields will be a wavy underline in italic and green. (e.g.: "),a("code",[e._v('<u class="fk">ForeignKeyFields</u>')]),e._v(")")]),e._v(" "),a("li",[a("b",{staticClass:"rg"},[e._v("{")]),e._v("Repeating Groups"),a("b",{staticClass:"rg"},[e._v("}")]),e._v(" - Groups of repeating fields will be identified in 0NF stage, and will be enclosed in orange curly braces. (e.g.: "),a("code",[e._v('<b class="rg">{</b>Repeating, Group, Fields<b class="rg">}</b>')]),e._v(")")])]),e._v(" "),a("h2",{attrs:{id:"_0nf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0nf","aria-hidden":"true"}},[e._v("#")]),e._v(" 0NF")]),e._v(" "),a("p",[a("strong",[e._v("VideoRental:")]),e._v(" ("),a("b",{staticClass:"pk"},[e._v("TransactionId")]),e._v(", Date, CustomerId, FirstName, LastName, Phone, StreetAddress, City, Province, PostalCode, "),a("b",{staticClass:"rg"},[e._v("{")]),e._v(" VideoId, CopyNumber, Title, ReturnDate, RentalCharge, CurrentRentalCharge, "),a("b",{staticClass:"rg"},[e._v("}")]),e._v(" Subtotal, GST, Total)")]),e._v(" "),a("h2",{attrs:{id:"_1nf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1nf","aria-hidden":"true"}},[e._v("#")]),e._v(" 1NF")]),e._v(" "),a("p",[a("strong",[e._v("VideoRental:")]),e._v(" ("),a("b",{staticClass:"pk"},[e._v("TransactionId")]),e._v(", Date, CustomerId, FirstName, LastName, Phone, StreetAddress, City, Province, PostalCode, Subtotal, GST, Total)")]),e._v(" "),a("p",[a("strong",[e._v("RentalDetail:")]),e._v(" ("),a("b",{staticClass:"pk"},[a("u",{staticClass:"fk"},[e._v("TransactionId")]),e._v(", VideoId, CopyNumber")]),e._v(", Title, ReturnDate, RentalCharge, CurrentRentalCharge)")]),e._v(" "),a("h2",{attrs:{id:"_2nf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2nf","aria-hidden":"true"}},[e._v("#")]),e._v(" 2NF")]),e._v(" "),a("p",[a("strong",[e._v("RentalDetail:")]),e._v(" ("),a("b",{staticClass:"pk"},[a("u",{staticClass:"fk"},[e._v("TransactionId")]),e._v(", "),a("u",{staticClass:"fk"},[e._v("VideoId")]),e._v(", CopyNumber")]),e._v(", ReturnDate, RentalCharge)")]),e._v(" "),a("p",[a("strong",[e._v("Video:")]),e._v(" ("),a("b",{staticClass:"pk"},[e._v("VideoId")]),e._v(", Title, CurrentRentalCharge)")]),e._v(" "),a("h2",{attrs:{id:"_3nf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3nf","aria-hidden":"true"}},[e._v("#")]),e._v(" 3NF")]),e._v(" "),a("p",[a("strong",[e._v("VideoRental:")]),e._v(" ("),a("b",{staticClass:"pk"},[e._v("TransactionId")]),e._v(", Date, "),a("u",{staticClass:"fk"},[e._v("CustomerId")]),e._v(", Subtotal, GST, Total)")]),e._v(" "),a("p",[a("strong",[e._v("Customer:")]),e._v(" ("),a("b",{staticClass:"pk"},[e._v("CustomerId")]),e._v(", FirstName, LastName, Phone, StreetAddress, City, Province, PostalCode)")])])}),[],!1,null,null,null);t.default=i.exports}}]);