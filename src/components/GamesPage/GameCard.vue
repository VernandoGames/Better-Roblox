<template>
    <div class="list-item game-card game-tile game-card-container">
        <router-link :to="{ name: 'game-page', params: { id: game.placeId } }">
            <div class="game-card-thumb-container">
                <img class="game-card-thumb" :src=game.imageUrl :alt='game.name' :title='game.name'>
            </div>
            <div class="game-card-name game-name-title" title=game.name>
                {{ game.name }}
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['id', 'title', 'game'],

    data() {
        return {
            //thumbnail: null,
        }
    },

    methods: {
        async loadThumbnail() {

        }
    }
}
</script>

<style lang="scss">
    .game-card-container {
        position: relative;
        border-radius: 3px;
        float: left;
        height: 100%;
        margin: auto;
        padding: 0;
        text-align: left;
        width: calc(100% - 12px);
        background-color: transparent;
        transition: 0.3s ease-in-out;
    }

    #app.dark #game-card-container {
        background-color: transparent;
    }

    #game-card {
        width: 102px;
        height: 160px;
        padding: 0;
    }

    .game-tile {
        width: 164px;
        height: 240px;
    }

    .game-card-thumb-container {
        width: 150px;
        height: 150px;
        border-radius: 8px;
    }

    .game-card-thumb {
        vertical-align: middle;
        border: 0;
        height: 100%;
        width: 100%;
        overflow: hidden;
        border-radius: 8px;
    }

    .list-item {
        display: block;
    }

    .game-card-name {
        line-height: 1.4em;
        font-weight: 500;
        margin-bottom: 4px;
        margin-top: 6px;
        padding: 0;
        width: 100%;
        margin: 3px;
    }

    .game-name-title {
        overflow: hidden;
        position: relative;
        text-overflow: ellipsis;
        max-height: 45px;
    }

</style>