package storePackage

import javax.swing.JOptionPane
import java.util.regex.Pattern
import java.util.regex.Matcher

import groovy.test.JavadocAssertionTestBuilder

import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.webui.keyword.internal.WebUIAbstractKeyword
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows

import internal.GlobalVariable

public class utils {


	@Keyword()
	def clickMyAccountIcon() {
		WebUI.click(findTestObject('Object Repository/Page_Your Store/a_My Account'));
	}


	@Keyword()
	def clickAddToCartButton() {
		WebUI.click(findTestObject('Object Repository/Page_Your Store/i_fa fa-shopping-cart'));
	}

	@Keyword()
	def emergentWindowForResults(String result) {
		JOptionPane.showMessageDialog(null, result);
	}

	@Keyword()
	def registerUserBasicSteps(String name, String lastName, String email, String tel, String password, String repeatPassword) {

		WebUI.click(findTestObject('Object Repository/Page_Your Store/a_Register'))

		WebUI.verifyElementPresent(findTestObject('Object Repository/Page_Register Account/div_Account      If you already have an acc_b8fddc'),
				5)

		WebUI.setText(findTestObject('Object Repository/Page_Register Account/input_firstname'), name)

		WebUI.setText(findTestObject('Object Repository/Page_Register Account/input_lastname'), lastName)

		WebUI.setText(findTestObject('Object Repository/Page_Register Account/input_email'), email)

		WebUI.setText(findTestObject('Object Repository/Page_Register Account/input_telephone'), tel)

		WebUI.setText(findTestObject('Object Repository/Page_Register Account/input_password'), password)

		WebUI.setText(findTestObject('Object Repository/Page_Register Account/input_confirm'), repeatPassword)

		WebUI.click(findTestObject('Object Repository/Page_Register Account/input_agree'), FailureHandling.STOP_ON_FAILURE)

		WebUI.click(findTestObject('Object Repository/Page_Register Account/input_btn btn-primary'), FailureHandling.STOP_ON_FAILURE)
	}

	@Keyword()
	def emailAddressContainsSpecialCharacters(String email) {

		Pattern specials = Pattern.compile('[!@#$%&*()_+=|<>?{}\\[\\]~-]');

		Matcher special = specials.matcher(email);

		return special.find();
	}

	@Keyword()
	def cartButtonCheckIfArticlesAdded(String text) {
		Boolean added = true;
		if(text.equals('0 item(s) - $0.00')) {
			return added = false;
		} 
		return added;
	}
}
