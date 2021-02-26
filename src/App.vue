<template>
    <div id="app">
        <app-navbar :darkMode="darkMode" @promptLogin="promptLogin" :logIn="logInPrompt" :signUp="signUpPrompt" @closeAuth="closeAuth" />
        <router-view :darkMode="darkMode" @toggleDarkMode="toggleDarkMode"/>
        <app-footer :darkMode="darkMode"/>

        <transition name="fade-slide-vertical">
            <snackbar action="Reload" @click="refresh" v-if="updateExists">An updated version of the site is available.</snackbar>
        </transition>
    </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import AppFooter from './components/AppFooter.vue';
import Snackbar from './components/Snackbar.vue';

export default {
    name: 'app',
    components: {
        AppNavbar,
        AppFooter,
        Snackbar
    },

    data() {
        const darkMode = localStorage.getItem('dark-mode');
        return {
            darkMode: darkMode !== 'false' && darkMode !== null,
            updateExists: false,
            refreshing: false,
            logInPrompt: false,
            signUpPrompt: false,
        }
    },

    methods: {
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            localStorage.setItem('dark-mode', this.darkMode);
            if (this.darkMode) this.$el.classList.add('dark'); else this.$el.classList.remove('dark');
        },

        refresh() {
            if (!this.updateExists) return;
            this.updateExists = false;
            if (!this.registration || !this.registration.waiting) return;
            this.registration.waiting.postMessage({ type: 'SKIP_WAITING' });
        },

        promptLogin() {
            this.logInPrompt = true;
        },

        closeAuth() {
            this.logInPrompt = false;
            this.signUpPrompt = false;
        }
    },

    created() {
        document.addEventListener('swUpdated', this.swUpdated, { once: true });
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            if (this.refreshing) return;
            this.refreshing = true;
            window.location.reload();
        });
    },
    

    mounted() {
        if (this.darkMode) this.$el.classList.add('dark');
    }
}
</script>

<style lang="scss">

    @import './styles/theming';
    
    #app {
        background: $color-content-bg;
    }

    #app.dark #app {
        background: $color-content-bg-dark;
        color: $color-content-text-dark;
    }
</style>