import * as request from './requester'

const baseUrl = 'http://localhost:3030/users'

export const login = (loginData) => {
    return request.post(`${baseUrl}/login`, loginData);
}
