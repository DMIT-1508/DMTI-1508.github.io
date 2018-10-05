---
title: ESP 1 - Test Data
---
# Simple Test Data for ESP 1

```sql
-- Let's insert a few rows of data for the tables (DML Statements)
PRINT 'Inserting customer data'
INSERT INTO Customers(FirstName, LastName, [Address], City, PostalCode)
    VALUES ('Clark', 'Kent', '344 Clinton Street', 'Metropolis', 'S0S0N0')
INSERT INTO Customers(FirstName, LastName, [Address], City, PostalCode)
    VALUES ('Jimmy', 'Olsen', '242 River Close', 'Bakerline', 'B4K3R1')
PRINT '-- end of customer data--'
PRINT ''

PRINT 'Inserting inventory items'
INSERT INTO InventoryItems(ItemNumber, ItemDescription, CurrentSalePrice, InStockCount, ReorderLevel)
    VALUES ('H8726', 'Cleaning Fan belt', 29.95, 3, 5)
INSERT INTO InventoryItems(ItemNumber, ItemDescription, CurrentSalePrice, InStockCount, ReorderLevel)
    VALUES ('H8621', 'Engine Fan belt', 17.45, 10, 5)
PRINT '-- end of inventory data --'
PRINT ''

-- Let's write an SQL Query statement to view the data in the database
-- Select the customer information
SELECT  CustomerNumber, FirstName, LastName,
        [Address] + ' ' + City + ', ' + Province AS 'Customer Address',
        PhoneNumber
FROM    Customers

-- Let's do another set of DML statements to add more data to the database
PRINT 'Inserting an order'
INSERT INTO Orders(CustomerNumber, [Date], Subtotal, GST)
    VALUES (100, GETDATE(), 17.45, 0.87)
INSERT INTO OrderDetails(OrderNumber, ItemNumber, Quantity, SellingPrice)
    VALUES (200, 'H8726', 1, 17.45)
PRINT '-- end of order data --'
PRINT ''
GO
```

