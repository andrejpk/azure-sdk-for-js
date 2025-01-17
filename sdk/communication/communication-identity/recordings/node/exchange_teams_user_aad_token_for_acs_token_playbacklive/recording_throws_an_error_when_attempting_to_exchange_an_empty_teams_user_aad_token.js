let nock = require('nock');

module.exports.hash = "8f4f0ee6735c115004fb161bc138e853";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint', {"encodedQueryParams":true})
  .post('/teamsUser/:exchangeAccessToken', {"token":"sanitized"})
  .query(true)
  .reply(401, {"error":{"code":"InvalidAccessToken","message":"Provided access token is not valid."}}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json',
  'Request-Context',
  'appId=',
  'MS-CV',
  't2z1C6D/LEGZhcMiluoCLw.0',
  'Strict-Transport-Security',
  'max-age=2592000',
  'x-ms-client-request-id',
  '00000000-0000-0000-0000-000000000000',
  'X-Processing-Time',
  '24ms',
  'X-Cache',
  'CONFIG_NOCACHE',
  'X-Azure-Ref',
  '05n5xYQAAAAB2YsWTCwSMQr2qB2uvmSNWUFJHMDFFREdFMDkxOQBmMDlhNGMxMy0yMWYxLTQ4ZWMtOWNmNy02NjU0NTY4NGI2NDI=',
  'Date',
  'Thu, 21 Oct 2021 14:53:27 GMT'
]);
