Feature: CheckoutProduct

  @checkout @guest
  Scenario: Checkout product as guest
    Given User opens URL "DottiAustralia"
    When User hover on "Shoes & Accessories" link
    And User click on "Belts & Bags" link
    Then Page Title has to be "Belts for Women's | Dotti Online"
    When User click on a product and navigate to the respective product page
    And increase the quantity of the product to "2"
    When User click on Add to Bag button
    And User click on Shopping bag link
    Then Page Title has to be "Dotti - Shopping Bag"
    Then Shopping bag should contain the product
    When User select "Express Delivery" delivery method
    And User click on checkout button
    Then Page Title has to be "Dotti - Checkout Login"
    #When User enters the guest email
    When User enters the guest email as "prodjjhsalesforce@gmail.com "
    And User clicks on guest checkout button
    When User enters First name as "Shyam" and Last name as "Mohan"
    And User enters address one as "457 Saint Kilda Road"
    And User enters suburb as "Melbourne"
    And User selects state as "VIC"
    And User enters postcode as "3004"
    And User enters phone number as "123456"
    And User clicks on continue to delivery option button
    And User clicks on continue to secure payment button
    And User selects on "Credit/Debit Card" payment method
    And User enters card number as "4111 1111 1111 1111" expiry month as "06" expiry year as "24" cvv as "123"
    And User clicks on place order button
    Then There should be order number

  @checkout @paypal
  Scenario: Checkout product as guest and payment via PayPal
    Given User opens URL "DottiAustralia"
    And User click on link having text "Sign in"
    When User enters Email as "abrahamLinkon@gmail.com" and Password as "abrahamLinkon"
    And click on Sign in
    Then Page Title should be "My Account"
    When User hover on "Shoes & Accessories" link
    And User click on "Belts & Bags" link
    Then Page Title has to be "Belts for Women's | Dotti Online"
    When User click on a product and navigate to the respective product page
    And increase the quantity of the product to "1"
    When User click on Add to Bag button
    And User click on Shopping bag link
    Then Page Title has to be "Dotti - Shopping Bag"
    Then Shopping bag should contain the product
    When User select "Express Delivery" delivery method
    And User click on checkout button
    Then Page Title has to be "Dotti - Shipping and Billing"
    And User clicks on continue to secure payment button
    And User selects on "PayPal" payment method
    And User enters paypal email is as "shyam@jjh.com.au" and password as "Just1group"
    And User clicks on place order button
    Then There should be order number
    When User navigates to home page
    And User signs out from his account

  @checkout @fraud
  Scenario: Fraud Checkout product as registered user
    Given User opens URL "DottiAustralia"
    And User click on link having text "Sign in"
    When User enters Email as "abrahamLinkon@gmail.com" and Password as "abrahamLinkon"
    And click on Sign in
    Then Page Title should be "My Account"
    When User hover on "Shoes & Accessories" link
    And User click on "Belts & Bags" link
    Then Page Title has to be "Belts for Women's | Dotti Online"
    When User click on a product and navigate to the respective product page
    And increase the quantity of the product to "1"
    When User click on Add to Bag button
    And User click on Shopping bag link
    Then Page Title has to be "Dotti - Shopping Bag"
    Then Shopping bag should contain the product
    When User select "Express Delivery" delivery method
    And User click on checkout button
    Then Page Title has to be "Dotti - Shipping and Billing"
    And User clicks on continue to secure payment button
    And User selects on "Credit/Debit Card" payment method
    And User enters card number as "4000 1111 1111 1511" expiry month as "06" expiry year as "24" cvv as "123"
    And User clicks on place order button
    Then There should be order number