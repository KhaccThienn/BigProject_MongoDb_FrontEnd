import * as http from "../common/http-common";

const URLAPI = "http://localhost:8000";

export const getAll = async () => {
    try {
        const res = await http.get(`${URLAPI}/api/books`);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
};

export const getAllAndLimit = async () => {
    try {
        const res = await http.get(`${URLAPI}/api/books/limit`);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
};

export const getBookByID = async (id) => {
    try {
        const res = await http.get(`${URLAPI}/api/book/${id}`);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
}

export const getBookByName = async (value) => {
    try {
        const res = await http.get(`${URLAPI}/api/books/search/${value}`);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
}

export const createBook = async (data) => {
    try {
        const res = await http.post(`${URLAPI}/api/book`, data);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
}

export const updateBook = async (id, data) => {
    try {
        const res = await http.put(`${URLAPI}/api/book/${id}`, data);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
}

export const deleteBook = async (id) => {
    try {
        const res = await http.remove(`${URLAPI}/api/book/${id}`);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
}