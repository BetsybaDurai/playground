const fs=require('fs');
const book={
    title:"Ego is the Enemy",
    author:'Ryan Holiday'
}

//const bookJson=JSON.stringify(book);
// console.log(bookJson);
// console.log(bookJson.title);

//const ParsedData=JSON.parse(bookJson);
//console.log(ParsedData);
//console.log(ParsedData.title);

// fs.writeFileSync('1-json.json', bookJson);

// const dataBuffer=fs.readFileSync('1-json.json');
// const dataJson=dataBuffer.toString();
// const data=JSON.parse(dataJson);
// console.log(data.author);

//json object
//{"title":"Ego is the Enemy","author":"Ryan Holiday"}


const dataBuffer=fs.readFileSync('1-json.json');
const dataJson=dataBuffer.toString();
const user=JSON.parse(dataJson);
console.log(dataJson);
console.log(user);

user.name="Betsyba";
user.age="27";


const userJSON=JSON.stringify(user);
fs.writeFileSync('1-json.json',userJSON);
console.log(userJSON);