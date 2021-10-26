/* eslint-disable no-unused-vars */
const path = require("path");

exports.config = {
  specs: ["./tests/e2e/features/*.feature"],
  logLevel: "trace",
  outputDir: path.join(__dirname, "tests/e2e/logs"),
  bail: 0,
  waitforTimeout: 1000,

  specFileRetries: 1,
  specFileRetriesDeferred: false,
  reporters: ["spec"],
  framework: "cucumber",
  cucumberOpts: {
    requireModule: ["@babel/register"],
    require: ["./tests/e2e/step-definitions/*.ts"],
  },
  /**
   * Gets executed once before all workers get launched.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  onPrepare: function (config, capabilities) {},
  /**
   * Gets executed before a worker process is spawned and can be used to initialise specific service
   * for that worker as well as modify runtime environments in an async fashion.
   * @param  {String} cid      capability id (e.g 0-0)
   * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
   * @param  {[type]} specs    specs to be run in the worker process
   * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
   * @param  {[type]} execArgv list of string arguments passed to the worker process
   */
  onWorkerStart: function (cid, caps, specs, args, execArgv) {},
  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  beforeSession: function (config, capabilities, specs) {},
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  before: function (capabilities, specs) {},
  /**
   * Hook that gets executed before the suite starts
   * @param {Object} suite suite details
   */
  beforeSuite: function (suite) {},
  /**
   * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
   * beforeEach in Mocha)
   * stepData and world are Cucumber framework specific
   */
  beforeHook: function (test, context /*, stepData, world*/) {},
  /**
   * Hook that gets executed _after_ a hook within the suite ends (e.g. runs after calling
   * afterEach in Mocha)
   * stepData and world are Cucumber framework specific
   */
  afterHook: function (
    test,
    context,
    { error, result, duration, passed, retries } /*, stepData, world*/
  ) {},
  /**
   * Function to be executed before a test (in Mocha/Jasmine) starts.
   */
  beforeTest: function (test, context) {},
  //
  /**
   * Runs before a WebdriverIO command gets executed.
   * @param {String} commandName command name
   * @param {Array} args arguments that command would receive
   */
  beforeCommand: function (commandName, args) {},
  /**
   * Runs after a WebdriverIO command gets executed.
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {Number} result 0 - command success, 1 - command error
   * @param {Object} error error object if any
   */
  afterCommand: function (commandName, args, result, error) {},
  /**
   * Function to be executed after a test (in Mocha/Jasmine) ends.
   */
  afterTest: function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {},
  /**
   * Hook that gets executed after the suite has ended
   * @param {Object} suite suite details
   */
  afterSuite: function (suite) {},
  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {Number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  after: function (result, capabilities, specs) {},
  /**
   * Gets executed right after terminating the webdriver session.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  afterSession: function (config, capabilities, specs) {},
  /**
   * Gets executed after all workers got shut down and the process is about to exit. An error
   * thrown in the onComplete hook will result in the test run failing.
   * @param {Object} exitCode 0 - success, 1 - fail
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {<Object>} results object containing test results
   */
  onComplete: function (exitCode, config, capabilities, results) {},
  /**
   * Gets executed when a refresh happens.
   * @param {String} oldSessionId session ID of the old session
   * @param {String} newSessionId session ID of the new session
   */
  onReload: function (oldSessionId, newSessionId) {},
  //
  // Cucumber specific hooks
  beforeFeature: function (uri, feature, scenarios) {},
  beforeScenario: function (uri, feature, scenario, sourceLocation) {},
  beforeStep: function ({ uri, feature, step }, context) {},
  afterStep: function (
    { uri, feature, step },
    context,
    { error, result, duration, passed, retries }
  ) {},
  afterScenario: function (uri, feature, scenario, result, sourceLocation) {},
  afterFeature: function (uri, feature, scenarios) {},
};
