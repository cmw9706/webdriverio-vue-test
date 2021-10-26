import { Given, Then } from "@wdio/cucumber-framework";
import App from "../pageobjects/app.page";

Given(/^I open the home screen$/, () => {
  App.open();
});

Then(/^The home screen says the right thing$/, () => {
  expect(App.heading).toHaveText("Welcome to Your Vue.js + TypeScript App");
});
