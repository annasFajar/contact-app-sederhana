// const promise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('berhasil');
//     },2000);
//     reject('gagal')
// })
// promise.then( ()=>  console.log(promise));

import { error } from "console";


// console.log(promise);
// const coba = cobapromise( (p)=>{
//     return promise
// })



// console.log(coba);

// cobaPromise()
// console.log(cobaPromise());


function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 3000;
        if(waktu < 5000) {
            setTimeout(()=>{
                resolve('selesai');
            },waktu);

        } else {
            reject('gagal');
            
        }
    });
};

// const coba = cobaPromise();
// coba
//     .then(coba => console.log(coba))
//     .catch(coba => console.log(coba))

async function hasilCoba(){
    try{
        const coba = await cobaPromise();
        console.log(coba)
    } catch(err) {
        console.error(err);
    }
    
}
hasilCoba();



