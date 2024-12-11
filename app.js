import yargs from "yargs";
import validator from 'validator';
import {hideBin} from "yargs/helpers";
import { simpanContact, listContacts, cari } from "./contact.js";

const cli = yargs(hideBin(process.argv))

// membuat command untuk lebih dari 1 namun dengan object
cli.command({
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
    
});



//cli list nama dan noHP
cli.command({
    command: 'list',
    describe: 'menampilkan nama dan nomor HP',
    builder: {},
    handler() {
        const hasil = listContacts()
        if(hasil){
            console.log('kosong')
        }
        hasil.forEach(isi=> {
            console.log(isi)
        })
    }
});

//cli search
cli.command({
    command: 'search',
    describe:'mencari data nama',
    builder: {
        nama:{
            describe:"cari nama",
            type:"string",
            demandOption: true,
        }
    },
    handler(argv) {
        const search = cari(argv.nama);
    }
});


// cli remove
cli.command({
    command: 'remove',
    describe: "menghapus data",
    builder: {
        nama: {
            describe: 'menghapus data nama inputan',
            type: 'string',
            demandOption: true
        }
    },
    handler(argv){
        const hasil = hapus()
    }
})


cli
    .demandCommand()
    .argv