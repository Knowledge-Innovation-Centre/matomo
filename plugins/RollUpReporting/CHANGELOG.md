## Changelog

4.1.3
- Added code to show notification when users doesn't have access to all the child sites of a rollup

4.1.2
- Added code to not add site for invalidation if config set for force aggregaion, #PG-820
- Created migration script to delete unwanted archives, #PG-820

4.1.1
- Stopped adding sites for invalidation if `force_aggregate_raw_data_for_day` and `force_aggregate_raw_data_for_day_segment` enabled in config

4.1.0
- Migrate AngularJS code to Vue

4.0.3
- Removed unique visitors from visit summary for weeks and month if config values not present 

4.0.2
- Fix Transitions for Page Titles report did not work correctly for a roll up.

4.0.1
- Compatibility with Matomo 4.0

4.0.0
- Compatibility with Matomo 4.0

3.2.7
- Add new option to disable archiving of unique visitors/users for roll up segments

3.2.6
- Support enable_processing_unique_visitors_multiple_sites setting from Matomo core

3.2.5
- Add primary key to table for better replication

3.2.4
- Add config setting for more efficient archiving of roll ups

3.2.3
- Support more languages

3.2.2
- When a Matomo user requests the invalidation of reporting data for a specific site, the reporting data for all parent roll-ups will now be invalidated as well

3.2.1
- Support Custom Reports

3.2.0
- Add possibility to add several sites add once to a roll-up

3.1.1
 - Renamed Piwik to Matomo
 - Hide some non-compatible plugins when viewing a Roll-Up
 
3.1.0
 - Possiblity to assign Roll-Ups to another Roll-Up in order to nest Roll-Ups

3.0.3
 - Remove line break in visitor log when site is not a Roll-Up
 
3.0.2
 - Added new feature to assign all websites to a Roll-Up with just one click

3.0.1
 - In All-Websites-Dashboard do not sum Roll-Ups to total value

3.0.0
 - Initial version
