#### Simple SQL Queries

At the end of this topic, you should be able to:

-   List the six clauses of the SELECT statement in SQL
-   Identify the purpose of SELECT statements
-   Identify the general order in which the clauses of a SELECT statement are executed in SQL Server
-   Construct queries to perform simple selects on database tables

- - -

#### Database Functions

At the end of this topic, you should be able to:

-   List at least five SQL functions for working with strings
-   List at least five SQL functions for working with dates
-   List at least five SQL functions for working with aggregates
-   Identify the general order in which the clauses of a SELECT statement are executed in SQL Server
-   Construct queries to perform simple selects on database tables

- - -

#### Multi-table Queries

At the end of this topic, you should be able to:

-   Explain the difference between inner and outer joins as it affects the data retrieved in a query
-   Construct queries to perform simple selects on related database tables using INNER JOINs
-   Create queries involving outer joins
-   Create queries involving subqueries
-   Create queries involving unions

- - -

# Introduction to SQL Queries

Queries are used to retrieve data from the database. They can be very flexible in what columns they select, what rows they select, and what aggregate calculations they return. Being able to write accurate and efficient queries is a critical skill when working with databases.

Queries are written with the SELECT statement. The SELECT syntax contains six clauses. In order, they are:

SELECT clause

A comma-separated list of column data to generate.

FROM clause

Identifies the table(s) used as the source of the data to generate/retreive.

WHERE clause

Filtering to be done on the rows of data.

GROUP BY clause

A list of columns to group the data by for aggregation operations.

HAVING clause

Filtering to be done on aggregate values.

ORDER BY clause

Sorting of the final result set.

The full syntax available for a select statement is:

SELECT \[ALL | DISTINCT\] column_list
    INTO \[new\_table\_name\]
\[FROM table\_name \[, table\_name2 \[…, table_name16\]\]
    \[INNER, LEFT OUTER, RIGHT OUTER JOIN\]
\[WHERE clause\]
\[GROUP BY clause\]
\[HAVING clause\]
\[ORDER BY clause\]

Syntax structure of the SELECT statement

If it looks complex don't worry. All the “clauses” listed don't need to be used when creating a query. However, what you do use MUST be in the order shown above (HAVING MUST be after GROUP BY for example and not vice versa). In addition, there are other functionality beyond the syntax such as the ability to use string, date, and aggregate functions in your queries to retrieve and calculate date to be returned. We will start by looking at simple queries and then adding in the additional clauses after that.

All the examples can be executed in the IQSchool database so you can see the results.

![](./IQSchool-ERD.png)
