// const {simpanContact, tulisPertanyaan} = require('./contact')
import { simpanContact, tulisPertanyaan } from "./contact.js";


const main = async () => {
    const nama = await tulisPertanyaan('siapa nama anda: ');
    const nomor = await tulisPertanyaan('berapa nomor anda: ');


    simpanContact(nama,nomor);
}
main();