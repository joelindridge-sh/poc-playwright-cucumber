const { Before, When, Then, After } = require('@cucumber/cucumber');
const home = require("../../pages/homePage.ts");
const playwright = require('playwright');

Before(async () => {
  this.browser = await playwright.chromium.launch({
    headless: false,
  });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

When("I visit the home page", async () => {
  await this.page.goto(home.url);
});

When("I accept all cookies", async () => {
  await this.page.locator("button[id='onetrust-accept-btn-handler']").getByText("Accept All Cookies").click();
});

Then("I should see the health plan link", async () => {
  await this.page.getByText("Get a health plan");
});

After(async () => {
  await this.browser.close();
})