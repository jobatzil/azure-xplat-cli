// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e55e7c87-7bdc-445b-8213-56cdfca27374',
    name: 'Free Trial',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: 'fc53715f-c87b-43fc-9876-78ef5139cf26',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/exampledns.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/e55e7c87-7bdc-445b-8213-56cdfca27374\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-519c-55e514b9d201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-05.azure-dns.com.\",\"ns2-05.azure-dns.net.\",\"ns3-05.azure-dns.org.\",\"ns4-05.azure-dns.info.\"],\"numberOfRecordSets\":2}}", { 'cache-control': 'private',
  'content-length': '497',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-519c-55e514b9d201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '0e990736-fc20-499f-af6e-418120f7afcb',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': 'f2acb4e4-8651-4ff0-b277-425a0b5f3507',
  'x-ms-routing-request-id': 'WESTEUROPE:20170419T135738Z:f2acb4e4-8651-4ff0-b277-425a0b5f3507',
  date: 'Wed, 19 Apr 2017 13:57:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/exampledns.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/e55e7c87-7bdc-445b-8213-56cdfca27374\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-519c-55e514b9d201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-05.azure-dns.com.\",\"ns2-05.azure-dns.net.\",\"ns3-05.azure-dns.org.\",\"ns4-05.azure-dns.info.\"],\"numberOfRecordSets\":2}}", { 'cache-control': 'private',
  'content-length': '497',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-519c-55e514b9d201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '0e990736-fc20-499f-af6e-418120f7afcb',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': 'f2acb4e4-8651-4ff0-b277-425a0b5f3507',
  'x-ms-routing-request-id': 'WESTEUROPE:20170419T135738Z:f2acb4e4-8651-4ff0-b277-425a0b5f3507',
  date: 'Wed, 19 Apr 2017 13:57:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/exampledns.com?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/e55e7c87-7bdc-445b-8213-56cdfca27374\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000003-0000-0000-519c-55e514b9d201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-05.azure-dns.com.\",\"ns2-05.azure-dns.net.\",\"ns3-05.azure-dns.org.\",\"ns4-05.azure-dns.info.\"],\"numberOfRecordSets\":2}}", { 'cache-control': 'private',
  'content-length': '510',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000003-0000-0000-519c-55e514b9d201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '686dfe0f-28c2-4feb-9bde-a52d76c5d4b2',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '8688cb9f-2338-4d7b-ae33-e0aebc0ddffe',
  'x-ms-routing-request-id': 'WESTEUROPE:20170419T135742Z:8688cb9f-2338-4d7b-ae33-e0aebc0ddffe',
  date: 'Wed, 19 Apr 2017 13:57:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/exampledns.com?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/e55e7c87-7bdc-445b-8213-56cdfca27374\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000003-0000-0000-519c-55e514b9d201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-05.azure-dns.com.\",\"ns2-05.azure-dns.net.\",\"ns3-05.azure-dns.org.\",\"ns4-05.azure-dns.info.\"],\"numberOfRecordSets\":2}}", { 'cache-control': 'private',
  'content-length': '510',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000003-0000-0000-519c-55e514b9d201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '686dfe0f-28c2-4feb-9bde-a52d76c5d4b2',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '8688cb9f-2338-4d7b-ae33-e0aebc0ddffe',
  'x-ms-routing-request-id': 'WESTEUROPE:20170419T135742Z:8688cb9f-2338-4d7b-ae33-e0aebc0ddffe',
  date: 'Wed, 19 Apr 2017 13:57:41 GMT',
  connection: 'close' });
 return result; }]];