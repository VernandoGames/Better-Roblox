<template>
    <div id='games-page'>
        
        <div v-if="loaded">
            <div v-for="(sort, i) in sorts" :key="i">
                <game-sort :displayName="sort.displayName" :token="sort.token" :name="sort.name" :targetId="sort.gameSetTargetId" :pageId="context.pageId"/>
            </div>
        </div>
        <div v-else>
            <div v-for="(i) in 8" :key="i">
                <game-sort-loading/>
            </div>
        </div>
    </div>
</template>

<script>
import GamesSource from '../../data/GamesSource';
import loadingSort from '../GamesPage/GameSortLoading.vue';

export default {
    name: 'games', 
    props: ['darkMode'],
    params: ['id'],
    components: {
        'game-sort-loading': loadingSort
    },

    data() {
        return {
            sorts: [],
            context: [],
            loaded: false,
        }
    },

    methods: {

        loadSorts() {
            //console.log("load sorts");
            GamesSource.fetchSorts().then(sorts => {
                //console.log(sorts);
                this.sorts = sorts[0].sorts;
                console.log(this.sorts)
                this.context = sorts[0].pageContext
            })
        },

        toggleDarkMode() {
            this.$emit('toggleDarkMode');
        },

        handleRoute(route) {
            console.log(route);
        }
    },

    watch: {
        $route(to) {
            //console.log(to);
            this.handleRoute(to);
        },
    },

    created() {
        this.handleRoute(this.$route);
        this.loadSorts();
        document.title = `Games | Better Roblox`;
    }
}
</script>

<style lang="scss">

    @import '../../styles/theming';

    #games-page {
        background: $color-content-bg;
    }

    #app.dark #games-page {
        background: $color-content-bg-dark;
        color: $color-content-text-dark;
    }

    @-webkit-keyframes loading {
        0% {
            left: -50%;
            width: 50%;
        }
        100% {
            left: 100%;
            width: 30%;
        }
    }

    @keyframes loading {
        0% {
            left: -50%;
            width: 50%;
        }
        100% {
            left: 100%;
            width: 30%;
        }
    }

    #game-sort {
        background: $color-content-bg;
        min-height: 160px;
        height: 260px;
        align-content: center;
        float: none;
        margin: auto;
        width: calc(100% - 100px);
    }

    #app.dark #game-sort {
        background: $color-content-bg-dark;
        color: $color-content-text-dark;
    }

    .sort-container {
        overflow: hidden;
        width: calc(100% - 48px);
        margin: 0px;
    }

    .inner-content {
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        width: 164px;
        height: calc(100% - 10px);
        border: transparent;
        border-radius: 5px;
    }


    #game-cards {
        white-space: nowrap;
    }

    .game-cards .game-card {
        float: none;
        width: 164px;
        height: 240px;
        padding: 0 14px 0 0;
        display: inline-block;
        margin-bottom: 12px;
        vertical-align: top;
        white-space: normal;
    }

    .horizontally-scrollable {
        transition: left .5s ease;
        float: left;
        min-height: 270px;
        position: relative;
        white-space: nowrap;
    }

    .horizontally-scrollable {
        display: flex;
    }

    .loading-indicator {
        background: darken($color-content-bg, 5%);
        margin: auto;
        border-radius: 12px;
    }

    #app.dark .loading-indicator {
        background: lighten($color-content-bg-dark, 5%);
    }

    .loading-transition {
        background: darken($color-content-bg, 5%);
        position: relative;
        width: 40%;
        height: 100%;
        z-index: 1;
    }

    #app.dark .loading-transition {
        background: lighten($color-content-bg-dark, 5%);
    }

    #title-bar {
        height: 25px;
        width: 300px;
        margin: auto auto auto 20px;
        overflow: hidden;
    }

    .game-card-title-loading {
        background: darken($color-content-bg, 5%);
        height: 1.4em;
        width: 90%;
        border-radius: 8px;
        margin: 5px auto 0 auto;
        overflow: hidden;
    }

    #app.dark .game-card-title-loading {
        background: lighten($color-content-bg-dark, 5%);
    }

    .loading-indicator .loading-transition {
        margin: auto;
        overflow: hidden;
    }

    .loading-transition {
        height: 100%;
    }

    .game-card-thumb-container {
        margin: 0 auto 0 auto;
    }

</style>