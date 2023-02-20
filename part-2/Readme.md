# API Test Definition

This document is to show clickUP API we need to cover 

## Acceptance Criteria

### Security
 - Verify User can access the API using the correct Authorization token
 - Verify User without Authorization token cannot access to the API

### Availability
 - Verify endpoints are available on demand
 - Verify API reply time is appropriated

### Accessibility
#### Data quality
  - Verify you can access the endpoint with the proper required data
  - HTTP status codes and error codes.
  - Verify endpoints schemas

### Functionality
Verify endpoints are working as expected and is returning the proper data for
- Teams
- Spaces
- Folders
- Lists
- Tasks
