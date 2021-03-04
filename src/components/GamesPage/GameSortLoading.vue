<template>
    <div id="sort-loading" class="game-sort">
        <div id="title-bar">
            <div class="loading-indicator" style="overflow: hidden">
                <div class="loading-indicator loading-transition" style="height:20px">

                </div>
            </div>
        </div>
        <div class="sort-container">
            <div class="horizontal-scroller">
                <div class="horizontally-scrollable">
                    <div v-for="(i) in 8" :key="i" class="inner-content">
                        <div class="game-card-thumb-container" style="overflow: hidden;">
                            <div class="loading-indicator" style="height:150px; width:150px">
                                <div class="loading-indicator loading-transition">

                                </div>
                            </div>
                        </div>
                        <div class="game-card-title-loading">
                            <div class="loading-indicator loading-transition">

                            </div>
                        </div>
                        <div id="content-ratings-loading" style="display:flex; width:90%; margin: auto auto 0 auto;">
                            <div class="game-card-title-loading" style="width: 45%">
                                <div class="loading-indicator loading-transition"></div>
                            </div>
                            <div class="game-card-title-loading" style="width: 45%">
                                <div class="loading-indicator loading-transition"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'game-sort-loading'
}
</script>

<style lang="scss">

    @import '../../styles/theming';

</style>