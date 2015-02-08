@dev
Feature: Display Overview
  As a dashboard user,
  I want to open the dashboard,
  so I can see an overview of my company's communications performance

  Scenario: Authorize access for an active and valid account
#    Given I have received meeting data
#    And the system has processed the data
#    When I look at the dashboard
#    Then the screenshot should match the reference image for the meeting area of the dashboard
    
    # Rewrite to be declarative instead.  See above.
    Given I go to "/"
    Then the selected tab should be "Overview"
    And there should be a chart called "Daily Total Meeting Costs" on the page
    And there should be a chart called "Daily Productivity Rating" on the page
    And there should be a chart called "Daily Email Count by Type" on the page
    And there should be a chart called "Daily Morale Rating" on the page
    And there should be a statistic called "Meetings Held Today" on the page
    And there should be a statistic called "Emails Sent Today" on the page
    And there should be a statistic called "Avg Meeting Rating Today" on the page
    And there should be a statistic called "Avg Morale Rating Today" on the page
