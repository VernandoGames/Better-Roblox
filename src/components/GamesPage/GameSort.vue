<template>
    <div id='game-sort'>
        <div class="container-header">
            <h3>{{ displayName }}</h3>
        </div>
        <div @click="nextSort" style="cursor:pointer;"></div>
        <div class="horizontal-contents">
            <div id='arrow' class='arrow-left' @click="prevSort">
                <svg viewBox="0 0 9 18" width="28" height = "28">
                    <path 
                        stroke-linecap="round" 
                        d="m 7 1 -6 8 6 8" 
                        stroke="#fff" 
                        stroke-width=1 
                        fill="none"
                    />
                </svg>
            </div>
            <div class='sort-container'>
                <div class='horizontal-scroller' :id='"list" + name' style="left:0px;">
                    <div class="horizontally-scrollable" :id='"elements" + name'>
                        <div class="inner-content" v-for="(game, i) in games" :key="i">
                            <game-card :game="game"/>
                        </div>
                    </div>
                </div>
            </div>
            <div id='arrow' class='arrow-right' @click="nextSort">
                <svg viewBox="0 0 9 18" width="28" height = "28">
                    <path 
                        stroke-linecap="round" 
                        d="m 1 1 7 8 -7 8" 
                        stroke="#fff" 
                        stroke-width=1 
                        fill="none"
                    />
                </svg>
            </div>
        </div>
        
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import GameCard from './GameCard.vue'
import GamesSource from '../../data/GamesSource';
// import 'vueperslides/dist/vueperslides.css'

// class = game-tile-list games-list no-shadow outer scrollbar-hidden

export default {
  components: { GameCard },
    name: 'game-sort',
    props: ['displayName', 'token', 'name', 'targetId', 'pageId'],
    components: { VueperSlides, VueperSlide, GameCard },

    data() {
        return {
            games: [],
            Position: 0,
        }
    },

    methods: {
        async loadGames() {
            //console.log(this.name, this.token);
            GamesSource.fetchGamesFromToken(this.token, this.targetId, this.pageId).then(games => {
                //this.games = games[0].games;
                //console.log(this.token);
                //console.log(games);
                let universeIds=''
                let map = {}
                let didInit = false;
                games[0].games.forEach(game => {
                    //console.log(game)
                    universeIds += (didInit ? ',' : '') + game.universeId
                    didInit = true;
                    map[game.universeId] = game;
                })
                GamesSource.fetchThumbnails(universeIds).then(thumbnails => {
                    thumbnails[0].data.forEach(data => {
                        if (data.state==="Completed" && map[data.targetId]) {
                            map[data.targetId].imageUrl = data.imageUrl;
                        }
                    })
                    this.games = games[0].games;
                    //console.log(games[0])
                })
            })
        },

        nextSort() {
            var list = document.getElementById('list' + this.name);
            var elements = document.getElementById('elements' + this.name);
            var currentWidth = list.clientWidth;
            this.Position -= currentWidth;
            this.calculateExtents(-currentWidth);

        },

        prevSort() {
            var list = document.getElementById('list' + this.name);
            var elements = document.getElementById('elements' + this.name);
            var currentWidth = list.clientWidth;
            this.Position += currentWidth;
            this.calculateExtents(currentWidth);
        },

        calculateExtents(changeInPosition) {
            var list = document.getElementById('list' + this.name);
            var elements = document.getElementById('elements' + this.name);
            var currentWidth = list.clientWidth;
            if (this.Position === 0 && typeof(changeInPosition)!=='number') this.Position = list.style.left ? list.style.left : 0;
            // console.log('elements width ' + elements.clientWidth);
            // console.log('current width ' + currentWidth);
            // console.log('current position internally ' + this.Position);
            //console.log("1 " + this.Position);
            this.Position = Math.max(this.Position, -(elements.clientWidth - currentWidth))
            //console.log("2 " + this.Position)
            this.Position = Math.min(0, this.Position);
            //console.log("3 " + this.Position)
            list.style.left = `${this.Position}px`
        }
    },

    created() {
        this.loadGames();
        window.addEventListener('resize', this.calculateExtents);
    },
    unmounted() {
        window.removeEventListener("resize", this.calculateExtents);
    }
}
</script>

<style lang="scss">

    @import '../../styles/theming';

    h3 {
        font-size: 22px;
        font-weight: 600;
        line-height: 1.4em;
        padding: 5px 0;
        font-family: HCo Gotham SSm,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;
        margin: 0;
        padding-top: 0;

        display: block;
        text-rendering: auto;
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

    #game-tile-list {
        display: inline-block;
        white-space: nowrap;
        display: flex;
        position: relative;
    }

    .horizontal-scroller {
        width: calc(100% - 60px);
        position: relative;
        transition: left .6s ease;
        float: none;
        white-space: nowrap;
        padding: 6px;
    }

    .sort-container {
        overflow: hidden;
        width: calc(100% - 48px);
        margin: 0px;
    }

    .arrow-left {
        float: left;
    }

    .arrow-right {
        float: right;
    }

    #arrow {
        background: $color-inactive-border;
        height: 200px;
        width: 26px;
        align-self: baseline;
        border-radius: 4px;
        align-items: center;
        display: flex;
        cursor: pointer;
        z-index: 20;
    }

    #app.dark #arrow {
        background: $color-inactive-border-dark;
    }

    .horizontal-contents {
        display: flex;
    }

    .outer {
        display: flex;
        flex: 1;
        width: auto;
        height: 100%;
        padding: 0 20px;
        flex-flow: row nowrap;
        align-items: center;
        overflow-x: auto;
    }

    .scrollbar-hidden::-webkit-scrollbar {
        display: none;
    }

    .scrollbar-hidden {
        -ms-overflow-style: none;
        scrollbar-width: none;
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

    .games-list {
        height: 270px;
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

</style>