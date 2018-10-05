---
title: Computed Columns
---
# Computed Columns

## Orders

```sql
    Total           AS Subtotal + GST   -- This is now a Computed Column
```

## OrderDetails

```sql
    -- The Amount column is a CALCULATED (or "derived") column.
    -- It's value is the result of multiplying Quantity by SellingPrice.
    Amount          AS Quantity * SellingPrice  ,
```
