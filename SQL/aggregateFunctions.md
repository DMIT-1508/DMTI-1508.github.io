# Aggregate Functions

-   Overview of aggregates
-   Simple aggregate examples
-   Practice
-   Practice Solution

- - -

## AGGREGATE FUNCTIONS

Aggregate functions calculate a single value using the data from many records. If you have used function in Excel such as SUM, AVERAGE, COUNT, etc�. then you have used aggregate functions.

The basic syntax for all the aggregate functions is the same:

aggregate function name(\[ all | distinct \] expression)

-   All and distinct are optional with All being the default if none is used.
-   expression can be any appropriate column name

AVG

The AVG function returns the average of a column of values. It can only be used on numeric columns and records containing null are ignored and not included in the average calculation.

\[\[code quote\]\]

Returns the average mark from the registration table for Course DMIT152. Note that aggregate columns are not columns in the database and therefore do not have a name. Remember, all column must be given a name if they do not have one.

SUM

The SUM function returns the sum of a column of values. It can only be used on numeric columns and records containing null are ignored and not included in the sum calculation.

\[\[code quote\]\]

Returns the Sum of all the payments for studentID 200495500.

MIN

The MIN function returns the minimum value from a column of values. Can be used with columns that have a a numeric, date or character datatype. Records with a null value are ignored.

\[\[code quote\]\]

Returns the lowest Mark in DMIT152.

MAX

The MAX function returns the maximum value from a column of values. Can be used with columns that have a numeric, date or character datatype. Records with a null value are ignored.

\[\[code quote\]\]

Returns the highest Mark in DMIT152.

COUNT

The COUNT function returns the number of non-null values from a column of values OR returns the number of records that match the where criteria.

\[\[code quote\]\]

Returns the number of staff that have been released (have a value in the DateReleased column).

\[\[code quote\]\]

Returns the number if records returns by this query (number of staff RECORDS in the staff table).

NOTE: The * operator is an overloaded operator. This means that it has more than one meaning depending on how it is used. In a column list in a query it means all columns (which should be avoided unless necessary). In the count function it means 'records'.

If you are simply counting records use count(*). Do not use a column name unless you must only count the number of records where a particular column is not null.

## ALL AND DISTINCT

ALL and DISTINCT can be in a query or with a COUNT function. ALL is the default and usually not explicitly declared.

\[\[code quote\]\]

Returns all the Student First Names and their Province. This returns 16 records because there are 16 students.

\[\[code quote\]\]

Returns all the unique (Distinct) student First Names and their Province. This returns only 15 records because there are 2 students with a First Name of Joe from Alberta.

When DISTINCT is used with the COUNT function it would count only the unique(Distinct) values.