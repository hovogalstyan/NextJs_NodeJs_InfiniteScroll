import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 1000
})

export class Api {
    static getPhotosScroll(page, limit) {
        return api.get('/photos_scroll', {
            params: {
                page,
                limit
            }
        })
    }

    static getIdPhotos(id) {
        return api.get('photos/' + id)
    }
}