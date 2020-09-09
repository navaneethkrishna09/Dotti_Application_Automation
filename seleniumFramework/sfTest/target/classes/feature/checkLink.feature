Feature: Check Links
 
  @checkHeaderLinks @sanity
  Scenario: Checking the Header Links and its sub links
    Given User opens URL "DottiAustralia"
    When clicks the header links and its sublinks
    Then User should able to view its respective pages

  @checkSpecificHeaderLinks
  Scenario: Checking the specific Header Links and its sub links
    Given User opens URL "DottiAustralia"
    When clicks the "DRESSES" header links and its sublinks
    Then User should able to view its respective pages

