@dev
Feature: Capture meetings statistics data
  As a client I want to provide data related to meetings so that the organization can improve their communication.
  # Who, What, Why
  
  Scenario Outline: Receive data for a single meeting
    Given a client has meeting data with this specific field "<field>" and value "<value>"
    When the client sends meeting data
    Then the meeting data should be saved in the system
      And the meeting data should have this specific field "<field>" and value "<value>" saved in the system
      And the client gets a success response
    Examples:
      | field    |  value                  | description                      |
      | ID       | 12345678901234567890    | Largest acceptable value for ID  |
      | ID       | 1234                    | smallest acceptable value for ID |
      | ID       | ABced- /                | ID with acceptable values for ID |
    # More to add here....

  @negative_test
  Scenario Outline: Handle invalid meeting data
    Given a client has meeting data with this specific field "<field>" and value "<value>"
    When the client sends the meeting data
    Then the system send an error message "<error>" to the client
      And the system logs the error
      And the system should not save the meeting data
    Examples:
    | field    |  value                  |  error           | description              |
    | ID       | 123456789012345678901   | ID is too large  | Too large a value for ID |
    | ID       | 1234<IIC>               | Invalid character in ID | ID contains an invalid char. |
    # More to add here....

  # IIC = Invalid ID Char = any unacceptable character for the ID field, which triggers a failure.

  Scenario: Resolve different versions of the same meeting from different people
    Given a client has meeting data
      And the dashboard system has the same meeting from a different person
    When the client sends the meeting data
    Then the system has one complete copy of the meeting data
    And the client gets a success response
# I assume we can test this with a scenario and not an outline

  Scenario: Resolve different versions of the same meeting from the same person
    Given a client has meeting data
    And the dashboard system has the same meeting from a same person
    When the client sends the meeting data
    Then the system has one complete copy of the meeting data
    And the client gets a success response
# I assume we can test this with a scenario and not an outline


  # Need negative testing - scenario outline?
#  Scenario: Required data is missing
#    Given A client is sending "meeting" data to the dashboard server
#    And a required field for a "meeting" is missing
#    When the data is received by the server at "/api/meetings"
#    Then the client should receive an error indicating validation failed
#
#  Scenario: Receive data for something other than a meeting
#    Given A client sends data that is not for a "meeting" to the dashboard server
#    When the data is received by the server at "/api/meetings"
#    Then the client should receive an error indicating the data sent is not valid