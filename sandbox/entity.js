require('dotenv').config({path:'../.env'})
let user=(id,username,password)=>{
    return user_info={
    id: id,
    username:username,
    password:password,
    valid: function(){
        return this.username + " created"
    }
    }
}
const nam1=user('123','james','1234');
console.log(nam1.valid())

