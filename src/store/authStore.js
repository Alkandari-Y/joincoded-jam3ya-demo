import { makeObservable, observable, action } from "mobx";
import decode from 'jwt-decode'
import api from "./api";
import axios from 'axios'


class AuthStore {
    user = null;
    

    constructor() {
        makeObservable(this, {
            user: observable,
            signUp: action,
            signIn: action,
            logOut: action
        })
    }

    setUser = (token) => {
        localStorage.setItem("myToken", token);
        api.defaults.headers.common.Authorization = `Bearer ${token}`
        this.user = decode(token)
    }

    signUp = async ({username, email, password}) => {
        try {
            const response = await axios.post('/signup', {username, email, password})
            this.user = response.data.token
            console.log(response.data)
            this.setUser(response.data.token)
        } catch (error) {
            console.log(error)
        }
    }

    signIn = async ({username, password}) => {
        try {
            const response = await api.post("/signin", {username, password})
            this.setUser(response.data.token)
        } catch (error) {
            console.log(error)
        }
    }

    logOut = () => {
        delete api.defaults.headers.common.Authorization
        localStorage.removeItem("myToken")
        this.user = null;

    }

    checkForToken = () => {
        const token = localStorage.getItem("myToken")
        if (token) {
            const currenntTime = Date.now()
            let currentToken = decode(token)
            console.log(this.user)
            console.log(token)
            if (currentToken >= currenntTime) {
                this.setUser(token)
            } else {
                this.logOut()
            }
        } else {
            this.logOut()
        }
    }
};

const authStore = new AuthStore();

authStore.checkForToken()

export default authStore;