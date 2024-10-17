const path = require('node:path')

// para separar sutas segun SO
console.log(path.sep)

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

// nombre del fichero
const base = path.basename('/tmp/secret-files/passsword.txt')
console.log(base)

// nombre del fichero sin la extensión
const filename = path.basename('/tmp/secret-files/passsword.txt', '.txt')
console.log(filename)

// para obtener la extensión
const extension = path.extname('image.jpg')
console.log(extension)
