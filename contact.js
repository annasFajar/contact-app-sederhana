import * as rf from "node:fs";
// import * as rl from "readline";
import validator from "validator";

// const readline = rl.createInterface({
//     input:process.stdin,
//     output:process.stdout,
// });


const dataDir = './data';
const fileDir = './data/contact.json';
if(!rf.existsSync(dataDir)) {
    rf.mkdirSync(dataDir);
};

if(!rf.existsSync(fileDir)) {
    rf.writeFileSync(fileDir, '[]', "utf-8");
}



// export function tulisPertanyaan(pertanyaan) {
//     return new Promise((resolve,reject) => {
//         readline.question(pertanyaan, (nama)=> {
//             resolve(nama);
//         });
//     })
// }


export const simpanContact = ({nama, email, noHP}) => {
    const file2 = rf.readFileSync("data/contact.json","utf-8");
    const fileJson = JSON.parse(file2);

    // validator
    const validNama = fileJson.find(contact => {
        return contact.nama === nama
    })
    if(validNama) {
        console.log('nama telah digunakan');
        return false
    }
    
    const profile = {nama,email,noHP};
    fileJson.push(profile);
    
    rf.writeFileSync("data/contact.json", JSON.stringify(fileJson));
    // readline.close();
}

