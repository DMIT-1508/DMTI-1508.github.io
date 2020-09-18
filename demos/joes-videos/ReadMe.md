---
title: Joe's Videos - Specs
---
# Joe's Videos

Joe wants you to develop a small database application to help him run his video rental store.

## Video Rental View

Tracking information to rent a video is one system requirement.

You are to develop a view schema, in 3NF for the Video Rental view where the customer rents one or more videos.

A sample screen layout is shown below:

![Video Rental View](./view1.png)

Business Rules:

1. A customer may have a maximum of ten videos rented simultaneously.
1. Joe knows the rental charges change over time so he wants the system to record the rental charge for each video on a transaction (historical information) as well as record the current rental charge for each video. 
1. Transaction Id, Customer Id and Video Id are unique
1. We carry multiple physical copies of any given movie. Copy Number is unique within Video Id and helps to identify which copy is being rented.


You are to produce a view schema in 3NF. Show the schema in ERD notation. Document any assumptions you make.

----

## Video Information

You are to develop a view schema, in 3NF for the Video information view. 

A sample screen layout is shown below:

![Video Information View](./view2.png)

Business Rules:

1. Movie Types are :Horror, Comedy, Action, Romance, Science fiction,..
1. Formats are: VHS, VCD, DVD. 
1. Movie Ratings are: Children, Youth, Adult, Restricted Adult, and X-Rated
1. Copy Number is unique within Video Id (the first copy of any given video is copy number 1).


You are to produce a view schema in 3NF. Document any assumptions you make. Merge this user view with the Video rentals user view.
