const { response } = require("express");

const data = {
    id: 123,
    name: "john",
    city: "New york",
    display: function(){
        return this.name + " lives in " + this.city;
    }
};
//export {data as "person"};
// module.exports=data;
// let arr=[4,7,1,3];
// let newArr=arr.map(x=>{
//     console.log(x*2);
// });
const hello = (name) => {
    console.log(`hello ${name}`);
}
const add = (x, y) => {
    console.log(x + y);
}
module.exports = { data, hello, add };

const api=fetch('http://localhost:3000/users/2')
          .then(response=>response.json())
          .then(data=>{
            console.log(data.User_name)
          })
