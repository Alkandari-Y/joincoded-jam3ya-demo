import api from "./api";
import { makeAutoObservable } from "mobx";

class CoopStore{
    jam3yas = [];

    constructor() {
        makeAutoObservable (this, {})
    };

    fetchJam3ya = async () => {
        try {
            const res = await api.get('/jam3ya');
            this.jam3yas = (res.data);
        } catch (err) {
            console.log(err);
        };
    };
    
    createJam3ya = async (newJam3ya) => {
        try {
            const res = await api.post('/jam3ya', newJam3ya)
            this.jam3yas = [...this.jam3yas, res.data];
        } catch (err) {
            console.log(err)
        }
    }


}

const coopStore = new CoopStore()
coopStore.fetchJam3ya()

export default coopStore
