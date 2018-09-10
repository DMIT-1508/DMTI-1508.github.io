---
title: Part 6
---
# ESP - Part 6

## Pickup Driver Details View

ESP has two employees in the city who do local parts pickup from their suppliers and receiving at the end of the day. Each driver covers a different area of the city, and they begin the morning by dividing the pickups and summarizing their pickup sheets. By mid-morning, they head out to do their pickups and they return by mid-afternoon, at which time they check in their pickup sheets and stock the shelves.

The following is a sample pickup sheet for one of the drivers.

![Driver Details View](./ESP-6-Driver-Details-View.png)

### Analysis

0NF – Identify Meta-data
PickupSheet	(PickupSheetId†, DriverId‡, DriverFirstName, DriverLastName, Date {SupplierId, SupplierName, Address {PurchaseOrderNumber, {ItemNumber, Quantity, PickupQuantity}}})

Notes: 
† - PickupSheetId is a technical key that was introduced in 0NF to uniquely identify each pickup sheet.
‡ - DriverId is a technical key that was introduced in 3rd Normal Form and “back-filled” to 0NF.

1NF – Remove Repeating Groups
PickupSheet	(PickupSheetId, DriverId, DriverFirstName, DriverLastName, Date)

PickupLocation	(PickupSheetId, SupplierId, SupplierName, Address)

PickupOrder	(PickupSheetId†, SupplierId, PurchaseOrderNumber,)

PickupItem	(PickupSheetId†, SupplierId, PurchaseOrderNumber, ItemNumber, Quantity, PickupQuantity)


2NF – Identify Partial Dependencies
PickupLocation	(PickupSheetId, SupplierId)

Supplier	(SupplierId, SupplierName, Address)


3NF – Identify Transitive Dependencies
PickupSheet	(PickupSheetId, DriverId‡, Date)

Driver	(DriverId‡, DriverFirstName, DriverLastName)


