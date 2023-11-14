import * as request from './requester';


const baseUrl = 'http://localhost:3030/data/books';


export const getAll = async () => {
    
}

export const getOne = async (bookId) => {

}

export const create = async (bookData) => {
    const result = await request.post(baseUrl, bookData);
    
}

export const addReview = async (bookId, data) => {

}