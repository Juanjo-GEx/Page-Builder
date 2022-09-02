export class Template {
    key = '';
    value = '';
    css = '';

    constructor(key, value, css){
        this.key = key;
        this.value = value;
        this.css = css;
    }

    getCSS() {
        return this.css;
    }

    setCSS(customCSS) {
        this.css = customCSS;
    }
}