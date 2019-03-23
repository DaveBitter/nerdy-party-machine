const errorMessages = {
    'auth/argument-error': 'Please, fill in all required fields',
    'auth/user-not-found': 'We were unable to find this user. Are you sure your details are correct?',
    'auth/wrong-password': 'Your password is incorrect. Please, try again or click on forgot password.',
    default: 'Something went wrong.'
};

export default code => errorMessages[code] || errorMessages.default;
