
const https = require('https');
var clientId = '3da0bb9e0fa246cc9945500eaf1616a3';
var clientSecret = 'eafdcca9c22343b3bdcc281e1eb0c4d2';

const tokenUrl = 'https://accounts.spotify.com/api/token';
const data = new URLSearchParams();
data.append('grant_type', 'client_credentials');
data.append('client_id', clientId);
data.append('client_secret', clientSecret);

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
};

const req = https.request(tokenUrl, options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const response = JSON.parse(data);
    if (response.access_token) {
      const accessToken = response.access_token;
      console.log('Access Token:', accessToken);
      // Use the access token for further operations
    } else {
      console.error('Error:', response);
    }
  });
});

req.on('error', (error) => {
  console.error('Error:', error);
});

req.write(data.toString());
req.end();