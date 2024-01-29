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

import cucumber.api.event.TestRunFinished
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.maximizeWindow();

String cartButtonText = WebUI.getText(findTestObject('Page_My Account/button_3 item(s) - 2,181.00'));

if(CustomKeywords.'storePackage.utils.cartButtonCheckIfArticlesAdded'(cartButtonText)) {
	CustomKeywords.'storePackage.utils.emergentWindowForResults'('Se han agregado elementos al carrito. Resultado esperado');
	WebUI.click(findTestObject('Page_My Account/button_3 item(s) - 2,181.00'));
} else {
	CustomKeywords.'storePackage.utils.emergentWindowForResults'('No hay elementos agregados en el carrito. Error al agregar artículos. Resultado no esperado');
	TestRunFinished;
}

WebUI.click(findTestObject('Object Repository/Page_My Account/strong_Checkout'))

WebUI.click(findTestObject('Object Repository/Page_Checkout/inputbutton-payment-address'))

WebUI.click(findTestObject('Object Repository/Page_Checkout/inputbutton-shipping-address'))

WebUI.setText(findTestObject('Object Repository/Page_Checkout/textarea_comment'), 'test')

WebUI.click(findTestObject('Object Repository/Page_Checkout/inputbutton-shipping-method'))

WebUI.click(findTestObject('Object Repository/Page_Checkout/input_payment_method'))

WebUI.click(findTestObject('Object Repository/Page_Checkout/input_agree'))

WebUI.click(findTestObject('Object Repository/Page_Checkout/inputbutton-payment-method'))

WebUI.verifyElementVisible(findTestObject('Object Repository/Page_Checkout/div_Product Name        Model        Quanti_7fcfe6'))

WebUI.verifyElementClickable(findTestObject('Object Repository/Page_Checkout/inputbutton-confirm'))

WebUI.click(findTestObject('Object Repository/Page_Checkout/inputbutton-confirm'))

WebUI.navigateToUrl('https://opencart.abstracta.us/index.php?route=checkout/success')

WebUI.verifyElementVisible(findTestObject('Object Repository/Page_Your order has been placed/h1_Your order has been placed'))

WebUI.verifyElementVisible(findTestObject('Object Repository/Page_Your order has been placed/p_Thanks for shopping with us online'))

WebUI.click(findTestObject('Object Repository/Page_Your order has been placed/a_Continue'))

WebUI.verifyElementVisible(findTestObject('Page_Your Store/a_Your Store'))

