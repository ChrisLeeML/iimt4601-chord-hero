
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# Configure the Chrome WebDriver


def test_main_page(driver):
    driver.get("https://main.d8qk42sxvs3jl.amplifyapp.com/")
    return True

def test_analytics_page(driver):
    driver.find_element(By.XPATH, "/html/body/header[1]/div/div/div[2]/a[1]/button").click()
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div[3]/div[1]/p[2]")))
    return True

def test_contents_page(driver):
    driver.find_element(By.XPATH, "/html/body/header[1]/div/div/div[2]/a[2]/button").click()
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div[2]/div[1]/div/div[1]/div/button/div")))
    driver.find_element(By.XPATH, "/html/body/div[1]/div[1]/a").click()
    input_title = driver.find_element(By.XPATH, "/html/body/div[1]/form/div/div[1]/div/input")
    input_title.send_keys("Test content title")

    input_nft = driver.find_element(By.XPATH, "/html/body/div[1]/form/div/div[2]/div/input")
    input_nft.send_keys("1")
    
    driver.find_element(By.XPATH, "/html/body/div[1]/form/div/div[3]/div").click()
    driver.find_element(By.XPATH, "/html/body/div[3]/div[3]/ul/li[1]").click()

    input_content = driver.find_element(By.XPATH, "/html/body/div[1]/form/div/div[4]/div/input")
    input_content.send_keys("test content")

    driver.find_element(By.XPATH, "/html/body/div[1]/form/div/button").click()
    time.sleep(3)

    xpath = "//p[text()='Test content title']/ancestor::button"
    driver.find_element(By.XPATH, xpath).click()
    time.sleep(3)
    driver.find_element(By.XPATH, "/html/body/div[1]/div[1]/a").click()
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/form/div/div[5]/button[2]")))
    driver.find_element(By.XPATH, "/html/body/div[1]/div/form/div/div[5]/button[2]").click()
    time.sleep(5)
    return True

def test_ukuleles_page(driver):
    driver.find_element(By.XPATH, "/html/body/header[1]/div/div/div[2]/a[3]/button").click()
    time.sleep(5)
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div[1]/a")))
    driver.find_element(By.XPATH, "/html/body/div[1]/div[1]/a").click()
    # time.sleep(100)
    # /html/body/div[1]/form/div/div[1]/div/input
    # /html/body/div[1]/form/div/div[2]/div/input
    time.sleep(3)
    for i in range(1, 5):
        input = driver.find_element(By.XPATH, f"/html/body/div[1]/form/div/div[{i}]/div/input")
        if i==1: text = "test ukulele title"
        elif i==2: text = "12345678"
        elif i==3: text = "a123456789"
        else: text = "ethereum"
        input.send_keys(text)

    #click submit button    
    driver.find_element(By.XPATH, "/html/body/div[1]/form/div/button").click()
    time.sleep(5)

    xpath = "//p[text()='test ukulele title']/ancestor::div[contains(@class, 'MuiBox-root')]"
    driver.find_element(By.XPATH, xpath).click()
    time.sleep(3)

    #click edit button
    driver.find_element(By.XPATH, "/html/body/div[1]/div[1]/a").click()
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/form/div/div[5]/button[2]")))
    driver.find_element(By.XPATH, "/html/body/div[1]/form/div/div[5]/button[2]").click()
    return True

def test_creators_page(driver):
    # driver.find_element(By.XPATH, "/html/body/header[1]/div/div/div[2]/a[4]/button").click()
    # driver.find_element(By.XPATH, "/html/body/div[1]/div[1]/a").click()

    # driver.find_element(By.LINK_TEXT, "Creators").click()
    # WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "creators_page")))
    # driver.find_element(By.ID, "add_creator").click()
    # driver.find_element(By.ID, "delete_creator").click()
    return True


tests = [
    test_main_page,
    test_analytics_page,
    test_contents_page,
    test_ukuleles_page,
    test_creators_page
]

def run_tests():
    global driver
    driver = webdriver.Chrome()  # Set up the WebDriver
    passed = 0

    try:
        for test in tests:
            try:
                if test(driver):
                    passed += 1
                else:
                    print(f"{test.__name__} failed")
            except Exception as e:
                print(f"{test.__name__} failed: {e}")

    finally:
        driver.quit()

    total = len(tests)
    print("\nTest Results")
    print("------------")
    print(f"Total tests: {total}")
    print(f"Passed: {passed}")
    print(f"Failed: {total - passed}")
    return passed == total

if __name__ == "__main__":
    if run_tests():
        print("\nAll tests passed!")
    else:
        print("\nSome tests failed.")