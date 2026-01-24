import { Page, expect} from "@playwright/test";

export class DashboardPage{
    constructor(private page:Page) {}

    get logo(){ 
        return this.page.getByRole('link').filter({ hasText: /^$/ });
    } 

    get dashboardButton(){
        return this.page.getByRole('link', { name: ' Dashboard' });
    } 

    get categoriesButton(){
        return this.page.getByRole('link', { name: ' Tipos de Categorias' });
    }
    
    get totalContributionsBoardTitle(){
        return this.page.getByRole('heading', { name: 'Total de contribuciones' });
    } 

    get totalSociosBoardTitle(){
        return this.page.getByRole('heading', { name: 'Total de socios' });
    } 


    async assertDashboardIsLoaded(){
        await expect(this.page).toHaveURL(/dashboard/);
    }

    async validateDashboardPage(){
        await this.dashboardButton.isVisible();
        await this.totalContributionsBoardTitle.isVisible();
        await this.totalSociosBoardTitle.isVisible();
    }

    async clickCategories(){
        await this.categoriesButton.click();
    }
}