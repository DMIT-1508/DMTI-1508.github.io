# Foreign Key Constraint

The foreign key constraint defines a relationship between rows (usually in different tables). In addition, the foreign key constraint defines a parent-child relationship between the tables involved. The table with the foreign key acts as the child table in the relationship. The table with the associated primary key acts as the parent table in the relationship. Consider the following tables for a chain of stores that operates internationally.

ERD

CountryId and StoreId are unique. RegionId is unique within Country (the first region in any country is region 1).

In the RegionInCountry table (child) the foreign key, CountryId, relates rows to the parent table, Country. A column level foreign key constraint, for the CountryId column in the RegionInCountry table, implements this relationship.

In the StoreInRegion table (child) the foreign key, CountryId and RegionId, relates rows to the parent table, RegionInCountry. A table level foreign key constraint, CountryId and RegionId columns, in the StoreInRegion table, implements this relationship.

The foreign key constraint defines referential integrity between two tables. Operations that affect the tables and or the data stored within the tables must comply with referential integrity. This affects:

-   Dropping tables.
-   Creating tables.
-   Inserting/Updating/Deleting rows in tables.

The bottom line for referential integrity is that a child row/table cannot exist without its associated parent row/table. Therefore:

-   You must Drop a child table BEFORE you Drop the associated parent table.
-   You must Create a parent table BEFORE you Create the associated child table.
-   The value of a column acting as a foreign key must be:
    -   A value that exists as a primary key in the associated parent table, or
    -   NULL

If we were to create a script file to drop the existing definition of the Store tables and recreate them we would sequence the commands in the following order:

```
Drop Table StoreInRegion
	Drop Table RegionInCountry
	Drop Table Country
	Create Table Country ( . . . 
	Create Table RegionInCountry( . . . 
	Create Table StoreInRegion( . . .
```

A column acting as a foreign key can be defined as a NULL or as a NOT NULL column and must have the same datatype as its associated primary key. The DBMS will NOT automatically create an index for a foreign key.

Foreign Key Constraint Syntax

```
[CONSTRAINT constraint name ]
    [ FOREIGN KEY ( col_name [, . . . col_name16 ] ]
    REFERENCES table_name ( ref_col [, . . . ref_col16] )
```

col_name

identifies the column(s) acting as the foreign key

table_name

identifies the parent table

ref_col

identifies the primary key in the associated parent table

This demonstrates the use of a column level foreign key constraint. Note that by itself, the CountryId is acting as a foreign key while at the same time it is part of a concatenated primary key.

Foreign Key Example (column level constraint)

To define the foreign key constraint for the RegionInCountry table:

```
CREATE TABLE RegionInCountry
(
    CountryId	smallint		not null
        Constraint FK_RegionInCountryToCountry
            references Country (CountryId),
    RegionId	smallint		not null,
    Name		varchar(100) 	not null,
    Constraint	PK_CountryId_RegionId 
    Primary key clustered (CountryId, RegionId)
)
```

This demonstrates the use of a table level foreign key constraint. The foreign key constraint applies to two columns, hence the use of the table level constraint.

Foreign Key Example (table level constraint)

To define the foreign key constraint for the Store In Region table:

```
CREATE TABLE StoreInRegion
(
    CountryId	smallint		not null,
    RegionId	smallint		not null,
    StoreId	smallint		not null,
    Phone	varchar(100) 	not null,
    Constraint	PK_CountryId_RegionId_StoreId 
        Primary key clustered (CountryId, RegionId, StoreId),
    Constraint	 FK_StoreInRegionToRegionInCountry 
        Foreign Key (CountryId, RegionId)
            References RegionInCountry (CountryId, RegionId)
)
```

## Foreign Key Exercise

Modify the script that defines the Employee, Project and EmployeeOnProject tables to include the necessary foreign key constraint definitions.

Create the Department table as a stand-alone table for now (no relationships to other tables). Use the identity property for the Department Number.

ERD

Use Sp\_Help to confirm that the tables were created successfully. The constraint information is displayed in the 7th grid (when viewing sp\_help output via display in grid).