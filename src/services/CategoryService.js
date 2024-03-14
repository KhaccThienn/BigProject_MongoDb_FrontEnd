import * as http from "../common/http-common";

const URLAPI = "http://localhost:8000";

export const getAllCategories = async () => {
    try {
        const res = await http.get(`${URLAPI}/api/categories`);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
};

export const getCategoryByID = async (id) => {
    try {
        const res = await http.get(`${URLAPI}/api/category/${id}`);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
}

export const createCategory = async (data) => {
    try {
        const res = await http.post(`${URLAPI}/api/category`, data);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
}

export const updateCategory = async (id, data) => {
    try {
        const res = await http.put(`${URLAPI}/api/category/${id}`, data);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
}

export const deleteCategory = async (id) => {
    try {
        const res = await http.remove(`${URLAPI}/api/category/${id}`);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
}