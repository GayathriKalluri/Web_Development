/*fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
 .then(response => response.json()) //this convert json to javascript object
 //.then(data => console.log(data))
 .then(data => {
    const imageElement=document.createElement('img')
    imageElement.src=data.message
    imageElement.alt='random dog picture'
    document.getElementById('img-container').appendChild(imageElement)
 })

 //fetching with async or await challenge
async function getSuggestion(){
    const response=await fetch('https://apis.scrimba.com/bored/api/activity')
    const data=await response.json()
    console.log(data)
}
getSuggestion()*/

//promises
//we will let you know within a week

//pending
//promise has yet to be completed
//resolved/fulfilled
//the promise was completed as promise
//rejected
//the promise was not completed as promise

//handling rejected promises
/*fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
 .then(response => response.json()) //this convert json to javascript object
 .then(data => console.log(data))
 //error handling
 .catch(err => {
    console.log(err)
    //update the dom to warn the user
    //access an alternative api 
})
.finally(() => console.log('the operation completed.'))*/

/*try{
    //the code we want to try to execute
    const response=await fetch('https://apis.scrimba.com/bored/api/activity')
    
    const data=await response.json()
    console.log(data)
} catch(err) {
    //the code to execute on an array
    console.log(err)
    
} finally {
    //code to execute at the end of the execution
    console.log('the operation completed.')
}*/

//response ok property
/*try{
    //the code we want to try to execute
    const response=await fetch('https://apis.scrimba.com/bored/api/activity')
    //console.log(response.ok) //return true if ok or else false
    if(!response.ok)
    {
        throw new Error('there was a problem with the API')
    }
    const data=await response.json()
    console.log(data)
} catch(err) {
    //the code to execute on an array
    console.log(err)
    
} finally {
    //code to execute at the end of the execution
    console.log('the operation completed.')
}*/

//taking api to next level
/*try{
    const response=await fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    if(!response.ok){
        throw new Error('problem')
    }
    const dat=await response.json()
    console.log(dat)
}
catch(err)
{
    console.log(err)
}
finally{
    console.log('result')
}*/

//apis requests the body -> posting method
/*try{
    const response=await fetch('https://apis.scrimba.com/jsonplaceholder/posts',
        {
            method: 'POST',
            body: JSON.stringify({
                title:'Holiday Nightmares',
                body:'When I was kidnapped in Scotland',
                userId:100
            })
        }
    )
    if(!response.ok){
        throw new Error('problem')
    }
    const dat=await response.json()
    console.log(dat)
}
catch(err)
{
    console.log(err)
}
finally{
    console.log('result')
}*/
//we can improve the response by using headers
//headers -> much more helpful info we will get
//adding a headers object, setting the "content-type" to application/json
/*try{
    const response=await fetch('https://apis.scrimba.com/jsonplaceholder/posts',
        {
            method: 'POST',
            body: JSON.stringify({
                title:'Holiday Nightmares',
                body:'When I was kidnapped in Scotland',
                userId:100
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        }
    )
    if(!response.ok){
        throw new Error('problem')
    }
    const dat=await response.json()
    console.log(dat)
}
catch(err)
{
    console.log(err)
}
finally{
    console.log('result')
}*/

//the promise constructor
//building our own async actions
/*const promise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5 
    if(success) {
        resolve('operation successful')
    } else {
        reject('operation failed')
    }
})
promise.then(response => console.log(response))

try{
    const response = await promise
    console.log(response)
} catch(err)
{
    console.log(err)
}*/

//promise challenge
function preLoadImg(url){
    return new Promise((resolve,reject) => {
        const img=new Image()
        img.src=url
        img.alt="a beautiful scene"
        img.addEventListener('load',() => resolve(img))
        img.addEventListener('load',() => reject('img has NOT loaded'))
})  
}
try{
    const results=await preLoadImg('https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic1.jpg')
    console.log(results)
    document.getElementById('img-container').appendChild(results)
} 
catch(error)
{
    console.log(error)
}

//using promises to escape callback hell
function uploadFile(){
    return new Promise((resolve,reject)=>{
        console.log('uploading...')
        setTimeout(() => {
            resolve()
        },1000)
    })
}

function processFile(){
    return new Promise((resolve,reject)=>{
        console.log('processing...')
        setTimeout(() => {
            resolve()
        },1000)
    })
}
try{
    await uploadFile()
    await processFile()
} catch(err)
{
    console.log(err)
}
//promises all at once
function createPromise(){
    return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5 
    if(success) {
        resolve('operation successful')
    } else {
        reject('operation failed')
    }
})
}

try{
    const promise1=createPromise()
    const promise2=createPromise()
    const promise3=createPromise()
    const result= await Promise.all([promise1,promise2,promise3])
    console.log(result)
} catch(err)
{
    console.log(err)
}
