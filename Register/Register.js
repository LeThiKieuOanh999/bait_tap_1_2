// test/search.test.js
const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai'); // Thư viện assertion

describe('Google Search', function () {
    this.timeout(20000);
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    afterEach(async function () {
        await driver.quit();
    });

    it('should have the correct title after searching', async function () {
        await driver.get('https://hoangduy0610.github.io/ncc-sg-automation-workshop-1/register.html');
        await driver.findElement(By.id('email')).sendKeys('username');
        await driver.findElement(By.id('password')).sendKeys('password');
        await driver.wait(until.elementLocated(By.css('button[type="submit"]')), 10000);
        await driver.findElement(By.css('button[type="submit"]')).click();
    });
});