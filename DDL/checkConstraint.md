# The Check Constraint

The CHECK constraint enables you to specify acceptable values, which can be inserted into a column in a table. As such, the check constraint lets you define a DOMAIN for the column. The check constraint should be given a meaningful name and consists of an expression that evaluates to true or false. Whenever a new row of data is added to the table, or an existing column has its value changed the new data will be evaluated using the expression in the check constraint. If the expression evaluates to true the DBMS will add the new data to the table. If the expression evaluates to false an error message is issued and the new data is rejected.

Syntax:

```
CONSTRAINT     constraint name
    CHECK (expression)
```

The check constraint name should begin with the prefix CK (identifies the constraint as a check constraint) and be meaningful. Constraint names must be unique within the database.

The expression in the check constraint:

- cannot contain a subquery
- must evaluate to true or false
- can be a compound Boolean expression
- can reference another column in the same table

Examples of check constraints:

Column

Domain Rule

Check Constraint

QuantitySold

Must be positive

```
Constraint CK_QuantitySold
     Check (QuantitySold > 0)
```

DateReceived

Must be >= the DateOrdered

```
Constraint CK_DateReceived
     Check (DateReceived >= DateOrdered)
```

CourseMark

Must be >= 0 and <= 100

```
Constraint CK_CourseMark
     Check (CourseMark Between 0 and 100)
```

or

```
Constraint CK_CourseMark
     Check (CourseMark >= 0 and CourseMark <= 100)
```

PostalCode

Must follow the pattern A9A 9A9

```
Constraint CK_PostalCode
    Check (PostalCode Like '[A-Z][0-9][A-Z] [0-9][A-Z][0-9]')
```

The expressions used in the check constraint are similar to expressions you have used in other programming languages. The Like operator may be new so an explanation of Like follows.

The Like operator lets you perform pattern matching on character or datetime data.

Syntax:

```
ColumnName Like 'pattern'
```

Example:

To identify all the values of LastName beginning with "A"

```
LastName Like 'A%'
```

The percent sign is a wildcard character that means any string of zero or more characters. The pattern indicates that the first character of the LastName must be the letter A and any number of characters can follow the letter A.

The following wildcard characters can be used:

WildCard

Meaning

%

Any string of zero or more characters

_ (the underscore)

Any single character

[]

Any single character within the specified range ([a-z]) or set ([adrz]) of characters

[^]

Any single character not within the specified range ([^a-z]) or set ([^adrz]) of characters

Examples:

Expression

Tests for

Like 'A%'

First character must be A followed by any number of characters.

Like '5[%]'

First character must be 5; second character must be %. Data must be 2 characters in length.

Like '[0-9]'

Must be a number. Data must be 1 character in length.

Like '[A-Z][0-9][A-Z] [0-9][A-Z][0-9]'

Pattern for a Canadian postal code. Data must be 7 characters in length.

Like 'JAN%2000%'

Month must be January; Year must be 2000

All characters in the pattern are significant when the comparison is made. If the expression is:

```
Word Like 'ABC '
```

(a pattern of abc followed by one blank space) and the value of WORD is "ABC" (no blank space following C) the expression tests false.

If the expression of the check constraint refers to one column in a table the constraint should be defined as part of the column definition. If the expression refers to two or more columns in the table the constraint should be defined as a table level constraint.

For example, given the following ERD, we can code check constraints in the Create Table statements.

ERD

Check Constraints - Column Level and Table Level

```
Create Table Supplier
(
    SupplierId        int identity (1, 1)   not null
        Constraint PK_Supplier Primary Key clustered,
    Name            varchar(100)            not null,
    Phone            char(14)               not null
        Constraint CK_Phone Check
            (Phone Like 
             '([0-9][0-9][0-9]) [0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]')
)
Create Table PurchaseOrder
(
    OrderNumber     int identity (1,1)      not null
        Constraint PK_PurchaseOrder Primary Key clustered,
    OrderDate       smalldatetime           not null,
    DateReceived    smalldatetime           not null,
    SupplierId      int                     not null
        Constraint FK_PurchaseOrderToSupplier
            references Supplier (SupplierId),
    SubTotal        money                   not null
        Constraint CK_SubTotalMustBePositive
            Check (Subtotal > 0),
    GST             money                   not null
        Constraint CK_GSTMustBePositive
            Check (GST > 0),
    Total as Subtotal + GST,
    -- Table Level Check Constraint
    Constraint CK_DateReceivedMustBeOnOrAfterOrderDate
        Check (DateReceived >= OrderDate)
)
```

Note that the check constraint for DateReceived is defined as a table level constraint while all other check constraints are defined at the column level.

To test a check constraint:

- Use SP_Help to list the definition of the table. This ensures the constraint definition is in place and is correct.
- Add a row to the table using data that violates the constraint. You should receive an error message and the row should not be added to the table.

## Exercise

The company does not allow overtime and all employees work 40 hours per week. Define a check constraint to reflect this policy.