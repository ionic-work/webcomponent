class IFrameComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['src', 'width', 'height'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                iframe {

                }
            </style>
            <iframe src="http://localhost:4200" 
                    width="${this.getAttribute('width') || '100%'}" 
                    height="${this.getAttribute('height') || '400'}">
            </iframe>
        `;
    }
}

customElements.define('iframe-component', IFrameComponent);
