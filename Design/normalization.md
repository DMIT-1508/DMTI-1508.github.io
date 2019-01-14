---
title: Normalization
---
# Normalization

:::warning
Draft Content
:::

## Zero Normal Form

While Zero-Normal Form (**0NF**) isn't regarded by most as an official step, it's nonetheless crucial. The whole goal of this phase is to *identify all the attributes* of your entity. In the process of doing this, it's vital that you make sure

- your attributes are in their *atomic* form (the smallest, most meaningful information),
- you have clearly identified the *repeating groups* somehow (such as putting them inside curly braces),
- you have identified what attribute is acting to *uniquely identify* the entity as a whole (usually it's a single attribute), and
- you have given a name to your entity

<!--
1. Give a name to the complete form (this is our core entity)
2. List all the metadata as atomized attributes
3. Identify the unique primary key attribute
4, Identify which attributes represent a set of repeating data
-->

## First Normal Form

First Normal Form (**1NF**) is all about *separating out **repeating groups*** of information.

If you found some repeating groups of data in 0NF, then this is the step where you separate out that repeating information into a new entity. If there are no repeating groups of data, then just state `No Changes` for this step.

To document the 1NF changes, do the following:

1. Rewrite your 0NF entity ommiting the repeating data
2. Make a copy of the Primary Key attribute from the 0NF entity and place it as the first attribute in the new entity that we are creating. This will be our foreign key to the original entity.
3. List the repeating group's attributes in our new entity.
4. Identify the attribute(s) of the repeating group which act to uniquely identify that repeating group; pair that attribute with the foreign key to produce a composite primary key for the new entity.
5. Give the new entity a name.


## Second Normal Form

Second Normal Form (**2NF**) is all about *separating out **partial dependencies***.

1. Examine an entity with a composity key, and identify which non-primary key attributes have a dependency on only *part* of the composite primary key. These are the attributes that will form our new entity.
2. Re-write the original entity without those partially dependent attributes.
3. *Copy* down the partial primary key attribute to the new entity; make it the new entity's primary key.
4. Add the partially dependent attributes to the new entity.
5. Mark the partial primary key attribute in the original entity as a foreign key to our new entity.

## Third Normal Form

Third Normal Form (**3NF**) is all about *separating out **transitive dependencies***.

## A Simple Example


## A Complex Example

