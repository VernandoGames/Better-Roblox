<template>
    <div id='dev-sidebar'>
      <div id="open-btn" @click="toggle"><em class="fa fa-bars"></em></div>

      <div id="dev-sidebar-content" :class="visible ? 'open' : 'closed'">
          <div id="close-btn" @click="toggle">
              <em class="fa fa-arrow-left" aria-hidden="true"></em>
          </div>

          <em id="dev-brightness" class="fa toggle" :class="darkMode ? 'fa-moon-o' : 'fa-sun-o'" :title="toggleDarkModeLabel" @click="toggleDarkMode"></em>

          <ul>
            <li>
              <ul>
                <li v-for="(category, categoryID) in categories" :key="categoryID">
                    <router-link to="/develop"> <!-- :to="{ name: 'docs-file', params: { category: categoryID, file: fileID } }"-->
                      {{ category }}
                    </router-link>
                </li>

              </ul>
            </li>
              <!-- <li v-for="(category, categoryID) in categories" :key="categoryID">
              {{ category }}
              </li> -->
          </ul>
      </div>
    </div>
</template>

<script>
export default {
    name: 'dev-sidebar',
    props: [ 'darkMode' ],
    data() {
        return {
            categories: [ 'Games', 'Places', 'Models', 'Decals', 'Badges', 'Game Passes', 'Audio', 'Animations', 'Meshes', 'User Ads', 'Sponsored Games', 'Shirts', 'T-Shirts', 'Pants', 'Plugins' ],
            visible: false
        }
    },

    computed: {
        toggleDarkModeLabel() {
            return `The lights are ${this.darkMode ? 'off' : 'on'}. Click to toggle.`;
        },
    }
}
</script>

<style lang="scss">
  @import '../../styles/theming';
  @import '../../styles/mq';
  #dev-sidebar {
    flex: 0 1 auto;
    border-right: 1px solid $color-inactive-border;
    @include mq($until: tablet) {
      border-right: 0;
      #dev-sidebar-content {
        z-index: 10;
        position: fixed;
        top: 0;
        bottom: 0;
        left: -200px;
        right: 0;
        width: 0;
        max-height: 100%;
        padding: 0;
        overflow: auto;
        background: darken($color-content-bg, 2%);
        box-shadow: 0 0 160px black;
        transition: 0.3s right, 0.3s width, 0.3s left;
        li {
          font-size: 1.25rem !important;
          padding: 16px !important;
        }
        &.open {
          left: 0;
          width: 100%;
          right: 10px;
        }
      }
    }
    #open-btn, #close-btn {
      z-index: 1;
      font-size: 1.1rem;
      cursor: pointer;
      @include mq($from: tablet) {
        display: none;
      }
    }
    #close-btn {
      text-align: center;
      padding: 16px 0;
      color: white;
      background: $color-primary;
    }
    ul {
      margin: 0 0 16px 0;
      padding: 0;
      list-style: none;
      li {
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: bold;
        color: darken($color-content-text, 6%);
      }
      ul li {
        padding: 0;
        text-transform: none;
        font-size: 0.875rem;
        font-weight: normal;
        color: lighten($color-content-text, 20%);
        a {
          display: block;
          padding: 4px 32px 4px 4px;
          color: inherit;
          text-decoration: none;
          border-left: 2px solid transparentize($color-primary, 1);
          &:hover {
            border-color: $color-primary;
            color: $color-primary;
            background: darken($color-content-bg, 2%);
          }
        }
      }
    }
    .router-link-active {
      background: darken($color-content-bg, 4%);
    }
  }
  .toggle {
    float: right;
    position: relative;
    right: 10px;
    bottom: 8px;
    padding: 5px;
    cursor: pointer;
    @include mq($until: tablet) {
      display: none;
    }
  }
  #dev-visibility {
    float: right;
    position: relative;
    right: 10px;
    bottom: 8px;
    padding: 5px;
    cursor: pointer;
    @include mq($until: tablet) {
      display: none;
    }
  }
  #app.dark #dev-sidebar {
    border-right-color: $color-inactive-border-dark;
    @include mq($until: tablet) {
      #dev-sidebar-content {
        background: lighten($color-content-bg-dark, 2%);
      }
    }
    ul {
      li {
        color: lighten($color-content-text-dark, 6%);
      }
      ul li {
        color: darken($color-content-text-dark, 20%);
        a:hover {
          background: lighten($color-content-bg-dark, 2%);
        }
      }
    }
    .router-link-active {
      background: $color-content-bg-dark;
    }
  }
</style>