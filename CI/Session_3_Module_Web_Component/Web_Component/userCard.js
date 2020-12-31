class UserCard extends HTMLElement {
  constructor() {
    super();
    this.shadowDom = this.attachShadow({mode: 'open'}); //Bật mode shadow dom gắn vào 1 biến và custom shadow DOM trên biến đó
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
      <h1>${this.name}</h1>
    </div>
    <div>
      <p>Tuổi</p>
      <p>Nghề nghiệp</p>
      <p>Số chứng minh thư</p>
    
    </div>
  </div>`;
    
  this.shadowDom.querySelector('h1').textContent = 'Đây là Shadow DOM query' // Có thể query sau khi định nghĩa shadowDom và chỉ có thể dùng shadow DOM để query đến các component trong nó không thể dùng DOM ngoài để query đến các component
    
  }
  //Được gọi khi component được attach(đính kèm) vào DOM
  connectedCallback() {
    console.log('123');
  }
  //Được gọi khi có một component bị xóa khỏi DOM
  disconnectedCallback() {
    console.log('456');
  }

  //Được gọi khi có một component thay đổi attribute
  attributeChangedCallback() {
    
  }
  
}

document.querySelector('h1').textContent = 'Đây là DOM query'

window.customElements.define('user-card', UserCard);

// Link bài viết chi tiết 
//Shadow DOM: https://kipalog.com/posts/Duc-khoet-Javascript--Phan-17---ben-trong-Shadow-DOM---xay-dung-component-khep-kin?fbclid=IwAR0XV3XYzH_hVhM766Un5X90VMxUyatEeQUNyImaeJAUx_Iyi8x5bE3sp_4

//Web component: https://kipalog.com/posts/Duc-khoet-Javascript--Phan-19---Ben-trong-custom-element---thu-thuat-xay-dung-component-toi-uu?fbclid=IwAR2MWO0V5D7RJZRM0mOIWlTKgEZSOQ6t-0W74J2BiF-I8TXS8AZaJVta99k
