// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '4004a9fd-d58e-48dc-aeb2-4a4aec58606f',
    name: 'Free Trial',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '1273adef-00a3-4086-a51a-dbcce1857d36',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_AD_TEST_USER_PRINCIPAL_NAME'] = 'testUserAuto@rbacCliTest.onmicrosoft.com';
  process.env['AZURE_AD_TEST_PASSWORD'] = 'Pa$$w0rd';
  process.env['AZURE_AD_TEST_GROUP_NAME'] = 'testgroupauto';
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_AD_TEST_SP_DISPLAY_NAME'] = 'mytestapprandomauto';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/4931389a-846d-4d2f-b146-7dc0a0e6a3a7?api-version=2015-05-01-preview', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"TestRole_d9b68109-b956-4c91-8609-e25e624444ca\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/4931389a-846d-4d2f-b146-7dc0a0e6a3a7\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"4931389a-846d-4d2f-b146-7dc0a0e6a3a7\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '550',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'westus:6414e707-1b50-4a7c-81d1-8b88f153e82e',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-correlation-request-id': '7943709b-692e-44ce-9954-bc336d130c45',
  'x-ms-routing-request-id': 'WESTUS:20150818T222921Z:7943709b-692e-44ce-9954-bc336d130c45',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 18 Aug 2015 22:29:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/4931389a-846d-4d2f-b146-7dc0a0e6a3a7?api-version=2015-05-01-preview', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"TestRole_d9b68109-b956-4c91-8609-e25e624444ca\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/4931389a-846d-4d2f-b146-7dc0a0e6a3a7\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"4931389a-846d-4d2f-b146-7dc0a0e6a3a7\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '550',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'westus:6414e707-1b50-4a7c-81d1-8b88f153e82e',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-correlation-request-id': '7943709b-692e-44ce-9954-bc336d130c45',
  'x-ms-routing-request-id': 'WESTUS:20150818T222921Z:7943709b-692e-44ce-9954-bc336d130c45',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 18 Aug 2015 22:29:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/4931389a-846d-4d2f-b146-7dc0a0e6a3a7?api-version=2015-05-01-preview')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_d9b68109-b956-4c91-8609-e25e624444ca\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/4931389a-846d-4d2f-b146-7dc0a0e6a3a7\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"4931389a-846d-4d2f-b146-7dc0a0e6a3a7\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '550',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:51aaebc6-6c84-499a-88f5-b4398ef05624',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'f457d263-4334-42c0-b220-6a2186f2be3b',
  'x-ms-routing-request-id': 'WESTUS:20150818T222921Z:f457d263-4334-42c0-b220-6a2186f2be3b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 18 Aug 2015 22:29:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/4931389a-846d-4d2f-b146-7dc0a0e6a3a7?api-version=2015-05-01-preview')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_d9b68109-b956-4c91-8609-e25e624444ca\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/4931389a-846d-4d2f-b146-7dc0a0e6a3a7\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"4931389a-846d-4d2f-b146-7dc0a0e6a3a7\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '550',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:51aaebc6-6c84-499a-88f5-b4398ef05624',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'f457d263-4334-42c0-b220-6a2186f2be3b',
  'x-ms-routing-request-id': 'WESTUS:20150818T222921Z:f457d263-4334-42c0-b220-6a2186f2be3b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 18 Aug 2015 22:29:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/4931389a-846d-4d2f-b146-7dc0a0e6a3a7?api-version=2015-05-01-preview', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"UpdatedRole_a4bf6eef-5c5c-4b69-970d-4de149d191d6\",\"type\":\"CustomRole\",\"description\":\"Updated Role Description\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/4931389a-846d-4d2f-b146-7dc0a0e6a3a7\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"4931389a-846d-4d2f-b146-7dc0a0e6a3a7\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '556',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'westus:e33f959e-aa32-474a-9593-e783efc9b07f',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-correlation-request-id': '788657b1-7b25-4610-8980-c1bea87a5a3f',
  'x-ms-routing-request-id': 'WESTUS:20150818T222922Z:788657b1-7b25-4610-8980-c1bea87a5a3f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 18 Aug 2015 22:29:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/4931389a-846d-4d2f-b146-7dc0a0e6a3a7?api-version=2015-05-01-preview', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"UpdatedRole_a4bf6eef-5c5c-4b69-970d-4de149d191d6\",\"type\":\"CustomRole\",\"description\":\"Updated Role Description\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/4931389a-846d-4d2f-b146-7dc0a0e6a3a7\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"4931389a-846d-4d2f-b146-7dc0a0e6a3a7\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '556',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'westus:e33f959e-aa32-474a-9593-e783efc9b07f',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-correlation-request-id': '788657b1-7b25-4610-8980-c1bea87a5a3f',
  'x-ms-routing-request-id': 'WESTUS:20150818T222922Z:788657b1-7b25-4610-8980-c1bea87a5a3f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 18 Aug 2015 22:29:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/4931389a-846d-4d2f-b146-7dc0a0e6a3a7?api-version=2015-05-01-preview')
  .reply(200, "{\"properties\":{\"roleName\":\"UpdatedRole_a4bf6eef-5c5c-4b69-970d-4de149d191d6\",\"type\":\"CustomRole\",\"description\":\"Updated Role Description\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/4931389a-846d-4d2f-b146-7dc0a0e6a3a7\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"4931389a-846d-4d2f-b146-7dc0a0e6a3a7\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '556',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:fc64478d-a767-48aa-be96-a6fae455df1b',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '670ffead-4ec4-4dad-881d-517493bbf192',
  'x-ms-routing-request-id': 'WESTUS:20150818T222923Z:670ffead-4ec4-4dad-881d-517493bbf192',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 18 Aug 2015 22:29:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/4931389a-846d-4d2f-b146-7dc0a0e6a3a7?api-version=2015-05-01-preview')
  .reply(200, "{\"properties\":{\"roleName\":\"UpdatedRole_a4bf6eef-5c5c-4b69-970d-4de149d191d6\",\"type\":\"CustomRole\",\"description\":\"Updated Role Description\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/4931389a-846d-4d2f-b146-7dc0a0e6a3a7\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"4931389a-846d-4d2f-b146-7dc0a0e6a3a7\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '556',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:fc64478d-a767-48aa-be96-a6fae455df1b',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '670ffead-4ec4-4dad-881d-517493bbf192',
  'x-ms-routing-request-id': 'WESTUS:20150818T222923Z:670ffead-4ec4-4dad-881d-517493bbf192',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 18 Aug 2015 22:29:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/4931389a-846d-4d2f-b146-7dc0a0e6a3a7?api-version=2015-05-01-preview')
  .reply(200, "{\"properties\":{\"roleName\":\"UpdatedRole_a4bf6eef-5c5c-4b69-970d-4de149d191d6\",\"type\":\"CustomRole\",\"description\":\"Updated Role Description\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/4931389a-846d-4d2f-b146-7dc0a0e6a3a7\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"4931389a-846d-4d2f-b146-7dc0a0e6a3a7\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '556',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:db2373d2-79d2-4cd4-9cd2-59266790364d',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-correlation-request-id': 'c8b1516d-ef25-4a64-9676-1c8a9c0f5dd5',
  'x-ms-routing-request-id': 'WESTUS:20150818T222924Z:c8b1516d-ef25-4a64-9676-1c8a9c0f5dd5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 18 Aug 2015 22:29:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/4931389a-846d-4d2f-b146-7dc0a0e6a3a7?api-version=2015-05-01-preview')
  .reply(200, "{\"properties\":{\"roleName\":\"UpdatedRole_a4bf6eef-5c5c-4b69-970d-4de149d191d6\",\"type\":\"CustomRole\",\"description\":\"Updated Role Description\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/4931389a-846d-4d2f-b146-7dc0a0e6a3a7\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"4931389a-846d-4d2f-b146-7dc0a0e6a3a7\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '556',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:db2373d2-79d2-4cd4-9cd2-59266790364d',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-correlation-request-id': 'c8b1516d-ef25-4a64-9676-1c8a9c0f5dd5',
  'x-ms-routing-request-id': 'WESTUS:20150818T222924Z:c8b1516d-ef25-4a64-9676-1c8a9c0f5dd5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 18 Aug 2015 22:29:23 GMT',
  connection: 'close' });
 return result; }]];
 exports.uuidsGenerated = function() { return ['d9b68109-b956-4c91-8609-e25e624444ca','4931389a-846d-4d2f-b146-7dc0a0e6a3a7','a4bf6eef-5c5c-4b69-970d-4de149d191d6'];};