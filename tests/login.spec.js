const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { DashboardPage } = require('../pages/DashboardPage');
const user = require('../test-data/user.json');

test('Verify dashboard menu elements presence', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.open();
  await loginPage.login(user.email, user.password);

  await dashboardPage.verifyInfinityPresent();
  await dashboardPage.verifyMenuElementsPresent();
  await dashboardPage.logout();

});

