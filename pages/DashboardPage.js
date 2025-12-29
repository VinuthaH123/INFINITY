const { expect } = require('@playwright/test');

class DashboardPage {
  constructor(page) {
    this.page = page;
  }

  async verifyInfinityPresent() {
    await this.page.waitForURL(/dashboard/, { timeout: 15000 });

    await expect(this.page).toHaveURL('https://infinity.starlajewels.com/dashboard');

    await expect(this.page.getByText('Infinity')).toBeVisible();
    //await expect(this.page.getByRole('img', { name: 'Infinity' })).toBeVisible();

    //await expect(this.page.getByText('Hi, Inventory Viewer')).toBeVisible();
    await expect(this.page.locator('.username')).toBeVisible();
    await expect(this.page.locator('.username')).toContainText('Hi,');

  }

  async verifyMenuElementsPresent() {
    await expect(this.page.getByText('Dashboard')).toBeVisible();
    //await expect(this.page.getByText('Inventory')).toBeVisible();
    //await expect(this.page.getByText('Category')).toBeVisible();
    await expect(this.page.getByRole('link', { name: 'Inventory' })).toBeVisible();
    await expect(this.page.getByRole('link', { name: 'Catalog' })).toBeVisible();

  }
    async logout() {
    await this.page.getByText('Logout').click();
    await expect(this.page).toHaveURL(/login/);
  }

}

module.exports = { DashboardPage };
