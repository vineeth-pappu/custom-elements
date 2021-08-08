// const { default: Header } = require("./header");
// const { HeaderStyles } = require("./header.style");
import { HeaderStyles } from "./header.style";
import { Header } from "./header";

import 'whatwg-fetch';
import 'regenerator-runtime/runtime.js';

class MyCustomTag extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render()
        this.initEventHandlers()
        this.pollApi()
    }

    async pollApi() {
        fetch('/src/api.json').then(res => res.json()).then(data => {
            console.log('fetch data', data);
        }).catch(err => {
            console.log('fetch err', err);
        })
        
        try {
            const res = await fetch('/src/api.json');
            const data = await res.json();
            console.log('fetch await data', data);
        } catch (error) {
            console.log('fetch await error', error);
        }
    }
    
    initEventHandlers() {
        this.root.querySelector('button').addEventListener('click', (e) => {
            console.log('button clicked ', e);
            this.dispatchEvent(new CustomEvent('btnClicked', {
                detail: {
                    somedata: {
                        one: '1',
                        two: {
                            three: 3
                        }
                    }
                }
            }))
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
