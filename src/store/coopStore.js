import api from "./api";
import { makeAutoObservable } from "mobx";

class CoopStore{
    jam3yas = [];

    constructor() {
        makeAutoObservable (this, {})
    };

    fetchJam3ya = async () => {
        try {
            const res = await api.get('https://coded-miniproject-jam3ya-be.herokuapp.com/jam3ya');
            this.jam3yas = (res.data);
        } catch (err) {
            console.log(err);
        };
    };


}

const coopStore = new CoopStore()
coopStore.fetchJam3ya()

export default coopStore
