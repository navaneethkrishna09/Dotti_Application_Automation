Feature: searchProduct

@successfullOfferSearch
Scenario: Search product by offer
  Given User opens URL "DottiAustralia"
  When User hover on "Offers" link
  And User click on "3 For $10 Socks" link
  Then Traverse the product list and confirm if product contains "3 For $10 Socks" text


  @successfullOfferSearch
  Scenario: Search product by offer
    Given User opens URL "DottiAustralia"
    When User hover on "Offers" link
    And User click on "$2 Phone Covers" link
    Then Traverse the product list and confirm if product contains "$2 Phone Covers" text

  @successfullSizeSearch
  Scenario: Search product by size
    Given User opens URL "DottiAustralia"
    When User click on "New in" menu header
    And User click on "size" menu and select size "8"
    Then confirm if the product contains the searched size by traversing through all the products
