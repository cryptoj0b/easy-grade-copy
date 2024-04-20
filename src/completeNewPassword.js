
export const completeNewPassword = (user, newPassword) => {
  return new Promise((resolve, reject) => {
    // The user here is expected to be a CognitoUser object
    user.completeNewPasswordChallenge(newPassword, [], {
      onSuccess: (result) => resolve(result),
      onFailure: (err) => reject(err),
    });
  });
};
