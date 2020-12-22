<template>
  <div
      class  ="adropdown"
      :tabIndex="this.tabIndex ? '1' : ''"
        @click ="toggleRiskLevels"
    :class   ="[{ expanded: isExpanded },classname]"
    :style   ="computedStyles"
    :id="id"
  >
    <div
        class ="adropdown__label-container"
      :class  ="[
        disabled ? 'adropdown--disabled' : variant ? 'adropdown--' + variant : '',
        ]"
    >
      <div class ="adropdown__label">
        <span
          :class="[
            size     ? 'text--' + size    : '',
            variant  ? 'text--' + variant : '',
            disabled ? 'text--' + disabled: ''
          ]"
        >
        
          <font-awesome-icon  v-if="this.icon"
            class ="adropdown__label--icon"
            :icon   ="this.icon"/>&nbsp;
          {{ this.config.title ? this.config.title : this.placeholder }}
        </span>
        <i
          class = "angle--down"
          :class ="[{ toggled: isExpanded }, variant ? 'text--' + variant : '',
                    this.size ? 'angle--down--' + this.size: '',
          ]"
        ></i>
      </div>
      
     
    </div>
    <center>
      <hr :class="[
       disabled ? 'adropdown__span--disabled' : variant ? 'adropdown__span--' + variant : '']">
    </center>
    <div v-expand   ="isExpanded" class = "options expand">
      <div
          v-for = "option in configOptions"
        :key    = "option.id"
        :class="[
            size     ? 'option--' + size    : '',//global
            variant  ? 'option--' + variant : '',//global
            option.disabled ? 'option--disabled' : '',
            classname,
          ]"
        @click ="setCurrentSelectedOption(option)"
      >
        <!-- {{ option.icon }} -->
         <font-awesome-icon  v-if="option.icon"
            class ="option--icon"
            :icon   ="option.icon"/>&nbsp;
        {{ option.value }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "adropdown",
  data() {
    return {
      configOptions         : [],
      isBottomSectionToggled: false,
      isExpanded            : false,
      isClick               : false,
      tabIndex              : false,
      isDisabled            : false,
    };
  },
  components: {},
  props     : {
    config: {
      default: 
      {
        function() {
          return this.config;
        },
        type:Array
      },
    },
    onclick  : String,
    id       : String,
    classname: String,
    icon     :  {
      default: "",
      type   : String,
    },
    width    : {
      default: "180",
      type   : String,
    },
    variant: {
      default: "default",
      type   : String,
    },
    size: {
      default: "md",
      type   : String,
    },
    disabled: {
      default: false,
      type   : Boolean,
    },
    placeholder: {
      default: "Select",
      type   : String,
    },
  },
  computed: {
    computedStyles: function () {
      return [
        { "--adropdown-width": this.width + "px" },
      ];
    },
  },
  directives: {
    expand: {
      inserted: function (el, binding) {
        function calcHeight() {
          const currentState = el.getAttribute("aria-expanded");  //get the current state if expanded
          el.classList.add("u-no-transition"); //no transition
          el.removeAttribute("aria-expanded");
          el.style.height = null;
          el.style.height = el.clientHeight + "px";
          el.setAttribute("aria-expanded", currentState);
          setTimeout(function () {
            el.classList.remove("u-no-transition");
          });
        }
        if (binding.value !== null) {
          el.classList.add("expand");
          el.setAttribute("aria-expanded", binding.value ? "true" : "false");   
          calcHeight();
          window.addEventListener("resize", calcHeight);
        }
      },
      update: function (el, binding ) {
        if (el.style.height && binding.value !== null) {
          el.setAttribute("aria-expanded", binding.value ? "true" : "false");
          el.setAttribute("tabIndex", binding.value ? "1" : "" );
          // binding.value ? el.classList.add("topper") : el.classList.remove("topper");        
          // console.log(el.style.height);
        }
        // else
        // {
        //   el.classList.remove("topper");
        // }
      },
    },
  },

  methods: {
    toggleRiskLevels() {
      if(this.disabled == true)
      {
        this.isExpanded = false;
      }
      else
      {
         this.isExpanded = !this.isExpanded;
      }
     
      this.tabIndex = !this.tabIndex;
    },
    setCurrentSelectedOption(option) {
      this.config.title = option.value;
    },
    setConfigData() {
      this.configOptions = this.config.options;
    },
  },
  created() {
    this.setConfigData();
  },
  beforeUdate() {},
  mounted() {},
};
</script>

<style lang = "scss" scoped>
@import "../../assets/sass/imports/general";
@import "ADropdown";
</style>
