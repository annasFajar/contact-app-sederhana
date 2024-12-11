import yargs from "yargs";
import validator from 'validator';
import {hideBin} from "yargs/helpers";
import { simpanContact } from "./contact.js";

// membuat command untuk lebih dari 1 namun dengan object
// console.log(yargs(hideBin(process.argv)).argv)
yargs(hideBin(process.argv)).command({
    command: 'add',
    describe: 'menambahkan contact',
    builder: {
        nama: {
            describe: "menambahkan nama",
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'menambahkan email',
            demandOption: false,
            type: "string"
        },
        noHP: {
            describe: "menambahkan nomor Handphone",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        simpanContact({
            nama: argv.nama,
            email: argv.email,
            noHP: argv.noHP
        })
    }  
    
}).argv;








// membuat command satu doang
// yargs(hideBin(process.argv)).command('add', 'menambahkan contact (sebaris)', (yargs)=> {
//     return yargs.options("nama",{
//         describe: "menambahkan contact",
//         demandOption: true,
//         type: 'string',
//     });
// }, (argv)=> {
// const contact = {
//     nama : argv.nama
// }
// console.log(contact)
// }).argv