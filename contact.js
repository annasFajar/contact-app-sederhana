import * as rf from "node:fs";
import * as rl from "readline";

const readline = rl.createInterface({
    input:process.stdin,
    output:process.stdout,
});

const dataDir = './data';
const fileDir = './data/contact.json';
if(!rf.existsSync(dataDir)) {
    rf.mkdirSync(dataDir);
};

if(!rf.existsSync(fileDir)) {
    rf.writeFileSync(fileDir, '[]', "utf-8");
}



export function tulisPertanyaan(pertanyaan) {
    return new Promise((resolve,reject) => {
        readline.question(pertanyaan, (nama)=> {
            resolve(nama);
        });
    })
}


export const simpanContact = (nama, nomor) => {
    const file2 = rf.readFileSync("data/contact.json","utf-8");
    const fileJson = JSON.parse(file2);
    const profile = {nama,nomor};
    fileJson.push(profile);
    
    rf.writeFileSync("data/contact.json", JSON.stringify(fileJson));
    readline.close();
}

