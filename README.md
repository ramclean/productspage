# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

To run locally, type open the project directory in terminal and you can run:

### `npm install` 
This will install all packages and dependencies

### `npm start` 
This will run a development server of the application

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

---

# Descritption 

The goal was to build a simple web application to allow a user to view a list of products.

I created a functional component named Products, and some child components for search and sort functionality. I implemented one API call using the useEffect hook, which calls on first render of the page and saves the products data to a state variable using the useState hook. This enabled me to use the client to manipulate data as a state variable instead of calling the API several times per user session, saving memory and processing time. 

Another obstacle I encountered was organising the products by title on first render (as requested in the project specs), as there were products which began with special characters, which upset the flow of the alphabetical order. I was able to solve this using a simple regEx solution to only accept letters or numbers and manage them accordingly. 

I then rendered these products in the UI and implemented the added functionalities such as a dynamic search bar and options for deletion and sorting of products. I styled this project using a simple bootstrap grid system and some minor custom CSS changes, making the project fully responsive and viewable on any screen size. 