# **Allen.in Frontend Clone**

This project is a frontend clone of the Allen Career Institute's online program page, built using React and Vite. It is a static representation of the website's user interface, focusing on layout and component structure.

## **Tech Stack**

- **Framework:** [React](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Linting:** [ESLint](https://eslint.org/)
- **Styling:** Standard CSS with Flexbox and Grid

## **Features**

This project is a visual clone and does not include backend functionality. The implemented features are:

- **Component-Based Structure:** The application is broken down into logical UI components for maintainability.
- **Static UI Replication:** The user interface mirrors the design of the Allen website, including:
  - A fixed navigation bar with dropdown-style hover effects.
  - An introductory section for online courses.
  - Sections to display courses, benefits, and special features.
  - A comprehensive multi-column footer.
  - Social media links and copyright information.
- **Responsive Layout:** The layout uses modern CSS properties like Flexbox and Grid to adapt to different screen sizes.

## **Project Structure**

The project follows a standard React application structure:

- public/: Contains public assets like vite.svg.
- src/: Contains the main source code for the application.
  - assets/: Contains static assets like images (e.g., react.svg).
  - components/: Contains the reusable React components.
    - Navbar.jsx: The navigation bar at the top of the page.
    - Intro.jsx: The main introductory section.
    - Courses.jsx: The section displaying course cards (JEE, NEET, etc.).
    - AdditionalBenefits.jsx: A section listing added benefits.
    - Special.jsx: The "What's Special" section with feature cards.
    - AlternateOptions.jsx: A section for alternate coaching options.
    - Footer.jsx: The main footer with various informational links.
    - CopyrightAndSocials.jsx: The final section with social media icons and copyright text.
  - App.jsx: The main application component that assembles all the UI components.
  - main.jsx: The entry point of the React application.
- index.html: The main HTML file.
- style.css: The stylesheet for the entire application.
- package.json: Contains the project's dependencies and scripts.
- vite.config.js: The configuration file for Vite.
- eslint.config.js: The configuration file for ESLint.

## **Getting Started**

To get a local copy up and running, follow these simple steps.

### **Prerequisites**

You need to have Node.js and npm (Node Package Manager) installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### **Installation**

1. Clone the repository to your local machine:  
   Bash  
   git clone https://github.com/lakshya5025/allen.in-frontend-clone.git

2. Navigate into the project directory:  
   Bash  
   cd allen.in-frontend-clone

3. Install the NPM packages:  
   Bash  
   npm install

### **Usage**

To run the application in development mode, use the following command. This will start a local development server.

Bash

npm run dev

You can now view the application in your browser at http://localhost:5173/.

To build the application for production, use the following command:

Bash

npm run build

This will create an optimized dist folder with the static files ready for deployment.

## **Contributing**

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (git checkout \-b feature/AmazingFeature)
3. Commit your Changes (git commit \-m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## **License**

Distributed under the MIT License.
