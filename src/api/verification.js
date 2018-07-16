import axios from 'axios'

export function submitPhone(number) {

    const endpoint = process.env.REACT_APP_API_ENDPOINT_URL + '/phone'

    return axios.post(endpoint, {
        number:number
    })
}

export function submitPhoneVerification(number, validationCode) {

    const endpoint = process.env.REACT_APP_API_ENDPOINT_URL + '/phone/validation'

    return axios.post(endpoint, {
        number:number,
        validation_code:validationCode
    })
}
