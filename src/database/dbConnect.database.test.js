import { client } from './dbConnect.database.js'


describe('Should connect to a database',()=>{
    test('Should receive a connection and not fail',async() => {
        try {
            await client.authenticate();
          } catch (error) {
            fail('Failed to connect to the DB')
          }finally {
            await client.close()
        }
    })
});