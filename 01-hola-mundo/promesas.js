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

const getSalario = (id) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find((s) => s.id === id)?.salario;
    salario
      ? resolve(salario)
      : reject(`No se encontro el salario para el id ${id}`);
  });
};

const id = 1;

getSalario(id)
  .then((salario) => console.log(salario))
  .catch((err) => console.log(err));
