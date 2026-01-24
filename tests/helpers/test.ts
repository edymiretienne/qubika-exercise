import { APIRequestContext, expect } from '@playwright/test';
export async function assertCategoryAndSubcategoryExist(
 request: APIRequestContext,
 token: string,
 categoryName: string,
 subCategoryName: string
) {
 const response = await request.get('/api/category-type', {
   headers: {
     Authorization: `Bearer ${token}`,
     trace: 'test',
   },
 });

 console.log('STATSTd -----', response.status());



 expect(response.ok()).toBeTruthy();
 const categories = await response.json();
 const category = categories.find(
   (c: any) => c.name === categoryName && c.root === true
 );
 expect(category, 'Category not found via API').toBeTruthy();
 const subCategory = categories.find(
   (c: any) =>
     c.name === subCategoryName &&
     c.parentId === category.id
 );
 expect(subCategory, 'Subcategory not linked to category').toBeTruthy();
}