import HeaderTemplate from "./HeaderTemplate";

export default class Header extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ 'mode': 'open' });
    }

    connectedCallback() {
        this.shadowRoot.appendChild(HeaderTemplate.content.cloneNode(true));
    }

}
