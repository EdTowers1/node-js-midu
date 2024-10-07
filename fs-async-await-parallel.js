import { readFile } from 'node:fs/promises'

Promise,all([
    readFile('/archivo.txt', 'utf-8'),
    readFile('/archivo2.txt', 'uft-8')
]).then(([text, secondText]) => {
    console.log('primer texto:', text)
    console.log('segundo texto', secondText)
})

        console.log('Leyendo el primer archivo')
        const text = await readFile('./archivo.txt', 'utf-8')
        console.log('primer texto:', text)

        console.log('----> Hacer cosas mientras lee el archivo')

        console.log('Leyendo el segundo archivo')
        const secondText = await readFile('./archivxo2.txt', 'utf-8')
        console.log('segundo texto', secondText)

