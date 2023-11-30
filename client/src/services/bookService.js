import * as request from './requester';


const baseUrl = 'http://localhost:3030/jsonstore/books';


export const getAll = async () => {
    return await request.get(baseUrl)
}

export const getOne = async (bookId) => {
    return await request.get(`${baseUrl}/${bookId}`)
}

export const create = async (bookData, token) => {
    return await request.post(baseUrl, bookData, token);
}

export const edit = async (bookId, data, token) => {
    return await request.put(`${baseUrl}/${bookId}`, data, token)
}

export const addComment = async (bookId, data) => {
    const result = await request.post(`${baseUrl}/${bookId}/comments`, data)
    return result;
}

export const deleteBook = async (bookId, token) => {
    await request.del(`${baseUrl}/${bookId}`, undefined, token)
}
