// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice', 'website'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRuleName?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"securityRuleName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRuleName\",\r\n  \"etag\": \"W/\\\"f9580004-b43d-43e5-9434-14ca307165e5\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"description\": \"createdesc\",\r\n    \"protocol\": \"Tcp\",\r\n    \"sourcePortRange\": \"1025\",\r\n    \"destinationPortRange\": \"4242\",\r\n    \"sourceAddressPrefix\": \"10.0.0.0/16\",\r\n    \"destinationAddressPrefix\": \"11.0.0.0/24\",\r\n    \"access\": \"Allow\",\r\n    \"priority\": 1500,\r\n    \"direction\": \"Inbound\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '649',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"f9580004-b43d-43e5-9434-14ca307165e5"',
  'x-ms-request-id': '55fb603b-de88-4ae6-ac75-6049dd3de7ed',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-correlation-request-id': 'd447d8e3-e52a-4502-8320-1fc40af43f48',
  'x-ms-routing-request-id': 'CANADAEAST:20170216T120601Z:d447d8e3-e52a-4502-8320-1fc40af43f48',
  date: 'Thu, 16 Feb 2017 12:06:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRuleName?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"securityRuleName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRuleName\",\r\n  \"etag\": \"W/\\\"f9580004-b43d-43e5-9434-14ca307165e5\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"description\": \"createdesc\",\r\n    \"protocol\": \"Tcp\",\r\n    \"sourcePortRange\": \"1025\",\r\n    \"destinationPortRange\": \"4242\",\r\n    \"sourceAddressPrefix\": \"10.0.0.0/16\",\r\n    \"destinationAddressPrefix\": \"11.0.0.0/24\",\r\n    \"access\": \"Allow\",\r\n    \"priority\": 1500,\r\n    \"direction\": \"Inbound\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '649',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"f9580004-b43d-43e5-9434-14ca307165e5"',
  'x-ms-request-id': '55fb603b-de88-4ae6-ac75-6049dd3de7ed',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-correlation-request-id': 'd447d8e3-e52a-4502-8320-1fc40af43f48',
  'x-ms-routing-request-id': 'CANADAEAST:20170216T120601Z:d447d8e3-e52a-4502-8320-1fc40af43f48',
  date: 'Thu, 16 Feb 2017 12:06:01 GMT',
  connection: 'close' });
 return result; }]];