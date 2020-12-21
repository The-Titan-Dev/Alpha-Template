<template>
  <transition name="sidebar-slide">
    <!-- SIDEBAR NAVIGATION MENU -->
    <aside class="sidebar" v-if="getShowSidebarStatus">
      <!-- SIDEBAR MENU ITEM -->
      <div class="sidebar__menu">
        <label class="sidebar__menu__headline">Main Menu</label>
        <ul class="sidebar__menu__item">
          <li>
            <router-link to="/buttons" class="item__link">
              <font-awesome-icon icon="ring" size="sm" class="icon" />
              Buttons
            </router-link>
          </li>
          <li>
            <router-link to="/input" class="item__link">
              <font-awesome-icon icon="grip-lines" size="sm" class="icon" />
              Inputs
            </router-link>
          </li>
          <li>
            <router-link to="/overlay" class="item__link">
              <font-awesome-icon icon="columns" size="sm" class="icon" />
              Overlay
            </router-link>
          </li>
          <!-- <li>
            <a>
              <font-awesome-icon icon="clone" size="sm" class="icon" />
              Cards
            </a>
          </li>
          <li>
            <a>
              <font-awesome-icon icon="columns" size="sm" class="icon" />
              Nav
            </a>
          </li>
          <li @click="setSidebarSubMenuVisibility">
            <font-awesome-icon icon="chart-area" size="sm" class="icon" />
            Charts
            <font-awesome-icon
              icon="angle-right"
              size="sm"
              class="icon anchor"
              pull="right"
              :class="{ 'anchor--down': getShowSidebarSubMenuStatus }"
            />
            <transition name="sidebar-sub-slide">
              <ul class="sidebar__submenu" v-if="getShowSidebarSubMenuStatus">
                <li>
                  <a>
                    <font-awesome-icon
                      icon="chart-pie"
                      size="sm"
                      class="icon"
                    />
                    Pie Chart
                  </a>
                </li>
                <li>
                  <a>
                    <font-awesome-icon
                      icon="chart-line"
                      size="sm"
                      class="icon"
                    />
                    Line Chart
                  </a>
                </li>
                <li>
                  <a>
                    <font-awesome-icon
                      icon="chart-bar"
                      size="sm"
                      class="icon"
                    />
                    Bar Chart
                  </a>
                </li>
                <li>
                  <a>
                    <font-awesome-icon
                      icon="chart-pie"
                      size="sm"
                      class="icon"
                    />
                    Doughnut Chart
                  </a>
                </li>
              </ul>
            </transition>
          </li> --> 
        </ul>
      </div>
    </aside>
  </transition>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "TheSidebar",
  methods: {
    ...mapActions(["setSidebarVisibility", "setSidebarSubMenuVisibility"])
  },
  computed: {
    ...mapGetters(["getShowSidebarStatus", "getShowSidebarSubMenuStatus"])
  }
};
</script>

<style lang="scss">
@import "../assets/sass/alpha/sidebar.scss";
</style>
