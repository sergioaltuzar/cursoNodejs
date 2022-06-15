const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 1500,
  },
];

const getSalario = (id, callback) => {
  const salario = salarios.find((s) => s.id === id);
  if (salario) {
    callback(null, salario);
  } else {
    callback(`No se encontro el salario para el id ${id}`);
  }
};

getSalario(3, (err, salario) => {
  if (err) {
    console.log("ERROR!");
    return console.log(err);
  }
  console.log("salario existe!");
  console.log(salario);
});
