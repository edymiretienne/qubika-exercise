import { Page, expect} from "@playwright/test";

export class CategoryPage{
    constructor(private page:Page) {}

    get addButton(){ 
        return this.page.getByRole('button', { name: ' Adicionar' });
    } 

    get categoryNameInput(){
        return this.page.getByRole('textbox', { name: 'Nombre de categoría' });
    } 

    get isSubCategoryCheckbox(){
        return this.page.locator('label').filter({ hasText: 'Es subcategoria?' });
    }
    
    get acceptButton(){
        return this.page.getByRole('button', { name: 'Aceptar' });
    } 

    get parentCategory(){
        return this.page.getByRole('combobox').getByRole('textbox');
    }

    get toast(){
        return this.page.getByRole('alertdialog', { name: 'Tipo de categoría adicionada' });
    } 

    async assertCategoryIsLoaded(){
        await expect(this.page).toHaveURL(/category/);
    }

    async createCategory(categoryName:string){
        await this.addButton.click();
        await this.categoryNameInput.fill(categoryName);
        await this.acceptButton.click();
        await this.toast.isVisible();
    }

    async createSubcategory(categoryName:string, subcategory: string){
        await this.addButton.click();
        await this.categoryNameInput.fill(subcategory);
        await this.isSubCategoryCheckbox.click();
        await this.parentCategory.fill(categoryName);
        await this.page.getByRole('option', { name: categoryName }).click();
        await this.acceptButton.click();
        await this.toast.isVisible();
    }
}