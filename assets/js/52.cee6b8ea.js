(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{285:function(e,t,o){"use strict";o.r(t);var n=o(2),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"inner-joins"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#inner-joins","aria-hidden":"true"}},[e._v("#")]),e._v(" Inner Joins")]),e._v(" "),o("ul",[o("li",[e._v("Concepts of Joining Tables")]),e._v(" "),o("li",[e._v("Two-Table Inner Joins")]),e._v(" "),o("li",[e._v("Joining more than two tables")]),e._v(" "),o("li",[e._v("Practice")]),e._v(" "),o("li",[e._v("Practice Solution")])]),e._v(" "),o("hr"),e._v(" "),o("h2",{attrs:{id:"joins"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#joins","aria-hidden":"true"}},[e._v("#")]),e._v(" JOINS")]),e._v(" "),o("p",[e._v("To work with data that is located in more than one table you need to instruct the server how to relate records from one table with its related record(s) in other tables. To do this you must use the join operator. To join operator lets us control how the server relates rows from different tables.")]),e._v(" "),o("p",[e._v("If you wanted to select all the staff names and their position descriptions you would need to select the staff names from the staff table and the position descriptions from the position table.")]),e._v(" "),o("p",[e._v("According to the syntax of a Select statement you could write a select statement as follows:")]),e._v(" "),o("p",[e._v("[[code quote]]")]),e._v(" "),o("p",[e._v("When you run this Select statement you return 70 records. This may seem like the correct select statement as there were no errors. However, closer inspection of the data in the two tables involved leads to some questions.")]),e._v(" "),o("p",[e._v("First, the Staff table contains only 10 records. So, we should only be seeing 10 records coming back (select all the staff names and their position descriptions).")]),e._v(" "),o("p",[e._v("Second, the position table has 7 records (there are 7 positions).")]),e._v(" "),o("p",[e._v("So, where did the 70 records come from? If you look at the results of the select closely you will notice that every staff member seems to have every position. 10 Staff X 7 Positions = 70.")]),e._v(" "),o("p",[e._v("What happened was there was nothing in the select statement telling the server how to relate what records on the Position table relate to what records in the Staff table.")]),e._v(" "),o("p",[e._v("Remember, records in tables relate to each other through the foreign key. The value of the primary key in the parent table relates to records in the child table that have the same value. Staff that are Position 2 (Program Chair) will have a value of 2 in the PositionID field which is the foreign key in the Staff Table.")]),e._v(" "),o("p",[e._v("Obviously every staff member is not in every position at the school so we need to instruct the server which field in the parent table relates to what field in the child table. This is usually the Primary Key in one table and the Foreign Key in another. While this is not the only fields that are used in joins they are on practically 100% of the cases. This is the Parent field in the parent table and the foreign key in the child table. In this case, it is the PositionID which joins the Position and Staff table and forms the relationship. It also identifies what records in the parent relate to what records in the child.")]),e._v(" "),o("p",[e._v("To ensure we get only the Parent records associated with their correct child records we must use syntax which identifies what the common (join) field is between the tables.")]),e._v(" "),o("p",[e._v("SELECT field1, field2,�\nFROM table1\nINNER JOIN table2\nON table1.joinfield = table2.joinfield")]),e._v(" "),o("p",[e._v("Syntax for Joins")]),e._v(" "),o("p",[e._v("The Staff and Position problem using the correct syntax:")]),e._v(" "),o("p",[e._v("[[code quote]]")]),e._v(" "),o("p",[e._v("The INNER JOIN syntax tells the server that we are performing an inner join and identifies that PositionID is the field in the 2 tables that relate them together.")]),e._v(" "),o("p",[e._v("More specifically it performs an Inner Join which is different than an Outer Join. An Inner Join only returns records from the parent table that have related records in the child table. In this example Position is the Parent table (Primary Key in the relationship) and Staff is the child table (has the foreign key in the relationship). Looking back at the results you will notice that one Position Description is not returned in the results. Position 7 (Assistant Dean) was not returned because there are no Staff with that position. With an Inner Join parent records that do not have a matching child record are not returned.")]),e._v(" "),o("p",[e._v("An Outer Join is different in that it returns all the parent records, including the ones that do not have a matching record in the related child table. To return ALL the Postion Descriptions and the staff names that are in those positions you would use an Outer Join.")]),e._v(" "),o("p",[e._v("We will discuss Left Outer Joins and Right Outer Joins. These both have the same purpose and you choose which one to use based on the order you list your tables in your select statement.")]),e._v(" "),o("p",[e._v("[[code quote]]")]),e._v(" "),o("p",[e._v("or")]),e._v(" "),o("p",[e._v("[[code quote]]")]),e._v(" "),o("p",[e._v("Notice the difference between the Left and Right Outer Join?")]),e._v(" "),o("p",[e._v("The first example states to select ALL the records from the table that is on the RIGHT side of the OUTER JOIN statement (Position) and the related records from Staff.")]),e._v(" "),o("p",[e._v("The second example states to select ALL the records from the table that is on the LEFT side of the OUTER JOIN statement (Position) and the related records from Staff.")]),e._v(" "),o("p",[e._v("Outer Joins enable us to select parent records that may not have related child records in the other table(s) in the join.")]),e._v(" "),o("p",[e._v("Although not necessary, joins are often coded with the parent table on the left side so you tend to see more Left Outer Join statements than Right Outer Join.")]),e._v(" "),o("p",[e._v("Why would you likely never see this Select statement and why does it not make sense?")]),e._v(" "),o("p",[e._v("[[code quote]]")]),e._v(" "),o("p",[e._v("This select says select ALL the staff records and the related records from Position. Since the Staff table is the child table, all the staff records must have a matching parent record in the Position table. Remember, all child records must have a matching parent record.")]),e._v(" "),o("p",[e._v("The difference between INNER and OUTER JOIN:")]),e._v(" "),o("p",[e._v("[[code quote]]")]),e._v(" "),o("p",[e._v("(returns 33 records)")]),e._v(" "),o("p",[e._v("[[code quote]]")]),e._v(" "),o("p",[e._v("(returns 42 records)")]),e._v(" "),o("p",[e._v("Can you explain the difference?")]),e._v(" "),o("p",[e._v("The difference is there are only 33 students that have made payments (only 33 parent records that have matching child records) so only 33 records returned. An Inner Join only returns Parent records that have matching child records.")]),e._v(" "),o("p",[e._v("An Outer Join returns ALL the Parent records (students) even if they do not have any matching child records (payments). Therefore we now know that 9 students have no payment records. Since there were no payment dates for those students the PaymentDate field for those records contains the value of NULL.")]),e._v(" "),o("p",[e._v("Consider the following Select statement which is now selecting the StudentID field as well:")]),e._v(" "),o("p",[e._v("[[code quote]]")]),e._v(" "),o("p",[e._v("This will result in an error:")]),e._v(" "),o("p",[e._v("Ambiguous column name 'StudentID'.")]),e._v(" "),o("p",[e._v("This error is due to the fact that we must state the table that we are selecting the fields from. Since StudentID is in both the Student and the Payment table, the server does not know which one to select. To solve this we need to adjust our syntax to identify which table the server should select the ambiguous column from.")]),e._v(" "),o("p",[e._v("[[code quote]]")]),e._v(" "),o("p",[e._v("While it does not usually matter which table you select the ambiguous columns from it is almost always the parent table.")]),e._v(" "),o("p",[e._v("You can also encounter this error when you have an ambiguous column in other parts of a select statement (like where).")]),e._v(" "),o("h3",{attrs:{id:"selecting-from-3-or-more-tables"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#selecting-from-3-or-more-tables","aria-hidden":"true"}},[e._v("#")]),e._v(" Selecting From 3 or More Tables")]),e._v(" "),o("p",[e._v("Selecting from 3 or more table is the same as selecting data that is in 2 tables. Remember the syntax for a basic Inner Join is:")]),e._v(" "),o("p",[e._v("SELECT field1, field2,�\nFROM table1\nINNER JOIN table2\nON table1.joinfield = table2.joinfield")]),e._v(" "),o("p",[e._v("Joining Two Tables")]),e._v(" "),o("p",[e._v("To select from more than 2 tables the syntax would look like:")]),e._v(" "),o("p",[e._v("SELECT field1, field2,�\nFROM table1\nINNER JOIN table2\nON table1.joinfield = table2.joinfield\nINNER JOIN table3\nON table.joinfield = table.joinfield\nINNER JOIN table4\nON table.joinfield = table.joinfield\n�..")]),e._v(" "),o("p",[e._v("Joining More Than Two Tables")]),e._v(" "),o("p",[e._v("For every table need to add to the select you use INNER JOIN to add it to the select and indicate with ON how that table relates to another table you have already in your select.")]),e._v(" "),o("p",[e._v("For example, consider the following problem:")]),e._v(" "),o("p",[e._v("Select the Student Names, Payment Dates, and Payment Type Descriptions for all the students that have payments:")]),e._v(" "),o("p",[e._v("[[code quote]]")]),e._v(" "),o("p",[e._v("Going back to non clustered indexes, do you see why we use them on foreign key fields? Everytime we need data that is in different tables we use joins and joins use foreign keys to relate the records in the parent table with their correct child records. Joins are very common in selecting data from a database and indexes help to spead up those join operations.")]),e._v(" "),o("h3",{attrs:{id:"joins-summary"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#joins-summary","aria-hidden":"true"}},[e._v("#")]),e._v(" JOINS SUMMARY")]),e._v(" "),o("ul",[o("li",[e._v("Joins enable us to select data that is from different, related tables")]),e._v(" "),o("li",[e._v("We use join expressions (syntax) to identify what the field is that joins each table in the relationship. This allows the select statement to return information in one table and its related information in another")]),e._v(" "),o("li",[e._v("Inner Joins only return parent records that have at least one matching child record")]),e._v(" "),o("li",[e._v("Outer Joins return all the parent records as well as the related child records")]),e._v(" "),o("li",[e._v("Left and Right Outer Joins perform the same task and you can use either one. You must use the correct one for the order you have the tables in the select statement")]),e._v(" "),o("li",[e._v("If you are selecting a field that exists in more than one table that you are selecting from you must specify which table to select from. Ambiguous column names errors result otherwise.")]),e._v(" "),o("li",[e._v("All the other clauses of a Select statement can be used with joins.")]),e._v(" "),o("li",[e._v("A join can be between 2 or more tables.")]),e._v(" "),o("li",[e._v("You do not need to select a field from each table you have in your join.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);