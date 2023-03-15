# TEEBAY FrontEnd Documentation

## RUN BACKEND FIRST

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

# Walkthrough

## ROOT BASIC FILES

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

# Components

## 1. Ui

Three UI Components namely MenuToggle, Navbar and SearchBar were kept separate.

## 2. Types

This folder holds all the types and interfaces required.

## 3. Queries

All Graphql queries were made here.

#### - addProduct

Mutates product information and adds product to the database.

#### - buyProduct

Let's you buy a product once the confirm modal is clicked

#### - deleteProduct

Let's you delete product data based on the id clicked

#### - editProduct

This query takes an id from the selected product and runs a mutation to update the product

#### - getAllProducts

Retrieves all product

#### ownedProduct

Displays all product owned by a user either by creating, buying or renting

#### - signUpUser

Mutates user information and stores user data to database

#### - loginUser

Mutates login email and password

## 4. Forms

4 forms were used:

### a. AddProductForm.tsx

This form handles the creation of a new product.

#### (Apollo Caching is used here and it helps to update the cache information and show an instantaneous result in the frontend as cards.)

### b. EditProductForm.tsx

This form handles the update of a new product.

#### (Apollo Caching is used here and it helps to update the cache information and show an instantaneous result in the frontend as cards.)

### c. SignUpForm.tsx

This form handles the creation of a user.

### d. LoginForm.tsx

This form handles the login of a user.

#### SCOPE: JWT hasn't been implmented on the front end since this wasn't a requirement but the web tokens would help in handling sessions of users and refreshing pages.

#### Current Scenario: User logged out on pageRefresh().

The Material UI components are fairly straightforward but one thing to note is that the Select component(which is the dropdown) changes based on a React changeEvent. The Options and Categories use the select component. So the dafault value for this are changed inside the handleOption and handleCategories.

## 5. Features

### a. Buy/Rent ~ BuyPage.tsx

This component helps in buying products.

#### (Apollo Caching is used here and it helps to update the cache information and show an instantaneous result in the frontend as cards.)

### b. Sell ~ SellPage.tsx

This component helps in buying products.

#### (Apollo Caching is used here and it helps to update the cache information and show an instantaneous result in the frontend as cards.)

### c. List Products Lent/Bought ~ Transaction.tsx

This component helps in viewing products that are lent or bought by the user.

#### (Apollo Caching is used here and it helps to update the cache information and show an instantaneous result in the frontend as cards.)

### d. List all products created by user ~ UserProducts.tsx

This component helps in:

1. Viewing products that are created by the user.
2. Editing products
3. Deleting products

#### (Apollo Caching is used here and it helps to update the cache information and show an instantaneous result in the frontend as cards.)
