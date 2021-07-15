# Coding Challenge for Haufe 

### How to start the project
1. Clone the repo
``` git clone https://github.com/LucaPanzavolta/Ricky_and_Morty_Coding_Challenge.git```
2. Populate the **.env** files located in the ***/backend*** and ***/frontend*** folders. 
   Please use the provided **.env.example** files as guide.
3. Start the server
``` npm run start:backend ```
4. Start the frontend app
``` npm run start:frontend ```
### How to login into the app
1. Please visit the /signup route first and register
2. After successfull signup the app will automatically route you to /signin. Please login.
3. You are logged in and and you can now use all the resources that require authentication.
### Backend Tech-Stack
* Node.js
* Express
* MongoDB
* JWT authentication
### Frontend Tech-Stack
* React
* Redux
* React Router 
* SCSS
### Troubleshooting
* If you are using a local MongoDB instance please make sure to start the MongoDB daemon first.
``` mongod ```
* The ***PORT*** environmental variable in ***/server/.env*** and the ***REACT_APP_BACKEND_SERVER_PORT*** variable in ***/frontend/.env*** have to match.
* If you still have issues please contact me by email.

