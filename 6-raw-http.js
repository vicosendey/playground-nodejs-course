const https = require('https');
const url   = `https://api.darksky.net/forecast/86933d7aae39a4691442101b33f6ab7d/40,-75?units=si&lang=pt`;

const request = https.request(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data += chunk.toString();
    })

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })
})

request.on('error', () => {
    console.log('Ah error', error)
})

request.end()