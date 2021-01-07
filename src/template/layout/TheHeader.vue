<template>
  <header class="alpha__header">
    <div class="nav__left">
      <!-- MINIMIZED MENU -->
      <span class="menu__min" @click="setSidebarVisibility">
        <font-awesome-icon class="mt-2 mr-3" icon="bars" size="lg" />
      </span>
      <!-- TEMPLATE LOGO -->
      <img src="../assets/images/Fujitsu-Logo.png" class="nav__logo" />
      <!-- NAVIGATION MENU -->
      <div class="nav__menus">
        <ul class="menu__default">
          <li class="menu__default__item">
            <router-link to="/" class="item__link">Home</router-link>
          </li>
          <li class="menu__default__item" @click="setDDMenuVisibility">
            <span class="item__link">Main Menu</span>
            <font-awesome-icon
              class="anchor ml-2"
              icon="angle-right"
              size="sm"
              :class="{ 'anchor--down': getShowDDMenuStatus }"
            />
            <transition name="dropdown-menu-slide">
              <div class="dropdown dropdown--full" v-if="getShowDDMenuStatus">
                <ul class="dropdown__menu">
                  <li class="dropdown__title">MODULE 1</li>
                  <li class="dropdown__item">Item 2</li>
                  <li class="dropdown__item">Item 3</li>
                  <li class="dropdown__item">Item 4</li>
                  <li class="dropdown__item">Item 5</li>
                </ul>

                <ul class="dropdown__menu">
                  <li class="dropdown__title">MODULE 2</li>
                  <li class="dropdown__item">Item 2</li>
                  <li class="dropdown__item">Item 3</li>
                  <li class="dropdown__item">Item 4</li>
                  <li class="dropdown__item">Item 5</li>
                </ul>

                <ul class="dropdown__menu">
                  <li class="dropdown__title">MODULE 1</li>
                </ul>

                <ul class="dropdown__menu">
                  <li class="dropdown__title">MODULE 2</li>
                  <li class="dropdown__item">Item 2</li>
                </ul>

                <ul class="dropdown__menu">
                  <li class="dropdown__title">MODULE 1</li>
                  <li class="dropdown__item">Item 2</li>
                  <li class="dropdown__item">Item 3</li>
                  <li class="dropdown__item">Item 4</li>
                  <li class="dropdown__item">Item 5</li>
                </ul>
              </div>
            </transition>
          </li>
          <li class="menu__default__item">
            <router-link to="/blank" class="item__link">Reports</router-link>
          </li>
          <li class="menu__default__item">
            <router-link to="/" class="item__link">About</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="nav__right" @click="setProfileVisibility">
      <!-- USER ACCOUNT INFORMATION (BUTTON) -->
      <div class="account__info">
        <div class="account__info__user">
          <span>John Doe</span>
          <span>Supervisor</span>
        </div>
        <font-awesome-icon
          class="icon__account"
          icon="address-card"
          size="lg"
        />
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "TheHeader",
  methods: {
    ...mapActions([
      "setProfileVisibility",
      "setDDMenuVisibility",
      "setSidebarVisibility"
    ])
  },
  computed: {
    ...mapGetters(["getShowDDMenuStatus"])
  }
};
</script>

<style lang="scss">
@import "../assets/sass/alpha/header.scss";
</style>
