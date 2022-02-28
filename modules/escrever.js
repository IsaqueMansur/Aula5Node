const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w'}); //flag w = paga tudo e substitui, flag a = adiciona
}
