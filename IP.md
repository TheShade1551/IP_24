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
  -  Thread Pool -> Assigns a The Work to Worker - C++ makes thread pool
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


------------------------------- Week 4 ----------------------------------
--------------------------Making HTTP Server-----------------------------
-------------------------File System & HTTP Modules----------------------

- Day4 -> cd -> npm init

1. npm - node pacakage manager
- command which installs or runs libraries/modules from pacakge.json(central repository)
- 2 ways to Install:- Local, Global
- local:- It will only be available in that File.
- global:- Anywhere within the Windows, File will execute on command

2. Nodemon - library
- You Can Use NodeJS Continuous
- 2 Types of Environment:- 1. Devlopement 2. Production
- `npm install nodemon --save-dev` - Dependency changed to node dependancy

3. File Handling in NodeJS
- read, write, append files
- You can create a file
- You can read a file.
- Node Module :- File System - Prebuilt Libraries
  - `const fs = require("fs")` - fs library can be used as a variable
  
4. Running file live Continously using nodemon script
Synchronous
- reading & writing in file
  - `fs.writeFileSync("./a.txt","Hello World Sagar")`
- buffer - file memory address & content - encoded
  - `const data = fs.readFileSync('./a.txt', 'utf-8')`
- using UTF-8 = Uniform Transfer Protocol
    - using ascii 

Asynchronous
- error handling using callback functions

5. Version Naming - 4.7.6
- Major Version - 4 - Introducing Breaking Changes
- Minor Version - 7 - Minor Changes in API
- Patch Release - 6

6. HTTP Server - HyperText Transfer Protocol
- A Protocol - Transfer HyperText, eg. HTML
- Machine Communication
- Specifically for Websites, most common way to interact with Frontend & Backend

- FrontEnd - Appearance
  - HTML - Content
  - CSS - Style
  - JavaScript - Functionality
- BackEnd - Machine/Server Running
  - Frontend & Backend Communications through - Wires/Routers
  - Optical Fibers - Connecting Countries through Wires
  - Client Server Model - 
    - Code Follows HTTP Protocol
    - Client - Frontend
    - Server - Backend
    - Similar to Calling to Friend -
      - Dialing - Frontend
      - Connection to Cell Tower - Backend

7. HTTP Protocol
- Client Sends Arguments
- Rather than calling a functionm uses URL

- Client Needs to Figure out
HTTP:-
  - Protocol(HTTP/HTTPS)
  - Address(UL/IP/PORT)
  - Route
  - Header, Body, Query Parameters
  - Method

- Server Needs to Figure out
Sever
  - Status Code

- ChatGPT:- Request URL

    This was the HTTP Protocol
    - Client Conneting to Server
      - protocol + URL + Route
      - Header
      - Body
      - Method
- Broswer will do the following:
    i. Parse URL
    ii. DNS Lookup
    iii. Connection Establishment to IP

8. How to Create Your Own HTTP Server
- Using Req,Res Arguments in Createserver Method of HTTP module
- Hi There - Hello From Server at `localhost:8000` 


------------------------------- Week 5 ----------------------------------
------------------------------Express JS---------------------------------
-------------------------File System & HTTP Modules----------------------

1. URL - Uniform Resource Protocol
- Protocol - Domain - User Friendly Name of IP
- Query Parameters - about

2. Working Client Server Model
- 5 Methods 
    1. Get - Get you that resource
    2. Post - Posting stuff on server
    3. Put - change the whole parameter, put the whole resource instead of single 
    4. Patch - changes a single part
    5. Delete - delete
- Get Request
- Post Request

- HTTP Status Code
- 200 - Ok
- 404 - Page Not Found
- 403 - Authentication Error
- 500 - Server Not Running

3. Express - Library
- Industry Standard
- Multiple Ways to Handle Servers, Code & etc.
- `npm install express`

4. Boilerplate Express Code

5. Running Localhost through different devices
- using ipconfig to find ip address of device
- & running port through the same connection on phone


------------------------------- Week 6 ----------------------------------
-------------------------Express JS:- Hands On!--------------------------
----------------------------The Final Day--------------------------------

Final Day..

Core Subjects:-
1. OS -  Kunal Kushwaha
2. Computer Networks - Kunal Kushwaha
3. Git & Github Basics
4. Frameworks

1. HTTP Code Revisit
App - Functionality
Code - Dependency
65536 ports in Machine - With different functions
TCP = Transmission Control Protocol - uses `Port = 443`
SSH - used `Port = 22`
- These Ports can be used if not Working on any Process.
- Callback Function - Function within a Function
Server Takes Request, Server Sends Response

2. Response:- 
- Send:- Sending Normal Response
- SendStatus:- Tells the Staus of the Server
   1. 200 range = Ok, Everything is Well.. 
   2. 400range - Bad Error, Not Found
   3. 500range = Server Down
- `res.status(200),send("hi")` - chaining of Commands - Will Send OK if Status = 200
- download - downloads the path of the given file
- render - View the given file using View Engine

- Views Engine:- ejs, pug- Shows given files
- `app.set('view engine', ejs)`

3. Routing - Sending the Data using Routes
- uses Router instead of App
- Exporting the Router
- Making a Function to collect the Router file from path
- So any request to app will first go to Router.

- Using GET

- Using Post
 - Request parameters