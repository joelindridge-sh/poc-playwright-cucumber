import path from "path";
import { Before, When, Then, After, defineParameterType } from "@cucumber/cucumber";
import playwright from "playwright";
import { expect } from "@playwright/test";

/**
 * Define custom parameter type: json.
 * Converts strings to a JSON object, returning valid JSON if null (empty curly braces).
 */
defineParameterType({
  name: "json",
  regexp: /(.*)/,
  transformer: (s) => JSON.parse(s ? s : "{}"),
});

Before({ tags: "@api" }, async function () {
  this.apiRequestContext = await playwright.request.newContext();
});

/**
 * Makes a <method> HTTP request to <endpoint> with <parameters>.
 */
When('I make a "{}" request to the "{}" endpoint with parameters "{json}"', async function (method: string, endpoint: string, parameters: JSON) {
  this.response = await this.apiRequestContext.fetch(path.join("https://www.simplyhealth.co.uk", endpoint), {
    method: method,
    params: JSON.parse(JSON.stringify(parameters)),
  });
});

/**
 * Asserts the numerical response status.
 */
Then('the response status is "{}"', function (status: string) {
  expect(this.response.status()).toEqual(parseInt(status));
});

After({ tags: "@api" }, async function () {});
