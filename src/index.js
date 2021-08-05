class MyCustomTag extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '<h2>My custom element</h2><button>click me</button>';
        this.style.backgroundColor = 'blue';
        this.style.padding = '20 px';
        this.style.display = 'inline-block';
        this.style.color = 'white';
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
