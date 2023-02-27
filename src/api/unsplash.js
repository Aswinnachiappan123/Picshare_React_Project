import axios from"axios";

export default axios.create({
    baseURL:"https://api.unsplash.com/",
    headers:{
        Authorization:"Client-ID Da8wACel8QHs8dPs_RNki9YDEf8Zv5O5b87rxCExLHs",
    }
})