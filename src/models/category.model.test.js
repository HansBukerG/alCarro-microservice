import {Category} from './category.model.js'
import {client} from '../database/dbConnect.database.js'

describe('Should create table data into datastore database',()=>{
    test('Should Sync() Category model into datastore', async()=>{
        try {
            await Category.sync()
            console.log('Schema Product created!')
        } catch (error) {
            console.log('Error in task: ', error)
            fail('Something has failed')
        } finally {
            await client.close()
        }
    })
})