const {test,expect} = require('../fixtures/customFixtures');
// const { LoginPage } = require('../pages/LoginPage');
// const { DashboardPage } = require('../pages/DashboardPage');    



test('Login Test', async ({ loginPage,dashboardPage }) => {
    // const loginpage = new LoginPage(page);
    // const dashboardpage = new DashboardPage(page);
    await loginPage.launchApplication();
    await loginPage.login('admin', 'admin123');
   // await loginPage.waitForLoadState('networkidle');
    //await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await expect(dashboardPage.dashboardHeading).toBeVisible();
    await expect(dashboardPage.adminLink).toBeVisible();
    await expect(dashboardPage.pimLink).toBeVisible();
    await expect(dashboardPage.leaveLink).toBeVisible();
    await expect(dashboardPage.timeLink).toBeVisible();
    await expect(dashboardPage.recruitmentLink).toBeVisible();
    await expect(dashboardPage.myInfoLink).toBeVisible();
    await expect(dashboardPage.performanceLink).toBeVisible();
    await dashboardPage.validateDashboardPage();
    await dashboardPage.logout();
})

test("Invalid Login Test",async({loginPage})=>{
    //const loginpage = new LoginPage(page);
    await loginPage.launchApplication();
    await loginPage.login("admin1","admin123");
})