---
title: Default and Check Constraints
---
# ESP - Default and Check Constraints

## Customers

```sql
    [Date]          datetime            NOT NULL,
    Subtotal        money
        CONSTRAINT CK_Orders_Subtotal
            CHECK (Subtotal > 0)        NOT NULL,
    GST             money
        CONSTRAINT CK_Orders_GST
            CHECK (GST >= 0)            NOT NULL,
```

## Orders

```sql
    CurrentSalePrice    money
        CONSTRAINT CK_InventoryItems_CurrentSalePrice
            CHECK (CurrentSalePrice > 0)    NOT NULL,
```

The following sample is a table-level constraint, ensuring that the GST is either 5% of the Subtotal or zero.

```sql
    -- Table-level constraint on two columns being compared to each other
    CONSTRAINT CK_Orders_Subtotal_GST
        CHECK (GST = Subtotal * .05 OR GST = 0)
```

## InventoryItems

```sql
    CurrentSalePrice    money
        CONSTRAINT CK_InventoryItems_CurrentSalePrice
            CHECK (CurrentSalePrice > 0)    NOT NULL,
```

## OrderDetails

```sql
    Quantity        int
        CONSTRAINT DF_OrderDetails_Quantity
            DEFAULT (1)
        CONSTRAINT CK_OrderDetails_Quantity
            CHECK (Quantity > 0)        NOT NULL,
    SellingPrice    money
        CONSTRAINT CK_OrderDetails_SellingPrice
            CHECK (SellingPrice >= 0)   NOT NULL,
```

