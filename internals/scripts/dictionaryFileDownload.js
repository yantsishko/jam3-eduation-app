const req = require('superagent');
const fs = require('fs');
const https = require('https');

req
  .post('https://api.poeditor.com/v2/projects/export')
  .field('api_token', '13390d4dfc0195400ea6d23daa1a9380')
  .field('id', '135269')
  .field('type', 'key_value_json')
  .field('language', 'ru')
  .end((err, response) => {
    if (err) {
      console.log('Error downloading translation file');
    }
    const file = fs.createWriteStream('./app/dictionary.json');
    https.get(response.body.result.url, (responseFile) => {
      responseFile.pipe(file);
      console.log('Translate file downloaded');
    });
  });
