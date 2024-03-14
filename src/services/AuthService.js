import * as http from "../common/http-common";

const URLAPI = "http://localhost:8000";

export const login = async (data) => {
    try {
        const res = await http.post(`${URLAPI}/api/auth/login`, data);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
};

export const register = async (data) => {
    try {
        const res = await http.post(`${URLAPI}/api/auth/register`, data);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
}
