# Primary Key Constraint

When using a normalized database design, all tables must have a primary key constraint. Any column that acts as a primary key must be defined as a not null column. The DBMS will ensure that all rows in the table have a unique value for primary key columns.

When a primary key constraint is defined SQL Server will automatically create a clustered index for the column(s) acting as the primary key. An index is an object, which is stored in the database. Functionally, an index is similar to the index found at the back of a book. The index in a book lets you find a specific topic in the book quickly. An index object contains information that SQL Server uses to quickly find a specific row in the table. Indexes can speed up the retrieval of data from the database. However, indexes can worsen the performance of programs that insert/update/delete data in the database. If you insert a row into a table that has three indexes associated with it, SQL Server has to add four rows to the database: one to the target table and one to each of the indexes. We will discuss indexes again in a later lesson.

Syntax for Primary Key Constraint

```
[CONSTRAINT	constraint name ]
    PRIMARY KEY [ CLUSTERED | NONCLUSTERED ]
    ( col_name [ , col_name2 [ . . . col_name16 ] ]  )

```

This example demonstrates a column level primary key constraint definition.

Primary Key Example (column level)

To define the StudentId column as a primary key in the Student table:

```
CREATE TABLE Student
(
    StudentId 	char(9)	not null
        Constraint PK_Student primary key clustered,
    LastName	varchar(20)	not null,
    FirstName	varchar(15)	not null,
)
```

A table level primary key constraint is used when the table has a composite key (multiple columns acting as the primary key).

Primary Key Example (table level)

To define the StudentId and CourseId columns as the primary key for the Marks table:

```
CREATE TABLE Marks
(
	StudentId	char(9)	    not null,
	CourseId	char(6)	    not null,
	Mark		smallint	    null,
    -- Table level constraint...
	Constraint	PK_Marks primary key clustered
        (StudentId, CourseId)
)
```

## Primay Key Exercise

Modify the script that defines the Employee, Project and EmployeeOnProject tables to include the necessary primary key constraint definitions.

ERD

Use the sp_help procedure to retrieve a description of the tables from the database. If you display the output in grid it is easier to view. The information on indexes for a table is displayed in the 6th grid. The information on constraints is displayed in the 7th grid.

Save this script file as it will be used again for exercises in future lessons.