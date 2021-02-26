<template>
    <!-- <div v-if="logIn">

    </div>
    <div v-else-if="signUp">

    </div> -->
    <modal v-if="signUp" @closeAuth="closeAuth" title="Sign up">
        <p>WIP</p>
    </modal>
    <modal v-if="logIn" @closeAuth="closeAuth" title="Log in">
        <login-page/>
        <!-- <p>WIP</p> -->
    </modal>
</template>

<script>
import Modal from '../Modal.vue'
import LoginPage from './Login'
// app.component('login', login)
export default {
    name: 'Auth',
    components: {
        'modal': Modal,
        'login-page': LoginPage
    },
    props: [ 'logIn', 'signUp' ],
    emits: [ 'closeAuth' ],

    methods: {
        closeAuth() {
            this.$emit('closeAuth')
        }
    }
}
</script>