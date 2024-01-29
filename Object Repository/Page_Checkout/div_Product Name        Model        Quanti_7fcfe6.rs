<?xml version="1.0" encoding="UTF-8"?>
<WebElementEntity>
   <description></description>
   <name>div_Product Name        Model        Quanti_7fcfe6</name>
   <tag></tag>
   <elementGuidId>a97422ae-aa37-4f00-9cbd-e8c9da572cb7</elementGuidId>
   <selectorCollection>
      <entry>
         <key>CSS</key>
         <value>#collapse-checkout-confirm > div.panel-body</value>
      </entry>
      <entry>
         <key>XPATH</key>
         <value>//div[@id='collapse-checkout-confirm']/div</value>
      </entry>
   </selectorCollection>
   <selectorMethod>XPATH</selectorMethod>
   <useRalativeImagePath>true</useRalativeImagePath>
   <webElementProperties>
      <isSelected>false</isSelected>
      <matchCondition>equals</matchCondition>
      <name>tag</name>
      <type>Main</type>
      <value>div</value>
      <webElementGuid>a6074b33-3fd6-4932-8072-cb76b3625126</webElementGuid>
   </webElementProperties>
   <webElementProperties>
      <isSelected>false</isSelected>
      <matchCondition>equals</matchCondition>
      <name>class</name>
      <type>Main</type>
      <value>panel-body</value>
      <webElementGuid>e88a0361-2558-45d2-92b8-ed1112779005</webElementGuid>
   </webElementProperties>
   <webElementProperties>
      <isSelected>true</isSelected>
      <matchCondition>equals</matchCondition>
      <name>text</name>
      <type>Main</type>
      <value>
  
    
      
        Product Name
        Model
        Quantity
        Unit Price
        Total
      
    
    
    
        
      iPhone         
      product 11
      1
      $101.00
      $101.00
    
        
      MacBook         
      Product 16
      1
      $500.00
      $500.00
    
              
    
    
    
        
      Sub-Total:
      $601.00
    
        
      Flat Shipping Rate:
      $5.00
    
        
      Total:
      $606.00
    
          
    
  


  
    
  

$('#button-confirm').on('click',function(){$.ajax({url:'index.php?route=extension/payment/cod/confirm',dataType:'json',beforeSend:function(){$('#button-confirm').button('loading');},complete:function(){$('#button-confirm').button('reset');},success:function(json){if(json['redirect']){location=json['redirect'];}},error:function(xhr,ajaxOptions,thrownError){alert(thrownError+&quot;\r\n&quot;+xhr.statusText+&quot;\r\n&quot;+xhr.responseText);}});});

 </value>
      <webElementGuid>ace41134-ad07-4e60-ace2-35883b0addfe</webElementGuid>
   </webElementProperties>
   <webElementProperties>
      <isSelected>false</isSelected>
      <matchCondition>equals</matchCondition>
      <name>xpath</name>
      <type>Main</type>
      <value>id(&quot;collapse-checkout-confirm&quot;)/div[@class=&quot;panel-body&quot;]</value>
      <webElementGuid>ba819241-62c1-4147-ac7b-de8592bef419</webElementGuid>
   </webElementProperties>
   <webElementXpaths>
      <isSelected>true</isSelected>
      <matchCondition>equals</matchCondition>
      <name>xpath:idRelative</name>
      <type>Main</type>
      <value>//div[@id='collapse-checkout-confirm']/div</value>
      <webElementGuid>715ff02f-5b10-4de6-a052-ff3aec8c8211</webElementGuid>
   </webElementXpaths>
   <webElementXpaths>
      <isSelected>false</isSelected>
      <matchCondition>equals</matchCondition>
      <name>xpath:position</name>
      <type>Main</type>
      <value>//div[6]/div[2]/div</value>
      <webElementGuid>3a0d0dcf-9236-46bd-b053-f40be23b5bdc</webElementGuid>
   </webElementXpaths>
   <webElementXpaths>
      <isSelected>false</isSelected>
      <matchCondition>equals</matchCondition>
      <name>xpath:customAttributes</name>
      <type>Main</type>
      <value>//div[(text() = concat(&quot;
  
    
      
        Product Name
        Model
        Quantity
        Unit Price
        Total
      
    
    
    
        
      iPhone         
      product 11
      1
      $101.00
      $101.00
    
        
      MacBook         
      Product 16
      1
      $500.00
      $500.00
    
              
    
    
    
        
      Sub-Total:
      $601.00
    
        
      Flat Shipping Rate:
      $5.00
    
        
      Total:
      $606.00
    
          
    
  


  
    
  

$(&quot; , &quot;'&quot; , &quot;#button-confirm&quot; , &quot;'&quot; , &quot;).on(&quot; , &quot;'&quot; , &quot;click&quot; , &quot;'&quot; , &quot;,function(){$.ajax({url:&quot; , &quot;'&quot; , &quot;index.php?route=extension/payment/cod/confirm&quot; , &quot;'&quot; , &quot;,dataType:&quot; , &quot;'&quot; , &quot;json&quot; , &quot;'&quot; , &quot;,beforeSend:function(){$(&quot; , &quot;'&quot; , &quot;#button-confirm&quot; , &quot;'&quot; , &quot;).button(&quot; , &quot;'&quot; , &quot;loading&quot; , &quot;'&quot; , &quot;);},complete:function(){$(&quot; , &quot;'&quot; , &quot;#button-confirm&quot; , &quot;'&quot; , &quot;).button(&quot; , &quot;'&quot; , &quot;reset&quot; , &quot;'&quot; , &quot;);},success:function(json){if(json[&quot; , &quot;'&quot; , &quot;redirect&quot; , &quot;'&quot; , &quot;]){location=json[&quot; , &quot;'&quot; , &quot;redirect&quot; , &quot;'&quot; , &quot;];}},error:function(xhr,ajaxOptions,thrownError){alert(thrownError+&quot;\r\n&quot;+xhr.statusText+&quot;\r\n&quot;+xhr.responseText);}});});

 &quot;) or . = concat(&quot;
  
    
      
        Product Name
        Model
        Quantity
        Unit Price
        Total
      
    
    
    
        
      iPhone         
      product 11
      1
      $101.00
      $101.00
    
        
      MacBook         
      Product 16
      1
      $500.00
      $500.00
    
              
    
    
    
        
      Sub-Total:
      $601.00
    
        
      Flat Shipping Rate:
      $5.00
    
        
      Total:
      $606.00
    
          
    
  


  
    
  

$(&quot; , &quot;'&quot; , &quot;#button-confirm&quot; , &quot;'&quot; , &quot;).on(&quot; , &quot;'&quot; , &quot;click&quot; , &quot;'&quot; , &quot;,function(){$.ajax({url:&quot; , &quot;'&quot; , &quot;index.php?route=extension/payment/cod/confirm&quot; , &quot;'&quot; , &quot;,dataType:&quot; , &quot;'&quot; , &quot;json&quot; , &quot;'&quot; , &quot;,beforeSend:function(){$(&quot; , &quot;'&quot; , &quot;#button-confirm&quot; , &quot;'&quot; , &quot;).button(&quot; , &quot;'&quot; , &quot;loading&quot; , &quot;'&quot; , &quot;);},complete:function(){$(&quot; , &quot;'&quot; , &quot;#button-confirm&quot; , &quot;'&quot; , &quot;).button(&quot; , &quot;'&quot; , &quot;reset&quot; , &quot;'&quot; , &quot;);},success:function(json){if(json[&quot; , &quot;'&quot; , &quot;redirect&quot; , &quot;'&quot; , &quot;]){location=json[&quot; , &quot;'&quot; , &quot;redirect&quot; , &quot;'&quot; , &quot;];}},error:function(xhr,ajaxOptions,thrownError){alert(thrownError+&quot;\r\n&quot;+xhr.statusText+&quot;\r\n&quot;+xhr.responseText);}});});

 &quot;))]</value>
      <webElementGuid>7f2c9d55-dd33-47fc-8f21-7c73215a0c23</webElementGuid>
   </webElementXpaths>
</WebElementEntity>
