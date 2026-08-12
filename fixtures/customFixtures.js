const base = require('@playwright/test')
const { LoginPage } = require('../pages/LoginPage')
const { DashboardPage } = require('../pages/DashboardPage')

exports.test = base.test.extend({
    loginPage: async ({page}, use)=>{
        const loginPage = new LoginPage(page);
        await use(loginPage)        // make the loginpage object available to tests.
    },
    dashboardPage: async({page},use)=>{
        const dashboardPage = new DashboardPage(page);
        await use(dashboardPage)  // make the dashboardPage object available to tests.
    },
    adminPage: async({page}, use)=>{
        const adminPage = new AdminPage(page);
        await use(adminPage)
    }  
})
exports.expect = base.expect;