# String Functions

-   Overview of String functions in SQL
-   Simple examples
-   Practice
-   Practice Solution

- - -

## STRING FUNCTIONS

There are many string functions that will allow you to work with parts of strings to define search criteria and results.

LEN (column | expression)

\[\[code quote\]\]

Returns the length of each FirstName and the FirstName of each Student.

\[\[code quote\]\]

Returns all the First Names that are 3 characters long.

LEFT (column |expression, length)

\[\[code quote\]\]

Returns the first 3 characters from the FirstName of each student.

RIGHT (column |expression, length)

\[\[code quote\]\]

Returns the last 3 characters from the FirstName of each student.

SUBSTRING (column | expression, start, length)

\[\[code quote\]\]

In each courseID returns 3 characters starting at the 5th character.

REVERSE (column | expression)

\[\[code quote\]\]

Returns the Student Firstnames in reverse.

UPPER (column | expression) *and* LOWER (column | expression)

\[\[code quote\]\]

Returns the names in either uppercase or lowercase.

LTRIM (column | expression) *and* RTRIM (column | expression)

\[\[code quote\]\]

Removes the leading (LTRIM) or trailing (RTRIM) spaces from the column data or expression. To remove leading and trailing spaces you must nest one function in another.