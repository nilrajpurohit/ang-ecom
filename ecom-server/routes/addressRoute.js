const { model } = require('mongoose');
const router = require('express').Router();
const addressModel = require('../models/addressModel');


//COUNTRY ROUTE START
router.route('/country')
.get((req,res)=>{
  addressModel.getCountry().then((data)=>{
    res.status(200).send(data);
  }).catch((err)=>{
    res.status(400).send(err);
  })
});

//SetData
// router.route('/country/set')
// .get((req,res)=>{
//   addressModel.setCountry(data).then((res)=>{
//     console.log(res);
//   }).catch((err)=>{
//     console.log(err);
//   })
// });

router.route('/country/:id')
.get((req,res)=>{
  addressModel.getCountryById(req.params.id).then((data)=>{
    res.status(200).send(data);
  }).catch((err)=>{
    res.status(400).send(err);
  })
});

router.route('/country/name/:id')
.get((req,res)=>{
  addressModel.getCountryByName(req.params.id).then((data)=>{
    res.status(200).send(data);
  }).catch((err)=>{
    res.status(400).send(err);
  })
});
//COUNTRY ROUTE END



//STATE ROUTE START
router.route('/state')
.get((req,res)=>{
    addressModel.getState().then((data)=>{
        res.status(200).send(data);
    })
    .catch((err)=>{
        res.status(400).send(err);
    })
})

// router.route('/state/set')
// .get((req,res)=>{
//     addressModel.setState(data).then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// })

router.route('/state/country/:id')
.get((req,res)=>{
    addressModel.getStateByCountryId(req.params.id).then((data)=>{
        res.status(200).send(data);
    })
    .catch((err)=>{
        res.status(400).send(err);
    })
})

router.route('/state/name/:id')
.get((req,res)=>{
    addressModel.getStateByName(req.params.id).then((data)=>{
        res.status(200).send(data);
    })
    .catch((err)=>{
        res.status(400).send(err);
    })
})
//STATE ROUTE END



//CITY ROUTE START
router.route('/city')
.get((req,res)=>{
    addressModel.getCity().then((data)=>{
        res.status(200).send(data);
    }).catch((err)=>{
        res.status(400).send(err);
    })
})

// router.route('/city/set')
// .get((req,res)=>{
//     city.setCity().then((data)=>{
//         res.status(200).send(data);
//     }).catch((err)=>{
//         console.log(err);
//     })
// })

router.route('/city/:id')
.get((req,res)=>{
    addressModel.getCityById(req.params.id).then((data)=>{
        res.status(200).send(data);
    }).catch((err)=>{
        res.status(400).send(err);
    })
})

router.route('/city/state/:id')
.get((req,res)=>{
    addressModel.getCityByStateId(req.params.id).then((data)=>{
        res.status(200).send(data);
    }).catch((err)=>{
        res.status(400).send(err);
    })
})

router.route('/city/name/:id')
.get((req,res)=>{
    addressModel.getCityByName(req.params.id).then((data)=>{
        res.status(200).send(data);
    }).catch((err)=>{
        res.status(400).send(err);
    })
})
//CITY ROUTE END


module.exports = router;