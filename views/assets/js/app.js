
window.Vue = require('vue');
require('./plugins/vue-particles');



// const HelloComponent = () => import('./components/HelloComponent.vue');
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import JumbotronComponent from './components/JumbotronComponent.vue'


// const files = require.context('./plugin', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

const app = new Vue({
    el: '#app',
    components:{
        JumbotronComponent
    }
});
