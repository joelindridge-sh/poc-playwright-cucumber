# poc-playwright-cucumber

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

A POC for using Playwright in Cucumber.js.

Tests are written using [Playwright](https://playwright.dev/docs/intro) as a library, and [Cucumber.js](https://cucumber.io/docs/guides/overview/) as a test runner.

## Installation

Requires [Node.js](https://nodejs.org/).

Dependencies can then be installed via the following command:

`npm i`

## VSCode

VSCode has a Cucumber extension providing useful functionality such as navigation between feature files and step definitions.

### Extensions

- Cucumber - `CucumberOpen.cucumber-official`
- Prettier - `esbenp.prettier-vscode` - code formatting

### Settings

Add the following file to the root of the project:

`.vscode/settings.json`

```JSON
{
  "cucumber.features": ["playwright/tests/**/*.ts"],
  "cucumber.glue": ["playwright/tests/**/*.ts"],
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[cucumber]": {
    "editor.defaultFormatter": "CucumberOpen.cucumber-official"
  }
}
```

## Run Example Tests

Run all - runs all of the tests in the command line:
`npx cucumber-js`

Run a tag - runs a subset of tests tagged in feature files:
`npx cucumber-js --tags "@api"`

Run headed - runs tests in the browser:
`npx cucumber-js --tags "@ui" headed`
