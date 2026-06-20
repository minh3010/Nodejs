//import {person} from "./myApp.js";
// const {data,hello}=require('./myApp.js');
// console.log(data)

const fs=require('fs')

const parg="hall welt";
fs.writeFile('read.txt',parg,(err)=>{
    if(err){
        console.error(err);
        return;
    }
});
fs.readFile('read.txt','utf-8',(error,data)=>{
    if(error){
        console.error(error);
        return;
    }
    console.log(data);
});