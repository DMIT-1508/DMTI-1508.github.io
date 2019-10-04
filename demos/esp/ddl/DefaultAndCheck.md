---
title: Default and Check Constraints
---
# Default and Check Constraints

## Customers

```sql
    Province        char(2)
        -- A DEFAULT constraint will supply a default value for a column
        -- whenever no value is supplied when adding a row of data
        CONSTRAINT DF_Customers_Province
            DEFAULT ('AB')
        -- A CHECK constraint ensures that only the specified value(s)
        -- will be accepted when adding a row of data
        CONSTRAINT CK_Customers_Province
            CHECK (Province = 'AB' OR
                   Province = 'BC' OR
                   Province = 'SK' OR
                   Province = 'MB' OR
                   Province = 'QC' OR
                   Province = 'ON' OR
                   Province = 'NT' OR
                   Province = 'NS' OR
                   Province = 'NB' OR
                   Province = 'NL' OR
                   Province = 'YK' OR
                   Province = 'NU' OR
                   Province = 'PE')
                                        NOT NULL,
    PostalCode      char(6)
        CONSTRAINT CK_Customers_PostalCode
            CHECK (PostalCode LIKE '[A-Z][0-9][A-Z][0-9][A-Z][0-9]')
                                        NOT NULL,
    PhoneNumber     char(13)
        CONSTRAINT CK_Customers_PhoneNumber
            CHECK (PhoneNumber LIKE '([0-9][0-9][0-9])[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]')
                                            NULL  -- NULL means the data is optional
```

## Orders

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

