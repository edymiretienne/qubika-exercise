# Playwright E2E Tests – Qubika Club Management System

This repository contains an end-to-end (E2E) automated test solution built with **Playwright** and **TypeScript**.  
The goal of this project is to validate a complete user journey in the Qubika Club Management System, combining **UI automation** and **API interactions**.

---

## 🧪 Test Scope

The automated scenario covers the following flow:

1. **User creation via API**
   - A new admin user is dynamically created using the authentication API.
   - The response is validated to ensure the user was successfully created.

2. **Login via UI**
   - The application login page is accessed.
   - Login page elements are validated.
   - The created user logs into the system.

3. **Dashboard validation**
   - Successful authentication is validated by asserting that the dashboard is loaded correctly.

4. **Category management**
   - Navigation to the Categories section.
   - Creation of a new category.
   - Creation of a subcategory linked to the created category.
   - Successful operations are validated using UI assertions (including system feedback such as toasts).

All data used in the tests (users, categories, and subcategories) is generated dynamically to avoid conflicts and ensure test independence.

---

## 🏗️ Project Structure

```
tests/
 ├─ create-category.spec.ts     # Main E2E scenario
 ├─ data/
 │   └─ dataTest.ts             # Test data factory
 ├─ helpers/
 │   └─ auth.controller.ts      # API helpers
 └─ pages/
     ├─ loginPage.ts
     ├─ dashboardPage.ts
     └─ categoryPage.ts
```

The project follows the **Page Object Model (POM)** pattern to improve readability, reusability, and maintainability.

---

## 🛠️ Tech Stack

- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)

---

## ▶️ How to Run the Tests

### 1. Install dependencies
```bash
npm install
```

### 2. Run all tests
```bash
npx playwright test
```

### 3. Open the Playwright report
```bash
npx playwright show-report
```

---

## 🔍 Exploratory Testing Findings

In addition to automated testing, exploratory testing was performed on the application.

The identified issues, observations, and improvement suggestions are documented here:

👉 **Exploratory Testing Report (Google Docs):**  
https://docs.google.com/document/d/18HAF5VowBM_t8e0CiHQm_jHVd5tbY4ob2m3qMTdVZis/edit?usp=sharing 

---
