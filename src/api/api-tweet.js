import { getAxiosInstance } from '../api/api'
export const getAllTweets = (callback) => {
    getAxiosInstance().get("/tweets")
        .then(response => {
            const data = response.data;
            callback(true, data)
        }).catch(error => {
            console.log(error)
            callback(false, error)
        })
}


export const getHashTags = (callback) => {
    getAxiosInstance().get("/hashTags")
        .then(response => {
            const data = response.data;
            callback(true, data)
        }).catch(error => {
            console.log(error)
            callback(false, error)
        })
}


export const getUsers = (callback) => {
    getAxiosInstance().get("/users")
        .then(response => {
            const data = response.data;
            callback(true, data)
        }).catch(error => {
            console.log(error)
            callback(false, error)
        })
}

export const newTweetRequest = (data, callback) => {
    getAxiosInstance().post("/tweets", data)
        .then(response => {
            const data = response.data;
            callback(true, data)
        }).catch(error => {
            console.log(error)
            callback(false, error)
        })
}
// export default getAllTweets