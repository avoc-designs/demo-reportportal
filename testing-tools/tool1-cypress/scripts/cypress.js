const cypress = require('cypress');
const fs = require('fs');
const glob = require('glob');
const { mergeLaunches } = require('@reportportal/agent-js-cypress/lib/mergeLaunches');

const cypressConfigFile = 'cypress.json';

const getLaunchTempFiles = () => {
  return glob.sync('rplaunch-*.tmp');
};

const deleteTempFile = (filename) => {
  fs.unlinkSync(filename);
};

cypress.run().then(
  () => {
    fs.readFile(cypressConfigFile, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      const config = JSON.parse(data);

      if (config.reporterOptions.isLaunchMergeRequired) {
        mergeLaunches(config.reporterOptions)
          .then(() => {
            const files = getLaunchTempFiles();
            files.forEach(deleteTempFile);
            console.log('Launches successfully merged!');
            process.exit(0);
          })
          .catch((err) => {
            console.error(error);
            process.exit(1);
          });
      } else {
        process.exit(0);
      }
    });
  },
  (error) => {
    console.error(error);
    const files = getLaunchTempFiles();
    files.forEach(deleteTempFile);
    process.exit(1);
  },
);