function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        const isSuccessful = true;

        if (isSuccessful) {
            resolve({ data: 'The Force is strong with this one.' });
        } else {
            reject(new Error("I've got a bad feeling about this."));
        }
    });
}

export default getResponseFromAPI;