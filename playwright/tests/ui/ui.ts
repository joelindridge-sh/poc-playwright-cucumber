import { Before, Given, When, After, setDefaultTimeout } from "@cucumber/cucumber";
import playwright from "playwright";
import { expect } from "@playwright/test";

setDefaultTimeout(60 * 1000);

Before({ tags: "@ui" }, async function () {
  this.browser = await playwright.chromium.launch({
    channel: "msedge",
    headless: !process.argv.includes("headed"),
    //slowMo: 1000,
  });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

Given("User visits Simplyhealth", async function () {
  await this.page.goto("https://www.simplyhealth.co.uk/");
  await this.page.locator("button[id='onetrust-accept-btn-handler']").getByText("Accept All Cookies").click();
  await expect(this.page).toHaveTitle(/Simplyhealth | Health & Dental Plans to cover you/);
});

Given("User clicks Get a health plan", async function () {
  await this.page.getByText("Get a health plan").first().click();
  await expect(this.page).toHaveTitle(/1-2-3 Health Plan | Health cover from Simplyhealth/);
});

Given("User clicks Build your plan", async function () {
  await this.page.getByText("Build your plan").first().click();
  await expect(this.page).toHaveTitle(/1-2-3 Health Plan | Health cover from Simplyhealth/);
});

When("User chooses health plan options", async function () {
  await this.page.getByRole("link", { name: "Add your family" }).click();
  await expect(this.page.getByRole("heading", { name: "Add your family to your plan" })).toBeVisible();
  await this.page.getByRole("button", { name: "Yes" }).click();
  await this.page.getByRole("button", { name: "2", exact: true }).click();
  await this.page.getByRole("button", { name: "Save and Close" }).click();
  await expect(this.page.locator("#sh-coverage-text")).toContainText("You, your partner and 2 children");
  await this.page.locator("#sh-premiums button[value='4']").click();
  await expect(this.page.locator("#sh-total-monthly").textContent).toEqual(this.page.locator("#sh-premiums button[value='4']").textContent);
  await this.page.getByRole("link", { name: "Choose this plan" }).click();
  await expect(this.page).toHaveTitle(/About You - Simplyhealth - Path to Purchase/);
});

When("User completes step 1: name", async function () {
  await expect(this.page.getByText("Step 1 of 10")).toBeVisible();
  await this.page.getByLabel("firstName").fill("Me");
  await this.page.getByLabel("lastName").fill("Name");
  await this.page.getByLabel("Next page: Date of birth").click();
});

When("User completes step 2: dob", async function () {
  await expect(this.page.getByText("Step 2 of 10")).toBeVisible();
  await expect(this.page.locator("#DateOfBirth_Title_Text")).toContainText("Hi Me, when were you born?");
  await this.page.getByPlaceholder("DD").fill("01");
  await this.page.getByPlaceholder("MM").fill("01");
  await this.page.getByPlaceholder("YYYY").fill("1990");
  await this.page.getByLabel("Next page: Contact details").click();
});

After({ tags: "@ui" }, async function () {
  await this.browser.close();
});
