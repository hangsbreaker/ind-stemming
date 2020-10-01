const {
    stem 
} = require('../stem.js');


const kata = {

    'memanaskan':'panas',
    'membahagiakan':'bahagia',
    'memasak':'masak',
    'memakan': 'makan',
    'meminum':'minum',
    'bersepda':'sepeda',
    'berpuasa':'puasa',
    'bercinta':'cinta',
    'memukul':'pukul',
    'memamcul':'pacul',
    'menyapu':'sapu',
    'balasan':'balas',
    'mewariskan':'waris',
    'warisan':'waris',
    'berzinah':'zinah',
    'kebiasaan':'biasa',
    'terendah':'rendah',
    'tertinggi':'tinggi',
    'menancapkan':'tancap',
    'memperbesar':'besar',
    'membuang':'buang',
    'menghargai': 'harga',
    'menuntaskan':'tuntas',
    'mengamini':'amin',
    'meracuni':'racun'

};


for(data in kata){

    filter = stem(data);
    if(filter == kata[data]){
        //console.log(filter, "True");
    }else{
        console.log(filter,"False", "=>", kata[data]);
    }

}