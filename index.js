// let isOpenModal = true

// const promise1 = new Promise((resolve, reject)=>{
//     if(isOpenModal){
//         setTimeout(()=>{
//             resolve('promise1 is successfully')
//         },1000)
//     }else{
//         reject('Promise1: oops error')
//     }
// })

// const promise2 = new Promise((resolve, reject)=>{
//     if(isOpenModal){
//         setTimeout(()=>{
//             resolve('promise2 is successfully')
//         },4000)
//     }else{
//         reject('Promise2: oops error')
//     }
// })

// const promise3 = new Promise((resolve, reject)=>{
//     if(isOpenModal){
//         setTimeout(()=>{
//             resolve('promise3 is successfully') 
//         },2000)
//     }else{
//         reject('Promise3: oops error')
//     }
// })

// console.dir(Promise);

// Promise.all([promise1, promise2, promise3])
// .then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error);
// })

// Promise.race([promise1, promise2, promise3])
// .then((first)=>{
//     console.log(first);
// })

// Promise.any(([promise1, promise2, promise3]))
// .then((first)=>{
//     console.log(first);
// })



// const fetchDataPromise = fetch('https://api.example.com/data');
// const timeout = 5000;
// raceTimeout(fetchDataPromise, timeout)
// .then((data) => {
// console.log(data);
// })

// function raceTimeout(fetchDataPromise, timeout){
//      return new Promise((resolve, reject)=>{
//         if(fetchDataPromise === 'FULFILLED'){
//             setTimeout(()=>{
//                 resolve(fetchDataPromise)
//             }, timeout)
//         }else{

//         }
//     })
// }

// raceTimeout(fetchDataPromise, timeout)
// .then((data)=>{
// console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })
