---
title: Alter Table
---
# ESP 1 - Handling Change Requests with Alter Table

```sql
/* ***************************
 * Change Requests for Spec 1
 *  Perform table changes through ALTER statements.
 *  Syntax for ALTER TABLE can be found at
 *      http://msdn.microsoft.com/en-us/library/ms190273.aspx
 *  ALTER TABLE statements allow us to change an existing table without
 *  having ot drop it or lose information in the table
 * **************************/

-- A) Allow Address, City, Province, and Postal Code to be NULL
--    SQL requires each column to be altered SEPARATELY.
ALTER TABLE Customers
    ALTER COLUMN [Address] varchar(40) NULL
GO -- this statement helps to "separate" various DDL statements in our script. It's optional.

ALTER TABLE Customers
    ALTER COLUMN City varchar(35) NULL
GO

ALTER TABLE Customers
    ALTER COLUMN Province char(2) NULL
GO

ALTER TABLE Customers
    ALTER COLUMN PostalCode char(6) NULL
GO

-- B) Add a check constraint on the First and Last name to require at least two letters.
--    % is a wildcard for zero or more characters (letter, digit, or other character)
--    _ is a wildcard for a single character (letter, digit, or other character)
--    [] are used to represent a range or set of characters that are allowed
IF OBJECT_ID('CK_Customers_FirstName', 'C') IS NOT NULL -- 'C' specifies that I'm looking for a constraint
    ALTER TABLE Customers DROP CONSTRAINT CK_Customers_FirstName

ALTER TABLE Customers
    ADD CONSTRAINT CK_Customers_FirstName
        CHECK (FirstName LIKE '[A-Z][A-Z]%')

IF OBJECT_ID('CK_Customers_LastName', 'C') IS NOT NULL
    ALTER TABLE Customers DROP CONSTRAINT CK_Customers_LastName

ALTER TABLE Customers
    ADD CONSTRAINT CK_Customers_LastName
        CHECK (LastName LIKE '[A-Z][A-Z]%')

-- Once the ALTER TABLE changes are made for A) and B),
-- we can insert Customer information allowing certain columns to be NULL.
INSERT INTO Customers(FirstName, LastName)
    VALUES ('Fred', 'Flintstone')
INSERT INTO Customers(FirstName, LastName)
    VALUES ('Barney', 'Rubble')
INSERT INTO Customers(FirstName, LastName, PhoneNumber)
    VALUES ('Wilma', 'Slaghoople', '(403)555-1212')
INSERT INTO Customers(FirstName, LastName, [Address], City)
    VALUES ('Betty', 'Mcbricker', '103 Granite Road', 'Bedrock')

-- Select the customer information
SELECT  CustomerNumber, FirstName, LastName,
        [Address] + ' ' + City + ', ' + Province AS 'Customer Address',
        PhoneNumber
FROM    Customers
GO

/*
    You can check that the constraints work on the first/last name
    by highlighting and running these scripts. They should fail.
INSERT INTO Customers(FirstName, LastName)
    VALUES ('F', 'Flintstone')
INSERT INTO Customers(FirstName, LastName)
    VALUES ('Fred', 'F')
*/

-- C) Add an extra bit of information on the Customer table. The client wants to
--    start tracking customer emails, so they can send out statements for
--    outstanding payments that are due at the end of the month.
ALTER TABLE Customers
    ADD Email varchar(30) NULL
    -- Adding this as a nullable column, because customers already
    -- exist, and we don't have emails for those customers.
GO
```
