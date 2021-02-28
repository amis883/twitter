import { getAxiosInstanceAuth } from '../api/api'
export const loginApi = (user, callback) => {
    getAxiosInstanceAuth().post("login", user)
        .then(response => {
            const data = response.data;
            callback(true, data)
        }).catch(error => {
            console.log(error)
            callback(false, error.response.message)
        })
}


export const registerApi = (user, callback) => {
    getAxiosInstanceAuth().post("register", user)
        .then(response => {
            const data = response.data;
            callback(true, data)
        }).catch(error => {
            console.log(error)
            callback(false, error.response.data.message)
        })
}
