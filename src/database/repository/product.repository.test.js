import { StatusCodes } from 'http-status-codes';
import {create} from './product.repository.js';

describe('Shuld insert data into DB', () => {
    test('create(): Should return status ACCEPTED', async () => {
        const statusCode = await create();
        expect(statusCode).toBe(StatusCodes.ACCEPTED)
    })
})