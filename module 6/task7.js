// Using promise

// console.log('Person1 : Shows ticket')
// console.log('Person2 : Shows ticket')

// const promiseWifeBringingTicks = new Promise((resolve,reject) =>{
//   setTimeout(()=>{
//     resolve('Ticket');
//   },1000)
// });

// const getPopcorn = promiseWifeBringingTicks.then((messgae)=> {
//   console.log(`wife : i got tickets`);
//   console.log(`husband : we should go in`);
//   console.log(`wife:No i am hungry`);
//   return new Promise((resolve,reject)=>
//   setTimeout(()=>{
//     resolve(`${messgae} popcorn`)},1000))
// })
// console.log('Person4 : Shows ticket')
// console.log('Person5 : Shows ticket')

// const getButter = getPopcorn.then((messgae)=>{
//   console.log(`husband : i got some popcorn`);
//   console.log(`husband : we should go in`);
//   console.log(`wife:I need butter on my popcorn`);
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve(`${messgae} butter`)
//     },1000)
//   })
// })

// const getColdDrinks = getButter.then((messgae)=>{
//   console.log(`husband : take the popcorn with butter on it`);
//   console.log(`husband : anything else love?`);
//   console.log(`wife : a could drink would go`);
//   return new Promise((resolve,reject) => {
//     resolve(`${messgae} and thumbsUp`)
//   })
// })

// getColdDrinks.then((messgae)=> console.log(messgae)).catch((err)=>console.error(err))



// Promise using async await

// console.log('Person1 : Shows ticket')
// console.log('Person2 : Shows ticket')

// const preMovie = async () => {

//   let promiseWifeBringingTicks = new Promise((resolve, reject) => {
//            setTimeout(() => {
//             resolve('ticket');
//            },3000);
//         });
    
//   let getPopcorn = new Promise((resolve,reject) => resolve('popcorn'));
    
//   let getButter = new Promise((resolve,reject) => resolve('butter'));

//   let getColdDrinks = new Promise((resolve,reject) => resolve('cold drinks'))

//   let ticket = await promiseWifeBringingTicks;

// console.log(`wife i have the ${ticket} `)
// console.log(`husband : we should go in`);
// console.log(`wife:No i am hungry`);

// let popcorn = await getPopcorn;
// console.log(`husband : i got some ${popcorn}`)
// console.log(`husband : we should go in`);
// console.log(`wife:I need butter on my popcorn`);

// let butter = await getButter;
// console.log(`husbdand : i got some ${butter} on popcorn`)
// console.log(`hubband : anything else love?`)
// console.log(`wife : a thumbsUp would do`)
// console.log(`husband : ohh is it? okey fine **`)

// let coldDrink = await getColdDrinks;
// console.log(`husbdand : i got your favorite, ${coldDrink}`)
// console.log(`hubsand : lets get in now seatheart`)
// return `persone 3 : shows ${ticket}` 
// }  

// preMovie().then((m) => console.log(m));

// console.log('Person4 : Shows ticket')
// console.log('Person5 : Shows ticket')

// ----------------------------------------------------------
// Promise using async await
// const posts = [
//   {title:'Post One', body:'This is post one body'},
//   {title:'Post two', body:'This is post two body'}
// ];

// let allAsync = async () =>{

//   function getPost() {
//     setTimeout(()=>{
//       let output = '';
//       posts.forEach((post) => {
//         output += `<li> ${post.title} </li>`
//       })
//       document.body.innerHTML = output;
//     },1000)
//   }


//   let createPost = ((post)=> new Promise((resolve,reject) => {
//     setTimeout(()=>{
//       posts.push(post)
//       resolve(posts)
//     },1000)
//   }))

//   let deletePost = ()=> {
//     new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         if(posts.length > 0){
//           resolve(posts.pop())
//         }else if(posts.length === 0){
//           reject("Posts is Empty Master")
//         }
//       },1000)
//     })
//   }
//   let pushPost = await createPost({title:'Post three', body:'This is post three body'})
//   await createPost({title:'Post four', body:'This is post four body'})
//   let popPost = await deletePost()
//   deletePost()
//   getPost()
//   return posts
// }
// allAsync().then((msg)=> console.log(msg))
// -------------------------------------------------------

// Promise.all

// const posts = [
//   {title:'Post One', body:'This is post one body',createAt:new Date().getTime()},
//   {title:'Post two', body:'This is post two body',createAt:new Date().getTime()}
// ];

// console.log('Person1 : Shows ticket')
// console.log('Person2 : Shows ticket')

// const preMovie = async () => {

// const promiseWifeBringingTicks = new Promise((resolve,reject) => {
//   setTimeout(() => resolve('ticket'),2000);
// });

// const getPopcorn = new Promise((resolve,reject) => resolve(`popcorn`));

// const getColdDrinks = new Promise((resolve,reject) => resolve(`thumbsUp`));

// const getButter = new Promise((resolve,reject) => resolve(`butter`));

// const createPost =  new Promise((resolve,reject,post)=>{
//   setTimeout(()=>{
//     resolve(posts.push(post))
//   },1000)
// })

// let ticket = await promiseWifeBringingTicks;
// let [popcorn,candy,coke] =await Promise.all([getPopcorn,getButter,getColdDrinks])
// console.log(`${popcorn},${candy},${coke}`);
// return ticket
// }  

// preMovie().then((m) => console.log(`person3: shows ${m}`));

// console.log('Person4 : Shows ticket')
// console.log('Person5 : Shows ticket')

// ----------------------------------------------------------------------------

// Promise reject
// console.log('Person1 : Shows ticket')
// console.log('Person2 : Shows ticket')

// const preMovie = async () => {

// const promiseWifeBringingTicks = new Promise((resolve,reject) => {
//   setTimeout(() => reject('ticket'),2000);
// });

// const wifeNeverComes = new Promise((resolve,reject) => {
//   setTimeout(()=>reject('wife'),3000)
// })

// // const 

// let ticket
// let wife
// try{
//   ticket = await promiseWifeBringingTicks
//   wife = await wifeNeverComes
// }catch(err){
//   ticket = 'Sad Face'
//   wife = 'ASAP'
//   // console.log(wife)
// }

// // let ticket
// // try {
//   // ticket = await promiseWifeBringingTicks;
// // } catch (error) {
// //   ticket = 'Sad Face';
// // }
// return ticket
// }

// preMovie().then((m) => console.log(`${m}`));
// console.log('Person4 : Shows ticket')
// console.log('Person5 : Shows ticket')

// -------------------------------------------------------------------------
// const testUserForm = async() => {
  
//   const loadUserForm = new Promise((resolve,reject) => {
//     setTimeout(() => resolve('Page Loaded'),3000);
//   });

//   const enterUserName = new Promise((resolve,reject) => {
//     setTimeout(() => resolve('User Entered'),3000)
//   });
//   // const verifyuserDetails = () => {
//   //   setTimeout(()=>
//   //   console.log('User verified'))
//   // }
//   const loadUser = await loadUserForm
//   console.log(loadUser)
//   const loadUserDetails = await enterUserName
//   console.log(loadUserDetails)
//   return `User Verified`

// }

// testUserForm().then((msg)=> console.log(msg))