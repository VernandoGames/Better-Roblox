// import Vue from 'vue';
//vconst Vue = require('vue');
import { h, createApp } from 'vue'

import App from './App.vue';
import VueCookies from 'vue-cookies';
import './register-service-worker';
import router from './router';
import ContainerComponent from './components/Container.vue';
import SlideComponent from './components/Slide.vue';
import UnknownPageComponent from './components/UnknownPage.vue';
import GameSortComponent from './components/GamesPage/GameSort.vue';
import HorizontalScrollerComponent from './components/HorizontalScroller.vue';
import 'vueperslides/dist/vueperslides.css'
import Modal from './components/Modal.vue';


const app = createApp({render: () => h(App)})

app.config.productionTip = false;
//Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'

require('./styles/master.scss');

app.component('container', ContainerComponent);
app.component('slide', SlideComponent);
app.component('unknown-page', UnknownPageComponent);
app.component('game-sort', GameSortComponent);
app.component('horizontal-scroller', HorizontalScrollerComponent);
app.component('modal', Modal);

// Vue.use(VueCookies);


app.use(router);
app.mount('#app');

// new Vue({
//     router,
//     render: h => h(App),
// }).$mount('#app');