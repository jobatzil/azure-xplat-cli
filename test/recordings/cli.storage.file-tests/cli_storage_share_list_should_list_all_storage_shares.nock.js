// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    name: 'Azure Storage DM Dev',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=http;TableEndpoint=http://yaxiatest.table.testrr1.xstore-test.windows-int.net/;QueueEndpoint=http://yaxiatest.queue.testrr1.xstore-test.windows-int.net/;FileEndpoint=http://yaxiatest.file.testrr1.xstore-test.windows-int.net/;BlobEndpoint=https://yaxiatest.blob.testrr1.xstore-test.windows-int.net/;AccountName=yaxiatest;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://yaxiatest.file.testrr1.xstore-test.windows-int.net:80')
  .get('/?comp=list')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"http://yaxiatest.file.testrr1.xstore-test.windows-int.net/\"><Shares><Share><Name>destshare3ac8720e</Name><Properties><Last-Modified>Tue, 23 Jun 2015 07:14:51 GMT</Last-Modified><Etag>\"0x8D27B9B6E5D6B24\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>destshare64a1c683</Name><Properties><Last-Modified>Tue, 23 Jun 2015 07:50:11 GMT</Last-Modified><Etag>\"0x8D27BA05DBA16CE\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>destshareb03d4084</Name><Properties><Last-Modified>Tue, 23 Jun 2015 07:12:32 GMT</Last-Modified><Etag>\"0x8D27B9B1B5A0A6D\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>destshareba965bcf</Name><Properties><Last-Modified>Tue, 23 Jun 2015 08:02:00 GMT</Last-Modified><Etag>\"0x8D27BA204B21C44\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>file-test-share-2ff4e401-0812-11e5-992c-efe630143475</Name><Properties><Last-Modified>Mon, 01 Jun 2015 03:57:00 GMT</Last-Modified><Etag>\"0x8D26A36256425A0\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>file-test-share-4c40c300-081b-11e5-ba4a-9f634bdc0f90</Name><Properties><Last-Modified>Mon, 01 Jun 2015 05:02:07 GMT</Last-Modified><Etag>\"0x8D26A3F3E367218\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>file-test-share-5edf4d61-081b-11e5-b2d1-a9aae0d42d9c</Name><Properties><Last-Modified>Mon, 01 Jun 2015 05:02:41 GMT</Last-Modified><Etag>\"0x8D26A3F52F40003\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>file-test-share-712b9911-081b-11e5-bc6d-cf74f9055cc8</Name><Properties><Last-Modified>Mon, 01 Jun 2015 05:03:06 GMT</Last-Modified><Etag>\"0x8D26A3F6144EC98\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>file-test-share-8b1a7a71-0812-11e5-bce7-2ff14d9a8e05</Name><Properties><Last-Modified>Mon, 01 Jun 2015 03:59:09 GMT</Last-Modified><Etag>\"0x8D26A36729E531E\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>file-test-share-a0d6fef1-0818-11e5-b666-6ddc5655d6ab</Name><Properties><Last-Modified>Mon, 01 Jun 2015 04:43:07 GMT</Last-Modified><Etag>\"0x8D26A3C96E83947\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>fileshare221245b9</Name><Properties><Last-Modified>Tue, 23 Jun 2015 13:36:49 GMT</Last-Modified><Etag>\"0x8D27BD0CA893089\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>fileshare47e9a8c1</Name><Properties><Last-Modified>Tue, 23 Jun 2015 13:28:38 GMT</Last-Modified><Etag>\"0x8D27BCFA5AD2325\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>filesharea65bce7e</Name><Properties><Last-Modified>Tue, 23 Jun 2015 13:20:45 GMT</Last-Modified><Etag>\"0x8D27BCE8BB619EA\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>filesharec198946c</Name><Properties><Last-Modified>Tue, 23 Jun 2015 13:45:05 GMT</Last-Modified><Etag>\"0x8D27BD1F27364BE\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>filesharec3b8dfff</Name><Properties><Last-Modified>Tue, 23 Jun 2015 13:23:13 GMT</Last-Modified><Etag>\"0x8D27BCEE3F54202\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>share01374617</Name><Properties><Last-Modified>Thu, 02 Jul 2015 02:18:42 GMT</Last-Modified><Etag>\"0x8D282848D33C1CF\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>share01b68276</Name><Properties><Last-Modified>Thu, 02 Jul 2015 02:24:28 GMT</Last-Modified><Etag>\"0x8D282855AF15EFD\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>share0a234448</Name><Properties><Last-Modified>Tue, 23 Jun 2015 07:00:07 GMT</Last-Modified><Etag>\"0x8D27B995F806366\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>share1270d810</Name><Properties><Last-Modified>Thu, 02 Jul 2015 02:22:09 GMT</Last-Modified><Etag>\"0x8D282850886FDED\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>share135636f7</Name><Properties><Last-Modified>Thu, 02 Jul 2015 05:40:47 GMT</Last-Modified><Etag>\"0x8D282A0C8535995\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>share1f62185d</Name><Properties><Last-Modified>Thu, 02 Jul 2015 04:30:30 GMT</Last-Modified><Etag>\"0x8D28296F63B34DB\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>share20701829</Name><Properties><Last-Modified>Thu, 02 Jul 2015 10:11:20 GMT</Last-Modified><Etag>\"0x8D282C693CC7BAB\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>share20898455</Name><Properties><Last-Modified>Thu, 02 Jul 2015 02:35:02 GMT</Last-Modified><Etag>\"0x8D28286D4D3AECC\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>share2a946644</Name><Properties><Last-Modified>Tue, 23 Jun 2015 07:38:02 GMT</Last-Modified><Etag>\"0x8D27B9EABC1A08C\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>share2e85dc58</Name><Properties><Last-Modified>Thu, 02 Jul 2015 03:40:19 GMT</Last-Modified><Etag>\"0x8D2828FF3DC8A09\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>share494b4ffc</Name><Properties><Last-Modified>Tue, 23 Jun 2015 05:13:11 GMT</Last-Modified><Etag>\"0x8D27B8A6F8D0EB9\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>share535af6ed</Name><Properties><Last-Modified>Tue, 23 Jun 2015 05:24:27 GMT</Last-Modified><Etag>\"0x8D27B8C021FD631\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>share53869e71</Name><Properties><Last-Modified>Tue, 23 Jun 2015 08:18:09 GMT</Last-Modified><Etag>\"0x8D27BA4464F0EB7\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>share573b62f4</Name><Properties><Last-Modified>Tue, 23 Jun 2015 06:35:44 GMT</Last-Modified><Etag>\"0x8D27B95F754602C\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>share5818c8c7</Name><Properties><Last-Modified>Thu, 02 Jul 2015 04:01:52 GMT</Last-Modified><Etag>\"0x8D28292F64A839C\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>share58b9150e</Name><Properties><Last-Modified>Tue, 23 Jun 2015 07:24:49 GMT</Last-Modified><Etag>\"0x8D27B9CD2E5C516\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>share5d7deee9</Name><Properties><Last-Modified>Tue, 23 Jun 2015 05:04:38 GMT</Last-Modified><Etag>\"0x8D27B893D527ED8\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>share61d9b648</Name><Properties><Last-Modified>Tue, 23 Jun 2015 07:45:07 GMT</Last-Modified><Etag>\"0x8D27B9FA8CF1FF5\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>share69dce4aa</Name><Properties><Last-Modified>Thu, 02 Jul 2015 02:20:55 GMT</Last-Modified><Etag>\"0x8D28284DBF1C4EC\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>share6c41598b</Name><Properties><Last-Modified>Tue, 23 Jun 2015 07:12:58 GMT</Last-Modified><Etag>\"0x8D27B9B2B1F2E5E\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>share93b3d839</Name><Properties><Last-Modified>Tue, 23 Jun 2015 05:06:24 GMT</Last-Modified><Etag>\"0x8D27B897CF1D0AB\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>shareafe152e0</Name><Properties><Last-Modified>Thu, 02 Jul 2015 03:11:21 GMT</Last-Modified><Etag>\"0x8D2828BE79D1C4C\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>sharec37b3fa4</Name><Properties><Last-Modified>Tue, 23 Jun 2015 06:04:59 GMT</Last-Modified><Etag>\"0x8D27B91ABCFA8D2\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>sharecc1b5057</Name><Properties><Last-Modified>Thu, 02 Jul 2015 05:08:06 GMT</Last-Modified><Etag>\"0x8D2829C377A8C8B\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>shared40035b1</Name><Properties><Last-Modified>Tue, 23 Jun 2015 07:49:20 GMT</Last-Modified><Etag>\"0x8D27BA03FB593BD\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>shared4586a36</Name><Properties><Last-Modified>Tue, 23 Jun 2015 05:36:39 GMT</Last-Modified><Etag>\"0x8D27B8DB6785FEF\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>shared467273f</Name><Properties><Last-Modified>Thu, 02 Jul 2015 05:19:20 GMT</Last-Modified><Etag>\"0x8D2829DC8BD22C4\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>sharedd4635c6</Name><Properties><Last-Modified>Thu, 02 Jul 2015 10:14:27 GMT</Last-Modified><Etag>\"0x8D282C7031A3489\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>sharee4112cd1</Name><Properties><Last-Modified>Thu, 02 Jul 2015 03:51:32 GMT</Last-Modified><Etag>\"0x8D2829184D0A6D0\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>sharef27b123b</Name><Properties><Last-Modified>Tue, 23 Jun 2015 05:26:48 GMT</Last-Modified><Etag>\"0x8D27B8C56814F0F\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>sharef929f84a</Name><Properties><Last-Modified>Thu, 02 Jul 2015 04:01:51 GMT</Last-Modified><Etag>\"0x8D28292F608FDCB\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>sharefc6d4e1a</Name><Properties><Last-Modified>Tue, 23 Jun 2015 08:01:08 GMT</Last-Modified><Etag>\"0x8D27BA1E591CBCE\"</Etag><Quota>5120</Quota></Properties></Share><Share><Name>storageclitest3</Name><Properties><Last-Modified>Fri, 03 Jul 2015 06:03:27 GMT</Last-Modified><Etag>\"0x8D2836D1CCF8585\"</Etag><Quota>10</Quota></Properties></Share><Share><Name>xytest</Name><Properties><Last-Modified>Mon, 01 Jun 2015 02:45:50 GMT</Last-Modified><Etag>\"0x8D26A2C34C1FCB7\"</Etag><Quota>5120</Quota></Properties></Share></Shares><NextMarker /></EnumerationResults>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'cb3bddef-001a-001f-0256-b5dd41000000',
  'x-ms-version': '2015-02-21',
  date: 'Fri, 03 Jul 2015 06:03:42 GMT' });
 return result; }]];