// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46153750-fa3b-4140-bf57-8beb7d5c971a',
    name: 'KonaMDI3_697842',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlsrg01';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadls3181.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/webhdfs/v1/adlsclifolder01%2Fconcatfile.txt?op=MSCONCAT&deletesourcedirectory=false&api-version=2015-10-01-preview', '*')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': 'a9cc7a8a-6eab-4829-89fb-c0e57d8a2c5d',
  'set-cookie': [ 'UserPrincipalSession=4ca8fb48-fc32-443f-a0f5-5beba2338831; path=/; secure; HttpOnly' ],
  'server-perf': '[a9cc7a8a6eab482989fbc0e57d8a2c5d][ AuthTime::1844.64757095029::PostAuthTime::34507.6976505871 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:132 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[FsMultiModifyStream :: 00:01:177 ms]%0a[MSCONCAT :: 00:01:334 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 19 Nov 2015 22:07:28 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3181.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/webhdfs/v1/adlsclifolder01%2Fconcatfile.txt?op=MSCONCAT&deletesourcedirectory=false&api-version=2015-10-01-preview', '*')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': 'a9cc7a8a-6eab-4829-89fb-c0e57d8a2c5d',
  'set-cookie': [ 'UserPrincipalSession=4ca8fb48-fc32-443f-a0f5-5beba2338831; path=/; secure; HttpOnly' ],
  'server-perf': '[a9cc7a8a6eab482989fbc0e57d8a2c5d][ AuthTime::1844.64757095029::PostAuthTime::34507.6976505871 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:132 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[FsMultiModifyStream :: 00:01:177 ms]%0a[MSCONCAT :: 00:01:334 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 19 Nov 2015 22:07:28 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3181.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fconcatfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":44,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1447970847860,\"modificationTime\":1447970848137,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b8ef1a7b-b44e-404a-ba62-ab425e4e759d',
  'set-cookie': [ 'UserPrincipalSession=b333db64-1de4-4aa5-8fd5-0269c15ffc16; path=/; secure; HttpOnly' ],
  'server-perf': '[b8ef1a7bb44e404aba62ab425e4e759d][ AuthTime::1906.66331353962::PostAuthTime::34968.7526196305 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:181 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:181 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 19 Nov 2015 22:07:29 GMT',
  connection: 'close',
  'content-length': '223' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3181.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fconcatfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":44,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1447970847860,\"modificationTime\":1447970848137,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b8ef1a7b-b44e-404a-ba62-ab425e4e759d',
  'set-cookie': [ 'UserPrincipalSession=b333db64-1de4-4aa5-8fd5-0269c15ffc16; path=/; secure; HttpOnly' ],
  'server-perf': '[b8ef1a7bb44e404aba62ab425e4e759d][ AuthTime::1906.66331353962::PostAuthTime::34968.7526196305 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:181 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:181 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 19 Nov 2015 22:07:29 GMT',
  connection: 'close',
  'content-length': '223' });
 return result; }]];