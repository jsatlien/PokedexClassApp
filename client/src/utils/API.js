import axios from "axios";
const baseURL = "https://pokeapi.co/api/v2";

export default class API {
     static getPokemon(url) {
        let reqURL = url ? url : baseURL + "/pokemon";

        return axios.get(reqURL);
    }

    static changePage(url) {
        return axios.get(url);
    }
}


