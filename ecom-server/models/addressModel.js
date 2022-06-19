const mongoose = require('mongoose');
// const axios = require('axios');

//Country Schema
var countryMaster = new mongoose.Schema({
    CountryId:Number,
    Name:String,
    Enable:Boolean,
    CreateAt:{type:Date,default:Date.now},
    UpdateAt:{type:Date,default:Date.now}
});

//State Schema
var stateMaster = new mongoose.Schema({
    StateId:Number,
    CountryId:Number,
    Name:String,
    Enable:Boolean,
    CreateAt:{type:Date,default:Date.now},
    UpdateAt:{type:Date,default:Date.now}
});

//City Schema
var cityMaster = new mongoose.Schema({
    CityId:Number,
    StateId:Number,
    Name:String,
    Enable:Boolean,
    CreateAt:{type:Date,default:Date.now},
    UpdateAt:{type:Date,default:Date.now}
})

//Address Schema
var addressMaster = new mongoose.Schema({
    UserId:Number,
    CountryId:Number,
    StateId:Number,
    CityId:Number,
    Pincode:Number,
    Address:String,
    IsPrimary:Boolean,
    Enable:Boolean,
    CreateAt:{type:Date,default:Date.now},
    UpdateAt:{type:Date,default:Date.now}
})

mongoose.model('CountryMaster',countryMaster);
mongoose.model('StateMaster',stateMaster);
mongoose.model('CityMaster',cityMaster);
mongoose.model('AddressMaster',addressMaster);

var CountryMaster = mongoose.model('CountryMaster');
var CityMaster = mongoose.model('CityMaster');
var StateMaster = mongoose.model('StateMaster');
var AddressMaster = mongoose.model('AddressMaster');

module.exports = {
// COUNTRY FUNCTION START 
    getCountry: () => new Promise((resolve,reject)=>{
        CountryMaster.find((err,res)=>{
            if(err) reject('countrymaster error : '+err) ;
            resolve(res);
        })
    }),

    // setCountry:(data) => new Promise((resolve,reject)=>{
    //     var index = 19;
    //     data.forEach((item)=>{
    //         var countryData = new CountryMaster();
    //         countryData.CountryId = (index);
    //         countryData.Name = item;
    //         countryData.Enable = true;
    //         countryData.save();
    //         console.log('Inserted !');
    //         index++;
    //     });
    //     resolve('All Data Inserted !');
    // }),

    getCountryById:(id) => new Promise((resolve,reject)=>{
        CountryMaster.find({"CountryId":id},(err,res)=>{
            if(err) reject('CountryMaster by getDataById error '+err);
            resolve(res);
        })
    }),

    getCountryByName:(name) => new Promise((resolve,reject)=>{
        CountryMaster.find({"Name" :  name}).collation({ locale: 'en', strength: 2 }).then((res)=>{
            resolve(res);
        }).catch((err)=>reject('CountryMaster by getDataByName error '+err))
    }),
// COUNTRY FUNCTION END 



// STATE FUNTION START
    getState:()=> new Promise((resolve,reject)=>{
        StateMaster.find((err,res)=>{
            if(err) reject('StateMaster get error '+err);
            resolve(res);
        })
    }),

    // setState:(data)=> new Promise((resolve,reject)=>{
    //     var index = 19;
    //     data.forEach((item)=>{
    //         var state = new StateMaster();
    //         state.StateId = index;
    //         state.CountryId = 95;
    //         state.Name = item,
    //         state.Enable = true;
    //         state.save();
    //         console.log('Inserted !');
    //         index++;
    //     });
    //     resolve('All Data Inserted !');
    // }),

    getStateByCountryId:(id)=>new Promise((resolve,reject)=>{
        StateMaster.find({"CountryId":id}).collation({ locale: 'en', strength: 2 }).then((res)=>{
            resolve(res);
        }).catch(err=>reject('StateMaster getByName error '+err))
    }),

    getStateByName:(name)=>new Promise((resolve,reject)=>{
        StateMaster.find({"Name":name}).collation({ locale: 'en', strength: 2 }).then((res)=>{
            resolve(res);
        }).catch(err=>reject('StateMaster getByName error '+err))
    }),
//STATE FUNCTION END



// CITY FUNCTION START
    getCity:()=>new Promise((resolve,reject)=>{
        CityMaster.find((err,res)=>{
            if(err) reject('CityMaster get error '+err);
            else resolve(res);
        })
    }),

    // setCity:()=>new Promise((resolve,reject)=>{
    //     StateMaster.find().then((res)=>{
    //         var index=19;
    //         res.forEach((state)=>{
    //             axios.post('https://countriesnow.space/api/v0.1/countries/state/cities',{
    //                 "country": "India",
    //                 "state": state.Name
    //             }).then((res)=>{
    //                 res.data.data.forEach((item)=>{
    //                     var city = new CityMaster();
    //                     city.CityId = index;
    //                     city.StateId = state.StateId;
    //                     city.Name = item;
    //                     city.Enable = true;
    //                     city.save();
    //                     index++;
    //                 })
    //             }).catch((err)=>{
    //                 console.log('Api error '+err);
    //             })

    //             console.log(state.Name);
    //         })
    //     }).catch(err=>reject('CityMaster set error '+err))
    // }),

    getCityByStateId : (id)=>new Promise((resolve,reject)=>{
        CityMaster.find({"StateId":id}).then((res)=>{
            resolve(res);
        }).catch((err)=>{
            reject("CityMaster getCityByStateId error "+err);
        })
    }),

    getCityById:(id)=>new Promise((resolve,reject)=>{
        CityMaster.find({"CityId":id}).then((res)=>{
            resolve(res);
        }).catch((err)=>{
            reject("CityMaster getCityId error "+err);
        })
    }),

    getCityByName:(name)=>new Promise((resolve,reject)=>{
        CityMaster.find({"Name":name}).collation({ locale: 'en', strength: 2 }).then((res)=>{
            resolve(res);
        }).catch((err)=>{
            reject(err);
        })
    }),
// CITY FUNCTION END



// ADDRESS FUNCTION START
    getAddress:()=>new Promise((resolve,reject)=>{
    }),

    setAddress:(userData)=>new Promise((resolve,reject)=>{
    }),
// ADDRESS FUNCTION END
}