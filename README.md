﻿# Polling-App

1. Download the project to system

2. npm install   - To install modules

3. npm start    -  To run the server

POST   /questions/create    - To create voting question

POST   /questions/:id/options/create   -  To create options to question

DELETE  /questions/:id/delete   - To delete a question

DELETE  /options/:id/delete    - To delete an option

POST    /options/:id/add_vote   -  To add vote to an option

GET     /questions/:id      - To get the question corresponding to id and its options
