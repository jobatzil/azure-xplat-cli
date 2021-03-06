﻿/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var should = require('should');
var util = require('util');
var _ = require('underscore');

var testUtils = require('../../../util/util');
var CLITest = require('../../../framework/arm-cli-test');
var utils = require('../../../../lib/util/utils');
var NetworkTestUtil = require('../../../util/networkTestUtil');
var tagUtils = require('../../../../lib/commands/arm/tag/tagUtils');
var networkUtil = new NetworkTestUtil();

var generatorUtils = require('../../../../lib/util/generatorUtils');
var profile = require('../../../../lib/util/profile');
var $ = utils.getLocaleString;

var testPrefix = 'arm-network-lb-frontend-ip-tests',
  groupName = 'xplat-test-frontend-ip',
  location;
var index = 0;

var loadBalancerName;
var loadBalancerId;
var virtualNetworkName;
var virtualNetworkId;
var subnetName;
var subnetId;
var publicIPAddressName;
var publicIPAddressId;
var frontendIPConfigurations = {
  name: 'frontendIPConfigurationName'
}
frontendIPConfigurations.loadBalancerName = 'loadBalancerName';
frontendIPConfigurations.virtualNetworkName = 'virtualNetworkName';
frontendIPConfigurations.subnetName = 'subnetName';
frontendIPConfigurations.publicIPAddressName = 'publicIPAddressName';

var privateIpAllocationMethodDynamic = 'Dynamic';

var subnet = {
  addressPrefix: '10.0.0.0/16',
  addressPrefixNew: '10.0.0.0/24'
};
var virtualNetwork = {
  location: 'westus'
};
var loadBalancer = {
  location: 'westus'
};
var publicIPAddress = {
  location: 'westus'
};
var removePrivateIp = {
  privateIPAddress: '10.0.0.42',
  privateIPAddressNew: '',
  loadBalancerName: 'loadBalancerName',
  virtualNetworkName: 'virtualNetworkName',
  subnetName: 'subnetName',
  name: 'RemovePrivateIpName',
  group: groupName
};

var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'westus'
}];

describe('arm', function () {
  describe('network', function () {
    var suite, retry = 5;
    var hour = 60 * 60000;

    before(function (done) {
      suite = new CLITest(this, testPrefix, requiredEnvironment);
      suite.setupSuite(function () {
        location = frontendIPConfigurations.location || process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);
        frontendIPConfigurations.location = location;
        frontendIPConfigurations.group = groupName;
        frontendIPConfigurations.name = suite.isMocked ? frontendIPConfigurations.name : suite.generateId(frontendIPConfigurations.name, null);
        if(!suite.isPlayback()) {
          networkUtil.createGroup(groupName, location, suite, function () {
            var cmd = 'network lb create -g {1} -n loadBalancerName --location {location} --json'.formatArgs(loadBalancer, groupName);
            testUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              var output = JSON.parse(result.text);
              removePrivateIp.loadBalancerId = suite.isMocked ? output.id : suite.generateId(removePrivateIp.loadBalancerId, null);
              var cmd = 'network vnet create -g {1} -n virtualNetworkName --location {location} --json'.formatArgs(virtualNetwork, groupName);
              testUtils.executeCommand(suite, retry, cmd, function (result) {
                result.exitStatus.should.equal(0);
                var output = JSON.parse(result.text);
                removePrivateIp.virtualNetworkId = suite.isMocked ? output.id : suite.generateId(removePrivateIp.virtualNetworkId, null);
                var cmd = 'network vnet subnet create -g {1} -n subnetName --address-prefix {addressPrefix} --vnet-name virtualNetworkName --json'.formatArgs(subnet, groupName);
                testUtils.executeCommand(suite, retry, cmd, function (result) {
                  result.exitStatus.should.equal(0);
                  var output = JSON.parse(result.text);
                  removePrivateIp.subnetId = suite.isMocked ? output.id : suite.generateId(removePrivateIp.subnetId, null);
                  var cmd = 'network public-ip create -g {1} -n publicIPAddressName --location {location} --json'.formatArgs(publicIPAddress, groupName);
                  testUtils.executeCommand(suite, retry, cmd, function (result) {
                    result.exitStatus.should.equal(0);
                    var output = JSON.parse(result.text);
                    removePrivateIp.publicIPAddressId = suite.isMocked ? output.id : suite.generateId(removePrivateIp.publicIPAddressId, null);
                    done();
                  });
                });
              });
            });
          });
        } else {
          var subscriptionId = profile.current.getSubscription().id;
          removePrivateIp.loadBalancerId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'loadBalancers', removePrivateIp.loadBalancerName) : suite.generateId(removePrivateIp.loadBalancerId, null)
          removePrivateIp.virtualNetworkId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'virtualNetworks', removePrivateIp.virtualNetworkName) : suite.generateId(removePrivateIp.virtualNetworkId, null)
          removePrivateIp.subnetId = suite.isMocked ? generatorUtils.generateResourceIdCommon(subscriptionId, groupName, 'subnets', removePrivateIp.subnetName) : suite.generateId(removePrivateIp.subnetId, null)
          done();
        }
      });
    });
    after(function (done) {
      this.timeout(hour);
      networkUtil.deleteGroup(groupName, suite, function () {
        suite.teardownSuite(done);
      });
    });
    beforeEach(function (done) {
      suite.setupTest(done);
    });
    afterEach(function (done) {
      suite.teardownTest(done);
    });

    describe('frontend ip configurations', function () {
      this.timeout(hour);
      it('create should create frontend ip configurations', function (done) {
        var cmd = 'network lb frontend-ip create -g {group} -n {name}  --lb-name {loadBalancerName}  --subnet-vnet-name {virtualNetworkName} --subnet-name {subnetName} --json'.formatArgs(frontendIPConfigurations);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(frontendIPConfigurations.name);
          done();
        });
      });
      it('show should display frontend ip configurations details', function (done) {
        var cmd = 'network lb frontend-ip show -g {group} -n {name} --lb-name {loadBalancerName} --json'.formatArgs(frontendIPConfigurations);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);

          output.name.should.equal(frontendIPConfigurations.name);
          done();
        });
      });
      it('set should update frontend ip configurations', function (done) {
        var cmd = 'network lb frontend-ip set -g {group} -n {name}  --lb-name {loadBalancerName} --json'.formatArgs(frontendIPConfigurations);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(frontendIPConfigurations.name);
          done();
        });
      });
      it('list should display all frontend ip configurations in resource group', function (done) {
        var cmd = 'network lb frontend-ip list -g {group} --lb-name {loadBalancerName} --json'.formatArgs(frontendIPConfigurations);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var outputs = JSON.parse(result.text);
          _.some(outputs, function (output) {
            return output.name === frontendIPConfigurations.name;
          }).should.be.true;
          done();
        });
      });

      it('create should pass for remove private ip', function (done) {
        var cmd = ('network lb frontend-ip create -g {group} -n {name} --private-ip-address {privateIPAddress} --lb-name {loadBalancerName}  --subnet-vnet-name {virtualNetworkName} --subnet-name {subnetName} --json').formatArgs(removePrivateIp);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(removePrivateIp.name);
          output.privateIPAddress.toLowerCase().should.equal(removePrivateIp.privateIPAddress.toLowerCase());
          output.subnet.id.should.containEql(removePrivateIp.subnetName);

          var cmd = ('network lb frontend-ip set -g {group} -n {name} --private-ip-address {privateIPAddressNew} --lb-name {loadBalancerName}  --json').formatArgs(removePrivateIp);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            var output = JSON.parse(result.text);
            output.name.should.equal(removePrivateIp.name);
            output.privateIPAllocationMethod.toLowerCase().should.be.equal(privateIpAllocationMethodDynamic.toLowerCase());
            done();
          });
        });
      });
    });
  });
});
