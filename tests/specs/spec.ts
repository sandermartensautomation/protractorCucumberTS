import { Given, When, Then } from 'cucumber';
import { HomePage } from '../pages/HomePage';
import { expect } from 'chai';

let homePage: HomePage = new HomePage();
let namee:string;

Given('you are on the homepage', async()=>{
    await homePage.get();
});

When('you enter {string} in the textfield', async(name:string)=>{
    namee = name;
    await homePage.setName(name);
});

Then('the correct greeting should appear', async()=>{
    expect(await homePage.getGreetingText()).equal('Hello ' + namee +'!');
});