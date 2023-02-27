import { StatusCodes } from 'http-status-codes';
import {create, readAllProducts} from './product.repository.js';

describe('Shuld insert data into DB', () => {
    test('create(): Should return status ACCEPTED', async () => {
        const statusCode = await create();
        expect(statusCode).toBe(StatusCodes.ACCEPTED)
    })
    test('read(): Should return a status different from BAD_REQUEST', async() => {
        const {statusCode} = await readAllProducts();
        expect(statusCode).toBe(StatusCodes.ACCEPTED)
    })
})