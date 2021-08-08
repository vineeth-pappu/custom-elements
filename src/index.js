// const { default: Header } = require("./header");
// const { HeaderStyles } = require("./header.style");
import { HeaderStyles } from "./header.style";
import { Header } from "./header";

class MyCustomTag extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render()
        this.initEventHandlers()
    }

    initEventHandlers() {
        this.root.querySelector('button').addEventListener('click', (e) => {
            console.log('button clicked ', e);
        })
    }

    render() {
        this.root = this.attachShadow({ mode: 'open' });

        this.root.appendChild(HeaderStyles);
        this.root.appendChild(Header);
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
