STUDENT RECORD MANAGEMENT API

1. Introduction

The Student Record Management API is a backend application developed using Node.js and Express.js. 
The purpose of this project is to manage student records by performing CRUD operations without using any database. 
All student data is stored locally in a JSON or TXT file using the fs module.

2. Objectives

* The main objectives of this project are:
* To understand and implement RESTful APIs using Express.js
* To perform Create, Read, Update, and Delete (CRUD) operations
* To manage data storage without using any database
* To use the fs module for file handling operations

3. Technologies Used

* Node.js
* Express.js
* File System (fs) Module

4. Student Data Structure

* Each student record consists of the following fields:
* id – Unique identifier for each student
* name – Name of the student
* email – Email address of the student
* course – Course enrolled by the student

5. API Endpoints

The following RESTful API endpoints are implemented:

* HTTP Method	Endpoint	Description
* POST	/students	Add a new student record
* GET	/students	Retrieve all student records
* GET	/students/:id	Retrieve a student record by ID
* PUT	/students/:id	Update a student record by ID
* DELETE	/students/:id	Delete a student record by ID

6. Rules and Constraints

* No database is used in this project
* Student data is stored in a local JSON or TXT file
* Only Express.js is used for API development
* Proper HTTP status codes are used for all API responses

7. Conclusion

This project demonstrates how a backend application can be built using Node.js and Express.js without relying on a database.
It provides a clear understanding of RESTful API design, file handling using the fs module, and CRUD operations.
