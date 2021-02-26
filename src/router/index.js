import Vue from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/pages/HomePage.vue';
import GamesPage from '../components/pages/Games.vue';
import GamePage from '../components/pages/GamePage.vue';
import UnknownRoutePage from '../components/pages/UnknownRoute.vue';
import DevelopPage from '../components/pages/DevelopPage.vue';
import AvatarPage from '../components/pages/AvatarPage.vue';

// Attempting to setup Vue 3

export default new createRouter({
    history: createWebHistory(),
    routes: [

        { path: '/', name: 'home', component: HomePage },

        { path: '/games', name: 'games', component: GamesPage, children: [
            
        ] },
        { path: '/games/:id', name: 'game-page', component: GamePage },

        { path: '/develop', name: 'develop-page', component: DevelopPage, children: [
            
        ] },

        { path: '/avatar', name: 'avatar-page', component: AvatarPage },
        

        // { path: '*', component: UnknownRoutePage },
    ]
})

// works with Vue 2
// Vue.use(VueRouter)

// export default new VueRouter({
//     routes: [

//         {
//             path: '/', name: 'home', component: HomePage
//         },

//         { path: '/games', name: 'games', component: GamesPage, children: [
            
//         ] },
//         { path: '/games/:id', name: 'game-page', component: GamePage },
        

//         { path: '*', component: UnknownRoutePage },
//     ]
// })