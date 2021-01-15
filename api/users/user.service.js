const pool=require("../../config/database");

module.exports={ //database kayıt ekledik hata olursa hata döndürdük

    create: (data,callBack) =>{
        pool.query(
             "INSERT INTO kayitli_uyeler (id,username,password,password2,number,email) VALUES (?,?,?,?,?,?)",
              [   
                 data.id,
                 data.username,
                 data.password,
                 data.password2,
                 data.number,
                 data.email
              ],
              (error,results,fields) => {
                  if(error){
                  return callBack(error);
                   }
                  return callBack(null,results);
              }
        );
    },
    getUsers: callBack => {
        pool.query(
            "SELECT id,username,password,password2,number,email from kayitli_uyeler",
            [],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },
    getUsersById: (id,callBack) => {
        pool.query(
            "SELECT id,username,password,password2,number,email from kayitli_uyeler WHERE id=?",
            [id],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null,results[0]);
            }
        )
    },
    updateUser: (data,callBack) => {
        pool.query(
            "UPDATE kayitli_uyeler SET username=?, password=?, password2=?, number=?, email=? WHERE id=?",
            [
                data.username,
                data.password,
                data.password2,
                data.number,
                data.email,
                data.id
            ],
            (error, results, fields) =>{
                if(error){
                    callBack(error);
                }
              return callBack(null,results);
            }
        )
    },
    deleteUser: (data,callBack) => {
       pool.query("DELETE from kayitli_uyeler WHERE id= ?",
         [data.id],
         (error,results,fields) => {
             if(error) {
                 callBack(error);
             }
             return callBack(null,results[0]);
         }
       )
    },
    getUsersByEmail: (email, callBack) => {
        pool.query(
            "SELECT * from kayitli_uyeler WHERE email= ?",
            [email],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null,results[0]);
            }
        )
    },

};