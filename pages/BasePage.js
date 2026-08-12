class BasePage{
    constructor(page){
        this.page = page;
    }
    async click(locator){
        await locator.click();
    }
    async ForceClick(locator){
        await locator.click({force: true})
    }
    async sendKeys(locator,value){
        await locator.fill(value)
    }
    async SelectDropdown(locator,option){
        await locator.selectOption(option)
    }
    async staticWait(locator){
        await locator.waitForTimeout(5000)
    }
    async takescreenshot(fileName){
        await this.page.screenshot({
            path:`screenshots/${fileName}.png`,
            fullPage: true
        })
    }
}

module.exports = {BasePage};