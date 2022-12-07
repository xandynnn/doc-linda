import fs from 'fs';

var config = {
    docDir: './docLinda',
    docsFolder: '/doc',
    scriptsFolder: '/scripts',
    projectName: 'App DocLinda =*'
}

if ( !fs.existsSync(config.docDir) ) {
    
    // Cria pasta DocLinda
    fs.mkdirSync(config.docDir, 1, function( err ) {
        if ( err ) throw err;
    });

    // Cria HTML do projeto
    var html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${config.projectName} | Versão: 1.0.0</title>
</head>
<body>
    <div class="app"></div>
    <script src="scripts/menu.js"></script>
    <script src="scripts/config.js"></script>
</body>
</html>`;

    fs.writeFileSync(`${config.docDir}/index.html`, html, function(err) {
        if ( err ) throw err;
    });

    // Cria pasta de scripts
    fs.mkdirSync(`${config.docDir}${config.scriptsFolder}`, 1, function( err ) {
        if ( err ) throw err;
    });

    // Copia a pasta doc para a pasta de documentação
    fs.cpSync("./doc", `${config.docDir}${config.docsFolder}`, {recursive: true});

    // Cria o arquivo de configuração
    var versions = fs.readdirSync(`${config.docDir}${config.docsFolder}`);
    var configContent = `var versions = [${versions.map(version => `'${version.toString()}'`)}];`;
    fs.writeFileSync(`${config.docDir}${config.scriptsFolder}/config.js`, configContent, function(err) {
        if ( err ) throw err;
    });

} else {
    console.log('Você já configurou o projeto docLinda')
}



