let path = require('path');

function getOne() {
  return async function (req, res) {
    res.sendFile(path.join(__dirname + '/../../../public/assets/index.html'));
  }
}

module.exports = getOne;
