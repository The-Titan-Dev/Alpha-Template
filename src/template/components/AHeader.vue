<template>
  <header>
    <div class="nav__left">
      <img src="../../assets/images/Fujitsu-Logo.png" class="nav__logo" />
       <!-- NAVIGATION MENU -->
      <div class="nav__menus">
          <ul>
              <li><a>Home</a></li>
              <li><a>Main Menu</a></li>
              <li><a>Reports</a></li>
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
        <font-awesome-icon class="icon__account" icon="user" size="lg" />
      </div>

    </div>
  </header>
</template>

<script>
export default {
  name: "AHeader",
};
</script>

<style lang="scss">
@import "../../assets/sass/imports/general";
@import "../../assets/sass/alpha/header.scss";
</style>