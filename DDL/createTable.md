# Basic Table Definition

(See the practice Exercise at the end of this document)

Most commercial DBMS use the relational model. Under the relational model, all data stored in the database is kept in tables. A table is a two-dimensional array and consists of rows and columns. Each column records one attribute while each row records the values for all attributes that describe one instance of data. For example, we could use a table to record information about Invoices. If we needed to record the Invoice Number, Invoice Date, the Number of the Customer whom the invoice is for and the Total Amount Owing for the Invoice we would need four columns in the table. Each row in the table would record the information for one specific invoice.

{ "Name" : "Invoices", "Columns" : \["Invoice Number", "Invoice Date", "Customer Number", "Total"\], "Rows" : \[ \[100, "Jan 10, 2000", 7, 100.00\], \[101, "Jan 11, 2000", 20, 75.00\], \[102, "Jan 12, 2000", 7, 75.00\] \] }

The CREATE TABLE statement defines a table object in the database. The Create Table statement specifies the name of the table and information about each column in the table. This includes:

-   The name of the column
-   The data type of the column
-   Whether null is an acceptable value for the column
-   Constraints that must hold true for the column

The basic syntax for the Create Table statement is shown below:

```
CREATE TABLE  [database_name. [owner]. table name (
				
{column name data type
[IDENTITY [ (seed, increment)] | 
[NULL | NOT NULL] 
[<column constraints>] } [, . . . n]
[<table constraints>]	  )
```

To begin with, we will look at a basic table definition that does not include the definition of constraints (column level or table level). Constraints will be dealt with later.

Table names and column names should be descriptive. Limit the use of abbreviations in table or column names. The bottom line is that a user of the database (e.g. a programmer) should be clear about what data is stored in a table or column based on its name. Some abbreviations are commonplace within industry (e.g. Id for Identification) and are acceptable. Experience will guide you as to what is an acceptable name. Many organizations have standards that define what is an acceptable name. If standards are in place they should be followed. If a name consists of multiple words capitalize the first letter in each word. Do not use separators between the words of a name.

e.g. the proper name for a column that records the date of the invoice would be: `InvoiceDate`

The name of an associative table (implements an associative entity) could include the names of the parent table(s). For example:

ERD HERE

ItemOnOrder is an associate table that relates rows between the Orders table and the Items table. The name of the associate table incorporates the names of its parent tables.

The data type for the column follows the name of a column. Data types were described previously. There is no default data type. You must explicitly code the data type you want to use for each column.

The Identity property indicates that the SQL Server will generate the value to be stored in the column. If a column uses the Identity property it must use a numeric data type (usually an integer data type). The seed is the number given to the column for the first row in the table. The seed defaults to one. The amount that the value increases by for each subsequent row added to the table is the increment. The increment defaults to one.

Syntax: `columnname datatype identity(seed,increment)`

Example:

```
Create Table Orders (
    OrderNumber int identity(1,1),
    …
```

The Identity property is functionally equivalent to the AutoNumber data type in Microsoft Access. The Identity property is often used for a column that acts as a unique identifier for each row in the table. The Identity property could be used for the OrderNumber column in the Orders table or ItemNumber column in the Items table shown above. The Identity property would not be used in the OrderNumber column or the ItemNumber column in the ItemOnOrder table. **The identity property should never be used on a column that acts as a foreign key in a table.** A drawback of using the identity property is the possibility of gaps in the numbering sequence. A gap will occur if an error occurs when adding a new row (the number in the sequence is not reused) or if an existing row is deleted. For financial data many auditors find gaps in the numbering sequence unacceptable. If the nature of the application is such that gaps in the numbering sequence are unacceptable the identity property should not be used.

For each column you indicate whether the null value is acceptable for the column. The default is NOT NULL. When adding a new row to a table data **must** be supplied for all not null columns. This should be considered when deciding whether to make a column a NULL column or a NOT NULL column.

Derived (calculated) attributes can have their value calculated based on data stored in other columns/tables. As such you do not have to create a column in a table for a derived attribute. If you do not create a column for a derived attribute you save on disk space but must code instructions to calculate the value for the field in any program that needs the data.

ERD HERE

The Amount field in an ItemOnOrder table is a derived attribute. If we do not create the Amount column when we define the table we will save on disk space needed for the table, but we will have to code instruction(s) to calculate the Amount field (Quantity * Price) in any program that uses Amount. If we choose to create the Amount column in the ItemOnOrder table we need more disk space to store the table but the programs that use the Amount field are shorter (we no longer need to include instructions to calculate the value of the Amount field). The debate rages on as to whether you should create a column for a derived attribute in a table.

The basic create table statements, for the Order example, are shown below. At this point constraints are not defined. Constraints will be discussed later.

ERD HERE

```
Create Table Customers (
	CustomerNumber		int identity(1,1)	not null,
	LastName			varchar(100)	not null,
	FirstName			varchar(100)	not null,
	Phone			char(8)		null
)
Create Table Orders (
	OrderNumber		int identity(1,1)	not null,
	OrderDate			smalldatetime	not null,
	CustomerNumber		int			not null,
	Subtotal			money		not null,
	GST				money		not null,
	Total 	 			money		not null
)
Create Table Items (
	ItemNumber		int identity(1,1)	not null,
	Description			varchar(100)	not null,
	CurrentPrice		smallmoney	not null
)
Create Table ItemOnOrder (
	OrderNumber		int			not null,
	ItemNumber		int			not null,
	Quantity			smallint		not null,
	Price				smallmoney	not null,
	Amount 			money		not null
)
```

Once a table has been created you should verify that it was created properly (has the desired columns etc.) Use the system stored procedure (a program that is part of the SQL Server) named SP_HELP to list the definition of a table.

Use the `EXECUTE` statement to run a stored procedure.

Syntax: `EXEC procedurename [parameter1, [parameter2, … ]]`

To list the definition of a table we pass the name of the table as a parameter to SP_HELP. To list the definition of the Customers table:

```
Exec Sp_Help Customers
```

The output is shown below.

Screen shot of Query window with output

The DROP Table statement is used to delete a table from the database. Syntax: `DROP TABLE [[databasename.] owner.] tablename`

Example: To drop the Items table `Drop Table Items`

You cannot drop a table that is being referenced by a foreign key in another table. You must drop the child table (table with the foreign key). The parent table (table with the associated primary key) can then be dropped.

The DBMS will let you drop a table that still has data in it. Dropping a table deletes:

-   all data in the table
-   the definition of the table

Be sure you want delete a table before issuing the Drop Table statement.

To re-create a table definition you must drop the old table before you can re-create it with the new definition.

## Exercise

Given the following ERD, create a script file that will:

-   create the Employee, EmployeeOnProject and Project tables
-   use appropriate data types for all attributes
-   do not worry about defining primary or foreign keys at this stage
-   do not allow nulls in any columns
-   all EmployeeIds are 11 characters long
-   use the identity property for the ProjectNumber column in the Project table
-   do not use the identity property for the ProjectNumber column in the EmployeeOnProject table
-   list the table definitions using the SP_HELP system procedure

ERD

Save this script as it will be used again for other questions.