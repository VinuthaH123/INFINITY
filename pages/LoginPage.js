const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('https://infinity.starlajewels.com/login');
    await expect(this.page).toHaveURL(/login/);
  }

  async login(email, password) {
    await this.page.fill('#user_email', email);
    await this.page.fill('#password', password);
    await this.page.click('button[type="submit"]');
  }
}

module.exports = { LoginPage };
