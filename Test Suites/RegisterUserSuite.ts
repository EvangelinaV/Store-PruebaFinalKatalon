<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>RegisterUserSuite</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>false</rerunImmediately>
   <testSuiteGuid>0712afad-8fcb-47fe-a6a1-87e360c56c73</testSuiteGuid>
   <testCaseLink>
      <guid>7ec2c732-4595-45bf-ab40-75a6c0e4c5dc</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/registerUser-SuccessfulRegistry</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>330e1c4f-3890-4f23-ae85-ce880ea5896c</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/RegisterNewUsers</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>330e1c4f-3890-4f23-ae85-ce880ea5896c</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>firstName</value>
         <variableId>c23ab719-61c0-497c-97e4-1cff6e5e1b5c</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>330e1c4f-3890-4f23-ae85-ce880ea5896c</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>lastName</value>
         <variableId>04c12ec3-4498-4781-860a-e4b6156f257e</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>330e1c4f-3890-4f23-ae85-ce880ea5896c</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>emailRegistry</value>
         <variableId>fb555d0e-e073-4ee3-812b-5bb3eae9afb2</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>330e1c4f-3890-4f23-ae85-ce880ea5896c</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>telephone</value>
         <variableId>c9c8f071-7602-4e78-b921-68aad6df5a7f</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>330e1c4f-3890-4f23-ae85-ce880ea5896c</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>newPassword</value>
         <variableId>401d1fd7-5516-424b-9d51-5652f5444825</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>330e1c4f-3890-4f23-ae85-ce880ea5896c</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>confirmPassword</value>
         <variableId>d93b9e99-04cc-499e-91d2-31fb3a147a3f</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>9db1d538-847d-4c7b-bd9c-8cfa26d622a0</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/registerUser-ExistingEmailAdress</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>265613b0-b7ac-4758-b589-012850505c18</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/RegisterUserExistingEmails</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>265613b0-b7ac-4758-b589-012850505c18</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>name</value>
         <variableId>b1e68709-58c5-4fbb-899f-1fd62707f02f</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>265613b0-b7ac-4758-b589-012850505c18</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>lastName</value>
         <variableId>bbdb0030-9496-47a0-a685-594a1b10dbaf</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>265613b0-b7ac-4758-b589-012850505c18</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>email</value>
         <variableId>9134819d-aaa0-423b-bc5f-71dd7bfdb8d9</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>265613b0-b7ac-4758-b589-012850505c18</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>telephoneNumber</value>
         <variableId>99a7b0bc-4b64-4d32-9e7e-e165118beab9</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>265613b0-b7ac-4758-b589-012850505c18</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>password</value>
         <variableId>11649ecb-ea68-4043-be17-30476ebaa67b</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>265613b0-b7ac-4758-b589-012850505c18</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>confirmPassword</value>
         <variableId>01816f8d-11df-4992-b541-9ef96d239447</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>b783728b-93e6-4f6c-9a5a-9e1202671a50</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/registerUser-EmptyRequiredFields</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>3d03cb3a-c4b2-40d8-9c05-11d7be689fc6</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/RegisterUserEmptyRequiredFields</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>3d03cb3a-c4b2-40d8-9c05-11d7be689fc6</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>name</value>
         <variableId>051e9d03-cbb1-4812-bf31-7d9c6b383f2e</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>3d03cb3a-c4b2-40d8-9c05-11d7be689fc6</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>lastName</value>
         <variableId>42a5916c-0830-4d05-8eda-cd62615afd58</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>3d03cb3a-c4b2-40d8-9c05-11d7be689fc6</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>email</value>
         <variableId>b063fc84-6674-402f-96d9-5a1c1bdaeae2</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>3d03cb3a-c4b2-40d8-9c05-11d7be689fc6</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>telephone</value>
         <variableId>352708fc-30d7-4244-845c-b1a79c6d6246</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>3d03cb3a-c4b2-40d8-9c05-11d7be689fc6</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>password</value>
         <variableId>5f279409-ffa9-449d-9a9f-1ebfe01493f2</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>3d03cb3a-c4b2-40d8-9c05-11d7be689fc6</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>repeatPassword</value>
         <variableId>884a5a99-011f-469a-919c-2b4c09469f76</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>5d44222e-32de-49bf-a27c-ef8ae95c97fe</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/registerUser-WrongEmailFormat</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>2353321d-64c0-4b29-ae77-9defc4b9d956</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>953a9ab0-8752-4d24-be39-180add88f91d</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>a399c029-05e6-4958-9e99-babf4a6c81a6</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>b093eef3-7eb0-48c0-9521-ac668d8a0b49</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>9c0919c3-d1bb-4b52-9d87-9773e0911cd0</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>b2809c6b-802d-4bba-a999-ad203ff11c45</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
