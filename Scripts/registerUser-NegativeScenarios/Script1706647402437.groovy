import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

CustomKeywords.'storePackage.utils.registerUserBasicSteps'(name, lastName, email, telephone, password, repeatPassword)

switch (assertion) {
    case 1:
		WebUI.verifyElementPresent(findTestObject('Object Repository/Page_Register Account/div_Last Name must be between 1 and 32 characters'),
			5)
	case 2:
		WebUI.verifyElementPresent(findTestObject('Object Repository/Page_Register Account/div_E-Mail Address does not appear to be valid'),
			5)
	case 3:
        WebUI.verifyElementPresent(findTestObject('Object Repository/Page_Register Account/div_Password must be between 4 and 20 characters'), 
            5)
	case 4: 
		WebUI.verifyElementVisible(findTestObject('Page_Register Account/div_Warning E-Mail Address is already registered'))
		
		WebUI.takeFullPageScreenshot()

		CustomKeywords.'storePackage.utils.emergentWindowForResults'('Test result: Expected. The user email already exists. Alert is shown.');
	case 5:
		if (!(CustomKeywords.'storePackage.utils.emailAddressContainsSpecialCharacters'(email))) {
			WebUI.takeFullPageScreenshot()
	
			CustomKeywords.'storePackage.utils.emergentWindowForResults'('The page shows a message asking to add a @ symbol. Expected result. Email not valid')
		} 
	case 6:
		WebUI.verifyElementPresent(findTestObject('Page_Register Account/div_E-Mail Address does not appear to be valid'), 5)
}
	

