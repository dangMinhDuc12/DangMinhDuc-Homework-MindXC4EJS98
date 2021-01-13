class Welcome extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: 'open' });
        this.shadowDom.innerHTML = `Welcome ${currentUser.displayName}`;
        
    }
}


window.customElements.define('welcome-screen', Welcome)