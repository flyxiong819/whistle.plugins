<template>
  <div class="nav" v-if="navShow">
    <div
      class="nav-item"
      :class="{ clicked: cur === index }"
      v-for="(item, index) in navList"
      :key="item.id"
      @click="clickNav(item, index)"
    >
      {{ item.code }}
      {{ item.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

@Component
export default class Nav extends Vue {
  @Prop() private navList!: [];
  private cur = -1;
  get navShow() {
    return this.navList.length > 0;
  }
  @Emit("clickNav")
  public clickNav(item: any, index: number) {
    this.cur = index;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  .nav-item {
    padding: 10px;
    border-left: 1px solid #cccccc;
  }
  .nav-item:first-child {
    border-left: none;
  }
  .nav-item.clicked {
    color: green;
  }
}
</style>
