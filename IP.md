-----------------------------------------------------------
--------------------Industry Practices---------------------
--------------------TE-AI&ML,E&CS--------------------------
--------------------Node.js & NPM--------------------------
-----------------------------------------------------------

--------------- Week 1 -------------------------------------
- Rupinder Kaur Mam

- Node.js
- Client Side- HTML, CSS, Java - Users
- Request & Response
- Server Side - Node.js - One Frame Real Time Application

Node - Can be Used with Client & Server Side..
For Single User
Thread - Task Allocation - Multithreading

For Node - Single Thread for Multiple users
Node - Runtime Environment 
NPM - Node Package Manager


1. Installing node.js

Package Manager:-
- Modules:- Bunch of Reusable Codes + Package.json
- Pacakage.json - Storage of Dependencies of All the Installed Modules
- npm registry
- Installation

2. [Index.js](./Index.js)
- getting console output in terminal using node _filename_

3. npm init
- package.json is created

4. Installing a Module
- npm install formidable
- understanding [node_modules](./node_modules)

5. [Node Documentation](https://nodejs.org/docs/latest/api/)
- OS -> The node:os module provides operating system-related utility methods and properties.
- Accessing OS using commands
- Simulating the inbuilt Libraries

6. File Applications
- write, read

7. Importing & Exporting js file content using Module.exports



------------------------------- Week 2 ----------------------------------

- Praniti Patil

- More Dependecies - express nodemon

- Hello World using HTTP Server


------------------------------- Week 3 ----------------------------------
- Shubham Sah, Evident, -> Accenture
- 6 Years Training Experience

Introduction:- 
1. Why Languages?
   - RAM & SSD
   - Compiler
2. Interpreted Vs Compiled Languages
   - Code:- Write, Compile, Read.
   - **JavaScript - Interpreted Language.. Does not have a Compiler**
   - One line at a Time is Compiled
   - Single-Threaded in Nature
   - Difference
3. Why JavaScript more used than others
   - Web Browsers - They can Understand only HTML, CSS & JS
   - Using Node.js for "Backend Developement" - for Local Testing
   - You Cannot Execute JS Locally {without NodeJS}

- Skip to Node.js

## NodeJS
- JavaScript Engine, Chrome - V8, Mozilla - Spyder Monkey
- Ryan Dahl - Combined Open Source V8 Engine with C++ -> Node.JS
- Can Run Locally -> Native Machines -> Webservers

1. What is NodeJS
- NodeJS -> Runtime for JS
- Stable Version :- 20.14

2. Basics
- Running a JavaScript File using NodeJS - Hello World! -> Index.js
- Creating a Directory - npm init

3. Package.json
- manages node packages
- json -> file format
- nodemon -> developement server for live reloads
- scripts:- eg. npm run start - run "start script"

4. Functions
- Add, Substract -> Running in a Second File
- Can be Done Using Module Import, Export & using require

5. Node Modules
- 2 Types:-
  - Normal Scripts -> commonJS -> require
  - Echma Scripts -> module -> ES, can import export 

6. **Architecture of NodeJS**
- Single Threaded - JavaScript
- Asynchronous System

- Client Requests
- Event Queue -> 
- Event Loop -> Blocking Operations + Non-Blocking Operations
- Blocking Operations - Blocks the Main Thread - Asynchronous JS
  - Delegates Task to the Thread Pool & Expects Output
  -  Thread Pool -> Assigns a The Work to Worker
  -  Assigns back to Event Queue
- Non-Blocking Operations - Blocks the other Threads - Synchronous JS
  - Processes LineWise

- Eg. setTimeout -> Asynchronous Function -> Delegating Task to run a Function after a Specific Time

7. Promises
- Syntactical Sugar for Making the Code more readable
- Callback Queue is Created by multiple Async Functions
- Delegating a Asyc Task to Threadpool -> Promise is given to the main Program
- The Promise May or May not be Resolved.
- Promises Avoids - Callbacks & Callback Queue

