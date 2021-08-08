const Styles = `
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

const createStyles = () => {
    let _style = document.createElement('style');
    _style.innerHTML = Styles;

    return _style;
}

export const HeaderStyles = createStyles();