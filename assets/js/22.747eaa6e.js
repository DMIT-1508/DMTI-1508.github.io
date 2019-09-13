(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{266:function(e,t,a){"use strict";a.r(t);var r=a(2),s=Object(r.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"esp-document-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#esp-document-2","aria-hidden":"true"}},[e._v("#")]),e._v(" ESP Document 2")]),e._v(" "),r("p",[e._v("The second specifications document for Emergency Service & Product (ESP) presented one additional paper-based form: "),r("strong",[e._v("Customer Payments Against Orders")]),e._v(". This portion of the sample lab solution details how this form was analyzed. The styling conforms to the associated [Legend.md](normalization legend).")]),e._v(" "),r("h2",{attrs:{id:"customer-payments-against-orders"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#customer-payments-against-orders","aria-hidden":"true"}},[e._v("#")]),e._v(" Customer Payments Against Orders")]),e._v(" "),r("p",[e._v("The Customer Payments Against Orders and its resulting tables are based on the following form (taken from the original documentation).")]),e._v(" "),r("p",[r("img",{attrs:{src:a(89),alt:""}})]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("NOTE:")]),e._v(" It can be helpful to see more samples of a given form/view in order to better understand the data and metadata. Here are a few more Payment Logs to consider in your analysis.")])]),e._v(" "),r("p",[r("img",{attrs:{src:a(88),alt:""}})]),e._v(" "),r("p",[r("img",{attrs:{src:a(87),alt:""}})]),e._v(" "),r("p",[e._v("This form was analyzed according to the rules of 0NF (Zero-Normal Form), 1NF (First-Normal Form), 2NF (Second-Normal Form), and 3NF (Third-Normal Form).")]),e._v(" "),r("h3",{attrs:{id:"_0nf"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_0nf","aria-hidden":"true"}},[e._v("#")]),e._v(" 0NF")]),e._v(" "),r("p",[e._v("After performing Zero-Normal Form, a single table was generated: "),r("strong",[e._v("PaymentsLog")]),e._v(".")]),e._v(" "),r("p",[r("strong",[e._v("PaymentsLog:")]),e._v(" ("),r("b",{staticClass:"pk"},[e._v("OrderNumber")]),e._v(", OrderDate, OrderTotal, FirstName, LastName, CustomerNumber, "),r("b",{staticClass:"rg"},[e._v("Date, PaymentAmount, PaymentNumber, BalanceOwing, PaymentType, DepositBatchNumber")]),e._v(")")]),e._v(" "),r("h3",{attrs:{id:"_1nf"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1nf","aria-hidden":"true"}},[e._v("#")]),e._v(" 1NF")]),e._v(" "),r("p",[e._v("After performing First-Normal Form, a single table was generated: "),r("strong",[e._v("PaymentLogDetails")]),e._v(".")]),e._v(" "),r("p",[r("strong",[e._v("PaymentsLog:")]),e._v(" ("),r("b",{staticClass:"pk"},[e._v("OrderNumber")]),e._v(", OrderDate, OrderTotal, FirstName, LastName, CustomerNumber)")]),e._v(" "),r("p",[r("strong",[e._v("PaymentLogDetails:")]),e._v(" ("),r("b",{staticClass:"pk"},[r("u",{staticClass:"fk"},[e._v("OrderNumber")]),e._v(", PaymentNumber")]),e._v(", Date, PaymentAmount, BalanceOwing, PaymentType, DepositBatchNumber)")]),e._v(" "),r("h3",{attrs:{id:"_2nf"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2nf","aria-hidden":"true"}},[e._v("#")]),e._v(" 2NF")]),e._v(" "),r("p",[e._v("After examining the "),r("em",[e._v("PaymentLogDetails")]),e._v(", there were no changes.")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note:")]),e._v(" When analyzing the "),r("em",[e._v("PaymentNumber")]),e._v(" in the "),r("em",[e._v("PaymentLogDetails")]),e._v(" entity, it became apparent (only through looking at additional Payments Log forms) that each Payment Log had their Payment Numbers re-starting at the value 1. As a result, this "),r("em",[e._v("PaymentNumber")]),e._v(" is itself tightly tied to the "),r("em",[e._v("OrderNumber")]),e._v(" and none of the other attributes in the entity are tied closely to just the "),r("em",[e._v("PaymentNumber")]),e._v(".")])]),e._v(" "),r("h3",{attrs:{id:"_3nf"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3nf","aria-hidden":"true"}},[e._v("#")]),e._v(" 3NF")]),e._v(" "),r("p",[e._v("After performing Third-Normal Form, another table was generated: "),r("strong",[e._v("Customer")]),e._v(".")]),e._v(" "),r("p",[r("strong",[e._v("Customer:")]),e._v(" ("),r("b",{staticClass:"pk"},[e._v("CustomerNumber")]),e._v(", FirstName, LastName)")]),e._v(" "),r("p",[r("strong",[e._v("PaymentsLog:")]),e._v(" ("),r("b",{staticClass:"pk"},[e._v("OrderNumber")]),e._v(", OrderDate, OrderTotal, "),r("u",{staticClass:"fk"},[e._v("CustomerNumber")]),e._v(")")]),e._v(" "),r("p",[r("strong",[e._v("PaymentLogDetails:")]),e._v(" ("),r("b",{staticClass:"pk"},[r("u",{staticClass:"fk"},[e._v("OrderNumber")]),e._v(", PaymentNumber")]),e._v(", Date, PaymentAmount, PaymentType, BalanceOwing, DepositBatchNumber)")]),e._v(" "),r("h3",{attrs:{id:"tables-after-3rd-normal-form"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tables-after-3rd-normal-form","aria-hidden":"true"}},[e._v("#")]),e._v(" Tables after 3"),r("sup",[e._v("rd")]),e._v(" Normal Form")]),e._v(" "),r("p",[e._v("These are the tables/entities after normalizing the Payment Log View.")]),e._v(" "),r("p",[r("strong",[e._v("Customer:")]),e._v(" ("),r("b",{staticClass:"pk"},[e._v("CustomerNumber")]),e._v(", FirstName, LastName)")]),e._v(" "),r("p",[r("strong",[e._v("PaymentsLog:")]),e._v(" ("),r("b",{staticClass:"pk"},[e._v("OrderNumber")]),e._v(", OrderDate, OrderTotal, "),r("u",{staticClass:"fk"},[e._v("CustomerNumber")]),e._v(")")]),e._v(" "),r("p",[r("strong",[e._v("PaymentLogDetails:")]),e._v(" ("),r("b",{staticClass:"pk"},[r("u",{staticClass:"fk"},[e._v("OrderNumber")]),e._v(", PaymentNumber")]),e._v(", Date, PaymentAmount, PaymentType, BalanceOwing, DepositBatchNumber)")]),e._v(" "),r("h3",{attrs:{id:"erd"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#erd","aria-hidden":"true"}},[e._v("#")]),e._v(" ERD")]),e._v(" "),r("p",[e._v("The following ERD for the "),r("em",[e._v("Payment Log View")]),e._v(" is based on the final 3"),r("sup",[e._v("rd")]),e._v(" normal form.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(86),alt:""}})])])},[],!1,null,null,null);t.default=s.exports},86:function(e,t,a){e.exports=a.p+"assets/img/ESP-2-ERD-PaymentLogView.3f72a51c.png"},87:function(e,t,a){e.exports=a.p+"assets/img/ESP-2-Payments-Log-View-C.57734797.png"},88:function(e,t,a){e.exports=a.p+"assets/img/ESP-2-Payments-Log-View-B.38eedb63.png"},89:function(e,t,a){e.exports=a.p+"assets/img/ESP-2-Payments-Log-View-A.60658a0d.png"}}]);