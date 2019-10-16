# Subqueries

- Subqueries Overview
- Subqueries vs. Joins (with examples)
- Subqueries Required (with examples)
- Practice
- Practice Solution

- - -

## SUBQUERIES

A subquery is a SELECT statement that is nested inside another statement. It is a full and complete select statement and can execute on its own. We will first look at subqueries as a Select statement inside another select statement. Subqueries are used in the where or having clause to identify the records that need to be returned.

We often refer to the subquery portion (nested inside the other select) as the inner query and the Select statement around it as the Outer Query.

There are two types of subqueries. They are Nested and Correlated. In this course we focus on Nested subqueries only.

Let's take a look at the following Select statement that uses a subquery:

[[code quote]]

The subquery (inner query) executes one and returns on or more values and then the outer query executes using the value(s) returned from the subquery.

[[code quote]]

Inner query (subquery) executes first and returns value(s)

[[code quote]]

The outer query then executes using the results of the subquery as criteria for the where clause. The results of the Select executing are:

StaffFirstName

StaffLastName

Hugh

Guy

This was a two step solution where first the subquery returned the PositionID for the PositionDescription of 'Dean' and then Selected all the Staff Names that had that PositionID.

It is important to note that this example used an = in front of the subquery. If our subquery had returned more than one value it would have cause an error when the statement was executed. You can only compare one value to another one value when using an = operator.

What if the subquery returns multiple values?

One of the most common uses of a subquery is to retrieve a list of values that is used as a list of acceptable or non-acceptable criteria by the outer query.

To see all the student Names that have made payments

[[code quote]]

Breaking it down …

1.  Subquery executes first selecting all the studentID's in the payment table.
2.  Those The outer query executes using those StudentID's as part of the criteria in the where clause.

What happens when you run this Select statement?

[[code quote]]

Subquery returned more than 1 value. This is not permitted when the subquery follows =, !=, <, <= , >, >= or when the subquery is used as an expression.

Remember, when using = there must be only one value on each side. If the subquery might return more than one value then you must use IN

What if I wanted to see all students that have never made a payment?

[[code quote]]

Extra Geek point!

In the previous example when the subquery selects all the StudentID's from the payment table you end up with a lot of duplicate StudentID values. This may seem inefficient when you could write the subquery like this:

[[code quote]]

Remember, distinct only returns unique values and not duplicate. Actual testing reveals that using distinct in the subquery to return unique values is actually slower. Keep in mind, that there is some overhead in the selecting of only distinct values VS simply selecting all of them.

Any, Some and All Operators

So far our subqueries have returned values to be used as criteria for an exact match by the outer query.

[[code quote]]

What if we want something other than an exact match?

The ANY or SOME (for SQL they are interchangeable) operators lets you use even more operators (>, <,>=, <=, <>).

SOME compares against any of the values retrieved by the subquery

[[code quote]]

If the Grade being selected by the outer query is greater than any of the grades returned by the subquery then the record is returned.

The ALL operator compares against all of the values retrieved by the subquery

[[code quote]]

If the Grade being selected by the outer query is greater than all of the grades returned by the subquery then the record is returned.

We can use these operators to perform some more complicate selects. Subqueries can be used in many places where you need to retrieve a set of values for criteria.

Select the City that has the highest number of students in it.

[[code quote]]

In this example we used the subquery as criteria in the having clause.

Breaking it down:

1.  Subquery executes first and returns values. [[code quote]]
2.  Outer query executes comparing the count of students in each city to see which count(s) are greater/equal than or equal to all the ones in the subquery. The record from the outer query that is equal to the highest one in the subquery is the city with the most students.

Correlated Subqueries

We do not cover correlated subqueries in this course. However, here is a brief introduction

Correlated subqueries are a bit different than the queries we have looked at so far. These were called nested subqueries.

Nested subqueries had the subquery query execute once and then the outer query executed once.

Correleated subqueries work like this:

1.  The outer query retrieves a record
2.  The subquery executes using data passed to it from the record retrieved by the outer query.
3.  The subquery passes databack to the outer query. This data is used by the outer query to finish processing the record.

The process repeats for every record processed by the outerquery.

The hallmark of the correlated subquery is that the subquery references (uses data from) a table specified in the outer query's from clause.