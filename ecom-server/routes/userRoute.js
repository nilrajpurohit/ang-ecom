const router = require('express').Router();
const userModel = require('../models/userModel');
const addressModel = require('../models/addressModel');

//ROLE ROUTE START
router.route('/role')
.get((req,res)=>{
    userModel.getRoles()
    .then(data=>res.status(200).send(data))
    .catch(err=>res.status(400).send(err))
})
.post((req,res)=>{
    userModel.getRoleByName(req.body.name).then(data=>{
        if(data){
            res.status(400).send("Role already exists !");
        }else{
            userModel.getMaxRoleId().then(data=>{
                if(!req.body.name || !req.body.enable){
                    res.status(400).send("Invalid post data !")   
                }else{
                    req.body.id = data ? data.RoleId : 0;
                    userModel.setRoles(req.body)
                    .then(data=>res.status(200).send(data))
                    .catch(err=>console.log(err))
                }
            }).catch(err=>console.log(err))
        }
    }).catch(err=>console.log(err));
})

router.route('/role/getMaxRoleId')
.get((req,res)=>{
    userModel.getMaxRoleId()
    .then(data=>res.status(200).send(data))
    .catch(err=>res.status(400).send(err))
})
//ROLE ROUTE END



//USER ROUTE START
router.route('/user')
.get((req,res)=>{
    userModel.getUsers()
    .then(data=>res.status(200).send(data))
    .catch(err=>console.log(err))
})
.post((req,res)=>{
    userModel.setUser(req.body)
    .then(data=>{
        addressModel.setAddress(req.body).then((res)=>{
            
        }).catch(err=>console.log(err))
    })
    .catch(err=>console.log(err))
})
//USER ROUTE END

module.exports = router;