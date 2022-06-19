const mongoose = require('mongoose');

//Role Schema
var roleMaster = new mongoose.Schema({
    RoleId:Number,
    Name:String,
    Enable:Boolean,
    CreateAt:{type:Date,default:Date.now},
    UpdateAt:{type:Date,default:Date.now}
});

//User Schema
var userMaster = new mongoose.Schema({
    UserId:Number,
    RoleId:Number,
    Name:String,
    Password:String,
    Email:String,
    Mobile:String,
    Enable:Boolean,
    CreateAt:{type:Date,default:Date.now},
    UpdateAt:{type:Date,default:Date.now}
});

mongoose.model('RoleMaster',roleMaster);
mongoose.model('UserMaster',userMaster);

var RoleMaster = mongoose.model('RoleMaster');
var UserMaster = mongoose.model('UserMaster');

module.exports={
//ROLE FUNCTION START
getRoles:()=>new Promise((resolve,reject)=>{
    RoleMaster.find((err,data)=>{
        if(err) reject('RoleMaster get error '+err);
        resolve(data);
    })
}),

getRoleById:(id)=>new Promise((resolve,reject)=>{
    RoleMaster.findOne({"RoleId":id},(err,data)=>{
        if(err) reject('RoleMaster getRoleById error '+err);
        resolve(data);
    })
}),

getRoleByName:(name)=>new Promise((resolve,reject)=>{
    RoleMaster.findOne({"Name":name}).collation({ locale: 'en', strength: 2 })
    .then(data=>resolve(data))
    .catch(err=>reject('RoleMaster getRoleByName error '+err));
}),

getMaxRoleId:()=>new Promise((resolve,reject)=>{
    RoleMaster.findOne({}).sort({"RoleId":-1})
    .then((data)=>{
        resolve(data);
    }).catch((err)=>{
        reject('RoleMaster getMaxRoleId error '+err);
    })
}),

setRoles:(postData)=>new Promise((resolve,reject)=>{
    var role = new RoleMaster();
    role.RoleId = parseInt(postData.id) + 1;
    role.Name = postData.name;
    role.Enable = postData.enable;
    role.save().then(data=>resolve(role))
    .catch(err=>reject("RoleMaster setRoles error "+err))
}),
//ROLE FUNCTION END



//USER FUCNTION START
    getUsers:()=>new Promise((resolve,reject)=>{
        UserMaster.find((err,data)=>{
            if(err) reject("UserMaster getUsers err "+err);
            resolve(data);
        })
    }),

    setUser:(userData)=>new Promise((resolve,reject)=>{
        resolve(userData)
    }),
//USER FUCNTION END

}