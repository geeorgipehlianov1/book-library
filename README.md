# BookLibrary

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# book-library

## Starting the server

The server is placed in the `src` folder and to start it you should first go to the `src` folder directory and run `node server.js` command in the terminal.

## Project brief documentation
Project is Using Angular for client - side and to load data it is communycation to service.
The different parts of the project are placed in different modules. 

## Authentication module
For authentication functionalities I created authentication module where you can find the Login, Register Components also the Services needed for them like LoginService and RegisterService. Also in this module I placed one interceptor which work is to track the response from the server and if the user already exist or it dosen't exist at all a message with `Incorect user name or password` is returned. The interceptor is taking care also to check if the current cliend have the rights to make POST request to the server.


## Core module 
In the core module are all the singelten needed components like About, Contact, Footer, Header and Home Page Components. The logic about which `a` tags to be shown in the navigation bar is in the Header Component. In this module also is placed `Has-User Guard` which is used in the app-routing module to check if the user is logged in and if there is no user the guard is redirecting the client to the Login Page.

## Feature module 
In the feature are placed all the Components and Services needed for the CRUD operations. In it are placed Add Book, All Books,Details, Edit Book, Delete  Book Components and also the My-Profile Component which is taking care of the personal profile of the user. 

## Shared module 
In the shared module is placed the Service which is taking all the data form the server and it is there because it is used in a lot of Components.

## App module 
The app module is taking care of the routing in the application. 
