# Inner Joins

- Concepts of Joining Tables
- Two-Table Inner Joins
- Joining more than two tables
- Practice
- Practice Solution

- - -

## JOINS

To work with data that is located in more than one table you need to instruct the server how to relate records from one table with its related record(s) in other tables. To do this you must use the join operator. To join operator lets us control how the server relates rows from different tables.

If you wanted to select all the staff names and their position descriptions you would need to select the staff names from the staff table and the position descriptions from the position table.

According to the syntax of a Select statement you could write a select statement as follows:

[[code quote]]

When you run this Select statement you return 70 records. This may seem like the correct select statement as there were no errors. However, closer inspection of the data in the two tables involved leads to some questions.

First, the Staff table contains only 10 records. So, we should only be seeing 10 records coming back (select all the staff names and their position descriptions).

Second, the position table has 7 records (there are 7 positions).

So, where did the 70 records come from? If you look at the results of the select closely you will notice that every staff member seems to have every position. 10 Staff X 7 Positions = 70.

What happened was there was nothing in the select statement telling the server how to relate what records on the Position table relate to what records in the Staff table.

Remember, records in tables relate to each other through the foreign key. The value of the primary key in the parent table relates to records in the child table that have the same value. Staff that are Position 2 (Program Chair) will have a value of 2 in the PositionID field which is the foreign key in the Staff Table.

Obviously every staff member is not in every position at the school so we need to instruct the server which field in the parent table relates to what field in the child table. This is usually the Primary Key in one table and the Foreign Key in another. While this is not the only fields that are used in joins they are on practically 100% of the cases. This is the Parent field in the parent table and the foreign key in the child table. In this case, it is the PositionID which joins the Position and Staff table and forms the relationship. It also identifies what records in the parent relate to what records in the child.

To ensure we get only the Parent records associated with their correct child records we must use syntax which identifies what the common (join) field is between the tables.

SELECT field1, field2,�
FROM table1
    INNER JOIN table2
        ON table1.joinfield = table2.joinfield

Syntax for Joins

The Staff and Position problem using the correct syntax:

[[code quote]]

The INNER JOIN syntax tells the server that we are performing an inner join and identifies that PositionID is the field in the 2 tables that relate them together.

More specifically it performs an Inner Join which is different than an Outer Join. An Inner Join only returns records from the parent table that have related records in the child table. In this example Position is the Parent table (Primary Key in the relationship) and Staff is the child table (has the foreign key in the relationship). Looking back at the results you will notice that one Position Description is not returned in the results. Position 7 (Assistant Dean) was not returned because there are no Staff with that position. With an Inner Join parent records that do not have a matching child record are not returned.

An Outer Join is different in that it returns all the parent records, including the ones that do not have a matching record in the related child table. To return ALL the Postion Descriptions and the staff names that are in those positions you would use an Outer Join.

We will discuss Left Outer Joins and Right Outer Joins. These both have the same purpose and you choose which one to use based on the order you list your tables in your select statement.

[[code quote]]

or

[[code quote]]

Notice the difference between the Left and Right Outer Join?

The first example states to select ALL the records from the table that is on the RIGHT side of the OUTER JOIN statement (Position) and the related records from Staff.

The second example states to select ALL the records from the table that is on the LEFT side of the OUTER JOIN statement (Position) and the related records from Staff.

Outer Joins enable us to select parent records that may not have related child records in the other table(s) in the join.

Although not necessary, joins are often coded with the parent table on the left side so you tend to see more Left Outer Join statements than Right Outer Join.

Why would you likely never see this Select statement and why does it not make sense?

[[code quote]]

This select says select ALL the staff records and the related records from Position. Since the Staff table is the child table, all the staff records must have a matching parent record in the Position table. Remember, all child records must have a matching parent record.

The difference between INNER and OUTER JOIN:

[[code quote]]

(returns 33 records)

[[code quote]]

(returns 42 records)

Can you explain the difference?

The difference is there are only 33 students that have made payments (only 33 parent records that have matching child records) so only 33 records returned. An Inner Join only returns Parent records that have matching child records.

An Outer Join returns ALL the Parent records (students) even if they do not have any matching child records (payments). Therefore we now know that 9 students have no payment records. Since there were no payment dates for those students the PaymentDate field for those records contains the value of NULL.

Consider the following Select statement which is now selecting the StudentID field as well:

[[code quote]]

This will result in an error:

Ambiguous column name 'StudentID'.

This error is due to the fact that we must state the table that we are selecting the fields from. Since StudentID is in both the Student and the Payment table, the server does not know which one to select. To solve this we need to adjust our syntax to identify which table the server should select the ambiguous column from.

[[code quote]]

While it does not usually matter which table you select the ambiguous columns from it is almost always the parent table.

You can also encounter this error when you have an ambiguous column in other parts of a select statement (like where).

### Selecting From 3 or More Tables

Selecting from 3 or more table is the same as selecting data that is in 2 tables. Remember the syntax for a basic Inner Join is:

SELECT field1, field2,� 
FROM table1
    INNER JOIN table2
        ON table1.joinfield = table2.joinfield

Joining Two Tables

To select from more than 2 tables the syntax would look like:

SELECT field1, field2,�
FROM table1
    INNER JOIN table2
        ON table1.joinfield = table2.joinfield
    INNER JOIN table3
        ON table.joinfield = table.joinfield
    INNER JOIN table4
        ON table.joinfield = table.joinfield
�..

Joining More Than Two Tables

For every table need to add to the select you use INNER JOIN to add it to the select and indicate with ON how that table relates to another table you have already in your select.

For example, consider the following problem:

Select the Student Names, Payment Dates, and Payment Type Descriptions for all the students that have payments:

[[code quote]]

Going back to non clustered indexes, do you see why we use them on foreign key fields? Everytime we need data that is in different tables we use joins and joins use foreign keys to relate the records in the parent table with their correct child records. Joins are very common in selecting data from a database and indexes help to spead up those join operations.

### JOINS SUMMARY

- Joins enable us to select data that is from different, related tables
- We use join expressions (syntax) to identify what the field is that joins each table in the relationship. This allows the select statement to return information in one table and its related information in another
- Inner Joins only return parent records that have at least one matching child record
- Outer Joins return all the parent records as well as the related child records
- Left and Right Outer Joins perform the same task and you can use either one. You must use the correct one for the order you have the tables in the select statement
- If you are selecting a field that exists in more than one table that you are selecting from you must specify which table to select from. Ambiguous column names errors result otherwise.
- All the other clauses of a Select statement can be used with joins.
- A join can be between 2 or more tables.
- You do not need to select a field from each table you have in your join.