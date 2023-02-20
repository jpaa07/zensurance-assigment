import path from 'node:path'

export const config: WebdriverIO.Config = {
    capabilities: [
      {
        browserName: 'chrome',
        'wdio:devtoolsOptions': {
          headless: false,
        },
      },
    ],
    runner: 'local',
    autoCompileOpts: {
      autoCompile: true,
      tsNodeOpts: {
        transpileOnly: true,
        project: './tsconfig.json',
      },
    },

    specs: ['./features/*.feature'],
    exclude: [],
    maxInstances: 4,   
    logLevel: 'info',
    outputDir: path.resolve(__dirname, 'logs'),
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: [
      'spec',
      [
        'allure',
        {
          outputDir: './part-3/reports/allure-results',
          disableWebdriverStepsReporting: true,
          disableWebdriverScreenshotsReporting: true,
        },
      ],
    ],
    cucumberOpts: {
      require: [
        './part-3/step-definitions/given.ts',
        './part-3/step-definitions/when.ts',
        './part-3/step-definitions/then.ts',
      ],
      // <boolean> invoke formatters without executing steps
      dryRun: false,
      // <boolean> abort the run on first failure
      failFast: false,
      // <boolean> hide step definition snippets for pending steps
      source: true,
      // <boolean> fail if there are any undefined or pending steps
      strict: false,
      // <string> (expression) only execute the features or scenarios with tags matching the expression
      tagExpression: '',
      // <number> timeout for step definitions
      timeout: 60000,
      // <boolean> Enable this config to treat undefined definitions as warnings.
      ignoreUndefinedDefinitions: false,
    },
};
