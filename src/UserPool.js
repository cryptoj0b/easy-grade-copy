import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'eu-north-1_vyP0c3eU8',
    ClientId: '1mf5ato0bus8fk929eeau6rogf',
};

const userPool = new CognitoUserPool(poolData);

/**
 * Retrieves the current user from the local storage.
 */
export const getCurrentUser = () => {
    return userPool.getCurrentUser();
};

/**
 * Signs up a new user to the user pool.
 * @param {string} username - The user's username.
 * @param {string} password - The user's password.
 * @param {array} attributeList - Array of attributes (e.g., email).
 * @param {function} onSuccess - Callback on success.
 * @param {function} onFailure - Callback on failure.
 */
export const registerUser = (username, password, attributeList, onSuccess, onFailure) => {
    userPool.signUp(username, password, attributeList, null, (err, result) => {
        if (err) {
            onFailure(err);
            return;
        }
        onSuccess(result);
    });
};

/**
 * Initiates the sign in process for a user.
 * @param {string} username - The user's username.
 * @param {string} password - The user's password.
 * @param {function} onSuccess - Callback on success.
 * @param {function} onFailure - Callback on failure.
 */
export const loginUser = (username, password, onSuccess, onFailure) => {
    const userData = {
        Username: username,
        Pool: userPool,
    };

    const cognitoUser = new CognitoUser(userData);

    const authenticationDetails = new AuthenticationDetails({
        Username: username,
        Password: password,
    });

    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (result) => {
            onSuccess(result);
        },
        onFailure: (err) => {
            onFailure(err);
        },
    });
};

export default userPool;
