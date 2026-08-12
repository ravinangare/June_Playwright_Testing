const {BasePage} = require('../pages/BasePage')
class LoginPage extends BasePage{
    constructor(page) {
       // this.page = page;
        super(page);
        this.usernameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async launchApplication() {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }
    async login(username, password) {
        await this.sendKeys(this.usernameInput,username);
//        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.ForceClick(this.loginButton)
        await this.takescreenshot("login")
    }
}
module.exports = { LoginPage };