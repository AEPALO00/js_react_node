//Creating a promise method. The promise will get resolved when timer times out after 6 seconds.
let myPromise_6 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise 1 resolved")
    },6000)}
)

let myPromise_3 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise 2 resolved")
    },3000)})
    
// SEQUENCE
//Call the promise and wait for it to be resolved and then print a message.
myPromise_6.then((successMessage) => {
    console.log("From Callback " + successMessage)
    
})
myPromise_3.then((successMessage) => {
    console.log("From Callback " + successMessage)
})

// ONE AFTER ANOTHER
myPromise_6.then((successMessage) => {
    console.log("--------------------")
    console.log("From Callback " + successMessage)
    
    myPromise_3.then((successMessage) => {
        console.log("From Callback " + successMessage)
    })
})