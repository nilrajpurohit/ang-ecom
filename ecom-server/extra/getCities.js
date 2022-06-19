const axios = require('axios')

const callApi = () =>{
    axios.post('https://countriesnow.space/api/v0.1/countries/state/cities',
    {
        "country": "India",
        "state": "Maharashtra"
    }).then((res)=>{
        console.log(res);
    })
}

callApi();