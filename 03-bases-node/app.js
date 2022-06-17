const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .check((argv, options) => {
        if ( isNaN (argv.b) ) {
            throw new Error('La base debe ser un numero');
        }
        return true;
    })
.argv;
console.clear();

console.log(argv);


// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5] = arg3.split('=');
// const base =5;
crearArchivo(argv.b)
    .then(nombreArchivo => console.log(`Archivo creado: ${nombreArchivo}`))
    .catch(err => console.log(err));