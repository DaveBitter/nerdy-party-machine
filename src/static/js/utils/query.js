const query = (url, options) => new Promise((resolve, reject) => {
    fetch(url, options)
        .then(async response => {
            const result = await response.json();
            return resolve({ result, response });
        })
        .catch(err => reject(err));
});

export default query;
