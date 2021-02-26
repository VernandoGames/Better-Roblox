<template id='login-modal'>
    <div>
        <Form v-slot="{ errors }">
            <Field class="inputLabel" name="emails" rules="required|email" />
            <span>{{ errors.emails }}</span>
        </Form>
        <Form v-slot="{ errors }">
            <Field class="inputLabel" name="password" type="password" label="Input Password" :rules="isRequired" />
            <span>{{ errors.password }}</span>
        </Form>
        <!-- <Form v-slot="{ errors }">
            <Field name="confirmation" type="password" label="Input Password" rules="required|confirmed:password" />
            <span>{{ errors.confirmation }}</span>
        </Form> -->
    </div>
</template>

<script>
import { Field, Form, defineRule } from 'vee-validate';

defineRule('required', value => {
    if (!value || !value.length) {
        return 'This field is required.';
    }

    return true;
})

defineRule('email', value => {
    // Field is empty, should pass
    if (!value || !value.length) {
        return true;
    }

    // Check if email
    if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/.test(value)) {
        return 'This field must be a valid email';
    }

    return true;
})

defineRule('confirmed', (value, [target], ctx) => {
    if (value === ctx.form[target]) {
        return true;
    }

    return 'Passwords must match.';
})

export default {
    name: 'login',
    // props: [ 'darkMode' ],
    components: {
        Field,
        Form,
    },
    methods: {
        // Validator fuunction
        isRequired(value) {
            return value ? true : 'This field is required';
        }
    }
}
</script>

<style lang="scss">
    @import '../../styles/theming';
    @import '../../styles/mq';
    
    .inputLabel {
        border-radius: 4px;
        border: transparent;
        background-color: $color-content-bg;
        color: $color-content-text;
        width: 100%;
    }

    #app.dark .inputLabel {
        background-color: lighten($color-content-bg-dark, 10%);
        color: $color-content-text-dark;
    }
</style>