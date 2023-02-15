<template>
  <div class="all-stat">
    <div class="class-nav">
      <Nav :navList="level1" @clickNav="clickLevel1"></Nav>
      <Nav :navList="level2" @clickNav="clickLevel2"></Nav>
      <Nav :navList="level3"></Nav>
    </div>
    <div class="stat-list">
      <div class="stat-item" v-for="item in stats" :key="item.event_code">
        <div class="stat-item-code">{{ item.event_code }}</div>
        <div class="stat-item-desc">{{ item.event_desc }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import Nav from "@/components/Nav.vue";
import { queryReportmanage, queryClass } from "@/api/index";
import { to } from "@/util/index";
@Component({
  components: {
    Nav,
  },
})
export default class Home extends Vue {
  public pageShow = false;
  public stats = {};
  public allClass: any;
  public level1 = [];
  public level2 = [];
  public level3 = [];
  public async created() {
    this.queryReportmanage();
    this.queryClass();
  }
  public async queryReportmanage() {
    // showLoading();
    const [err, res] = await to(queryReportmanage());
    // hideLoading();
    if (err) {
      this.showBusinessError(err);
      throw new Error(err);
    }
    this.stats = res;
    console.log("stats", res);
  }

  public async queryClass() {
    // showLoading();
    const [err, res] = await to(queryClass());
    // hideLoading();
    if (err) {
      this.showBusinessError(err);
      throw new Error(err);
    }
    this.allClass = res;
    this.level1 = res.level1;
    console.log("allClass", res);
  }

  public showBusinessError(error: any) {
    console.log(error);
  }

  public clickLevel1(item: any) {
    this.level2 = this.allClass.level2.filter(
      (l: any) => l.father_id === item.id
    );
  }
  public clickLevel2(item: any) {
    this.level3 = this.allClass.level3.filter(
      (l: any) => l.father_id === item.id
    );
  }
}
</script>
<style lang="less" scoped>
.all-stat {
  .class-nav {
  }
  .stat-list {
    .stat-item {
      display: flex;
      margin: 0 16px;
      text-align: left;
      .stat-item-code {
        width: 400px;
      }
      .stat-item-desc {
        flex: 1;
        margin-left: 16px;
        white-space: nowrap;
      }
    }
    .stat-item:nth-child(2n) {
      background: rgba(0, 0, 0, 0.03);
    }
  }
}
</style>
