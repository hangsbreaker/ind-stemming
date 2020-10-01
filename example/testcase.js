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
    'berpuasa':'puasa'

};


for(data in kata){

    filter = stem(data);
    if(filter == kata[data]){
        console.log(filter, "True");
    }else{
        console.log(filter,"False", "Should =>", kata[data]);
    }

}