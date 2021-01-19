class PostItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: 'open' });
        this.post = {
            dataId : this.getAttribute('data-id'),
            content : this.getAttribute('content')
        }
        this.shadowDom.innerHTML = `
        
            <div>
            
                <p>${this.post.content}</p>
            
            </div>
        
        
        
        `;
    }
}


window.customElements.define('post-item', PostItem);