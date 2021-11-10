# cars-api

'The Carbon Hood', a firm is building an inventory system for Cars and the Accessories. We have built a REST API service using Sails.js to access, modify and add data to the system using Blueprint API. 



All the required data is in JSON format and below are the details of the same:



Variant

1.id
2.name
3.type
4.capacity
5.price

Segment:

1.id
2.name

Manufacturer:

1.id
2.name

Accessories:

1.id
2.name
3.Price

Car:

1.id
2.name
3.segments
4.manufacturers
5.variants
6.accessories
7.description





/////////////////////////////////////////////////////////////////////////////////////////



1. Node.js Ultimate Course: UT
'The Carbon Hood' firm is building an inventory system for cars and accessories. A REST API service built using Sails.js is available to access, modify, and add data to the system through Blueprint API. 

 

All the required data is in JSON format.

 

Details:

 

Variant

id

name

type

capacity

price

 

Segment:

id

name

 

Manufacturer:

id

name

 

Accessories:

id

name

Price

 

Car:

id

name

segments

manufacturers

variants

accessories

description

 

 

APIs Available:

 

API Endpoint

HTTP Method Description Input Data  Output Data

/car    GET Get all Cars    Collection of Cars  
/car    POST    Creates a Car   name,segments,manufacturers,variants,accessories,description    Details of new Cars

 

Search API examples:

/car/search?where={"name": {"contains": "RX"}}
/variant/search?where={"capacity": {">=": "2000"}}
 /car/search?limit=100
/variant/search?skip=3
/accessories/search?sort=price ASC
 

Write test cases to cover all APIs.

 

Starting a Web Server and viewing the App:

 

To start a web server of the application, click Project -> Run. 
To view the application, click Preview App.
 

Running Test Cases:

 

Code coverage and quality reports are generated as part of the "npm test" command.
Click Project -> Test to generate the test coverage and quality reports.
Coverage report is available at ./coverage/clover.xml.
Code checkstyle report is available at ./eslint.xml.
Notes: 
If there are syntax errors, invalid statements, or failures in the test cases, the test report files will stop generating.
Atleast one test case is required to generate reports.
 

Database Used:

In the memory, the 'Sails-disk' database is configured as an internal testing DB. 
Sample data is available at test/fixtures.
 

Parameters considered for Scoring:

 

Unit Test Cases
Code Coverage
Code Quality


