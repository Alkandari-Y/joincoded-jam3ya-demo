import api from "./api";
import { makeObservable, observable, action } from "mobx";

class CoopStore{
    jam3yas = [];

    constructor() {
        makeObservable(this, {
            jam3yas: observable,
            fetchJam3ya: action,
        })
    };

    fetchJam3ya = async () => {
        try {
            const res = await api.get('https://coded-miniproject-jam3ya-be.herokuapp.com/jam3ya');
            this.jam3yas.push(res.data);
            // console.log(`data collect below`)
            // console.log(this.jam3ya)
        } catch (err) {
            console.log(err);
        };
    };


}

const coopStore = new CoopStore()
coopStore.fetchJam3ya()

export default coopStore
