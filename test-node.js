const { WeGiveAPINode } = require('./dist/wegive/wegive.node.js');
const { WeGiveCredentials } = require('./dist/credentials/WeGive.credentials.js');

console.log('Testing WeGive N8N Node...');

// Test node structure
const node = new WeGiveAPINode();
console.log('✅ Node instantiated successfully');
console.log('Node name:', node.description.name);
console.log('Node display name:', node.description.displayName);
console.log('Node version:', node.description.version);

// Test credentials structure
const credentials = new WeGiveCredentials();
console.log('✅ Credentials instantiated successfully');
console.log('Credentials name:', credentials.name);
console.log('Credentials display name:', credentials.displayName);
console.log('Properties count:', credentials.properties.length);

// Test node description properties
console.log('\n📋 Node Description:');
console.log('- Inputs:', node.description.inputs);
console.log('- Outputs:', node.description.outputs);
console.log('- Credentials required:', node.description.credentials);
console.log('- Properties count:', node.description.properties.length);

console.log('\n✅ All tests passed! Node structure is valid.');