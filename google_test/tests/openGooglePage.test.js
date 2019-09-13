'use strict';

let webdriver = require('selenium-webdriver');
let driver = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();

 
it('Open google page and search', function(){
//    driver.manage().window().maximize();
return driver.get('https://www.google.com/').then(() => {
return driver.findElement(webdriver.By.name("q")).sendKeys("JavaScript");
} ).then(() => {
    return driver.sleep(5000);    
} ).then(() => {
   return driver.findElement(webdriver.By.xpath("(//span[text()='javascript'])[1]")).click();
} ).then(() => {
driver.quit();
});
});