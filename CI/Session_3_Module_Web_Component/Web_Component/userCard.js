class UserCard extends HTMLElement {
  constructor() {
    super();
    this.shadowDom = this.attachShadow({mode: 'open'});
    this.name = this.getAttribute('name');
    this.shadowDom.innerHTML = `
    <style>
    *{
      padding:0;
      margin:0;
      box-sizing: border-box;
    }


    .container {
      width: 300px;
      border:1px solid black;
      margin: 0 10px 10px;
    }


    .container img {
      width:298px;
      height: 220px;
      
    }

  </style>
    
    
    
    
    
    <div class="container">
    <div>
      <img src="https://kenh14cdn.com/2020/9/8/photo-2-15995772922521570753570.jpg" alt="">
    </div>
    <div>
      ${this.name}
    </div>
  </div>`;
    
    
  }
  //Được gọi khi component được attach(đính kèm) vào DOM
  connectedCallback() {
    console.log('123');
  }
  
}

window.customElements.define('user-card', UserCard);