
exports.config = {
   capabilities: {'marionette': 'true','browserName': 'chrome'},
   //capabilities: {'browserName': 'firefox'},
   //multiCapabilities: [{'browserName': 'firefox','marionette': 'true'},{'browserName': 'chrome'}],
   framework: 'jasmine2',
   specs: ['spec.js'],
   directconnect: 'true',
};
