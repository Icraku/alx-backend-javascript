import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
    return Promise.all([uploadPhoto(), createUser()])
        .then(([photoResponse, userResponse]) => {
            console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
        })
        .catch(() => console.log('Signup system offline'));
}

export default handleProfileSignup;