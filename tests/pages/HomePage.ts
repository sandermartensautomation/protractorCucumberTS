import { browser,ElementFinder, element, by } from "protractor";

export class HomePage {

    username: ElementFinder = element(by.model('yourName'));
    greeting: ElementFinder = element(by.binding('yourName'));

    async get(){
        return await browser.get('http://www.angularjs.org');
    }

    async setName(name:string){
        await this.username.sendKeys(name);
    }

    async getGreetingText(){
        return await this.greeting.getText();
    }
}