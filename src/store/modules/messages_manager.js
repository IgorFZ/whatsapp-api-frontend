// import axios from 'axios';

// const BASE_URL = "http://127.0.0.1:3000/"

// const AUTH = {
//     headers: {
//         authorization: localStorage.auth_token,
//     },
// };

const state = {
    cart: [],
    orders: [],
    coupon: {
        id: null,
        code: null,
        stripe_coupon_id: null,
        amount_off: null,
        percent_off: null,
    },
}

const getters = {

}

const actions = {
    
}

const mutations = {
    
}

export default {
    state,
    getters,
    actions,
    mutations,
}