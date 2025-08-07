const { Builder, By, until } = require('selenium-webdriver');

async function login(driver, url, username, password, selectors) {
    try {
        // Mở trang đăng nhập
        await driver.get(url);

        // Đợi trường username xuất hiện
        await driver.wait(until.elementLocated(By.id(selectors.username)), 10000);

        // Nhập username và password
        await driver.findElement(By.id(selectors.username)).sendKeys(username);
        await driver.findElement(By.id(selectors.password)).sendKeys(password);

        // Click nút login
        await driver.findElement(By.className(selectors.loginBtn)).click();

        // Chờ điều kiện xác nhận đăng nhập thành công
        await driver.wait(until.urlContains("dashboard"), 10000); // Có thể chỉnh sửa theo điều kiện thật

        console.log("✅ Login thành công!");

    } catch (error) {
        console.error("❌ Login thất bại:", error);
    } finally {
        await driver.quit();
    }
}

// --- Add this block to make the script executable ---
if (require.main === module) {
    (async () => {
        // You may need to install the ChromeDriver or set PATH to chromedriver.exe
        let driver = await new Builder().forBrowser('chrome').build();
        const url = "https://hoangduy0610.github.io/ncc-sg-automation-workshop-1/login.html";
        const username = "Aleena0207"; // Thay bằng username thật
        const password = "123456"; // Thay bằng password thật
        const selectors = {
            username: "username",
            password: "password",
            loginBtn: "btn-primary"
        };
        await login(driver, url, username, password, selectors);
    })();
}
