# TEEBAY FrontEnd Documentation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

You will be needing only:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Dependencies Used for this project are:

1.  Material UI
2.  GraphQl
3.  Apollo Client
4.  MobX
5.  MobX React Lite
6.  React-hook-form
7.  React Router
8.  React Toastify
9.  Sass

## Walkthrough

### ROOT BASIC FILES

#### index.ts

The entry point is wrapped with Apollo Client and Browser router.
The Apollo Client receives a client information property from ApolloClient.tsx stored in the src folder

#### App.ts

This is the file where you can configure and edit the routes.
The route file is wrapped with a ToastContainer which configures how the notification would be displayed. Any changes on the look of the notifaction must be done here to keep uniformity over the system.
Finally, states from MOBX store enable the simple string matching which helps users to route to different pages.

#### Notice that maximum exports have an observer function through out the front-end to provide seamless stateChange.

#### Home.ts

This file consists the showCase of buy or sell page based on state from MOBX. If authorization isn't complete, the user would be navigated back to the login page.

##
