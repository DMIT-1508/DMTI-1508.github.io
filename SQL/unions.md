# Unions

-   Concepts of Unions
-   Simple examples
-   Practice
-   Practice Solution

- - -

## UNION

The union operation lets you combine the data retrieved by multiple select statements into a single result table

SELECT  . . .
UNION \[ALL\]
SELECT  . . .

UNION Syntax

Let's write a query to return all the student names and combine it (UNION) with all the staff names.

\[\[code quote\]\]

This results in 25 records being returned. There are 16 students and 10 staff. Why are we missing one? UNION omits duplicates unless you us UNION ALL. You can UNION as many queries together as you need to.

There are some rules to follow however:

-   All the queries being combined with UNION must return the same number of columns
    
    \[\[code quote\]\]
    
    All queries combined using a UNION, INTERSECT or EXCEPT operator must have an equal number of expressions in their target lists.
    
-   The columns being combined must share similar datatypes
    
    \[\[code quote\]\]
    
    Conversion failed when converting character string to smalldatetime data type.
    
-   Ordering the results must be done after the last query
    
    \[\[code quote\]\]
    
    WORKS!
    
-   Column names are defined in the first query
    
    \[\[code quote\]\]
    
    WORKS!