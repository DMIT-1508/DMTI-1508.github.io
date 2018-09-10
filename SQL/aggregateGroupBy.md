# Aggregates and Non-Aggregates

-   Mixing Aggregates and Non-Aggregates (Group-By)
-   Simple examples
-   Practice
-   Practice Solution

- - -

## GROUP BY

The GROUP BY clause is used in conjunction with aggregate functions to provide subtotal calculations of the aggregate function. We could easily return the average Mark from the grade table. What if we wanted the average Mark for each Course? For each student? For each course for each student? To do this we would use GROUP BY.

\[\[code quote\]\]

Returns the average of all the marks in the Registration table.

\[\[code quote\]\]

Returns the average mark for each CourseID (GROUP BY CourseID) in the Registration Table. Another way to think of the syntax GROUP BY is the 'for each'.

It is important to note that you cannot combine an aggregate column with a non-aggregate column(s) unless you group by all the non-aggregate columns in your query.

\[\[code quote\]\]

Column 'Registration.CourseId' is invalid in the select list because it is not contained in either an aggregate function or the GROUP BY clause.

Remember that an aggregate returns one calculated value. How can it return the average mark for the Reigstration table (one value) as well as each course ID that is in the Registration table (many values). It simply does not make sense and cannot be done. So the error you see above reminds you that you must group by all the columns you are using in your query that are not part of the aggregate function. In this case, CourseID.

## HAVING

Having is like the where clause. Except, it applies its criteria after group by has grouped its aggregate data. With the GROUP BY clause we selected the average mark of CourseID. What if we only wanted to return the CourseID's and average mark for courses that have averages that are greater than 80?

\[\[code quote\]\]

Incorrect syntax near the keyword 'where'.

Fails because the where clause must be before the Group By Clause. Remember, a query does not need to use all the clauses but they must be in the right order!

\[\[code quote\]\]

An aggregate may not appear in the WHERE clause unless it is in a subquery contained in a HAVING clause or a select list, and the column being aggregated is an outer reference.

Fails because and aggregate cannot be in a where clause. It also does not really make sense. It is not possible to return only the CourseID's that have average over 80 until all the Course averages have been calculated. And that is done by the Group By Clause. So, the Group By Clause must execute before the criteria is applied to return only the CourseID's with averages over 80.

\[\[code quote\]\]

Works!The Select with the group by selects the averages for each course and then the having clause returns only the ones whose average was over 80.

What if we only wanted to return the CourseID's that have averages over 80 and did not want the actual average returned. Simply do not select the AVG(Mark). Remember, what we select (return to the user) does not have to match columns used in the where or having clauses.

\[\[code quote\]\]

Works!

Having is used with aggregate functions only. It is used to apply where clause functionality AFTER the aggregate function and group by has occured. Only use having in this situation. For queries without a group by clause you should use the WHERE clause.