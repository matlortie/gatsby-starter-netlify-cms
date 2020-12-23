const fetch = require('node-fetch');

exports.handler = async () => {
    const response = await fetch('https://api.podboxx.com')
        .then((res) => res.json())
        .catch((err) => console.error(err));

    return {
        statusCode: 200,
        body: JSON.stringify(response),
    };
};
