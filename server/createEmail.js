const fs = require('fs');
const Path = require('path');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

const Email = require('../server/lib/Email').default;

const CONTENT_TAG = '%CONTENT%';

function toIsoString(date) {
  var tzo = -date.getTimezoneOffset(),
      dif = tzo >= 0 ? '+' : '-',
      pad = function(num) {
          var norm = Math.floor(Math.abs(num));
          return (norm < 10 ? '0' : '') + norm;
      };

  return date.getFullYear() +
      '-' + pad(date.getMonth() + 1) +
      '-' + pad(date.getDate()) +
      'T' + pad(date.getHours()) +
      ':' + pad(date.getMinutes()) +
      ':' + pad(date.getSeconds()) +
      dif + pad(tzo / 60) +
      ':' + pad(tzo % 60);
}

var timestamp = new Date();
timestamp.setMilliseconds(0);
console.log(toIsoString(timestamp));


function getFile(relativePath) {
  return new Promise((resolve, reject) => {
    const path = Path.join(__dirname, relativePath);

    return fs.readFile(path, { encoding: 'utf8' }, (err, file) => {
      if (err) return reject(err);
      return resolve(file);
    })
  });
}


function createEmail(data) {
  return Promise.all([
    getFile('./email.html'),
  ])
    .then(([template]) => {
      const emailElement = React.createElement(Email, { data });
      const content = ReactDOMServer.renderToStaticMarkup(emailElement);

      // Replace the template tags with the content
      let emailHTML = template;
      emailHTML = emailHTML.replace(CONTENT_TAG, content);

      return emailHTML;
    }).catch();
}

function saveEmail(email) {
  return new Promise((resolve, reject) => {
    fs.writeFile('compiled/build-' + toIsoString(timestamp) + '.html', email, err => {
      if (err) return reject(err);
      return resolve();
    });
  });
}

createEmail().then(email => {
  return saveEmail(email);
});

module.exports = createEmail;
