import * as http from "../common/http-common";

const URLAPI = "http://localhost:8000";

export const getOneUser = async (id) => {
    try {
        const res = await http.get(`${URLAPI}/api/user/${id}`);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
}
