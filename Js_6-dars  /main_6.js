'use strict'
/********&&&&&&&&&&&££££££££££££############## Obekt ##################£££££££££££££&&&&&&&&&&********/
//hamma narsani uzida joylasa obyekt diyiladi
const person = {
    name: 'Jahon', //data-type: string
    lestName: 'Badriddinov',
    AbstractRange: 19, //data-type number
    wishes: [], //arry
    languge: function() {}, //funcsiyalar
    mother: {
        name: 'name'
    }
};


const obj = {
    name: 'div',
    width: 400,
    height: 400,
    colors: {
        border: 'red',
        bg: 'colar',
    }
};

console.log(Object.keys(obj).length); //ulchashning oson yuli

// console.log(obj);

// delete obj.name;//ucirib beradi


//valueni olvolish
// for (let key in obj){
//   // console.log(key);//key objdagi kalitlar
//   console.log(`property ${key} value ${obj[key]}`);
// }

//colors obl ni chiqarish
//uzunlik ulchash
let counter = 0;

for (let key in obj) {
    counter++; //hammasini ulchaydi
}

for (let key in obj) {
    if (typeof obj[key] == 'object') {
        for (let i in obj[key]) {
            console.log(`property ${key} value ${obj[key][i]}`);
            counter++; //ulchash 
        }
    } else {
        console.log(`Property ${key} value ${obj[key]}`);
        counter++;
    }
};
console.log(counter);

// obyekt ni uzunligini light da ulchab bulmayd

//method

const newMethod = {
    makeExample: function() {
        console.log('Your frist method');
    }
};
newMethod.makeExample();



let options = {
    colors: {
        bg: 'red',
        border: 'colar',
    },
};

const { bg, border } = options.colors;
console.log(bg);