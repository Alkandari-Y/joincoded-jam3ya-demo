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

    logOut = () => {
        delete api.defaults.headers.common.Authorization
        localStorage.removeItem("myToken")
        this.user = null;
    }

    checkForToken = () => {
        const token = localStorage.getItem("myToken");
        if (token) {
          const currentTime = Date.now(); // give us the current time
          let tempUser = decode(token);
          if (tempUser.exp >= currentTime) {
            this.setUser(token);
          } else {
            this.logout();
          }
        }
      };
};

const authStore = new AuthStore();

authStore.checkForToken()

export default authStore;