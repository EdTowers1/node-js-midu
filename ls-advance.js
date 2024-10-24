const { statSync } = require('node:fs')
const fs = require('node:fs/promises')

const folder = process.argv[2] ?? '.'


async function ls(folder) {
    let files;

    try {
        files = await fs.readdir(folder);
    } catch (error) {
        console.error(`No se ha podido leer el directorio ${folder}: ${error.message}`);
        process.exit(1);
    }

    const filePromises = files.map(async file => {
        let stats;

        const filePath = path.join(folder, file);
        try {
            stats = await fs.stat(filePath); // stat: da la información del archivo
        } catch (error) {
            console.error(`No se ha podido leer el archivo ${filePath}: ${error.message}`);
            return null; // Retorna null para manejar errores sin interrumpir el resto
        }

        const isDirectory = stats.isDirectory();
        const fileType = isDirectory ? 'd' : '';
        const fileSize = stats.size;
        const fileModified = stats.mtime.toLocaleDateString();

        return `${fileType} ${file} ${fileSize.toString()} ${fileModified}`;
    });
}

ls(folder)

