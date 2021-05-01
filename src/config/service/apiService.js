const { default: axios } = require("axios")


export class APIService {
    constructor(){

    }

    getRequest = async (url) => {
        let data =  await axios.get(url);
        return data.data
    }
}