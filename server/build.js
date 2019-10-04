const fs = require('fs');

const createEmail = require('./createEmail');

function saveEmail(email) {
  return new Promise((resolve, reject) => {
    fs.writeFile('build.html', email, err => {
      if (err) return reject(err);
      return resolve();
    });
  });
}

createEmail().then(email => {
  return saveEmail(email);
});
