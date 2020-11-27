<template>
  <transition name="sidebar-slide">
    <!-- SIDEBAR NAVIGATION MENU -->
    <aside class="sidebar" v-if="getShowSidebarStatus">
      <!-- SIDEBAR MENU ITEM -->
      <div class="sidebar__menu">
        <label class="sidebar__menu__headline">Main Menu</label>
        <ul class="sidebar__menu__item">
          <li>
            <a>
              <font-awesome-icon icon="columns" size="sm" class="icon" />
              Form
            </a>
          </li>
          <li>
            <a>
              <font-awesome-icon icon="ring" size="sm" class="icon" />
              Buttons
            </a>
          </li>
          <li class="sidebar__menu__item--active">
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
          <li>
            <font-awesome-icon icon="chart-area" size="sm" class="icon" />
            Charts
            <font-awesome-icon
              icon="angle-right"
              size="sm"
              class="icon anchor"
              pull="right"
            />
            <ul class="sidebar__submenu">
              <li>
                <a>
                  <font-awesome-icon icon="chart-pie" size="sm" class="icon" />
                  Pie Chart
                </a>
              </li>
              <li>
                <a>
                  <font-awesome-icon icon="chart-line" size="sm" class="icon" />
                  Line Chart
                </a>
              </li>
              <li>
                <a>
                  <font-awesome-icon icon="chart-bar" size="sm" class="icon" />
                  Bar Chart
                </a>
              </li>
              <li>
                <a>
                  <font-awesome-icon icon="chart-pie" size="sm" class="icon" />
                  Doughnut Chart
                </a>
              </li>
            </ul>
          </li>
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
    ...mapActions(["setSidebarVisibility"]),
  },
  computed: {
    ...mapGetters(["getShowSidebarStatus"]),
  },
};
</script>

<style lang="scss">
@import "../../assets/sass/imports/general";
@import "../../assets/sass/alpha/sidebar.scss";
</style>