# Getting Started

### To Run the app

`npm install`

`npm run start`

## Issue:
### Mismatch host with backend server:
If Frontend is giving error to connect with Node server(backend server) due to host mismatching.
Then please change the host in the following file:
`assignment_frontend/src/api.constant.js` line no. `2`
as per you default host either `localhost` or `0.0.0.0` or `127.0.0.1`
