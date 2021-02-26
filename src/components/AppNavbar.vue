<template>
    <header>
        <container>
          <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/games">Games</router-link>
            <router-link to="/avatar">Avatar Shop</router-link>
            <router-link to="/develop">Create</router-link>
          </nav>
        </container>
        <dropdown class="context" id="userData" :darkMode="darkMode" :logIn="logIn" :signUp="signUp" @promptLogin="promptLogin" @closeAuth="closeAuth"/>
    </header>
</template>

<script>
import NavLinks from './NavLinks.vue'
import Dropdown from './Global/Topbar/Dropdown.vue'
    export default {
        name: 'navbar',
        props: ['darkMode', 'isAuth', 'logIn', 'signUp'],

      components: {
        NavLinks,
        Dropdown,
      },

      methods: {
        promptLogin() {
          this.$emit('promptLogin')
        },
        closeAuth() {
          this.$emit('closeAuth');
        }
      }
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
    display: flex;
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

  .context {
    background-clip: border-box;
    align-self: center;
    // position: fixed;
    float: right;
    margin: 0rem 0 0px;
    padding: 0rem;
    height: 3rem;
    width: 5.25rem;
    display: flex;
  }

  #app.dark header {
    background: $color-navbar-bg-dark;
    a {
      color: #ccc;
    }
  }

  #userData {
		height: 3rem;
		line-height: 3rem;
		background: transparent;
		float: right;
		a {
			display: inline-block;
			padding: 0 16px;
			text-decoration: none;
			color: white;
			cursor: pointer;
		}
		a:hover {
			background: darken($color-navbar-bg, 10%);
		}
  }
  #app.dark #userData {
	  a:hover {
		  background: lighten($color-navbar-bg-dark, 10%);
	  }
  }

  #options-menu {
	  height: 8rem;
	  background: $color-navbar-bg;
	  border-radius: 8px;
	  float: inherit;
	  z-index: 20;
  }

  // #dropdown {
  //   background-clip: border-box;
  //   align-self: center;
  //   position: fixed;
  //   float: right;
  //   margin: 0px;
  //   padding: 0;
  //   height: 3rem;
  //   // float: right;
  //   // position: relative;
  // }
</style>