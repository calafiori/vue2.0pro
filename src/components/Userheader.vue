<template>
  <div class="headerp" style="">
    <Header1 />
    <Header2 />
    <!-- <div style="margin-top: 80px">
      <el-input
        style="width: 63%; margin-left: 5%; float: left; font-size: 10px"
        v-model="inputs"
        placeholder="请输入内容"
      ></el-input>
      <el-button
        style="width: 20%; float: left; margin-left: 2%"
        slot="append"
        icon="el-icon-search"
      ></el-button>
    </div> -->
    <div style="overflow: hidden"></div>
  </div>
</template>
<script>
import Header1 from "./Header1.vue";
import Header2 from "./Header2.vue";
export default {
  name: "UserHeader",
  components: { Header1,Header2},
  data() {
    return {
      inputs: "",
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      sizeList: ["medium"],
    };
  },
  methods: {},
};
</script>
<style scoped>
@media screen and (min-width: 1024px){
    .headerp {
    width: 60%;
    height: 130px;
    background: #fff;
    position: fixed;
    z-index: 99;
  }
}
@media screen and (max-width: 768px){
	.headerp {
    width: 100%;
    height: 130px;
    background: #fff;
    position: fixed;
    z-index: 99;
  }
}

</style>
  