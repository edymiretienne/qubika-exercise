import { APIRequestContext, expect } from '@playwright/test';
export async function assertCategoryAndSubcategoryExist(
 request: APIRequestContext,
 token: string,
 categoryName: string,
 subCategoryName: string
) {
 const response = await request.get('https://api.club-administration.qa.qubika.com/api/category-type', {
   headers: {
     Authorization: `Bearer ${token}`,
     trace: 'e2e-playwright',
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