// Using promise

console.log('Person1 : Shows ticket')
console.log('Person2 : Shows ticket')

const promiseWifeBringingTicks = new Promise((resolve,reject) =>{
  setTimeout(()=>{
    resolve('Ticket');
  },1000)
});

const getPopcorn = promiseWifeBringingTicks.then((messgae)=> {
  console.log(`wife : i got tickets`);
  console.log(`husband : we should go in`);
  console.log(`wife:No i am hungry`);
  return new Promise((resolve,reject)=>
  setTimeout(()=>{
    resolve(`${messgae} popcorn`)},1000))
})
console.log('Person4 : Shows ticket')
console.log('Person5 : Shows ticket')

const getButter = getPopcorn.then((messgae)=>{
  console.log(`husband : i got some popcorn`);
  console.log(`husband : we should go in`);
  console.log(`wife:I need butter on my popcorn`);
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(`${messgae} butter`)
    },1000)
  })
})

const getColdDrinks = getButter.then((messgae)=>{
  console.log(`husband : take the popcorn with butter on it`);
  console.log(`husband : anything else love?`);
  console.log(`wife : a could drink would go`);
  return new Promise((resolve,reject) => {
    resolve(`${messgae} and thumbsUp`)
  })
})

getColdDrinks.then((messgae)=> console.log(messgae)).catch((err)=>console.error(err))
