class DashboardPage{
    constructor(page) { 
        this.page = page;
        this.adminLink = page.getByRole('link', { name: 'Admin' });
        this.pimLink = page.getByRole('link', { name: 'PIM' });
        this.leaveLink = page.getByRole('link', { name: 'Leave' });
        this.timeLink = page.getByRole('link', { name: 'Time' });
        this.recruitmentLink = page.getByRole('link', { name: 'Recruitment' });
        this.myInfoLink = page.getByRole('link', { name: 'My Info' });
        this.performanceLink = page.getByRole('link', { name: 'Performance' });
        this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });
        this.usermenu = page.locator("p.oxd-userdropdown-name");
        this.logoutButton = page.locator("a.oxd-userdropdown-link").filter({hasText: "Logout"});
    }
    async validateDashboardPage() {
        await this.dashboardHeading.isVisible();
        await this.adminLink.isVisible();
        await this.pimLink.isVisible();
        await this.leaveLink.isVisible();
        await this.timeLink.isVisible();
        await this.recruitmentLink.isVisible();
        await this.myInfoLink.isVisible();
        await this.performanceLink.isVisible();
    }
    async isDashboardHeadingVisible() {
        return await this.dashboardHeading.getText();
    }
    async logout() {
        await this.usermenu.click();
        await this.logoutButton.click();
    }
}
module.exports = { DashboardPage };