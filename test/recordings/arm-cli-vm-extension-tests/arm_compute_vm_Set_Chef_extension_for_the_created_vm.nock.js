// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99',
    name: 'Pay-As-You-Go',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: 'abeb039a-5e53-40ee-b48f-0c99bdc99d15',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/resourceGroups/xplatTestGExtension9012/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"8c992c67-dc96-47f1-8ebd-4f2951eee8eb\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServerEssentials\",\r\n        \"offer\": \"WindowsServerEssentials\",\r\n        \"sku\": \"WindowsServerEssentials\",\r\n        \"version\": \"1.0.20131018\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"clif263379c6ff6dc95-os-1475855054287\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext2584.blob.core.windows.net/xplatstoragecntext923/clif263379c6ff6dc95-os-1475855054287.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/resourceGroups/xplatTestGExtension9012/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstoragext2584.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Azure.Diagnostics\",\r\n        \"type\": \"IaaSDiagnostics\",\r\n        \"typeHandlerVersion\": \"1.5\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"settings\": {\"xmlCfg\":\"PFdhZENmZz48RGlhZ25vc3RpY01vbml0b3JDb25maWd1cmF0aW9uIG92ZXJhbGxRdW90YUluTUI9IjQwOTYiPjxEaWFnbm9zdGljSW5mcmFzdHJ1Y3R1cmVMb2dzIHNjaGVkdWxlZFRyYW5zZmVyUGVyaW9kPSJQVDFNIiBzY2hlZHVsZWRUcmFuc2ZlckxvZ0xldmVsRmlsdGVyPSJXYXJuaW5nIi8+PFBlcmZvcm1hbmNlQ291bnRlcnMgc2NoZWR1bGVkVHJhbnNmZXJQZXJpb2Q9IlBUMU0iPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQcm9jZXNzb3IoX1RvdGFsKVwlIFByb2Nlc3NvciBUaW1lIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iUGVyY2VudCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9IkNQVSB1dGlsaXphdGlvbiIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUHJvY2Vzc29yKF9Ub3RhbClcJSBQcml2aWxlZ2VkIFRpbWUiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJQZXJjZW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iQ1BVIHByaXZpbGVnZWQgdGltZSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUHJvY2Vzc29yKF9Ub3RhbClcJSBVc2VyIFRpbWUiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJQZXJjZW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iQ1BVIHVzZXIgdGltZSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUHJvY2Vzc29yIEluZm9ybWF0aW9uKF9Ub3RhbClcUHJvY2Vzc29yIEZyZXF1ZW5jeSIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkNvdW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iQ1BVIGZyZXF1ZW5jeSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcU3lzdGVtXFByb2Nlc3NlcyIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkNvdW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iUHJvY2Vzc2VzIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQcm9jZXNzKF9Ub3RhbClcVGhyZWFkIENvdW50IiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQ291bnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJUaHJlYWRzIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQcm9jZXNzKF9Ub3RhbClcSGFuZGxlIENvdW50IiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQ291bnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJIYW5kbGVzIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxNZW1vcnlcJSBDb21taXR0ZWQgQnl0ZXMgSW4gVXNlIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iUGVyY2VudCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9Ik1lbW9yeSB1c2FnZSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTWVtb3J5XEF2YWlsYWJsZSBCeXRlcyIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkJ5dGVzIj48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iTWVtb3J5IGF2YWlsYWJsZSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTWVtb3J5XENvbW1pdHRlZCBCeXRlcyIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkJ5dGVzIj48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iTWVtb3J5IGNvbW1pdHRlZCIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTWVtb3J5XENvbW1pdCBMaW1pdCIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkJ5dGVzIj48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iTWVtb3J5IGNvbW1pdCBsaW1pdCIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTWVtb3J5XFBvb2wgUGFnZWQgQnl0ZXMiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJCeXRlcyI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9Ik1lbW9yeSBwYWdlZCBwb29sIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxNZW1vcnlcUG9vbCBOb25wYWdlZCBCeXRlcyIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkJ5dGVzIj48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iTWVtb3J5IG5vbi1wYWdlZCBwb29sIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQaHlzaWNhbERpc2soX1RvdGFsKVwlIERpc2sgVGltZSIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IlBlcmNlbnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJEaXNrIGFjdGl2ZSB0aW1lIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQaHlzaWNhbERpc2soX1RvdGFsKVwlIERpc2sgUmVhZCBUaW1lIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iUGVyY2VudCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9IkRpc2sgYWN0aXZlIHJlYWQgdGltZSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUGh5c2ljYWxEaXNrKF9Ub3RhbClcJSBEaXNrIFdyaXRlIFRpbWUiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJQZXJjZW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iRGlzayBhY3RpdmUgd3JpdGUgdGltZSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUGh5c2ljYWxEaXNrKF9Ub3RhbClcRGlzayBUcmFuc2ZlcnMvc2VjIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQ291bnRQZXJTZWNvbmQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJEaXNrIG9wZXJhdGlvbnMiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFBoeXNpY2FsRGlzayhfVG90YWwpXERpc2sgUmVhZHMvc2VjIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQ291bnRQZXJTZWNvbmQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJEaXNrIHJlYWQgb3BlcmF0aW9ucyIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUGh5c2ljYWxEaXNrKF9Ub3RhbClcRGlzayBXcml0ZXMvc2VjIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQ291bnRQZXJTZWNvbmQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJEaXNrIHdyaXRlIG9wZXJhdGlvbnMiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFBoeXNpY2FsRGlzayhfVG90YWwpXERpc2sgQnl0ZXMvc2VjIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQnl0ZXNQZXJTZWNvbmQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJEaXNrIHNwZWVkIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQaHlzaWNhbERpc2soX1RvdGFsKVxEaXNrIFJlYWQgQnl0ZXMvc2VjIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQnl0ZXNQZXJTZWNvbmQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJEaXNrIHJlYWQgc3BlZWQiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFBoeXNpY2FsRGlzayhfVG90YWwpXERpc2sgV3JpdGUgQnl0ZXMvc2VjIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQnl0ZXNQZXJTZWNvbmQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJEaXNrIHdyaXRlIHNwZWVkIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQaHlzaWNhbERpc2soX1RvdGFsKVxBdmcuIERpc2sgUXVldWUgTGVuZ3RoIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQ291bnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJEaXNrIGF2ZXJhZ2UgcXVldWUgbGVuZ3RoIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQaHlzaWNhbERpc2soX1RvdGFsKVxBdmcuIERpc2sgUmVhZCBRdWV1ZSBMZW5ndGgiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJDb3VudCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9IkRpc2sgYXZlcmFnZSByZWFkIHF1ZXVlIGxlbmd0aCIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUGh5c2ljYWxEaXNrKF9Ub3RhbClcQXZnLiBEaXNrIFdyaXRlIFF1ZXVlIExlbmd0aCIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkNvdW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iRGlzayBhdmVyYWdlIHdyaXRlIHF1ZXVlIGxlbmd0aCIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTG9naWNhbERpc2soX1RvdGFsKVwlIEZyZWUgU3BhY2UiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJQZXJjZW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iRGlzayBmcmVlIHNwYWNlIChwZXJjZW50YWdlKSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTG9naWNhbERpc2soX1RvdGFsKVxGcmVlIE1lZ2FieXRlcyIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkNvdW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iRGlzayBmcmVlIHNwYWNlIChNQikiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PC9QZXJmb3JtYW5jZUNvdW50ZXJzPjxXaW5kb3dzRXZlbnRMb2cgc2NoZWR1bGVkVHJhbnNmZXJQZXJpb2Q9IlBUMU0iPjxEYXRhU291cmNlIG5hbWU9IkFwcGxpY2F0aW9uISpbU3lzdGVtWyhMZXZlbCA9IDEgb3IgTGV2ZWwgPSAyKV1dIi8+PERhdGFTb3VyY2UgbmFtZT0iU2VjdXJpdHkhKltTeXN0ZW1bKExldmVsID0gMSBvciBMZXZlbCA9IDIpXSIvPjxEYXRhU291cmNlIG5hbWU9IlN5c3RlbSEqW1N5c3RlbVsoTGV2ZWwgPSAxIG9yIExldmVsID0gMildXSIvPjwvV2luZG93c0V2ZW50TG9nPjxNZXRyaWNzIHJlc291cmNlSWQ9Ii9zdWJzY3JpcHRpb25zL2UwMGQyYjNmLTNiOTQtNGRmYy1hZThlLWNhMzRjOGJhMWE5OS9yZXNvdXJjZUdyb3Vwcy94cGxhdFRlc3RHRXh0ZW5zaW9uOTAxMi9wcm92aWRlcnMvTWljcm9zb2Z0LkNvbXB1dGUvdmlydHVhbE1hY2hpbmVzL3hwbGF0dm1FeHQiPjxNZXRyaWNBZ2dyZWdhdGlvbiBzY2hlZHVsZWRUcmFuc2ZlclBlcmlvZD0iUFQxSCIvPjxNZXRyaWNBZ2dyZWdhdGlvbiBzY2hlZHVsZWRUcmFuc2ZlclBlcmlvZD0iUFQxTSIvPjwvTWV0cmljcz48L0RpYWdub3N0aWNNb25pdG9yQ29uZmlndXJhdGlvbj48L1dhZENmZz4=\",\"ladCfg\":null,\"storageAccount\":\"xplatstoragext2584\"},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/resourceGroups/xplatTestGExtension9012/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/IaaSDiagnostics\",\r\n      \"name\": \"IaaSDiagnostics\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"eastus\"\r\n    },\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"VMAccessAgent\",\r\n        \"typeHandlerVersion\": \"2.0\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/resourceGroups/xplatTestGExtension9012/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/VMAccessAgent\",\r\n      \"name\": \"VMAccessAgent\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"eastus\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/resourceGroups/xplatTestGExtension9012/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '11837',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '90b312a9-a01c-4368-a446-25dd0f6f1f5c_131201851524669513',
  'x-ms-request-id': '780f5f46-c4b8-47b0-900d-c9fb67e8290d',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '28fde290-018d-49ca-adb3-393947a27daa',
  'x-ms-routing-request-id': 'WESTINDIA:20161007T155837Z:28fde290-018d-49ca-adb3-393947a27daa',
  date: 'Fri, 07 Oct 2016 15:58:36 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/eastus/publishers/Chef.Bootstrap.WindowsAzure/artifacttypes/vmextension/types/ChefClient/versions?api-version=2016-03-30')
  .reply(200, "[\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"11.10.4\",\r\n    \"id\": \"/Subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/Providers/Microsoft.Compute/Locations/eastus/Publishers/Chef.Bootstrap.WindowsAzure/ArtifactTypes/VMExtension/Types/ChefClient/Versions/11.10.4\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"11.12.0.0\",\r\n    \"id\": \"/Subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/Providers/Microsoft.Compute/Locations/eastus/Publishers/Chef.Bootstrap.WindowsAzure/ArtifactTypes/VMExtension/Types/ChefClient/Versions/11.12.0.0\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"11.18.6.2\",\r\n    \"id\": \"/Subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/Providers/Microsoft.Compute/Locations/eastus/Publishers/Chef.Bootstrap.WindowsAzure/ArtifactTypes/VMExtension/Types/ChefClient/Versions/11.18.6.2\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"1207.12.3.0\",\r\n    \"id\": \"/Subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/Providers/Microsoft.Compute/Locations/eastus/Publishers/Chef.Bootstrap.WindowsAzure/ArtifactTypes/VMExtension/Types/ChefClient/Versions/1207.12.3.0\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"1210.12.104.1000\",\r\n    \"id\": \"/Subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/Providers/Microsoft.Compute/Locations/eastus/Publishers/Chef.Bootstrap.WindowsAzure/ArtifactTypes/VMExtension/Types/ChefClient/Versions/1210.12.104.1000\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"1210.12.105.1001\",\r\n    \"id\": \"/Subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/Providers/Microsoft.Compute/Locations/eastus/Publishers/Chef.Bootstrap.WindowsAzure/ArtifactTypes/VMExtension/Types/ChefClient/Versions/1210.12.105.1001\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1681',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'eef02daa-ce40-468c-836e-6614b44f90b4',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14909',
  'x-ms-correlation-request-id': '9403e7a2-6d6e-4858-a6b0-b9c54e077847',
  'x-ms-routing-request-id': 'WESTINDIA:20161007T155839Z:9403e7a2-6d6e-4858-a6b0-b9c54e077847',
  date: 'Fri, 07 Oct 2016 15:58:38 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/resourceGroups/xplatTestGExtension9012/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/ChefClient?api-version=2016-03-30', '*')
  .reply(201, "{\r\n  \"properties\": {\r\n    \"publisher\": \"Chef.Bootstrap.WindowsAzure\",\r\n    \"type\": \"ChefClient\",\r\n    \"typeHandlerVersion\": \"1210.12\",\r\n    \"autoUpgradeMinorVersion\": false,\r\n    \"settings\": {\"client_rb\":\"log_level        :info\\nlog_location     \\\"c:/chef/logs\\\"\\nchef_server_url  \\\"https://api.opscode.com/organizations/orgname\\\"\\nvalidation_client_name \\t\\\"orgname-validator\\\"\"},\r\n    \"provisioningState\": \"Creating\"\r\n  },\r\n  \"id\": \"/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/resourceGroups/xplatTestGExtension9012/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/ChefClient\",\r\n  \"name\": \"ChefClient\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '715',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/eastus/operations/995204d6-271d-4060-858a-37853c7460cf?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '90b312a9-a01c-4368-a446-25dd0f6f1f5c_131201851524669513',
  'x-ms-request-id': '995204d6-271d-4060-858a-37853c7460cf',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '66f52c5b-5682-4d46-840e-908fbb984e5f',
  'x-ms-routing-request-id': 'WESTINDIA:20161007T155845Z:66f52c5b-5682-4d46-840e-908fbb984e5f',
  date: 'Fri, 07 Oct 2016 15:58:44 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/eastus/operations/995204d6-271d-4060-858a-37853c7460cf?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-10-07T15:58:43.2118498+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"995204d6-271d-4060-858a-37853c7460cf\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '90b312a9-a01c-4368-a446-25dd0f6f1f5c_131201851524669513',
  'x-ms-request-id': '35209762-8a5f-4c91-b90d-fbb59f734ab8',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14908',
  'x-ms-correlation-request-id': 'e9e8534f-889d-4924-9f40-911657a2d4ff',
  'x-ms-routing-request-id': 'WESTINDIA:20161007T155917Z:e9e8534f-889d-4924-9f40-911657a2d4ff',
  date: 'Fri, 07 Oct 2016 15:59:16 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/eastus/operations/995204d6-271d-4060-858a-37853c7460cf?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-10-07T15:58:43.2118498+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"995204d6-271d-4060-858a-37853c7460cf\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '90b312a9-a01c-4368-a446-25dd0f6f1f5c_131201851524669513',
  'x-ms-request-id': 'bfaf59d2-e910-4582-b93f-3a6b21d475a4',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '6af5603b-68fa-411a-81ff-c6649628d920',
  'x-ms-routing-request-id': 'WESTINDIA:20161007T155949Z:6af5603b-68fa-411a-81ff-c6649628d920',
  date: 'Fri, 07 Oct 2016 15:59:48 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/eastus/operations/995204d6-271d-4060-858a-37853c7460cf?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-10-07T15:58:43.2118498+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"995204d6-271d-4060-858a-37853c7460cf\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '90b312a9-a01c-4368-a446-25dd0f6f1f5c_131201851524669513',
  'x-ms-request-id': '3da3888d-6756-43db-9e8c-c9e674e50c69',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14871',
  'x-ms-correlation-request-id': '4d365e9b-6a6b-493c-a90a-73a8a9c806e7',
  'x-ms-routing-request-id': 'WESTINDIA:20161007T160020Z:4d365e9b-6a6b-493c-a90a-73a8a9c806e7',
  date: 'Fri, 07 Oct 2016 16:00:19 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/eastus/operations/995204d6-271d-4060-858a-37853c7460cf?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-10-07T15:58:43.2118498+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"995204d6-271d-4060-858a-37853c7460cf\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '90b312a9-a01c-4368-a446-25dd0f6f1f5c_131201851524669513',
  'x-ms-request-id': '82f51bc6-7951-4b55-ad94-bd8b72f8bd0f',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14870',
  'x-ms-correlation-request-id': '3ce45cab-114a-410b-bff8-a986e9405655',
  'x-ms-routing-request-id': 'WESTINDIA:20161007T160051Z:3ce45cab-114a-410b-bff8-a986e9405655',
  date: 'Fri, 07 Oct 2016 16:00:51 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/eastus/operations/995204d6-271d-4060-858a-37853c7460cf?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-10-07T15:58:43.2118498+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"995204d6-271d-4060-858a-37853c7460cf\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '90b312a9-a01c-4368-a446-25dd0f6f1f5c_131201851524669513',
  'x-ms-request-id': '9cd49383-8d5e-467a-8724-25702d5c7a42',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '8643f74e-b9d3-42a3-8240-8a82a63ef89e',
  'x-ms-routing-request-id': 'WESTINDIA:20161007T160123Z:8643f74e-b9d3-42a3-8240-8a82a63ef89e',
  date: 'Fri, 07 Oct 2016 16:01:22 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/eastus/operations/995204d6-271d-4060-858a-37853c7460cf?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-10-07T15:58:43.2118498+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"995204d6-271d-4060-858a-37853c7460cf\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '90b312a9-a01c-4368-a446-25dd0f6f1f5c_131201851524669513',
  'x-ms-request-id': '066a87e7-812f-4340-aa1d-e6b95822a01f',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '9eded5d1-c600-4a23-9e4b-e41573ffe6db',
  'x-ms-routing-request-id': 'WESTINDIA:20161007T160155Z:9eded5d1-c600-4a23-9e4b-e41573ffe6db',
  date: 'Fri, 07 Oct 2016 16:01:54 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/eastus/operations/995204d6-271d-4060-858a-37853c7460cf?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-10-07T15:58:43.2118498+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"995204d6-271d-4060-858a-37853c7460cf\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '90b312a9-a01c-4368-a446-25dd0f6f1f5c_131201851524669513',
  'x-ms-request-id': 'f3794363-aa7e-4067-b82b-fff94d1f41d1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '6bc97ffe-5b28-4d89-b495-155b91b1f22d',
  'x-ms-routing-request-id': 'WESTINDIA:20161007T160226Z:6bc97ffe-5b28-4d89-b495-155b91b1f22d',
  date: 'Fri, 07 Oct 2016 16:02:26 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/providers/Microsoft.Compute/locations/eastus/operations/995204d6-271d-4060-858a-37853c7460cf?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-10-07T15:58:43.2118498+00:00\",\r\n  \"endTime\": \"2016-10-07T16:02:28.6833123+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"995204d6-271d-4060-858a-37853c7460cf\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '90b312a9-a01c-4368-a446-25dd0f6f1f5c_131201851524669513',
  'x-ms-request-id': 'ee73ed22-8c5b-40f6-9c58-9023712c2f2f',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': 'e4238781-3c84-4135-bbf6-cbf83a1328f5',
  'x-ms-routing-request-id': 'WESTINDIA:20161007T160258Z:e4238781-3c84-4135-bbf6-cbf83a1328f5',
  date: 'Fri, 07 Oct 2016 16:02:58 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/resourceGroups/xplatTestGExtension9012/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/ChefClient?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"publisher\": \"Chef.Bootstrap.WindowsAzure\",\r\n    \"type\": \"ChefClient\",\r\n    \"typeHandlerVersion\": \"1210.12\",\r\n    \"autoUpgradeMinorVersion\": false,\r\n    \"settings\": {\"client_rb\":\"log_level        :info\\nlog_location     \\\"c:/chef/logs\\\"\\nchef_server_url  \\\"https://api.opscode.com/organizations/orgname\\\"\\nvalidation_client_name \\t\\\"orgname-validator\\\"\"},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/e00d2b3f-3b94-4dfc-ae8e-ca34c8ba1a99/resourceGroups/xplatTestGExtension9012/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/ChefClient\",\r\n  \"name\": \"ChefClient\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '716',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '90b312a9-a01c-4368-a446-25dd0f6f1f5c_131201851524669513',
  'x-ms-request-id': '5d84f986-2caf-438f-b9be-22e82e44e4dd',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': 'ea576f87-b0bf-4152-b8d7-ba9f0ab96318',
  'x-ms-routing-request-id': 'WESTINDIA:20161007T160259Z:ea576f87-b0bf-4152-b8d7-ba9f0ab96318',
  date: 'Fri, 07 Oct 2016 16:02:59 GMT' });
 return result; }]];