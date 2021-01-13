import './screens/register-screen.js';
import './screens/login-screen.js';
import './screens/story-screen.js'

redirect('login');   


export function redirect(screenName, userName) {     
    if(screenName === 'login') {
        document.querySelector('#app').innerHTML = `<login-screen></login-screen>`;

    }else if(screenName === 'register') {
        document.querySelector('#app').innerHTML = `<register-screen></register-screen>`;
    }else if (screenName === 'welcome') {
        document.querySelector('#app').innerHTML = `<story-screen></story-screen>`;
    }
}