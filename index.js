var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

let By = webdriver.By
let assert = require('assert')

// 创建一个chrome浏览器
let driver = new webdriver.Builder().forBrowser('chrome').build()
driver.get('http://localhost:8080/#/')

username = "18888888885"
password = "123456"

// 登录
driver.findElement(By.xpath('//*[@id="login-box"]/form/div[1]/div/div/input')).sendKeys(username)
driver.findElement(By.id('ps')).sendKeys(password)
driver.findElement(By.xpath('//*[@id="login-box"]/div[1]/button')).click()
