//
// Copyright (c) Microsoft and contributors.  All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//

var batchUtil = require('./batch.util');

var batchPoolUtils = {};

batchPoolUtils.deployAppPackage = function (appId, appVersion, _) {
};

batchPoolUtils.deployPool = function (ncjId, poolId, properties, startCmd, options, _) {
    var client = batchUtil.createBatchServiceClient(options);
    //Check if pool already exists.
    try {
      client.pool.get(poolId, _);
      return;
    } catch (err) {
      if (!batchUtil.isNotFoundException(err)) {
        if (err.message) {
          if (typeof err.message === 'object') {
            err.message = err.message.value;
          }
        }
        throw err;
      }
    }
    var pool = { id: poolId };
    pool.metadata = [{'name': 'NCJ', 'value': ncjId}];
    pool.vmSize = properties.size;
    pool.targetDedicated = Number(properties.count);
    pool.cloudServiceConfiguration = {};
    pool.cloudServiceConfiguration.osFamily = properties.cloudServiceConfiguration.osFamily;
    pool.cloudServiceConfiguration.targetOSVersion = properties.cloudServiceConfiguration.targetOSVersion;
    pool.startTask = { commandLine: 'cmd /c ' + startCmd, runElevated: true };
    pool.applicationPackageReferences = [];
    for (var i = 0; i < properties.softwares.length; i++) {
        var appRef = {};
        var refPath = properties.softwares[i].substring(11, properties.softwares[i].length - 2).split('/');
        appRef.applicationId = refPath[refPath.length - 3];
        appRef.version = refPath[refPath.length - 1];
        pool.applicationPackageReferences.push(appRef);
    }
    try {
        client.pool.add(pool, _);
    } catch (err) {
        if (err.message) {
            if (typeof err.message === 'object') {
                err.message = err.message.value;
            }
        }
        throw err;
    }    
};

module.exports = batchPoolUtils;