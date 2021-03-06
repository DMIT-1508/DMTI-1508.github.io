# Simple Queries

A simple query can select data from one table. The query can select many rows, calculated data, or even hard coded data when needed. Calculated data be mathematical calculations (`subtotal * 1.05`) or can be calculated string data (`firstname + ' ' + lastname`). It can even be a combination of them both (`'total: ' + subtotal * 1.05`). While formatting what you selecting in your query is not a common practice (formatting is best left to the application requesting the data) is can be useful sometimes.

[[code quote]]

As you can see this will select the students firstname, lastname and city for all the student records. The From clause indicates the table the columns are in that you are selecting. Queries like this are very simple to create and are quite common.

To select the students name as one column instead of separate first name and last name columns we can concatenate them together as follows.

[[code quote]]

In SQL the + operator will add strings together as well as numbers. Just remember to add (concatenate) a space between the names otherwise you will get only one long name with firstname and lastname combined together.

There is another difference with the query that returns the names separately than the one that returned them as one column. The column in the second query does not have a name. This is a problem. We should give all columns a name. Calculated columns do not have a name because they are calculated from many different columns and values. So, we must give the column a name. There are several different ways to do this.

[[code quote]]

OR

[[code quote]]

In this course you will be expected to ALWAYS have column names.

To select all the student information for all the students and creating one custom column for student name could look like this:

[[code quote]]

Since we are selecting all the columns in the student table we could use the '*' operator. The asterisk represents all columns when used in the column list of a query. So the same query could look like this:

[[code quote]]

However, there are some possible problems by taking the shortcut and not listing all the column names explicitly.

By looking at the second query can you tell what columns are being returned? It is much easier to maintain the query if all the columns are listed.

It is important to understand that the data being returned will be displayed on a user friendly screen to most users. This could include a desktop application, a web page, or a mobile device. Consider this scenario. 10 years ago the query was written with an asterisk to return all the student information to be displayed on the user's desktop computer. The program was written to display 10 columns of data. Last week, someone added another 6 columns of confidential data to the table but those are not supposed to be displayed to the user who is using the original program. Depending on how the program was written it may have these results:

- It may display all the columns (including the new ones which may contain confidential information) when it only should have displayed the original 10 columns that existed when the program was written and the query created.
- It may crash the users program because the program was created to display 10 columns of data and the additional columns now being returned cause an error.
- The program behaves normally but there is 6 columns of data being returned to the program that it does not use. An inefficient situation.

While it can be argued that by using the asterisk instead of the column list the query will always return ALL the columns from the table. Even if the table has columns added at a later date and therefore always keeping the query current. This is something to consider but those situations are fewer.

In this course the expectation will be that you will not use the asterisk in the column list to select all columns. List the columns explicitly.

## Where

So far we have only selected data that includes ALL the records on the table. While this is not uncommon it is likely more common that you will not only want to select the columns you want but also only the records you want. The WHERE clause allows you to limit the records that are returned based on criteria you provide.

[[code quote]]

This query would return all the student information for the student with studentid 198933540. The where clause can contain many different expressions to identify the records the query should return.

## Search Criteria Operators and Conditions

Sometimes the conditions that must be met in the data for certain records to be returned involved many expressions that may be combined using AND/OR operators or several other ones.

### Operators

Relational Operators

Relational operators perform comparisons that produce boolean results of true or false.

- = The equals sign is used when looking for an exact match
- <> OR != The not equal sign is used when looking for something that does not match your criteria
- Other common operators include <, <=, >, >=

Logical Operators

Logical operators work on boolean values from relational operations, keyword operations, and any boolean values.

- **AND** Both expressions must be true for the record to be returned
- **OR** If either of the expressions are true then the record is returned
- **NOT** Converts a true value to a false or a false value to a true.

Keyword Operators

There are a number of helpful keyword operators available in SQL. They include:

**`BETWEEN`**
  ~ Returns all records where the search criteria is between two values (inclusive). Can use `NOT BETWEEN` to return records where the search criteria is outside the range.
**`IN`**
  ~ Allows you to list a number of valid search values for a column. You can always code the same query with a compound expression with multiple OR conditions but that can get quite large with many values. You may also use `NOT` to return everything that is `NOT IN` the list.
**`LIKE`**
  ~ The `Like` operator is used when you use wildcards in your search or perform pattern matching. Wildcards are characters that when used with the Like operator allows the wildcards to represent any character or range of characters.
    - For example, If we wanted to return all the students names whose names started with the letter 'D' we would use the `%` wildcard character. The `%` wildcard means any character and any number of characters.
    - It is important to use the `LIKE` operator when using wildcards. The `%` would be interpreted as a literal `'%'` if we used `=` instead of `LIKE`.
    - The `_` (underscore) is a single character wildcard. This would be used when you are looking for any one character in your search criteria. If we wanted the students names whose First Name was 3 characters long and started with `'JA'` we could use this query.
    - If we had used a `%` instead of `_` we would also return Students whose First Name was longer than 3 characters.
    - They can also be used in combination with each other. Let's return all the Student Names that start with 'D', the third character is 'n' and end in 's'.
    - You can also perform a search on a range of values using `LIKE`. A query to return all the student names that start with A through D could look like this.
    - The `[A-D]` means that the first character must be in that range and can be followed by any number of characters after that (`%`).
    - You can also use a ranger of numbers for a particular position. Let's select all the student names who have a Postal Code that starts with `[U-Z]` and ends with `[0-3]`.

## ORDER BY

The ORDER BY clause is used to return the results in a certain order. The results can be sorted by one column or more than one column in either descending (`DESC`) or ascending (`ASC`) order. When no order is specified, `ASC` is the default.

There are numerous ways to use ORDER BY.

[[code quote]]

Returns the Student Names in Descending order by last name (reverse alphabetical).

[[code quote]]

Returns the Student Names in Descending order by last name using the alias (name) we gave to the LastName column.

[[code quote]]

Returns the Student Names in Ascending order of FirstName and when for duplicate first names sorts those by Descending order of LastName.

`ASC` is the default and is commonly accepted so it is not uncommon to see the Order By clause used for Ascending ordering without `ASC`. However you must use `DESC` if you want the results sorted in Descending order.
