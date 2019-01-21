module.exports = {
    verbose: true,
    roots: [
        '<rootDir>/src'
    ],
    moduleDirectories: ['node_modules', 'src'],
    setupTestFrameworkScriptFile: '<rootDir>/jest-setup.js',
    snapshotSerializers: [
        'enzyme-to-json/serializer'
    ]
};
