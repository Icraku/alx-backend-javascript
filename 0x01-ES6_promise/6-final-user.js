import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
    return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
        .then((values) => {
            const resultArray = values.map((value) => ({
                status: 'fulfilled',
                value,
            }));

            return resultArray;
        })
        .catch((error) => {
            const errorArray = [
                {
                    status: 'rejected',
                    value: `${error.name}: ${error.message}`,
                },
            ];

            return errorArray;
        });
}