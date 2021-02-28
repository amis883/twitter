import Axios from 'axios';

// export const getAxiosInstance = () => {
//     return Axios.create({
//         baseURL: " https://twitterapi.liara.run",
//         headers: {
//             API_KEY: "kjnsxkjANASJNCkJASNCjaSNCaBcbcsvcv"
//         }
//     })
// }

export const getAxiosInstanceAuth = () => {
    return Axios.create({
        baseURL: " https://twitterapi.liara.run/api/",
        headers: {
            // API_KEY: "kjnsxkjANASJNCkJASNCjaSNCaBcbcsvcv"
        }
    })
}

export const getAxiosInstanceJsonServer = () => {
    return Axios.create({
        baseURL: " https://twitterapi.liara.run/api/",
        headers: {
            API_KEY: "kjnsxkjANASJNCkJASNCjaSNCaBcbcsvcv"
        }
    })
}
// export default getAxiosInstance;