import * as http from "../common/http-common";

const URLAPI = "http://localhost:8000";

export const addToWishlist = async (data) => {
    try {
        const res = await http.post(`${URLAPI}/api/wishlist`, data);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
}

export const removeFromWishlist = async (data) => {
    try {
        const res = await http.post(`${URLAPI}/api/wishlist/remove`, data);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
}