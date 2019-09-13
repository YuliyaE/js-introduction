'use strict';

var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();
const assert = require('assert')
 
it('Open yandex page and search', function(){
//driver.manage().window().maximize();
driver.get('https://yandex.by/');
let expectedText = "JavaScript";
driver.findElement(webdriver.By.xpath("//*[@class='input__control input__input']")).sendKeys(expectedText);
driver.findElement(webdriver.By.xpath("//*[@class='search2__button']")).click();
let actualText = driver.findElement(webdriver.By.xpath("//div[@class='serp-title serp-title_type_supertitle serp-title_font-weight_bold typo typo_text_xl typo_line_m entity-search__title']")).getText();
console.log("Actual text: " + actualText);
assert.equal(actualText, expectedText);
//driver.quit();
});