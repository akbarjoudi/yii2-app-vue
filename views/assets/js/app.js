
window.Vue = require('vue');



// const HelloComponent = () => import('./components/HelloComponent.vue');
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import HelloComponent from './components/HelloComponent.vue'

const app = new Vue({
    el: '#app',
    components:{
        HelloComponent
    }
});
