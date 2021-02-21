<template>
    <div>
        <h1>Unknown {{ type || 'page' }}</h1>
        <h3>This page doesn't actually exist. Oh no!</h3>
        <p>404 | Page Not Found</p>
    </div>
</template>

<script>
    export default {
        name: 'unknown-page',
        props: ['type', 'darkMode'],
    };
</script>