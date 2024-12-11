import * as rf from "node:fs";
import validator from "validator";
import chalk from 'chalk';
import yargs from 'yargs';

const dataDir = './data';
const fileDir = './data/contact.json';
if(!rf.existsSync(dataDir)) {
    rf.mkdirSync(dataDir);
};

if(!rf.existsSync(fileDir)) {
    rf.writeFileSync(fileDir, '[]', "utf-8");
}

const fileBaca = () => {
    const file2 = rf.readFileSync("data/contact.json","utf-8");
    const fileJson = JSON.parse(file2)
    return fileJson
}


export const simpanContact = ({nama, email, noHP}) => {
    const contacts = fileBaca()


    //cli validator
    const validNama = contacts.find(contact => {
        return contact.nama === nama
    })
    if(validNama) {
        console.log(chalk.bgRed.bold('nama telah digunakan'));
        return false
    }
    if(email){
        if(!validator.isEmail(email)) {
            console.log(chalk.bgRed.bold('penulisan email tidak valid'));
            return false
        }
    }
    if(!validator.isMobilePhone(noHP, "id-ID")){
        console.log(chalk.bgRed.bold('penulisan nomor handphone tidak valid'))
        return false
    }
    
    const profile = {nama,email,noHP};
    contacts.push(profile);

    rf.writeFileSync("data/contact.json", JSON.stringify(contacts));
    console.log(chalk.bgGreen.bold('terimakasih telah mengisi data'))
}


// cli list
export const listContacts = () => {
    const contacts = fileBaca();
    const ll = contacts.map(({nama, noHP}, i)=> {
        return `${i + 1}. ${nama} - ${noHP}`
    })
    return ll
}


//cli search
export const cari = (argv) => {
    const contacts = fileBaca();
    const hasil = contacts.find((contact) => {
        const pencarian = contact.nama.toLowerCase() === argv.toLowerCase();
        return pencarian
    })
    
    if(!hasil){
        console.log(chalk.bgRed.bold('data tidak ditemukan'))
        return false;
    } 
    if (hasil){
        if(hasil.email){
            console.log(`${hasil.nama} - ${hasil.noHP} - ${hasil.email} ${chalk.bgBlue.bold('data ditemukan')}`)
            return  false;
        }
        console.log(`${hasil.nama} - ${hasil.noHP} ${chalk.bgBlue.bold('data ditemukan')}`)
        return  false;
    }
}


//cli remove
export const hapus = () => {

}