<template>
  <div
    class="acards"
    :style="{ width: width, 'border-radius': radius }"
    :class="[
      type ? 'acards--' + type : '',
      theme ? 'acards--' + theme : '',
      classname
    ]"
    :id="id"
  >
    <span class="acards__circle">
      <span></span>
    </span>

    <div
      v-if="theme != 'default'"
      class="acards__photo"
      :class="'acards__photo--' + img_position"
    >
      <!-- <img  :src="img"> -->
      <!-- <img class="acards__img" :src="'../../../assets/'+img_src"> -->
    </div>
    <div :style="cardWidth">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ACards",
  props: {
    classname: String,
    type: String,
    id: String,
    width: String,
    theme: {
      type: String,
      default: "default"
    },
    radius: String,
    img_src: String,
    img_position: {
      type: String,
      default: "top"
    }
  },
  data() {
    return {
      img: this.img_src
    };
  },
  methods: {
    // getImgUrl(){
    //     console.log(this.img_src);
    //     return require.context('../../../assets/'+this.img_src);
    // }
  },
  computed: {
    cardWidth() {
      let css;
      if (this.img_src && this.img_position != "top") {
        css = "width:60%;float: left;";
      }
      if (this.img_src && this.img_position == "top") {
        css = "width:100%;float: none;";
      }
      return css;
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/sass/imports/general";
.acards {
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(204, 204, 204);
  box-shadow: 0 0 5px #646464;
  margin: 10px;
  overflow: hidden;
  position: relative;
  transition: 0.5s;
  z-index: 4;

  .acards__circle {
    animation: circle1 1s;
    animation-fill-mode: forwards;
    border-radius: 50%;
    position: absolute;
    right: 7%;
    top: 10%;
    transition: 0.8s;
    transition-delay: 0.7s;
    z-index: -1;

    span:nth-child(1) {
      animation: circle2 1s;
      animation-fill-mode: forwards;
      border-radius: 50%;
      left: -6%;
      position: absolute;
      top: 50%;
      transition: 0.8s;
      z-index: -1;
    }
  }

  &__photo {
    border: solid 1px black;
    height: 100%;

    &--left {
      float: left;
      width: 40%;
    }

    &--top {
      float: none;
      height: 150px;
    }
  }

  &--primary {
    span:nth-child(1) {
      background-color: $pink;
      span:nth-child(1) {
        background-color: $light-pink;
      }
    }

    .acards__icon {
      color: $light-red;
    }
  }

  &--info {
    span:nth-child(1) {
      background-color: $blue;
      span:nth-child(1) {
        background-color: $light-blue;
      }
    }

    .acards__icon {
      color: $blue;
    }
  }

  &--success {
    span:nth-child(1) {
      background-color: $green;
      span:nth-child(1) {
        background-color: $light-green;
      }
    }
    .acards__icon {
      color: $green;
    }
  }

  &--warning {
    span:nth-child(1) {
      background-color: $orange;
      span:nth-child(1) {
        background-color: $light-orange;
      }
    }

    .acards__icon {
      color: $orange;
    }
  }
}

@keyframes circle1 {
  from {
    height: 0px;
    right: 7%;
    top: 10%;
    width: 0px;
  }
  to {
    height: 200px;
    opacity: 0.8;
    right: -4%;
    top: -18%;
    transform: rotate(380deg);
    width: 200px;
  }
}

@keyframes circle2 {
  from {
    height: 0px;
    opacity: 1;
    right: 7%;
    top: 10%;
    width: 0px;
  }
  to {
    height: 30px;
    opacity: 0.8;
    right: -7%;
    top: 48%;
    width: 30px;
  }
}
</style>
