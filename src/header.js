const HeaderComponent = () => {
    const HTML = `<h2>My custom element</h2><button>click me</button>`;

    let _template = document.createElement('template');
    
    _template.innerHTML = HTML;

    return _template.content.cloneNode(true);
}

export const Header = HeaderComponent();
