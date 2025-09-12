

# **Allen.in Frontend Clone**

This project is a frontend clone of the Allen Career Institute website, created using React and Vite.

## **Tech Stack**

* **Framework:** [React](https://reactjs.org/)  
* **Build Tool:** [Vite](https://vitejs.dev/)  
* **Linting:** [ESLint](https://eslint.org/)

## **Project Structure**

The project follows a standard React application structure:

* public/: Contains the public assets, including vite.svg.  
* src/: Contains the main source code for the application.  
  * assets/: Contains static assets like images, for example react.svg.  
  * components/: Contains reusable React components.  
    * Navbar.jsx: The navigation bar component.  
    * Intro.jsx: The introductory section of the homepage.  
    * Courses.jsx: The section displaying the courses offered.  
  * App.jsx: The main application component that assembles the different sections.  
  * main.jsx: The entry point of the application.  
* index.html: The main HTML file.  
* style.css: The main stylesheet for the application.  
* package.json: Contains the project's dependencies and scripts.  
* vite.config.js: The configuration file for Vite.

## **Getting Started**

To get a local copy up and running, follow these simple steps.

### **Prerequisites**

* npm  
  Bash  
  npm install npm@latest \-g

### **Installation**

1. Clone the repo  
   Bash  
   git clone https://github.com/lakshya5025/allen.in-frontend-clone.git

2. Install NPM packages  
   Bash  
   npm install

### **Usage**

To run the application in development mode, use the following command:

Bash

npm run dev

This will start the development server, and you can view the application in your browser at http://localhost:5173/.

To build the application for production, use the following command:

Bash

npm run build

This will create a dist folder with the optimized and minified files for deployment.