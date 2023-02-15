<template>
  <div class="home">
    <div class="stat-list">
      <div
        class="stat-item"
        :class="{ clicked: clickIndex === index }"
        @click="clickStatItem(item, index)"
        v-for="(item, index) in statList"
        :key="index"
      >
        <div class="stat-item-code">{{ item.event_code }}</div>
        <div class="stat-item-desc">{{ item.event_desc }}</div>
      </div>
    </div>
    <div class="stat-detail-box">
      <div class="stat-detail">
        {
        <div class="stat-ext" v-for="(val, key) in statExt" :key="key">
          <div class="stat-ext-key">"{{ key }}"</div>
          <div class="stat-ext-val">: "{{ val }}",</div>
        </div>
        }
      </div>
      <div class="add-stat-class">
        <div>需要添加{{ statClass.levelText }}</div>
        <div>代码：{{ statClass.code }}</div>
        <div>名称：{{ statClass.desc }}</div>
        <div v-if="statClass.level !== 1">父级id：{{ statClass.fatherId }}</div>
        <div v-if="statClass.level !== 1">
          父级名称：{{ statClass.fatherName }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
// import Tips from '@/components/Tips.vue'
import {
  queryReportmanage,
  queryClass,
  getReports,
  addSubgroup,
} from "@/api/index";
import { formatCaughtStats } from "@/business/index";
import { to } from "@/util/index";
@Component
export default class Home extends Vue {
  public pageShow = false;
  public clickIndex = -1;
  public statList = [];
  public statExt = {};
  public statClass = {};
  public allStat = {};
  public allClass = {};
  public async created() {
    this.queryReportmanage();
    this.queryClass();
    this.getReports();

    const data = [
      {
        // thirdClassId: 3,
        subgroupCode: "b_test3.c_test3",
        rule: [
          // {
          //   rule_id: 56,
          //   private_rule: "val=1;desc=是;val=0;desc=否",
          //   field: "v1",
          //   isnull: "1",
          //   desc: "加自选状态",
          // },
        ],
        firstClassId: 515013,
        launchSite: 0,
        groupid: 10078,
        secondClassId: 515014,
        subgroupDesc: "组件插入测试3333",
        appkey: "rta_access",
        develepor: "zenchen",
        productor: "zenchen",
        status: 3,
        tempId: 109,
        // tempRule: "",
      },
    ];

    this.addSubgroup({
      data: JSON.stringify(data),
    });
  }
  public async queryReportmanage() {
    // showLoading();
    const [err, res] = await to(queryReportmanage());
    // hideLoading();
    if (err) {
      this.showBusinessError(err);
      throw new Error(err);
    }
    this.allStat = res;
    console.log(res);
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
    console.log("allClass", res);
  }

  public getReports() {
    this.getSubReports();
    setInterval(this.getSubReports, 1000);
  }

  public async getSubReports() {
    // showLoading();
    const [err, res] = await to(getReports());
    // hideLoading();
    if (err) {
      this.showBusinessError(err);
      throw new Error(err);
    }
    this.statList = formatCaughtStats(res.statArr, this.allStat, this.allClass);

    console.log(this.statList);
  }

  public async addSubgroup(params: any) {
    const [err, res] = await to(addSubgroup(params));
    if (err) {
      this.showBusinessError(err);
      throw new Error(err);
    }
    console.log(res);
  }

  public showBusinessError(error: any) {
    console.log(error);
  }

  public clickStatItem(stat: any, index: number) {
    this.statExt = JSON.parse(stat.ext);
    this.clickIndex = index;
    const [l1code, l2code, l3code, envcode] = stat.event_code.split(".");
    if (!stat.first_level_id) {
      this.statClass = {
        level: 1,
        levelText: "一级分类",
        code: l1code,
        fatherId: "",
        fatherName: "",
        name: "",
      };
    } else if (!stat.second_level_id) {
      this.statClass = {
        level: 2,
        levelText: "二级分类",
        code: l2code,
        fatherId: stat.first_level_id,
        fatherName: stat.first_level_name,
        name: "",
      };
    } else if (!stat.third_level_id) {
      this.statClass = {
        level: 3,
        levelText: "三级分类",
        code: l3code,
        fatherId: stat.second_level_id,
        fatherName: stat.second_level_name,
        name: "",
      };
    }
  }
}
</script>
<style lang="less" scoped>
@import "~@/less/Home.less";
</style>
