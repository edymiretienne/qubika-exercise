import { Page, expect} from "@playwright/test";

export class LoginPage{
    constructor(private page:Page) {}

    get title(){ 
        return this.page.getByRole('heading', { name: 'Qubika Club' });
    } 

    get subtitle(){
        return this.page.getByText('Por favor ingrese correo y');
    } 

    get loginBoard(){
        return this.page.getByText('Qubika ClubPor favor ingrese');
    } 
    
    get emailInput(){
        return this.page.getByRole('textbox', { name: 'Usuario o correo electrónico' });
    }
    
    get passwordInput() {
      return this.page.getByRole('textbox', { name: 'Contraseña' }); 
    } 

    get authenticateButton(){
        return this.page.getByRole('button', { name: 'Autenticar' });
    }

    async goto(){
        this.page.goto('https://club-administration.qa.qubika.com/#/auth/login')
    }

    async validateLoginPage(){
        await this.title.isVisible();
        await this.subtitle.isVisible();
        await this.loginBoard.isVisible();
    }

    async login(email:string, password:string){
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.authenticateButton.click();
    }

    async assertSuccessfullLogin(){
        await expect(this.page).not.toHaveURL(/login/);
        await expect(this.page).toHaveURL(/dashboard/);
    }
}