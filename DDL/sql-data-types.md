# Data Types in SQL Server

The data type of a column (attribute) in a table determines how the column is:

-   accessed
-   indexed
-   physically stored on the storage media (i.e. disk)

A brief description of some of the data types in SQL Server follows. More information can be found at:

-   Online help (transact-SQL help)
-   SQL Server Books online

char

fixed length character; used for character strings of static length

varchar

variable length character; used for character strings of varying length

int

uses 4 bytes of storage; stores an integer number (no decimal places) in the range of + / - 2 billion

smallint

uses 2 bytes of storage; stores an integer in the range of + / - 32, 767

float

uses 8 bytes of storage; stores a real number (decimal places allowed); the value of the number may be rounded

real

uses 4 bytes of storage; same as float but half the size; the value of the number may be rounded

decimal

stores a decimal number precisely; value of the number IS NOT rounded

money

stores a number with 4 decimal places; stores a number in the range of + / - 922 trillion

smallmoney

stores a number with 4 decimal places; stores a number in the range of + / - 214,000

datetime

uses 8 bytes of storage; stores both a date and a time value; can store dates in the range of Jan 1, 1753 to Dec 31, 9999

smalldatetime

uses 4 bytes of storage; same as datetime but half the size; can store dates in the range of Jan 1, 1900 to Jun 6, 2079

Other datatypes are available when using Microsoft SQL Server.