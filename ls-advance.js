const fs = require('node:fs/promises')

const folder = process.argv[2] ?? '.'

async function ls(folder) {
    let files
}
try {
    files = await fs.readdir(folder)
} catch (error) {
    console.error('No se ha podido leer el directorio ${folder}')
    process.exit(1)
}

    .then(files => {
    files.forEach(file => {
        const filePath = path.join(folder, file)

        fs.stat(filePath)
    });
})
    .catch(error => {
        if (error) {
            console.log('Error al leer el directorio: ', error)
            return;
        }
    })