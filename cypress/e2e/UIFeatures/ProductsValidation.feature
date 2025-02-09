Feature: Products validation in home page

Scenario Outline: validate the items in Products dropdown

Given click on the products dropdown
Then verify all the items "<ItemName>" in the products dropdown



Examples:
| ItemName |
| Symphony CTRM |
| Alchemy CTRM|
| VaR Module |
|  Trade confirmations manager|
| Freight manager |
| Claims manager |
|  Symphony Credit |