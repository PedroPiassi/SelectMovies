import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "64b9a0052dac45c9922624c970ff1b12",
        language: "pt-BR",
        include_adult: true
    }
})