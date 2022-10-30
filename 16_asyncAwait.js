const { readFile, readFileSync } = require("fs");

const getText = (ruta) => {
  return new Promise((resolve, reject) => {
    readFile(ruta, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

// getText('./data/1.txt')
//     .then((result) => console.log(result))
//     .then(() => getText('./data/2.txt'))
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error))

const read = async () => {
  try {
    const result1 = await getText("./data/1.txt");
    const result2 = await getText("./data/2.txt");
    const result3 = await getText("./data/3.txt");
    const result4 = await getText("./data/4.txt");

    console.log(result1);
    console.log(result2);
    console.log(result3);
    console.log(result4);
  } catch (e) {
    console.log(e);
  }
};

read();
