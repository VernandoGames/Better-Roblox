<template>
    <div id="game-detail-page" class="page-content">
        <div class="section-content game-main-content">
            <div class="game-thumb-container">
                <vueper-slides class="carousel-inner no-shadow" fade :touchable="false" :bullets="true" :autoplay="true" :slideImageInside="true">
                    <vueper-slide 
                        v-for="(slide, i) in thumbnails" 
                        :key="i" 
                        class="inner-content"
                    > 
                    <template class="item carousel" v-slot:content>
                        <img class="item carousel" :src="slide.image" alt=""/>
                    </template>
                    </vueper-slide>
                </vueper-slides>
            </div>
        </div>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'

export default {
    name: 'game',
    props: ['darkMode'],
    components: { VueperSlides, VueperSlide },

    data() {
        return {
            id: 0,
            thumbnails: [],
        }
    },

    methods: {
        handleRoute(route) {
            this.id = route.params.id;
        }
    },

    watch: {
        $route(to) {
            this.handleRoute(to);
        },
    },


    created() {
        this.handleRoute(this.$route);
        console.log("loaded game page");
        this.thumbnails = [
            {
                title: 'test',
                image: 'https://t1.rbxcdn.com/bcfc353dddc4b85dfa974827097a7b58',
            },
            {
                title: 'test',
                image: 'https://t0.rbxcdn.com/76f73dcd7b895e32b13730091ce18706',
            },
            {
                title: 'test',
                image: 'https://t0.rbxcdn.com/fc0dd732255ce2471e731caf605e81c0',
            },
            {
                title: 'test',
                image: 'https://t4.rbxcdn.com/b83448f9cdbe34875c6564b4d9acc0b2',
            },
            {
                title: 'test',
                image: 'https://t4.rbxcdn.com/edfe077ea19a8bfc63d5513d64cfb27d',
            }
        ]
    }
}
</script>

<style lang="scss">

    @import '../../styles/theming';

    .content {
        max-width: 1154px;
        padding-top: 12px;
    }

    .page-content {
        max-width: 970px;
        float: none;
        margin: 0 auto;
    }

    #section-content {
        background: $color-content-bg;
        position: relative;
    }

    #app.dark .section-content {
        background: $color-content-bg-dark;
        color: $color-content-text-dark;
    }

    .game-main-content {
        height: auto;
        min-height: 345px;
        position: relative;
        margin-bottom: 0;
        padding: 15px;
        width: 100%;
        float: left;
        border-radius: 8px;
    }

    .game-main-content .game-thumb-container {
        float: none;
        width: 100%;
    }

    div {
        display: block;
    }

    * {
        text-rendering: auto;
        box-sizing: border-box;
    }

    .carousel {
        width: auto;
        height: auto;
        max-width: 100%;
        position: relative;
        margin: 0 auto;
    }

    .carousel-inner {
        position: relative;
        overflow: hidden;
        margin: auto;
        width: 100%;
        height: 100%;
    }

    .carousel .carousel-thumb {
        width: auto;
        height: auto;
    }

    img {
        vertical-align: middle;
        border: 0;
    }

    .item {
        height: auto;
        vertical-align: middle;
        border: 0;
        width: auto;
        border-radius: 8px;
    }

    .vueperslide__image {
        background-position:0%;
        position: relative;
        aspect-ratio: 2.1;
    }

    .vueperslides__inner {
        height: 100%;
    }

    .vueperslides {
        height: 532px;
    }
    
    .game-thumbnail {
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        width: 164px;
        height: calc(100% - 10px);
        border: transparent;
        border-radius: 5px;
    }

    .ex--center-mode {
        width: 600px;
        max-width: 100%;
        margin: auto;
    }


</style>