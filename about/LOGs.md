---
title: LOGs
---
# Learning Outcome Guides (*LOGs*)

## Introduction to Databases

At the end of this topic, you should be able to:

- Define the term "Database" as it relates to this course.
- Identify the two central components of a database.
- Define the acronyms DBMS and RDBMS
- Describe the purpose of the major components of a DBMS
- List the advantages of using a database technology
- List the steps of the database design process

## Entity Relationship Diagrams

At the end of this topic, you should be able to:

- Define the term ERD.
- Identify the parts of an ERD.
- Define the terms Entity, Attribute and Relationships as they relate to databases.
- Describe the difference between atomic and composite attributes
- Describe the difference between stored and derived attributes
- Explain the purpose of a primary key in a database table
- Define the term technical key
- Define the term concatenated key (also known as a composite key)
- Define the term Foreign Key
- Define the term cardinality.
- List the three major types of cardinality.
- Identify primary keys, foreign keys, and indexes on an ERD.
- Identify the cardinality indicated by the relationship lines on an ERD.
- Describe how to translate an Entity Relationship Diagram into English using a template pattern.

## Normalization

At the end of this topic, you should be able to:

- List the reasons why we go through the process of "normalizing" metadata
- Identify the "normal forms" up to and including 3NF
- Describe the "normal forms" up to and including 3NF
- Analyze source documents to distinguish between meta-data and data
- Analyze a form to identify metadata (0NF) and create a list of the metadata
- Remove repeating groups, if any, by isolating them into their own distinct entity (1NF) (while maintaining relationships)
- Check for partial dependencies, if any (2NF)
- Check for transitive dependencies, if any (3NF)
- List key questions to ask yourself when checking whether you've correctly processed meta-data through 1NF to 3NF.

## Generate ERDs from 3NF

At the end of this topic, you should be able to:

- Draw an ERD diagram to represent your final set of 3NF meta-data
- Translate your ERD diagram into English so that you can verify your logical analysis of the database with your client
- Merge ERD diagrams from various views/forms into a single, cohesive logical ERD
- Identify when to introduce technical keys into your normalized entities
- Use Visio to draw ERD diagrams
- Identify good practices for laying out entities in an ERD

## Introduction to SQL

At the end of this topic, you should be able to:

- Define the acronym "SQL"
- List the commonly used data types for columns in SQL (as used in this course)
- Group the SQL data types into the three general kinds of primitive information
- List the three general forms primitive information can take
- Describe what is meant by the phrase "Primitive Data Types"

## Writing DDL Statements in SQL

At the end of this topic, you should be able to:

- Describe the purpose of the DDL statements supported in the SQL programming language
- Use SQL Server Management Studio to create and save SQL scripts
- Write the SQL to CREATE simple tables
- Write the SQL to Drop tables
- Run (Execute) SQL statements in SQL Server Management Studio to create and drop tables
- Run (Execute) calls to sp_help to view information on objects such as database tables
- Describe and give examples of Column Constraints
- Describe and give examples of Table Constraints
- Write the SQL to specify Column Constraints for columns which function as Primary Keys and Foreign Keys
- Write the SQL to specify Table Constraints for Composite Primary Keys
- Describe the purpose of the Identity constraint as it relates to Primary Keys
- Write the SQL to specify an Identity constraint on a column
- Explain the importance of the order in which we create or drop tables when foreign key relationships are involved

## Using Constraints in SQL

At the end of this topic, you should be able to:

- Explain the meaning/purpose of the SQL value of NULL
- Explain the importance of identifying whether a column should be NULL or NOT NULL
- Explain what is meant by a "default" column value
- Compare and contrast literal values in SQL
- Write the SQL to specify Column Constraints for Default values on a column
- Explain the purpose of CHECK constraints
- Write the SQL to specify Check Constraints for a column
- List the kinds of comparisons that are possible for Check constraints
- Identify when to perform Tables Constraints and when to perform Column Constraints
- Write the SQL to give explicit constraint names for Primary Key, Foreign Key, Default, and Check constraints
- Use commonly accepted standards when naming Constraints
- Write the SQL to specify Calculated (derived) columns, based on values from other columns
- Write the SQL to CREATE complex tables with Identity columns, primary and foreign keys, defaults, and calculated columns

## Modifying Existing Databases

At the end of this topic, you should be able to:

- Identify some common reasons to modify an existing database
- Explain why an ALTER statement is the preferred way to modify the structure and/or constraints on existing tables, rather than performing DROP/CREATE statements.
- Write the SQL ALTER TABLE statements to add or drop columns on an existing table.
- Write the SQL ALTER TABLE statements to add or drop constraints on an existing table.
- Describe the purpose of indexes on SQL tables.
- Describe the difference between Clustered and Non-Clustered indexes.
- Write the SQL to create and drop indexes.
- Describe the purpose of UNIQUE constraints in SQL.
- Write the SQL to create UNIQUE constraints.
- Identify the common functions in SQL Server for working with Date and Time values.
- Organize your SQL Scripts for a clean, error-free, execution

## Simple SQL Queries

At the end of this topic, you should be able to:

- List the six clauses of the SELECT statement in SQL
- Identify the purpose of SELECT statements
- Identify the general order in which the clauses of a SELECT statement are executed in SQL Server
- Construct queries to perform simple selects on database tables

## Database Functions

At the end of this topic, you should be able to:

- List at least five SQL functions for working with strings
- List at least five SQL functions for working with dates
- List at least five SQL functions for performing aggregation

## Multi-table Queries

At the end of this topic, you should be able to:

- Explain the difference between inner and outer joins as it affects the data retrieved in a query
- Construct queries to perform simple selects on related database tables using INNER JOINs
- Create queries involving outer joins
- Create queries involving subqueries
- Create queries involving unions

## Writing DML Statements in SQL

At the end of this topic, you should be able to:

- List the SQL statements that perform DML operations
- Write the SQL to insert discrete values into a table as a single row
- Write the SQL to insert multiple rows into a table
- Write the SQL to update one or more rows in a table
- Write the SQL to delete one or more rows from a table
- Identitfy when to include a WHERE clause on your UPDATE and DELETE statements

## Creating Stored Procedures in SQL

At the end of this topic, you should be able to:

- Describe what stored procedures are and how they are created
- Describe how stored procedures are used in SQL Server Management Studio
- Describe how stored procedures are used in external applications (such as web applications)
- Create stored procedures to perform simple and complex queries
- Create stored procedures that accept parameters
- Create stored procedures to perform DML tasks
- Identify when stored procedures should be used

## Stored Procedures and Database-Level Transactions

At the end of this topic, you should be able to:

- Describe the term "Database-Level Transaction"
- Explain when transactions are necessary in stored procedures
- Explain what a COMMIT and ROLLBACK are in transactional processing
- Identify some good principles in creating transactional stored procedures
- Create stored procedures that perform transactions

## Creating Views in SQL

At the end of this topic, you should be able to:

- Describe what a database View is and how they are created
- Distinguish between a View and a Table
- Create database Views as part of denormalizing data
- Use Views within SQL queries
- Identify when Views can and cannot be used within DML statements

## Writing Triggers in SQL

At the end of this topic, you should be able to:

- Describe what triggers are in databases and how they are created
- Describe how triggers are invoked (executed)
- Write simple table-based triggers
