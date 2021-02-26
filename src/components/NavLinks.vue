<template>
  <nav v-if="userLinks.length" class="nav-links">
    <!-- user links -->
    <div v-for="item in userLinks" :key="item.link" class="nav-item">
      <DropdownLink v-if="item.type === 'links'" :item="item" />
      <NavLink v-else :item="item" />
    </div>
  </nav>
</template>

<script>
import DropdownLink from './Dropdown.vue'
import { resolveNavLinkItem } from '../util'
import NavLink from './NavLink.vue'
export default {
	name: 'NavLinks',
	components: {
		NavLink,
		DropdownLink
	},
	data() {
		return {
			userLinks: [
				{
					type: 'links',
					text: 'test',
					items: [
						{
							type: 'link',
							text: 'test',
							link: '/'
						}
					]
				}
			]
		}
	},
  // computed: {
  //   userLinks() {
  //     return [
  //       {
  //         type = 'link',
  //       }
  //     ]
  //     // return (this.nav || []).map(link => {
  //     //   return Object.assign(resolveNavLinkItem(link), {
  //     //     items: (link.items || []).map(resolveNavLinkItem)
  //     //   })
  //     // })
  //   },
  // }
}
</script>

<style lang="scss">

    @import '../styles/theming';
  .nav-links {
    display: inline-block;
    a {
      line-height: 1.4rem;
      color: inherit;
      font-weight: 500;
      :hover .router-link-active {
        color: $color-navbar-bg;
      }
    }
    .nav-item {
      position: relative;
      display: inline-block;
      margin-left: 1.5rem;
      line-height: 2rem;
      :first-child {
        margin-left: 1.5rem;
      }
    }
    .repo-link {
      margin-left: 1.5rem;
    }
  }
  @media (max-width: 719px) {
    .nav-links {
      .nav-item .repo-link {
        margin-left: 0;
      }
    }
  }
  @media (min-width: 719px) {
    .nav-links a {
      :hover .router-link-active {
        color: $color-content-text;
      }
    }
    .nav-item > a:not(.external) {
      :hover .router-link-active {
        margin-bottom: -2px;
        border-bottom: 2px solid lighten($color-navbar-bg, 8%)
      }
    }
  }
</style>

// <style lang="stylus">
// .nav-links
//   display inline-block
//   a
//     line-height 1.4rem
//     color inherit
//     font-weight 500
//     &:hover, &.router-link-active
//       color $accentColor
//   .nav-item
//     position relative
//     display inline-block
//     margin-left 1.5rem
//     line-height 2rem
//     &:first-child
//       margin-left 0
//   .repo-link
//     margin-left 1.5rem
// @media (max-width: $MQMobile)
//   .nav-links
//     .nav-item, .repo-link
//       margin-left 0
// @media (min-width: $MQMobile)
//   .nav-links a
//     &:hover, &.router-link-active
//       color $textColor
//   .nav-item > a:not(.external)
//     &:hover, &.router-link-active
//       margin-bottom -2px
//       border-bottom 2px solid lighten($accentColor, 8%)
// </style>