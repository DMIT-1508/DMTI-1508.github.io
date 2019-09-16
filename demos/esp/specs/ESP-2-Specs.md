---
title: Part 2
---
# ESP - Part 2

## Customer Payments Against Orders

ESP allows its customers to make payments against their orders in several ways. These include:

- Full payment at the time of order
- Partial payment at the time of order with final payment(s) at a later time
- No payment at time of order with final payment(s) at a later time
- Payments can be made by cash, cheque, Visa, America Express, etc

ESP keeps a payment log to keep track of all payments made against an order. Each order has its own log sheet. The log looks similar to the following:

![](./ESP-2-Payments-Log-View-A.png)

Note that a customer payment is applied against a single order.

When a payment is made, ESP goes through the following process (worst case scenario – where a cheque arrives in the mail with no indication of an order number on it):

- Customer name is searched in the customer file to determine their customer number. The address on the cheque is used to confirm the customer.
- The Orders File and the Payments Log are manually searched by customer number to find any order(s) that have an outstanding balance.
- If this is the first payment for this order, then a new Payment Log form is filled in with customer name, number, etc.
- The payment details are entered and the balance owing is updated.
- The Deposit Batch # is entered on the log when the payment is deposited into the bank so that the payments can be reconciled with the deposit on the bank statement.

ESP has indicated that there are never any over payments made and refunds or cancellations are never issued.

<!--
ESP has also indicated that they would like the new system to only allow specific payment types so they can monitor usage of each type.
-->

You are to take the information provided above and prepare a set of **3NF** relational entities and produce a relational **3NF ERD.**

NOTE: It can be helpful to see more samples of a given form/view in order to better understand the data and metadata. Here are a few more Payment Logs to consider in your analysis.

![Alt Payments Log](./ESP-2-Payments-Log-View-B.png)
![Alt Payments Log](./ESP-2-Payments-Log-View-C.png)

