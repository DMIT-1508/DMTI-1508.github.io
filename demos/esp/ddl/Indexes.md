---
title: ESP Indexes
---
# ESP 1 - Indexes

```sql
-- D) Add indexes to the Customer's First and Last Name columns
-- Indexes improve the performance of the database when retrieving information.
CREATE NONCLUSTERED INDEX IX_Customers_FirstName
    ON Customers (FirstName)
CREATE NONCLUSTERED INDEX IX_Customers_LastName
    ON Customers (LastName)
GO -- End of a batch of instructions

```
