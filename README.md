<h1 style="text-align:center;">Demo Reportportal</h1>

<p style="text-align:justify;">This repository proposes reportportal as dashboard that collects information issued by the different testing tools and with this facilitates the view and study of their results.</p>

<p style="text-align:justify;">The repository consists of a single branch, in this we can find the following <b>file tree:</b></p>

* The [<b>dashboard</b>](https://github.com/avoc-designs/demo-reportportal/tree/main/dashboard) folder where we will find the [<b>docker-compose.yml</b>](https://github.com/avoc-designs/demo-reportportal/blob/main/dashboard/docker-compose.yml) file that we will use to boot following the given [instructions](https://github.com/avoc-designs/demo-reportportal/tree/main/docs/reportportal).
* Next we will find the [<b>docs</b>](https://github.com/avoc-designs/demo-reportportal/tree/main/docs) folder that contains the different <b>instructions for use and installation of the tools</b> used.
* Finally we will find the [<b>testing-tools</b>](https://github.com/avoc-designs/demo-reportportal/tree/main/testing-tools) folder that will <b>contain the different tools used</b> for the demonstration.

* [dashboard](./dashboard/)
  * [docker-compose](./dashboard/docker-compose.yml)
* [docs](./docs/)
  * [reportportal](./docs/reportportal/)
    * [integrations](./docs/reportportal/integrations/)
      * [cypress](./docs/reportportal/integrations/cypress-integration.md)
      * [jest](./docs/reportportal/integrations/jest-integration.md)
    * [installation-guide](./docs/reportportal/reportportal-installation-guide.md)
  * [testing-tools](./docs/testing-tools/)
    * [tool1-cypress](./docs/testing-tools/tool1-cypress/)
      * [installation-guide](./docs/testing-tools/tool1-cypress/cypress-instalation-guide.md)
      * [run-project](./docs/testing-tools/tool1-cypress/run-cypress-project.md)
    * [tool2-jest](./docs/testing-tools/tool2-jest/) 
      * [installation-guide](./docs/testing-tools/tool2-jest/jest-instalation.md)
      * [run-project](./docs/testing-tools/tool2-jest/run-jest-project.md)
* [testing-tools](./testing-tools/)
  * [tool1-cypress](./testing-tools/tool1-cypress/)
    * [cypress](./testing-tools/tool1-cypress/cypress/)
      * [fixtures](./testing-tools/tool1-cypress/cypress/fixtures/): includes some fixtures that help the tests.
      * [integration](./testing-tools/tool1-cypress/cypress/integration/): folder containing the cypress tests.
      * [plugin](./testing-tools/tool1-cypress/cypress/plugins/): contains the various configuration files for integration with other tools.
      * [support](./testing-tools/tool1-cypress/cypress/support/) : In this folder we can find support files for the different configurations.
    * [scripts](./testing-tools/tool1-cypress/scripts/): contains executables that in this case allow integration with the reportportal tool
    * [cypress.json](./testing-tools/tool1-cypress/cypress.json)
    * [package-lock.json](./testing-tools/tool1-cypress/package-lock.json)
    * [package.json](./testing-tools/tool1-cypress/package.json)
  * [tool2-jest](./testing-tools/tool2-jest/)
    * [__ tests __](./testing-tools/tool2-jest/__tests__/): the different unit tests are found in this.
    * [jest.config.js](./testing-tools/tool2-jest/jest.config.js)
    * [package-lock.json](./testing-tools/tool2-jest/package-lock.json)
    * [package.json](./testing-tools/tool2-jest/package.json)
  
  
---
<h2 style="text-align: center;">
Index</h2>