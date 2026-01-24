export function createUserPayload() {
    return{
        email: `user1211${Date.now()}@test.com`,
        password: 'test@12345',
        roles: ['ROLE_ADMIN'],
    }   
}

export function createCategoryDataTest() {
    return{
        category: `${Date.now()}jagCategoria`,
        subCategory: `${Date.now()}SubCategory`, 
    }
}  