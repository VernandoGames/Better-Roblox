import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../components/pages/HomePage.vue';
import GamesPage from '../components/pages/Games.vue';
import GamePage from '../components/pages/GamePage.vue';
import UnknownRoutePage from '../components/pages/UnknownRoute.vue';

Vue.use(VueRouter)

export default new VueRouter({
    routes: [

        {
            path: '/', name: 'home', component: HomePage
        },

        { path: '/games', name: 'games', component: GamesPage, children: [
            
        ] },
        { path: '/games/:id', name: 'game-page', component: GamePage },
        

        { path: '*', component: UnknownRoutePage },
    ]
})