<template>
    <div id='games-page'>
        
        <div v-for="(sort, i) in sorts" :key="i">
            <game-sort :displayName="sort.displayName" :token="sort.token" :name="sort.name" :targetId="sort.gameSetTargetId" :pageId="context.pageId"/>
        </div>
    </div>
</template>

<script>
import GamesSource from '../../data/GamesSource';

export default {
    name: 'games', 
    props: ['darkMode'],
    params: ['id'],

    data() {
        return {
            sorts: [],
            context: [],
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

</style>