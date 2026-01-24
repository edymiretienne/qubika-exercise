import { test, expect } from '@playwright/test';
import { registerUser } from './helpers/auth.controller';
import { LoginPage } from './pages/loginPage';
import { DashboardPage } from './pages/dashboardPage';
import { CategoryPage } from './pages/categoryPage';

import { assertCategoryAndSubcategoryExist } from './helpers/test';


const userPayload = {
    email: `user1211${Date.now()}@test.com`,
    password: 'test@12345',
    roles: ['ROLE_ADMIN'],
  }

const data = {
  category: `${Date.now()}jagCategoria`,
  subCategory: 'SubCategory', 
}  

test('should create an user through API', async ({ request }) => {
  const response =  await registerUser (request,userPayload);
  const body =  await response.json();

  expect(response.status()).toBe(201);
  expect(body).toHaveProperty('email', userPayload.email)
  
});

test('user successfully creates a category after login', async ({ page, request }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.validateLoginPage();
  await loginPage.login(userPayload.email, userPayload.password);

  const dashboardPage = new DashboardPage(page);
  await dashboardPage.assertDashboardIsLoaded();
  await dashboardPage.validateDashboardPage();
  await dashboardPage.clickCategories();

  const categoryPage = new CategoryPage(page);
  await categoryPage.assertCategoryIsLoaded();
  await categoryPage.createCategory(data.category);
  await categoryPage.createSubcategory(data.category,data.subCategory);

  const token = await page.evaluate(() =>
    localStorage.getItem('token')
  );

  await assertCategoryAndSubcategoryExist(request, token!, data.category, data.subCategory);
});
