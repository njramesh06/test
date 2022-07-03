# Cypress-automation

## # About 
  * Cypress Automation UI application & APIs 

## # Features
  - Built using Cypress Automation framework
  - Able to run the Regression, E2E & SmokeTest
  - Test Executions will be capable to run in these browsers - Firefox, Chrome, Electron & New Edge 
  - Takes screenshot for failures
  - Record a video for entire test executions
  - Reports will be generated for test executions

## # Pre-Requisites
 1. IDE - Visual Studio Code or Intellij or STS/Eclipse 
    - Use above mentioned any IDE, it is upto user's wish.
    - Recommended IDE is Visual Studio Code.
    - Link to download - [Visual Studio Code](https://code.visualstudio.com/download).
 2. Node.js needs to be installed
    - Link to download - [Node.js](https://nodejs.org/en/download/).
    - Install the downloaded Node.js

## # Setup Guide
  * In order to setup/import the existing Cypress into local, refer the following steps,
  
    * Either Git Project/Downloaded Source code can be GitClone/open through Terminal or IDE,
    * Run the following commands, 
      >
          1. npm install
      
          2. npm update
      
          3. npm audit fix
      
          4. npm run --save-dev

## # How to create Feature, Step-Implementation, Page Objects & Page Actions
    
  1. Cucumber Feature Creation, 
      * Feature file needs create under following directory,
      
          > MyTest/cypress/integration/features/
 
   2. Cucumber Feature Step Implementation, 
      * Feature Step Implementation needs create under following directory,
      
          > MyTest/cypress/integration/step-definitions/
 
  3. Page Objects needs to create in the following ways, 
      * All webpage elements needs to go under PageElements directory,
              
          > MyTest/cypress/integration/pageobjects/pageelements/
              
      * All webpage actions needs to go under PageActions directory,
          
          > MyTest/cypress/integration/pageobjects/pageactions/

##### 2. **Cleanup all test-artifacts if already exists and Run all TDD testcases through Terminal** 


##### 3. **Cleanup all Test Artifacts before all Test executions** 
    > npm run <Cleanup_Script_to_be_Run>

    > For Example :- 
        - npm run clean_dir

  * Note :-
    
    * It will cleanup all Test Artifacts under this directory (cypress/test-artifacts) 

##### 4. **Generate a report after all Test executions** 
    > npm run <Report_Script_to_be_Run>

    > For Example :- 
        - npm run generate_reports
          
  *
