# petStoreDemo
 
Table of Contents Introduction Getting Started Project Structure Running Tests Custom Commands Plugins Reporting

Introduction 
For this assessment I have used Cypress UI automation and integrated it with cucumber framework. This test automation has built to validate petstore users api. There are three test cases which validates Creation of new user, retrieving of the user details and deletion of user.

Getting Started To get started with the Cypress UI Automation project, follow these steps:

pre requisite: Node.js and npm (Node Package Manager) installed. Install Cypress write your test cases in feature files and it's relevant code in step definition file.

Project Structure

cypress/e2e/spec.cy.js # Test files go here,
cypress/fixtures/ #Test data goes here, 
cypress/reports/ #Test reports go here,
cypress/support/ e2e.js file pages goes here

Running Tests To run tests locally, I have used the following command: -> npx cypress run: run tests in headless mode -> npm cypress open: Cypress will open its test runner interface and we can select individual tests


Reporting For reporting I have used mochaawesome reporter.