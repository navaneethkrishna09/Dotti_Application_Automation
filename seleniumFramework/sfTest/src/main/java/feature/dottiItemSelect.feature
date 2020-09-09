@DottiItemSelect
Feature: Select a product from DOtti site and then add it to the bag

@SearchAndSelectProduct
Scenario Outline: Dotti Product Search
Given User opens the URL "DottiAustralia"
And User verifies if the home page is correct
Then User clicks on the menu bar "<category>" and choose the "<subcategory>"
And Verify the product list page "<subcategory>"
Then User selects a random product
And Verify the Product Description Page
Then User chooses selects a random size
And enters the quantity "<quantity>"
And User adds the product to the bag
Examples:
|category|subcategory|quantity|
|New in  |Clothing   |2|
|New in  |Shoes & Accessories|1|
|Offers  |2 For $70 Jeans|1|
|Jackets |Jackets & Coats|1|
|Tops    |Basics|1|
|Bottoms |Pants |2|
|New in  |Best Sellers   |2|
|New in  |Insta Edit   |1|
|New in  |Fresh New Hues   |1|
|New in  |Linen Edit   |1|
|Offers  |2 For $70 Jeans|1|
|Offers  |2 For $30 Basics|1|
|Offers  |Knits From $25|2|
|Tops    |Knitwear & Cardigans|1|
|Tops    |Casual Tops|1|
|Tops    |Shirts & Blouses|1|
|Dresses    |Casual|1|
|Dresses    |Midi & Maxi|1|
|Dresses    |Party|1|
|Dresses    |Playsuits & Jumpsuits|1|
|Bottoms |Jeans |2|
|Bottoms |Skirts & Shorts |1|
|Shoes & Accessories|Accessories|1|
|Shoes & Accessories|Belts & Bags|1|
|Shoes & Accessories|Shoes|1|
|Shoes & Accessories|Socks & Tights|1|
|Shoes & Accessories|Hats & Hair Accessories|1|
|Lookbooks|New Neutrals|1|
|Lookbooks|Trending Florals|1|
|Lookbooks|Soft Hues|1|
|Sale|Shop By Product|1|







