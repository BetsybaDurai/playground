const http=require('http');
const url="http://api.weatherstack.com/current?access_key=edbf1e44b7941e5d97b56f8d1fe3328a&query=40,-75&units=f";

const request=http.request(url, (response)=>{
    let data='';

    response.on('data',(chunk) =>{
        //console.log(chunk) //prints buffer data
        data=data + chunk.toString();
    })

    response.on('end', () =>{
       // console.log(data)
       const body=JSON.parse(data);
       console.log(body)
    })
})

request.on('error',(error)=>{
    console.log('An error', error);
})
request.end()
