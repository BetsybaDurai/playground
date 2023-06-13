const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Numbers should be non-negative')
            }
            resolve(a+b)
        },2000)
    })
}
const doWork = async () => { // async function is always return promise
    // throw new Error('Something went wrong')
//   return 'Andrew'    // Output : Promise {'Andrew'}
    
    const sum = await add(1, 99) // awaits for 2 secs and then print the sum
    const sum2 = await add(sum, 50)
    const sum3=await add (sum2,100)
    return sum3
}

//if we are using arrow func then it will return undefined
console.log(doWork()) //if we are using async keyword then it will return Promise {undefined}

doWork().then((result) => {
    console.log('result '+result)
}).catch((e) => {
    console.log(e)
})
