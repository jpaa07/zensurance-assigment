export abstract class Page {

    private path: string

    constructor(path: string) {
        this.path = path
    }

    public open() {
        return browser.url(`https://www.saucedemo.com/${this.path}`)
    } 
}