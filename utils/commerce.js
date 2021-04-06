import Commerce from '@chec/commerce.js';

// Define commerce js variable
let commerce = null;

// Define a function to create commerce js instance which take PUBLIC KEY parameter
function getCommerce(commercePublicKey) {
  // First we check for commerce instance if exists then return it as is without creating a new instance.
  if (commerce) {
    return commerce;
  } else {
    const publicKey = commercePublicKey || process.env.COMMERCE_PUBLIC_KEY;

    // raise a flag for development environment to be true and use DEV KEY from .env file
    const devEnvironment = process.env.NODE_ENV === 'development';
    if (devEnvironment && !publicKey) {
      throw Error('Commerce public API key not found.');
    }
    commerce = new Commerce(publicKey, devEnvironment);
    return commerce;
  }
}
export default getCommerce;
