<template>
  <aside class="profile">
    <font-awesome-icon icon="window-close" class="mr-3 mt-2 prime profile__clos" pull="right" size="2x" />
    <label class="profile__title">USER INFORMATION </label>
    
    <div class="profile__user">
      <img
        class="profile__image"
        :src="require('../../assets/images/avat.jpg')"
      />
      <div class="profile__user_info ml-2">
        <label class="user__name mb-0"> John Doe </label>
        <label class="d-block mb-0"> IT Staff </label>
        <label class="d-block mb-0"> MIT </label>
        <label class="d-block mb-0"><font-awesome-icon class="prime" icon="envelope" /> johndoe@email.com </label>
      </div>
    </div>
    <center>
      <button class="profile__logout__btn mb-4">
        <font-awesome-icon icon="sign-out-alt" /> SIGN OUT
      </button>
      <div class="divider"></div>
    </center>
    
    <label class="profile__title">SYSTEM INFORMATION</label>

    <div class="profile__system">
      <!-- <img
        class="profile__image"
        :src="require('../../assets/images/avat.jpg')"
      /> -->
      <center>
        <div class="system__initial">S</div>
        <label class="d-block mb-0"> Management System </label>
        <label class="d-block mb-0"> Version 1.0.0</label>
        <label class="d-block mb-0"> &copy;2020 MIT </label>
      </center>
    </div>

    <center>
      <button class="profile__logout__btn mt-3 mb-4">
        <font-awesome-icon icon="sign-out-alt" /> EXIT SYSTEM
      </button>
      <div class="divider"></div>
    </center>

    <label class="profile__title">OTHER OPTIONS</label>
    <div class="profile__option">
      <span class="btn__small btn__small--red"><font-awesome-icon icon="bell"/></span>
      <span class="btn__small btn__small--blue"><font-awesome-icon icon="comments"/></span>
      <span class="btn__small btn__small--orange"><font-awesome-icon icon="edit"/></span>
      <span class="btn__small btn__small--black"><font-awesome-icon icon="question"/></span>
    </div>
  </aside>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "../../assets/sass/imports/general";
@import "../../assets/sass/alpha/profile.scss";
</style>