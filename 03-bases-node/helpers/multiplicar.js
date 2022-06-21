const colors = require('colors');
const fs = require("fs");
const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida, consola = '';
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${'x'.yellow} ${i} ${'='.red} ${base * i}\n`;
    }
    if (listar) {
      console.log("==========================================================".green);
      console.log("       Tabla del:".green, colors.blue(base));
      console.log("==========================================================".green);
      console.log(consola);
    }

    fs.writeFileSync(`tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
