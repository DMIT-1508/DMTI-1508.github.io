# Default Constraint

The default constraint lets you define a value that is assigned to a column when the user does not specifically supply a value when a new row is added to the table (using the INSERT statement). A default constraint can be defined on any column except:

-   A column with the timestamp data type
-   A column with the identity property

The value of the default can be supplied via a constant or a function or it can be null. The default constraint name should use a prefix of DF (indicating this is a default constraint).

Default Constraint Syntax

```
[CONSTRAINT constraint name]
    DEFAULT  constant | function | null
```

Examples

Default Rule

Constraint Definition

Use the current date as the default for the DateReceived column

Constraint DF_DateReceived Default GetDate()

Use null as the default for the PostalCode column

Constraint DF_PostalCode Default Null

Use 5.90 as the default for the HourlyRate column

Constraint DF_HourlyRate Default 5.90

Note: GetDate() is a function, which returns the system date.

A column level definition is used to define a default constraint.

To set a default of the current date for the OrderDate column in the PurchaseOrder table of the following ERD, we use the GetDate() function to supply the system date as the default value.

ERD

Create Table with Default Constraint

```
Create Table PurchaseOrder
(
    OrderNumber     int     identity (1,1)  not null
        Constraint PK_PurchaseOrder Primary Key clustered,
    OrderDate       smalldatetime           not null
        Constraint DF_OrderDate Default GetDate(),
    DateReceived        smalldatetime       not null,
    SupplierId      int                     not null
        Constraint FK_PurchaseOrderToSupplier
            references Supplier (SupplierId),
    SubTotal        money                   not null
        Constraint CK_SubTotalMustBePositive Check (Subtotal > 0),
    GST             money                   not null
        Constraint CK_GSTMustBePositive Check (GST > 0),
    Total as Subtotal + GST,
    Constraint CK_DateReceivedMustBeOnOrAfterOrderDate
        Check (DateReceived >= OrderDate)
)
```

## Exercise

Establish 5.0 as the default number of hours per week that an employee will work on a project.