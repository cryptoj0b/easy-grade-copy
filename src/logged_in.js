import { Auth } from 'aws-amplify';

// Function to check if the user is logged in
const checkUserAuthentication = async () => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    console.log('User is logged in:', user);
    return true;  // User is logged in
  } catch (error) {
    console.log('User is not logged in:', error);
    return false;  // User is not logged in
  }
}

// Call the function to check authentication status
checkUserAuthentication();
