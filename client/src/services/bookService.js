import * as request from './requester';


const baseUrl = 'http://localhost:3030/data/books';


export const getAll = async () => {
    return await request.get(baseUrl)
}

export const getOne = async (bookId) => {

}

export const create = async (bookData, token) => {
    return await request.post(baseUrl, bookData, token);
}

export const addReview = async (bookId, data) => {

}