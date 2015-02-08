@dev
Feature: Meetings statistics data
  As a client I want to provide data related to meetings so that the organization can improve their communication.
  # Who, What, Why
  
  Scenario: Receive data for a single meeting
    Given a client has meeting data to send to the dashboard server
    When the client sends meeting data
    Then the meeting data should be saved in the system 
    
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