import { API_HEADER, API_JWT_LOGIN } from '@/consts/TodoConsts'
// API_UPDATE_TODO, API_DELETE_TODO, API_REF_LIST } from '@/consts/TodoConsts'

import axios from 'axios'

const LoginModule = {
    namespaced: true,
    state: {
        user: {
            token: ''
        }
    },
    getters: {
        token (state) { return state.user.token }
    },
    actions: {
        doLoginService ({ commit }, loginInput) {
          return new Promise((resolve, reject) => {
            let loginObj = {
                username: loginInput.username,
                password: loginInput.password
            }
            axios.create(API_HEADER)
            .post(API_JWT_LOGIN, loginObj)
            .then(response => {
                commit('doLogin', response.data.token)
                console.log(response)
                resolve()
            })
            .catch(error => {
                if (error) {
                    loginInput.callbackError()
                    console.log(error)
                    reject(error)
                }
            })
          })
        }
    },
    mutations: {
        doLogin (state, token) {
            state.user.token = token
        }
    }
}

export default LoginModule
