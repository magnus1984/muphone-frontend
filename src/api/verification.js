import axios from 'axios'

export function submitPhone(number) {

    const endpoint = process.env.REACT_APP_API_ENDPOINT_URL

    return axios.post(endpoint, {
        number:number
    })
    .then( (result) => {
        console.log(result)
    })
    .catch( (err) => {
        console.log(err)
    })

}

export function submitPhoneVerification(number, code) {
    return null
}
