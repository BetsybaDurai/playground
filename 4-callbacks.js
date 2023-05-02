setTimeout( () =>{
    console.log("Two seconds are up")
},2000)

const names=['Andrew','Jen','Jess'];
const shortNames=names.filter((name) =>{
    return name.length<=4   
})

console.log(shortNames);

const geocode=(address, callback) =>{
    setTimeout(()=>{
        const data={
            latitude:0,
            longitude:0,
            address:address
        }
        //return data;
        callback(data);
    },2000)
}
// const data=geocode('Bangalore');
// console.log(data); // undefined

geocode('Philadelphia', (data) =>{
    console.log(data)
})

const add=(value1,value2, callback) =>{
    setTimeout(()=>{
        //return data;
      
        callback(value1+value2);
    },2000)
}

add(10,10, (data) =>{
    console.log(data) // should print the sum of 2 values
})
