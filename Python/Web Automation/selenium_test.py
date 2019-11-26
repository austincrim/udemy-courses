from selenium import webdriver
from selenium.webdriver.common.keys import Keys

browser = webdriver.Chrome('C:/bin/chromedriver_win32/chromedriver.exe')
browser.get('https://www.google.com')

searchbox = browser.find_element_by_name('q')

searchbox.send_keys("selenium")
searchbox.send_keys(Keys.RETURN)
