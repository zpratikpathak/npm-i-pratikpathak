const { execSync } = require('child_process');
const displayAbout = require('./index.js');

console.log('Testing pratikpathak package...\n');

try {
  // Test the main function
  console.log('✓ Testing displayAbout function:');
  displayAbout();
  
  console.log('\n✓ All tests passed!');
  console.log('\nTo publish this package to npm, run:');
  console.log('1. npm login');
  console.log('2. npm publish');
  console.log('\nTo test locally:');
  console.log('npm install -g ./pratikpathak-1.0.0.tgz');
  console.log('pratikpathak');
  
} catch (error) {
  console.error('✗ Test failed:', error.message);
  process.exit(1);
}
