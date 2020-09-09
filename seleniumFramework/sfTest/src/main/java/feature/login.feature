#@Login
@logintest
Feature:  Login
  @unsuccessfullLogin @sanity
  Scenario: Unsuccessfull Login
    Given User opens URL "DottiAustralia"
    And User click on link having text "Sign in"
    When User enters Email as "************@gmail.com" and Password as "*****************"
    And click on Sign in
    Then Page Title should be "My Account"

  @successfullLogin @sanity
  Scenario: Successfull Login
    Given User opens URL "DottiAustralia"
    And User click on link having text "Sign in"
    When User enters Email as "kgmenon92@gmail.com" and Password as "KGMenon#1"
    And click on Sign in
    Then Page Title should be "My Account"




