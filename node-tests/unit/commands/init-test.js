'use strict';

var td              = require('testdouble');
var expect          = require('../../helpers/expect');
var mockProject     = require('../../fixtures/ember-cordova-mock/project');
var CreateTask      = require('../../../lib/tasks/create-project');
var Promise         = require('rsvp').Promise;

describe('Init Command', function() {
  var init;
  var called = false;

  beforeEach(function() {
    called = false;

    td.replace(CreateTask.prototype, 'run', function() {
      called = true;
      return Promise.resolve();
    });

    var InitCommand     = require('../../../lib/commands/init');
    init = new InitCommand({
      project: mockProject.project,
      ui: mockProject.ui
    });
  });

  afterEach(function() {
    td.reset();
  });

  it('runs the init util', function() {
    return init.run({}).then(function() {
      expect(called).to.equal(true);
    });
  });

  xit('sets cordovaId, name & templatePath', function() {
  });
});
