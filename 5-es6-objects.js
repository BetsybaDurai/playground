//object property shorthand

const name="Betsyba"
const userAge=27

const user={
    name,
    age:userAge,
    location:"Bangalore"
}

console.log(user)

const product= {
    label:'Red Book',
    price:'3',
    stock:20,
    salesPrice:undefined,
    rating:4.3
}
// const label=product.label;
// console.log(label)

// const { label:productLabel, price,stock, rating=5}=product;
// console.log(productLabel)
// console.log(price)
// console.log(stock)
// console.log(rating)

// destructing using function and object (by using  {label, stock=0} ={})
const transaction=( type, {label, stock=0} ={})=> {
    console.log(type,label,stock)
}

transaction('order',product)