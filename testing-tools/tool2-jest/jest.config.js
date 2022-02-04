module.exports = {
    testRunner: 'jest-circus/runner',
    testRegex: ['/__tests__/.*.spec.js?$'],
    reporters: [
        'default',
        [
            '@reportportal/agent-js-jest',
            {
                token: 'f122eabe-37fe-49fb-b48b-41ca1c75ebd5',
                endpoint: 'http://localhost:8080/api/v1',
                launch: 'superadmin_TEST_EXAMPLE',
                project: 'superadmin_personal',
                description: 'Testing jest',
                attributes: [
                    {
                        'key': 'YourKey',
                        'value': 'YourValue'
                    },
                    {
                        'value': 'YourValue'
                    },
                ]
            }
        ]
    ],
};