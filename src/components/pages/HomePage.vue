<template lang="">
    <div>
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
<style lang="">
    
</style>