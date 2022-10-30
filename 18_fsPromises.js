const {readFile} = require('fs/promises');
const read = async () => {
    try{
        const result1 = await readFile("./data/1.txt", "utf-8");
        const result2 = await readFile("./data/2.txt", "utf-8");
        const result3 = await readFile("./data/3.txt", "utf-8");
        const result4 = await readFile("./data/4.txt", "utf-8");

        console.log(result1);
        console.log(result2);
        console.log(result3);
        console.log(result4);
    }catch(e){
        console.log(e);
    }
}
read();