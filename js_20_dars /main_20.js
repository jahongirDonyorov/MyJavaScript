'use strict'
// ================== Objikni JSON ga utkazish
// const car = {
//   name:'Mers',
//   color: 'Black'
// }

// console.log(JSON.stringify(car))// bu stringify bizning omjiktimizni JSON farmatga utkazadi

// // ================== JSON ni objik ga utkazish

// const json = JSON.stringify(car)
// console.log(json)//JSON farmat 
// console.log(JSON.parse(json))//bu parse JSON farmatni objikka utazib beradi 


// ======================================== Promise(ES-6) 57 DARS.

// const isMeting = true;

// const willMeeting = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if(isMeting){
//       const friends = {
//         mood: 'good',
//         place: 'bing' 
//       }
//       resolve(friends)
//     }else{
//       const reason = new Error('Traffic jam')
//       reject(reason)
//     }
//   }, 2000)
// })
// willMeeting
//  .then(result => console.log(result))// then = resolve = bajarildi (tug'ri)
//  .catch(error => console.log(error.massage))//catch = reject = bajarilmadi (noto'g'ri)

console.log("Ma'lumotlar yuborilmoqda...")

const req = new  Promise((resolve, reject) => {
  setTimeout ( () => {
    console.log("Ma'lumotlar tayyorlanmoqda...")
  
    const car = {
      name: 'Mers',
      price:1000
    }
    resolve(car)
    reject()
  }, 2000)
})
req.then(() => {
return new Promise((resolve, reject) => {
  setTimeout(() => {
    car.isBought = false
    resolve(car)
  }, 2000)
})
}).then(data => {
  data.isAirBag = true
  return data
}).then(data => {
  console.log(data)
}).catch(() => {
  console.log('Error')
})
