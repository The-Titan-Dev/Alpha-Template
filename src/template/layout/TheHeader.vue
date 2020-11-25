<template>
  <header>
    <div class="nav__left">
      <!-- MINIMIZED MENU -->
      <span class="menu__min">
        <font-awesome-icon class="mt-2 mr-3" icon="bars" size="lg" />
      </span>
      <!-- TEMPLATE LOGO -->
      <img src="../../assets/images/Fujitsu-Logo.png" class="nav__logo" />
      <!-- NAVIGATION MENU -->
      <div class="nav__menus">
        <ul class="menu__default">
          <li class="menu__default__item"><a class="item__link">Home</a></li>
          <li class="menu__default__item menu__default__item--dropped">
            <a class="item__link">Main Menu</a>
            <font-awesome-icon
              class="anchor anchor--down ml-2"
              icon="angle-right"
              size="sm"
            />
            <div class="dropdown dropdown--full dropdown--hidden">
              <ul class="dropdown__menu">
                <li class="dropdown__title">MODULE 1</li>
                <li class="dropdown__item">Item 2</li>
                <li class="dropdown__item">Item 3</li>
                <li class="dropdown__item">Item 4</li>
                <li class="dropdown__item">Item 5</li>
              </ul>

              <ul class="dropdown__menu">
                <li class="dropdown__title dropdown--active">MODULE 2</li>
                <li class="dropdown__item">Item 2</li>
                <li class="dropdown__item">Item 3</li>
                <li class="dropdown__item dropdown--active">Item 4</li>
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
          </li>
          <li class="menu__default__item"><a class="item__link">Reports</a></li>
          <li class="menu__default__item"><a class="item__link">About</a></li>
        </ul>
      </div>
    </div>
    <div class="nav__right">
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
export default {
  name: "TheHeader",
};
</script>

<style lang="scss">
@import "../../assets/sass/imports/general";
@import "../../assets/sass/alpha/header.scss";
</style>