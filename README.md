# poc-playwright-cucumber
A POC for using Playwright in Cucumber.js.

Tests are written using [Playwright](https://playwright.dev/docs/intro) as a library, and [Cucumber.js](https://cucumber.io/docs/guides/overview/) as a test runner.

Based on the initialisation command:

`npm init nightwatch`

## Installation
Requires [Node.js](https://nodejs.org/).

Dependencies can then be installed via the following command:

`npm i`

### VSCode & Cucumber
VSCode has a useful cucumber extension providing useful functionality such as navigation between feature files and step definitions.

Install:

`CucumberOpen.cucumber-official`

Add the following file to the root of the project:

`.vscode/settings.json` 
```
{
    "cucumber.glue": [
        "cypress/tests/**/*.ts"
    ]
}
```

## Run Example Tests

`npx cucumber-js`