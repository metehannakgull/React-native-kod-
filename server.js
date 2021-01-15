require("dotenv").config();
const express = require("express"); //server kurmak için
//var body_parser = require("body-parser"); //inputlari almak için gerekli-id sifre numara almak için
//var _ =require("underscore");
 
const app =express();

const userRouter = require("./api/users/user.router");
app.use(express.json());

app.use("/api/users",userRouter);

/*
//const PORT=3000;
app.use(body_parser.json()); // req ile gelen istekleri bunun sayesinde okuyabiliyoruz.


app.get("/api",function(req,res){
    
    res.send("merhaba"); //geri döndüreceğimiz yanıt, kullanıcıya vereceğimiz yanıt
    //req bize gelen id vs
})

app.post("/",function(req,res){ //kullanıcı verileri arka planda gelecek ve  
                                //verileri kaydetmek için kullanılır

    let body =_.pick(req.body,"username","password","password2","number","email"); //verileri pick'le yani al
                         // let =ES6 da değişken oluşturma
    res.send(body);//ekrana yazdırma işlemi için, body JSON formatında olduğundan dönüştürme yapmadık
})

app.put("/",function(req,res){ // verileri değiştirmek yani update işlemi için kullanılır.

    res.send("put isteği gönderildi");
})

app.delete("/",function(req,res){

    res.send("delete isteği gönderildi");
})
*/
app.listen(process.env.APP_PORT, ()=>{
    console.log(process.env.APP_PORT+"nolu server çalışıyor:");
});