//////PROMISES

let p = new Promise((resolve, reject) =>{
    let a = 1+1;
    if(a == 2){
        resolve('Success')
    }
    else{
        reject('Failed')
    }
})
p.then((message) =>{               //if resolved, the .then method is going to run

    console.log('This is in the .then ' + message)
}).catch((err) =>{                //if rejected, the .catch method is going to run
    console.log('This is in the .catch ' + err)
}) 


const videoOne = new Promise((resolve, reject) => {
    resolve('video ONE resolved');
})
const videoTwo = new Promise((resolve, reject) => {
    resolve('video TWO resolved');
})
const videoThree = new Promise((resolve, reject) => {
    resolve ('video THREE resolved');
})

Promise.all([             //Promise.all waits for all the promises to be completed
    videoOne,
    videoTwo,
    videoThree
]).then((messages) => {  //.then is gonna send an array of the messages
    console.log(messages)
})

Promise.race([           //Promise.race it waits only the first one to be completed 
    videoOne,
    videoTwo,
    videoThree
]).then((message) =>{      //the message becomes one
    console.log(message)
})

///////ASYNC AWAIT

function makeRequest(location){
    return new Promise((resolve, reject) =>{
        console.log('Making request to '+ location)
        if (location == 'Google'){
            resolve('Google says hi!')
        }
        else{
            reject('We can only talk to Google')
        }
    })
}

function processRequest(response){
    return new Promise((resolve, reject) =>{
        console.log('processing information')
        resolve('extra information: ' + response)
    })
}

/*
makeRequest('Google').then((response) => {
    console.log('response received')
    return processRequest(response)
}).then((responsetwo) =>{
    console.log(responsetwo)
}).catch((err) =>{
    console.log(err)
})
*/
async function example(){
    try{
    let response = await makeRequest('Google');
    console.log('response received');
    let process = await processRequest(response);
    console.log(process);
    } catch(err){
        console.log(err)
    }
}
example()