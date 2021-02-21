import Vue from 'vue';

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

Vue.config.productionTip = false;
//Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'

require('./styles/master.scss');

Vue.component('container', ContainerComponent);
Vue.component('slide', SlideComponent);
Vue.component('unknown-page', UnknownPageComponent);
Vue.component('game-sort', GameSortComponent);
Vue.component('horizontal-scroller', HorizontalScrollerComponent);

Vue.use(VueCookies);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');