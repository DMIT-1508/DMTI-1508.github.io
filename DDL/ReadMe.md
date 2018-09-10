# Data Definition Language - DDL in SQL

## Basic Table Definition

(See the practice Exercise at the end of this document)

Most commercial DBMS use the relational model. Under the relational model, all data stored in the database is kept in tables. A table is a two-dimensional array and consists of rows and columns. Each column records one attribute while each row records the values for all attributes that describe one instance of data. For example, we could use a table to record information about Invoices. If we needed to record the Invoice Number, Invoice Date, the Number of the Customer whom the invoice is for and the Total Amount Owing for the Invoice we would need four columns in the table. Each row in the table would record the information for one specific invoice.

## Constraints

Constraints are used to:

-   Define the primary key for the table.
    -   Implemented via the definition of the primary key constraint.
-   Define relationships between tables.
    -   Implemented via the definition of the foreign key constraint.
-   Define a default value for a column. This default value can be used when new rows are inserted (added) into a table.
    -   Implemented via the definition of the default constraint.
-   Define a domain of valid values that a column can assume.
    -   Implemented via the definition of the check constraint.
-   Ensure that all values in a column are unique.

Constraints can be defined:

-   When the table is initially created, as part of the CREATE TABLE statement or,
-   For an existing table, via the ALTER TABLE statement.

We use the CONSTRAINT keyword to define a constraint. A single column can have multiple constraints, each with its own constraint keyword definition. Each constraint must have a unique name. The constraint name is used in SQL messages, so use descriptive constraint names. We will use a prefix, as part of the constraint name, to identify the type of constraint:

Prefix

Constraint Type

PK

Primary key

FK

Foreign key

CK

Check

DF

Default

UX

Unique

A constraint can be defined as a column level constraint (applies to one column only) or as a table level constraint (applies to many columns in the table). Constraints are not enforced in the same batch that they are defined in so DO NOT insert, update or delete data from a table in the same batch that defines a constraint.