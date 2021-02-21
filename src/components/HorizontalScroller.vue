<template>
    <div class="horizontal-scroller">
        <slot></slot>
    </div>
</template>

<script>
export default {
    mounted() {
        const content = this.$el;

        //Chrome
        content.onmousewheel = function(e){
            content.scrollBy(-e.wheelDelta, 0)
        }
    }
}
</script>

<style scoped>
.horizontal-scroller {
    box-sizing: border-box;
    overflow-x: scroll;
    overflow-y: hidden;
    text-align: left;
    white-space: nowrap;
}
</style>