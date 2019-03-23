export default () => {
    const queryParameters = {};

    window.location.search
        .replace('?', '')
        .split('&')
        .forEach(query => {
            const [label, key] = query.split('=');
            queryParameters[label] = key;
        });

    return queryParameters;
};
