const { readFile } = require("fs");
const { promisify } = require("util");


// const getText = (ruta) => {
//   return new Promise((resolve, reject) => {
//     readFile(ruta, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(data);
//     });
//   });
// };

//CREA NUESTRA FUNCION GETTEXT DE FORMA AUTOMATICA

const readFilePromise = promisify(readFile);

const read = async () => {
  try {
    const result1 = await readFilePromise("./data/1.txt", "utf-8");
    const result2 = await readFilePromise("./data/2.txt", "utf-8");
    const result3 = await readFilePromise("./data/3.txt", "utf-8");
    const result4 = await readFilePromise("./data/4.txt", "utf-8");

    console.log(result1);
    console.log(result2);
    console.log(result3);
    console.log(result4);

  } catch (e) {
    console.log(e);
  }
};

read();
