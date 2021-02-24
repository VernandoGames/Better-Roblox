<template>
    <header>
        <container>
            <nav>
                <router-link to="/">Home</router-link>
                <router-link to="/games">Games</router-link>
                <router-link to="/avatar">Avatar Shop</router-link>
                <router-link to="/develop">Create</router-link>
            </nav>
            <nav v-show="isAuth">
              
            </nav>
        </container>
    </header>
</template>

<script>
    export default {
        name: 'navbar',
        props: ['darkMode', 'isAuth'],
    };
</script>

<style lang="scss">
    @import '../styles/theming';
    @import '../styles/mq';
</style>

<style lang="scss">
  @import '../styles/theming';
  @import '../styles/mq';
  header {
    height: 3rem;
    line-height: 3rem;
    background: $color-navbar-bg;
    a {
      display: inline-block;
      padding: 0 16px;
      text-decoration: none;
      color: white;
    }
    @include mq($until: tablet) {
      a {
        padding: 0 7px;
      }
    }
    & .container > a {
      background: $color-primary;
      font-size: 1.1rem;
      &:hover {
        color: white;
        background: darken($color-primary, 10%);
      }
    }
    nav {
      float: left;
      a:hover {
        color: white;
        background: darken($color-navbar-bg, 10%);
      }
    }
  }

  #app.dark header {
    background: $color-navbar-bg-dark;
    a {
      color: #ccc;
    }
  }
</style>