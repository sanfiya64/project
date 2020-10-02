import { LightningElement } from 'lwc';
export default class HelloWebComponent extends LightningElement {
    greeting = 'HAVE A NICE DAY!';
    currentDate = new Date().toDateString();
}
