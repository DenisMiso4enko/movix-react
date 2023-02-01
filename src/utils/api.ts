import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3'
const TOKEN= import.meta.env.VITE_APP_TMDB_TOKEN

const headers = {
    Authorization: "bearer " + TOKEN,
}

export const fetchDataFromApi = async (url: string, params: any = '') => {
    try {
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data

    } catch (err: any) {
        console.log(err.message)
    }
}
