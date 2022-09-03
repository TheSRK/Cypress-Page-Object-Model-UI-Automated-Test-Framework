Feature: Login Feature

    Scenario: User success login
    Given A user visited swaglab
    When A user enter the username "standard_user"
    And A user enter the password "secret_sauce"
    And user click the login button
    Then A user will be logged in
