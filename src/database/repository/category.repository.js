import {Category} from '../../models/category.model.js'
import {client} from '../dbConnect.database.js'

const createCategory = async(filter) => {
    let category;
    let statusCode;
    try {
        category = await Category.create(
            {
            name: filter.name,
            code: filter.code,
            icon: filter.icon,
            link: filter.link,
            active: filter.active,
            variablePrice: filter.variablePrice,
            order: filter.order,
        }
        )
        statusCode = 202
    } catch (error) {
        console.log('An error has ocurred: ',error);
        category = '';
        statusCode = 503;
    } finally {
        await client.close();
        return {category, statusCode}
    }
}

// const readAllCategory = async () {

// }

// const deleteCategory = async(filter) => {
//     let statusCode
//     let errMessage
//     try {
//         await Category.destroy();
//         errMessage = '';
//         statusCode = 202;
//     } catch (error) {
//         statusCode = 503
//         errMessage = errMessage
//     } finally{
//         return {errMessage,statusCode}
//     }
// }

export {createCategory}
