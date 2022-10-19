const fs = require('fs');
const path = require('path');
const faker = require('faker');

function createEmps(limit = 50) {
  const result = [];

  for (let i = 0; i < limit; i++) {
    const noEmpleado = faker.name.noEmpleado();
    const nombre = faker.name.nombre();
    const apellidos = faker.internet.apellidos();
    const ubicacion = faker.internet.ubicacion();
    const sociedad = faker.internet.sociedad();

    result.push({
      id: faker.random.uuid(),
      noEmpleado,
      nombre,
      apellidos,
      ubicacion,
      sociedad,
      avatarUrl: `https://www.gravatar.com/avatar/`,
    });
  }

  return result;
}

function main() {
  const data = {
    emps: createEmps(),
  };

  fs.writeFileSync(
    path.resolve(__dirname, 'db.json'),
    JSON.stringify(data, null, 4)
  );
}

main();
