// import axios from 'axios'


// const params = {
//    headers : {
//     Authorization  : 'bearer' + process.env.REACT_APP_STRIPE_APP_KEY,
//    }
// }

// export const fetchDataFromApi = async (url)=> {
//   try{
// const {data} = await axios.get(process.env.REACT_APP_DEV_URL + url, params)
// return data
//   } catch(error){
// console.log(error)
// return error
//   }
// }

import axios from "axios";

const params = {
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_STRIPE_DEV_APP_KEY,
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(
            process.env.REACT_APP_STRIPE_APP_DEV_URL + url,
            params
        );

        console.log(data)

        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
