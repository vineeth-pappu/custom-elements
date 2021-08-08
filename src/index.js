class MyCustomTag extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // this.innerHTML = '<h2>My custom element</h2><button>click me</button>';
        // this.style.backgroundColor = 'blue';
        // this.style.padding = '20 px';
        // this.style.display = 'inline-block';
        // this.style.color = 'white';

        this.render()
        this.initEventHandlers()
    }

    initEventHandlers() {
        this.root.querySelector('button').addEventListener('click', (e) => {
            console.log('button clicked ', e);
        })
    }

    render() {
        this._style = document.createElement('style');
        this._template = document.createElement('template');

        this._style.innerHTML = `
            :host {
                display: inline-block;
                background: pink;
                padding: 20px;
            }
            h2 {
                background-color: blue;
                padding: 20px;
                color: white;
            }
        `;

        this._template.innerHTML = `
            <h2>My custom element</h2><button>click me</button>
        `;

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
