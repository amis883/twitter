import { getAxiosInstanceJsonServer } from '../api/api'
export const getAllTweets = (callback) => {
    getAxiosInstanceJsonServer().get("tweets")
        .then(response => {
            const data = response.data;
            callback(true, data)
        }).catch(error => {
            console.log(error)
            callback(false, error)
        })
}


export const getHashTags = (callback) => {
    getAxiosInstanceJsonServer().get("hashTags")
        .then(response => {
            const data = response.data;
            callback(true, data)
        }).catch(error => {
            console.log(error)
            callback(false, error)
        })
}


export const getUsers = (callback) => {
    getAxiosInstanceJsonServer().get("users")
        .then(response => {
            const data = response.data;
            callback(true, data)
        }).catch(error => {
            console.log(error)
            callback(false, error)
        })
}

export const newTweetRequest = (data, callback) => {
    getAxiosInstanceJsonServer().post("tweets", data)
        .then(response => {
            const data = response.data;
            callback(true, data)
        }).catch(error => {
            console.log(error)
            callback(false, error)
        })
}
