// const { default: Header } = require("./header");
// const { HeaderStyles } = require("./header.style");
import { HeaderStyles } from "./header.style";
import HEADER_HTML from "./header";

class MyCustomTag extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render()
        setTimeout(() => {
            this.initEventHandlers()
        }, 5000);
    }

    initEventHandlers() {
        this.root.querySelector('button').addEventListener('click', (e) => {
            console.log('button clicked ', e);
        })
    }

    render() {
        this._style = document.createElement('style');
        this._template = document.createElement('template');

        this._style.innerHTML = HeaderStyles;

        this._template.innerHTML = HEADER_HTML;

        this.root = this.attachShadow({ mode: 'open' });
        this.root.appendChild(this._style);
        this.root.appendChild(this._template.content.cloneNode(true));
    }
}

try {
    customElements.define('my-custom-tag', MyCustomTag)
} catch (err) {
    console.log('wc erro', err)
    const h3 = document.createElement('h3')
    h3.innerHTML = "This site uses webcomponents which don't work in all browsers! Try this site in a browser that supports them!"
    document.body.appendChild(h3)
}
