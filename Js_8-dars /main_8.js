 'use strict'
 /********&&&&&&&&&&&££££££££££££############## Tuwib qolishi mumkun bulgan savollar ##################£££££££££££££&&&&&&&&&&********/

 //==================== 1 qanday qiymat kursatiladi: let x = 3; alert(x++);?  Javob:3 chiqadi

//  let x = 3;
//  alert(x++);//1 - x bulganligi sababli 3 chiqariladi 
//  alert(x);//alertni yana bir marta chaqirib olsak kigin 4 chiqadi 
//  alert(++x)//bu holata esa birdaniga 4 chiqariladi

//==================== 2 let, var, const ning qanday farqi bor ?

//letni uzidan tepada chaqirsa xato beradi varda esa undefined bu holatta hato qilganimizni bilolmaymiz const esa uzgarmas
// console.log(x);
// let x = 10;

// console.log(y);
// var y = 30;

//===================== 3 Null va undefined  malumot turiga kiradimi? Javob:Ha albatta malumot turiga kiradi

//===================== 4 Ushbu kod nimani chiqaradi? Javob:alert 8 chiqadi

// let x = 4;
// let y = x = 8;

// alert(x);

//==================== 5 [] + 1 + 2 yig'indisi nima? Javob:12

// console.log([] + 1 +2);// bu kodning boshida massiv bulganligi sababli hamma narsa stringga aylanayapdi sringni bir biriga quwsa wunday yonma yon qilib berardi


// ================== 6 ushbu kod nimani chiqaradi: alert("1"[0])? javob:1

// alert("1"[0]);// "1"[0] 1ning 0 indexi degani

// ================= 7 2 && 1 && null && 0 && undefined; nimaga textAling ? Javob:null

//       1 true  2 true  null false nulda tuxtadi shuning uchun null chiqadi javobda
// console.log(1 && 2 && null && 0 && undefined);//&& usloviya qachonki false bulsa birdan tuxtaydi
// console.log(1 && 2 && 3 && 0 && undefined);//bunda 0 chiqadi
// console.log(1 && 2 && 3 && 10 && undefined);//bunda undefined chiqadi


// console.log(null || 4 && 3 || undefined);// || bunda esa qachon true znachenya chiqsa tugedi


//================== 8 Taqqoslash tugrimi? "olma" > "yulbars" Javob:false;

// console.log('Olma' > 'yulbars'); //olmani brinchi harfi kotta bulganligi uchun false chiqadi kotta harif chik harifga teng emas

//================== 9  Ushbu kod nimani chiqaradi alert(+ 'infinity');? Javob:NaN;

// alert(+ 'infinity')//infinty son bulmaganili sababli NaN chiqadi chunki + turganligi uchgun data-Type number bulishi kerak

//================= 10 a=[1,2,3]; b[1,2,3]; a va b tengmi (a==b) ? Javob:false;

// let a = [1,2,3];
// let b = [1,2,3];


