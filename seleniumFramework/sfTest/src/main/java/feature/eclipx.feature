@eclipxQots
Feature:  eclipx
@eclipxSuccesslogin
Scenario: Successfull Login
    Given User opens URL "Eclipx"
    When User enters Username as "Quotes@eclipx-fme.com" and Password as "Password!23"
    And click on Login
    Then new quote page should be opened
  @eclipxUnSuccesslogin
  Scenario: Unsuccessfull Login
    Given User opens URL "Eclipx"
    When User enters Username as "***********@eclipx-fme.com" and Password as "*********"
    And click on Login
    Then new quote page should be opened


