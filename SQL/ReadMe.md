# Introduction to SQL Queries

Queries are used to retrieve data from the database. They can be very flexible in what columns they select, what rows they select, and what aggregate calculations they return. Being able to write accurate and efficient queries is a critical skill when working with databases.

Queries are written with the `SELECT` statement. The `SELECT` syntax contains six clauses. In order, they are:

The `SELECT` clause
  ~ A comma-separated list of column data to generate.

The `FROM` clause
  ~ Identifies the table(s) used as the source of the data to generate/retreive.

The `WHERE` clause
  ~ Filtering to be done on the rows of data.

The `GROUP BY` clause
    ~ A list of columns to group the data by for aggregation operations.

The `HAVING` clause
  ~ Filtering to be done on aggregate values.

The `ORDER BY` clause
  ~ Sorting of the final result set.

The full syntax available for a select statement can be expressed as:

```sql
SELECT [ALL | DISTINCT] column_list
    [INTO new_table_name]
FROM table_name
    [INNER, LEFT OUTER, RIGHT OUTER JOIN]
WHERE clause
GROUP BY clause
HAVING clause
ORDER BY clause
```

If it looks complex don't worry. All the "clauses" listed don't need to be used when creating a query. Only the `SELECT` clause is required; the others are all optional. However, what clauses you do use *MUST* be in the order shown above (for example: `HAVING` MUST be after `GROUP BY` and not vice versa). In addition, there is other functionality available in SQL beyond the syntax above, such as the ability to use string, date and aggregate functions in your queries. We will start by looking at simple queries and then adding in the additional clauses after that.

All the examples demonstrated can be executed in the IQSchool database so you can see the results.

![IQSchool ERD](./IQSchool-ERD.png)

----

## Simple SQL Queries

At the end of this topic, you should be able to:

- List the six clauses of the SELECT statement in SQL
- Identify the purpose of SELECT statements
- Identify the general order in which the clauses of a SELECT statement are executed in SQL Server
- Construct queries to perform simple selects on database tables

----

## Database Functions

At the end of this topic, you should be able to:

- List at least five SQL functions for working with strings
- List at least five SQL functions for working with dates
- List at least five SQL functions for working with aggregates
- Identify the general order in which the clauses of a SELECT statement are executed in SQL Server
- Construct queries to perform simple selects on database tables

----

## Multi-table Queries

At the end of this topic, you should be able to:

- Explain the difference between inner and outer joins as it affects the data retrieved in a query
- Construct queries to perform simple selects on related database tables using INNER JOINs
- Create queries involving outer joins
- Create queries involving subqueries
- Create queries involving unions
