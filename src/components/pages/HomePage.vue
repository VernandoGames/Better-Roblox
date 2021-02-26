<template lang="">
    <div id='home-page'>
        <div v-if='isAuth'>
            <h3>Woah, You're signed in!</h3>
        </div>
        <div v-else>
            <h3>You're not signed in.</h3>
        </div>
    </div>
</template>
<script>
export default {
    name: 'home',
    props: ['darkMode', 'isAuth'],
}
</script>

<style lang="scss">

    @import '../../styles/theming';

    #home-page {
        background: $color-content-bg;
    }

    #app.dark #home-page {
        background: $color-content-bg-dark;
        color: $color-content-text-dark;
    }

</style>