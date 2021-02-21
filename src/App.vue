<template>
    <div id="app">
        <app-navbar :darkMode="darkMode" />
        <router-view :darkMode="darkMode" @toggleDarkMode="toggleDarkMode"/>
    </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    name: 'app',
    components: {
        AppNavbar,
        AppFooter
    },

    data() {
        const darkMode = localStorage.getItem('dark-mode');
        return {
            darkMode: darkMode !== 'false' && darkMode !== null,
            updateExists: false,
            refreshing: false
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