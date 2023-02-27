
import {Product} from '../../models/product.model.js';
import {client} from '../../database/dbConnect.database.js'
import {StatusCodes} from 'http-status-codes';

const create = async(filter) => {
    let product;
    let statusCode;
    try {
        product = Product.build(
            {
                name: 'Shampoo',
                description: 'Shampoo para el pelo',
                code: '1501a',
                price: 30000,
                unit: 'clp',
                image: 'imagen.png',
                legacy_id: '2030a',
                legacy_last_save: '251p',
            }
        )
        await product.save()
        statusCode = StatusCodes.ACCEPTED
    } catch (error) {
        statusCode = StatusCodes.BAD_GATEWAY
    } finally {
        client.close();
        return statusCode;
    }
}

export {create};