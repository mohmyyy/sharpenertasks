const posts = [
  {title:'Post One', body:'This is post one body',createAt:new Date().getTime()},
  {title:'Post two', body:'This is post two body',createAt:new Date().getTime()}
];

let intervalId = 0
function getPost(){
  clearInterval(intervalId);
  intervalId = setInterval(()=>{
    let output = ''
    posts.forEach((post) => {
      output += `<li>${post.title} created at ${(new Date().getTime()-post.createAt)/1000} seconds ago</li>`
    })
    document.body.innerHTML = output;
  },1000)
};

function createPost(post){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      posts.push({...post,createAt:new Date().getTime()});
      const error = false;
      if (!error){
        resolve();
      }else{
        reject('Error: Something went wrong master');
      }
    },2000);
  });
}

function deletePost(){
  return new Promise((resolve,reject) =>{
    setTimeout(()=>{
      if (posts.length > 0){
        resolve(posts.pop());
      }else if(posts.length == 0){
        reject('Array is empty master');
      } 
    },1000)
  });
}

const user = {
  userName : "Mohmy",
  lastActivityTime : '12th December'   
}

// let updatelastactivity = () => {
//   return new Promise((resolve,reject)={
//     user.lastActivityTime = new Date().getTime();
//     resolve(user.lastActivityTime)
//   },1000)
// }

const updateLastUserActivityTime = new Promise((resolve,reject) =>{
  setTimeout(()=>{
    user.lastActivityTime = new Date().getTime();
    // console.log(user.lastActivityTime)
    resolve(user.lastActivityTime)
    console.log(`The user activity time ${new Date().getTime()}`)
  },1000)
})

function  userupdatepost(){
  Promise.all([createPost,updatelastactivity]).then(([createPost,updateLastUserActivityTime])=>{
    console.log(updateLastUserActivityTime)
  }).catch(err=>console.log(err))
}

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve,reject) => setTimeout(resolve,2000,'goodBye'))
  

// const updateLastUserActivityTime = new Promise((resolve,reject) =>{
//   setTimeout(()=>{
//     user.lastActivityTime = new Date().getTime();
//     console.log(user.lastActivityTime)
//     resolve(user.lastActivityTime)
//     console.log(`The user activity time ${new Date().getTime()}`)
//   },1000)
// })

// userupdatepost
// Promise.all([promise1,promise2,promise3]).then(values=> console.log(values))




// createPost({title:'post Three', body:'This is post Three'},{title:'post Four', body:'This is post four'})
createPost({title:'post Three', body:'This is post Three'})
createPost({title:'post Four', body:'This is post four'})
.then(getPost)

.then(deletePost).catch(err=> console.log(err))
.then(deletePost).catch(err=> console.log(err))
.then(deletePost).catch(err=> console.log(err))
.then(deletePost).catch(err=> console.log(err))
.then(deletePost).catch(err=> console.log(err))

// .then(deletePost).catch(err=> console.log(err))
// Promise.all
