import '../components/input-wrapper.js'


class RegisterScreen extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: 'open' });
        this.shadowDom.innerHTML = `
            <style>
                .container {
                    height: 100vh;
                }
                #register-form {
                    text-align: center;
                    width: 40%;
                    margin: auto;
                    height: 100%;
                    background-color: pink;
                    padding-top: 5%;
                }
                .title {
                    font-size: 30px;
                    font-weight: 600;
                    margin-bottom: 20px;
                }
            
            </style>
            <div class="container">
                <form id = "register-form">
                    <div class="title">
                        Share Story
                    </div>
                    <input-wrapper id = "name" type="text" placeholder = "Full name" ></input-wrapper>
                    <input-wrapper  id = "email" type="email" placeholder = "Email"></input-wrapper>
                    <input-wrapper id = "password" type="password" placeholder = "Password"></input-wrapper>
                    <input-wrapper id = "password" type="password" placeholder = "Confirm Password"></input-wrapper>
                    <button class = "btn">Register</button>
                    <div id = "redirect">Already have an account? Login</div>
                </form>
            </div>
        
        `
        
        this.shadowDom.getElementById('register-form').onsubmit = (e) => {
            e.preventDefault();
            console.log(this.shadowDom.getElementById('name').value);
            // const email = this.shadowDom.getElementById('email').value;
            // const password = this.shadowDom.getElementById('password').value;
            // auth.createUserWithEmailAndPassword(email, password)
            //         .then(user => {
            //             console.log(user);
            //         })
            //         .catch(err => {
            //             alert(err.message);
            //         })


            
        }
    }

    
}

window.customElements.define('register-screen', RegisterScreen);