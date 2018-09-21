---
title: V.5. Shippers and Order Shipments
---
# Shippers

## 0NF

## 1NF – 3NF

No changes to the table in 1NF to 3NF.

## ERD

The following ERD represents the tables/entities from the Shipper Details View.

# Order Shipment View

## 0NF

**Order:** (<b class="pk">OrderNumber</b>, CustomerFirstName, CustomerLastName, CustomerNumber, Address, City, Province, PostalCode, Phone, OrderDate, <b class="rg">{ <b class="rg">{</b></b>ItemId, ItemDescription, OrderQuantity, ShipQuantity<b class="rg">}</b>, ShipperId, WaybillNumber, ShipDate<b class="rg">}</b>)

## 1NF

**Order:** (<b class="pk">OrderNumber</b>, CustomerFirstName, CustomerLastName, CustomerNumber, Address, City, Province, PostalCode, Phone, OrderDate)

**OrderShipment:** (<b class="pk"><u class="fk">OrderNumber</u>, ShipDate</b>, ShipperId, WaybillNumber)

**OrderShipmentDetail:** (<b class="pk"><u class="fk">OrderNumber, ShipDate</u>, ItemId</b>, ItemDescription, OrderQuantity, ShipQuantity)

## 2NF

**OrderShipmentDetail:** (<b class="pk"><u class="fk">OrderNumber, ShipDate</u>, <u class="fk">ItemId</u></b>, OrderQuantity, ShipQuantity)

**Item:** (<b class="pk">ItemId</b>, ItemDescription)

## 3NF

**Order:** (<b class="pk">OrderNumber</b>, <u class="fk">CustomerNumber</u>, OrderDate)

**Customer:** (<b class="pk">CustomerNumber</b>, CustomerFirstName, CustomerLastName, Address, City, Province, PostalCode, Phone)

**OrderShipment:** (<b class="pk"><u class="fk">OrderNumber</u>, ShipDate</b>, <u class="fk">ShipperId</u>)

**Shipper:** (<b class="pk">ShipperId</b>, WaybillNumber)

----

<style type="text/css">
.pk {
    font-weight: bold;
    display: inline-block;
    border: solid thin blue;
    padding: 0 1px;
}
.fk {
    color: green;
    font-style: italic;
    text-decoration: wavy underline green;    
    padding: 2px 0;
}
.rg {
    color: darkorange;
    font-size: 1.2em;
    font-weight: bold;
}
.note {
    font-weight: bold;
    color: brown;
    font-size: 1.1em;
}
</style>
