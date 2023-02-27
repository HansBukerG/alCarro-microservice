import {createCategory} from './category.repository.js'

describe('Should pass test',() => {
    test('Should insert data into DB', async() => {
        const testData = {
            name: 'Hans',
            code: '001',
            icon: 'Icon',
            link: 'hans.buker.cl',
            active: true, 
            variablePrice: true,
            order: 0,
        }
        try{
            const {category,statusCode} = await createCategory(testData);
            if (statusCode != 202) {
                expect(isUndefined(category.id)).toBe(false);
            }
        }catch(error){
            fail(`Test failer with error: ${error}`)
        }
    })
})