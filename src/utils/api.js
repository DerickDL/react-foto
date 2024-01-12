import axios from "axios";

const BASE_URL = import.meta.env.VITE_UNSPLASH_BASE_URL;
const API_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;


export const searchPhotos = async (keyword) => {
    try {
        const response = await axios.get(BASE_URL + '/search/photos', {
            params: {
                query: keyword
            },
            headers: {
                Authorization: `Client-ID ${API_KEY}`
            }
        })
        return response.data.results;
    } catch (err) { 
        console.error('Error fetching images: ', err);
    }
    
}

