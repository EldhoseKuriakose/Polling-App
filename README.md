# Polling-App
 Backend API of voting app where users can add questions and options and cast votes.

#### Installation Instructions
1. Clone repository to the system
2. `npm install` - To install required packages
3. `npm start` - To run the server

##### Testing with postman
`POST` `/questions/create` - To create voting question<br />
`POST` `/questions/:id/options/create` - To create options to question<br />
`DELETE` `/questions/:id/delete` - To delete a question<br />
`DELETE` `/options/:id/delete` - To delete an option<br />
`POST` `/options/:id/add_vote` - To add vote to an option<br />
`GET` `/questions/:id` - To get the question corresponding to id and its options

###### Technologies used
nodeJS, ExpressJs, MongoDB
