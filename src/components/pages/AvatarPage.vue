<template>
    <div id='avatar-page'>
        <h3>WIP!</h3>
        <p>Woops, You weren't supposed to see this yet!</p>
        <p>This page is not yet functional and is just here as a basic placeholder.</p>
    </div>
</template>

<script>
export default {
    name: 'avatar'
}
</script>

<style lang="scss">

    @import '../../styles/theming';
    
    #avatar-page {
        background: $color-content-bg;
    }

    #app.dark #avatar-page {
        background: $color-content-bg-dark;
        color: $color-content-text-dark;
    }
</style>