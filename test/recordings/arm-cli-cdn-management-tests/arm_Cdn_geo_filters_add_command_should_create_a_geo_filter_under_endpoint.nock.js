// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4',
    name: 'Visual Studio Enterprise with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: 'ed912eac-e7c1-43f8-a91f-ef14a7879293',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP_1'] = 'xplattestadlsrgr01';
  process.env['AZURE_ARM_TEST_CDN_PROFILE_1'] = 'cliTestProfile01';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP_2'] = 'xplattestadlsrgr02';
  process.env['AZURE_ARM_TEST_CDN_PROFILE_2'] = 'cliTestProfile02';
  process.env['AZURE_ARM_TEST_CDN_ENDPOINT_1'] = 'cliTestEndpoint001';
  process.env['AZURE_ARM_TEST_CDN_ENDPOINT_2'] = 'cliTestEndpoint002';
  process.env['AZURE_ARM_TEST_CDN_ORIGIN_1'] = 'cliTestOrigin01';
  process.env['AZURE_ARM_TEST_CDN_ORIGIN_2'] = 'cliTestOrigin02';
  process.env['AZURE_ARM_TEST_ENDPOINT_TEST_LOCATION_1'] = 'eastus';
  process.env['AZURE_ARM_TEST_CUSTOM_DOMAIN_NAME_1'] = 'cliTestCustomDomain01';
  process.env['AZURE_ARM_TEST_CUSTOM_DOMAIN_HOST_NAME_1'] = 'cli-59e92ce9-af32-4879-baad-d5f36a9ede94.azureedge-test.net';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/xplattestadlsrgr02/providers/Microsoft.Cdn/profiles/cliTestProfile02/endpoints/cliTestEndpoint002?api-version=2016-10-02')
  .reply(200, "{\r\n  \"name\":\"cliTestEndpoint002\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/xplattestadlsrgr02/providers/Microsoft.Cdn/profiles/cliTestProfile02/endpoints/cliTestEndpoint002\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \r\n  },\"location\":\"EastUs\",\"properties\":{\r\n    \"hostName\":\"cliTestEndpoint002.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":false,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"cliTestOrigin02\",\"properties\":{\r\n          \"hostName\":\"test2.azure.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"customDomains\":[\r\n      \r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"geoFilters\":[\r\n      \r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '881',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '32a4e991-f050-4c54-8116-4040190a9a31',
  'x-ms-client-request-id': 'a8666bf5-51d1-47d6-9a9f-958ce3989202',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '6dc680f5-3e68-47e3-9600-3e96eec92848',
  'x-ms-routing-request-id': 'WESTUS2:20161219T231517Z:6dc680f5-3e68-47e3-9600-3e96eec92848',
  date: 'Mon, 19 Dec 2016 23:15:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/xplattestadlsrgr02/providers/Microsoft.Cdn/profiles/cliTestProfile02/endpoints/cliTestEndpoint002?api-version=2016-10-02')
  .reply(200, "{\r\n  \"name\":\"cliTestEndpoint002\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/xplattestadlsrgr02/providers/Microsoft.Cdn/profiles/cliTestProfile02/endpoints/cliTestEndpoint002\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \r\n  },\"location\":\"EastUs\",\"properties\":{\r\n    \"hostName\":\"cliTestEndpoint002.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":false,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"cliTestOrigin02\",\"properties\":{\r\n          \"hostName\":\"test2.azure.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"customDomains\":[\r\n      \r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"geoFilters\":[\r\n      \r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '881',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '32a4e991-f050-4c54-8116-4040190a9a31',
  'x-ms-client-request-id': 'a8666bf5-51d1-47d6-9a9f-958ce3989202',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '6dc680f5-3e68-47e3-9600-3e96eec92848',
  'x-ms-routing-request-id': 'WESTUS2:20161219T231517Z:6dc680f5-3e68-47e3-9600-3e96eec92848',
  date: 'Mon, 19 Dec 2016 23:15:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/xplattestadlsrgr02/providers/Microsoft.Cdn/profiles/cliTestProfile02/endpoints/cliTestEndpoint002?api-version=2016-10-02', '*')
  .reply(202, "{\r\n  \"name\":\"cliTestEndpoint002\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/xplattestadlsrgr02/providers/Microsoft.Cdn/profiles/cliTestProfile02/endpoints/cliTestEndpoint002\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \r\n  },\"location\":\"EastUs\",\"properties\":{\r\n    \"hostName\":\"cliTestEndpoint002.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":false,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"cliTestOrigin02\",\"properties\":{\r\n          \"hostName\":\"test2.azure.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"customDomains\":[\r\n      \r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"geoFilters\":[\r\n      {\r\n        \"relativePath\":\"/war\",\"action\":\"Block\",\"countryCodes\":[\r\n          \"AL\",\"AS\"\r\n        ]\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '988',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/xplattestadlsrgr02/providers/Microsoft.Cdn/operationresults/60f1c573-d639-45d4-ab4b-48b51949462a/profileresults/cliTestProfile02/endpointresults/cliTestEndpoint002?api-version=2016-10-02',
  'retry-after': '10',
  'x-ms-request-id': '96df7885-a18b-4251-842d-01c559d49f17',
  'x-ms-client-request-id': 'bd7094a9-9151-4de8-8c65-c667bf2ab2d6',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/xplattestadlsrgr02/providers/Microsoft.Cdn/operationresults/60f1c573-d639-45d4-ab4b-48b51949462a?api-version=2016-10-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '7d7e6a39-14b1-43cf-905b-6f746df96b81',
  'x-ms-routing-request-id': 'WESTUS2:20161219T231518Z:7d7e6a39-14b1-43cf-905b-6f746df96b81',
  date: 'Mon, 19 Dec 2016 23:15:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/xplattestadlsrgr02/providers/Microsoft.Cdn/profiles/cliTestProfile02/endpoints/cliTestEndpoint002?api-version=2016-10-02', '*')
  .reply(202, "{\r\n  \"name\":\"cliTestEndpoint002\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/xplattestadlsrgr02/providers/Microsoft.Cdn/profiles/cliTestProfile02/endpoints/cliTestEndpoint002\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \r\n  },\"location\":\"EastUs\",\"properties\":{\r\n    \"hostName\":\"cliTestEndpoint002.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":false,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"cliTestOrigin02\",\"properties\":{\r\n          \"hostName\":\"test2.azure.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"customDomains\":[\r\n      \r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"geoFilters\":[\r\n      {\r\n        \"relativePath\":\"/war\",\"action\":\"Block\",\"countryCodes\":[\r\n          \"AL\",\"AS\"\r\n        ]\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '988',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/xplattestadlsrgr02/providers/Microsoft.Cdn/operationresults/60f1c573-d639-45d4-ab4b-48b51949462a/profileresults/cliTestProfile02/endpointresults/cliTestEndpoint002?api-version=2016-10-02',
  'retry-after': '10',
  'x-ms-request-id': '96df7885-a18b-4251-842d-01c559d49f17',
  'x-ms-client-request-id': 'bd7094a9-9151-4de8-8c65-c667bf2ab2d6',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/xplattestadlsrgr02/providers/Microsoft.Cdn/operationresults/60f1c573-d639-45d4-ab4b-48b51949462a?api-version=2016-10-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '7d7e6a39-14b1-43cf-905b-6f746df96b81',
  'x-ms-routing-request-id': 'WESTUS2:20161219T231518Z:7d7e6a39-14b1-43cf-905b-6f746df96b81',
  date: 'Mon, 19 Dec 2016 23:15:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/xplattestadlsrgr02/providers/Microsoft.Cdn/operationresults/60f1c573-d639-45d4-ab4b-48b51949462a?api-version=2016-10-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '18451bcd-626c-4d32-8637-2e573db5b924',
  'x-ms-client-request-id': '4ca02675-8e4d-4122-887a-451480fbc8dd',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '8f10dadc-419f-4c59-8752-1a0ef71e4e0b',
  'x-ms-routing-request-id': 'WESTUS2:20161219T231549Z:8f10dadc-419f-4c59-8752-1a0ef71e4e0b',
  date: 'Mon, 19 Dec 2016 23:15:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/xplattestadlsrgr02/providers/Microsoft.Cdn/operationresults/60f1c573-d639-45d4-ab4b-48b51949462a?api-version=2016-10-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '18451bcd-626c-4d32-8637-2e573db5b924',
  'x-ms-client-request-id': '4ca02675-8e4d-4122-887a-451480fbc8dd',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '8f10dadc-419f-4c59-8752-1a0ef71e4e0b',
  'x-ms-routing-request-id': 'WESTUS2:20161219T231549Z:8f10dadc-419f-4c59-8752-1a0ef71e4e0b',
  date: 'Mon, 19 Dec 2016 23:15:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/xplattestadlsrgr02/providers/Microsoft.Cdn/profiles/cliTestProfile02/endpoints/cliTestEndpoint002?api-version=2016-10-02')
  .reply(200, "{\r\n  \"name\":\"cliTestEndpoint002\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/xplattestadlsrgr02/providers/Microsoft.Cdn/profiles/cliTestProfile02/endpoints/cliTestEndpoint002\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \r\n  },\"location\":\"EastUs\",\"properties\":{\r\n    \"hostName\":\"cliTestEndpoint002.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":false,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"cliTestOrigin02\",\"properties\":{\r\n          \"hostName\":\"test2.azure.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"customDomains\":[\r\n      \r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"geoFilters\":[\r\n      {\r\n        \"relativePath\":\"/war\",\"action\":\"Block\",\"countryCodes\":[\r\n          \"AL\",\"AS\"\r\n        ]\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '988',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'd7e0e635-6835-4d3a-840c-667b61c45929',
  'x-ms-client-request-id': '0644d7c8-7bcc-4f2f-b052-a8b5d582d389',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'a1467ab1-5c84-4cf4-ada3-2ef867143255',
  'x-ms-routing-request-id': 'WESTUS2:20161219T231549Z:a1467ab1-5c84-4cf4-ada3-2ef867143255',
  date: 'Mon, 19 Dec 2016 23:15:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/xplattestadlsrgr02/providers/Microsoft.Cdn/profiles/cliTestProfile02/endpoints/cliTestEndpoint002?api-version=2016-10-02')
  .reply(200, "{\r\n  \"name\":\"cliTestEndpoint002\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/xplattestadlsrgr02/providers/Microsoft.Cdn/profiles/cliTestProfile02/endpoints/cliTestEndpoint002\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n    \r\n  },\"location\":\"EastUs\",\"properties\":{\r\n    \"hostName\":\"cliTestEndpoint002.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":false,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n      {\r\n        \"name\":\"cliTestOrigin02\",\"properties\":{\r\n          \"hostName\":\"test2.azure.net\",\"httpPort\":null,\"httpsPort\":null\r\n        }\r\n      }\r\n    ],\"customDomains\":[\r\n      \r\n    ],\"contentTypesToCompress\":[\r\n      \r\n    ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"geoFilters\":[\r\n      {\r\n        \"relativePath\":\"/war\",\"action\":\"Block\",\"countryCodes\":[\r\n          \"AL\",\"AS\"\r\n        ]\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '988',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'd7e0e635-6835-4d3a-840c-667b61c45929',
  'x-ms-client-request-id': '0644d7c8-7bcc-4f2f-b052-a8b5d582d389',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'a1467ab1-5c84-4cf4-ada3-2ef867143255',
  'x-ms-routing-request-id': 'WESTUS2:20161219T231549Z:a1467ab1-5c84-4cf4-ada3-2ef867143255',
  date: 'Mon, 19 Dec 2016 23:15:49 GMT',
  connection: 'close' });
 return result; }]];