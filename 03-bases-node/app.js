const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('yargs').argv;
console.clear();
console.log(process.argv);
console.log(argv);
console.log('base: yarg', argv.base);

// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5] = arg3.split('=');
// const base =5;
// crearArchivo(base)
//     .then(nombreArchivo => console.log(`Archivo creado: ${nombreArchivo}`))
//     .catch(err => console.log(err));