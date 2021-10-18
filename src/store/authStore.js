import { makeAutoObservable } from "mobx";
import decode from 'jwt-decode'
import api from "./api";

class AuthStore {
    user = null;
    

    constructor() {
        makeAutoObservable(this, {})
    }

    setUser = (token) => {
        localStorage.setItem("myToken", token);
        api.defaults.headers.common.Authorization = `Bearer ${token}`
        this.user = decode(token)
    }

    logging = async (path, userData) => {
        try {
          const response = await api.post(`${path}`, userData);
          this.setUser(response.data.token);
        } catch (error) {
          console.log(error);
        }
      };

    // signUp = async (userData) => {
    //     try {
    //         const response = await api.post('/signup', userData)
    //         this.user = response.data.token
    //         console.log(response.data)
    //         this.setUser(response.data.token)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // signIn = async (userData) => {
    //     try {
    //         const response = await api.post("/signin", userData)
    //         this.setUser(response.data.token)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

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
            if (currentToken >= currenntTime) {
                this.setUser(token)
            } else {
                this.logOut()
            }
        }
    }
};

const authStore = new AuthStore();

authStore.checkForToken()

export default authStore;