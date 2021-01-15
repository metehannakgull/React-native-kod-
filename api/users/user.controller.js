const { create,
        getUsers,
        getUsersByEmail,
        updateUser,
        deleteUser,
        getUsersById
        
} = require("./user.service");
const { hashSync, genSaltSync,compareSync } = require("bcrypt");
const { json } = require("body-parser");
const{sign}= require("jsonwebtoken");
const { result } = require("underscore");

module.exports = {
    createUser: (req, res) => {
        const body =req.body;
        const salt= genSaltSync(10);
        body.password =hashSync(body.password,salt);
        create(body,(err,results) => {
            if(err){
                console.log(err);
                return res.status(500),json({
                    message: "Database'e baglanılamadı..!"
                });
            }
            return res.status(200).json({
                success:1,
                data: results
            })
        });      
    },
    getUsersById: (req, res)=>{
         const id =req.params.id;
         getUsersById(id, (err,results)=> {
             if(err){
                 console.log(err);
                 return;
             }
             if(!results){
                 return res.json({
                     message: "kayit bulunamadi- record not found"
                 })
             }
             return res.json({
                 success:1,
                 data: results
             })
         })
    },
    getUsers: (req,res)=>{
        getUsers((err,results) =>{
           if(err){
               console.log(err);
               return;
           }
           return res.json({
               success: 1,
               data: results
           })
        })     
    },
    updateUser: (req,res)=>{
      const body = req.body;
      const salt = genSaltSync(10);
      body.password =hashSync(body.password,salt);

      updateUser(body, (err,results) =>{
          if(err){
              console.log(err);
              return;

          }
          if(!results){
              return res.json({
                  message:"basarisiz- failed to update user"
              })
          }
          return res.json({
              success:1,
              message: "guncelleme basarili - update success"
          })

      })
    },
    deleteUser: (req,res) =>{
       const data= req.body;
       deleteUser(data, (err,results) => {
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    message: "kayit bulunamadi- record not found"
                })
            }
            return res.json({
                message: "kullanici silme basarili- user deleted successfully"
            })
       })
    },
    login: (req, res)=>{
        const body = req.body;
        getUsersByEmail(body.email, (err,results) => {
            if(err){
                console.log(err);
            }
            if(!results){
                return res.json({
                    data: "gecersiz email ya da sifre - invalid email or password"
                });
            }
            const result =compareSync(body.password, results.password);
            if(result){
                results.password =undefined;
                const json_token = sign({result: results}, "asdasd",{
                    expiresIn: "1h"
                })
                return res.json({
                    success: 1,
                    message: "basarili - login successfully",
                    token: json_token
                });             
            }
            else {
                return res.json({
                    data: "gecersiz email ya da sifre - invalid email or password"
                });
            }
        });
    }


}