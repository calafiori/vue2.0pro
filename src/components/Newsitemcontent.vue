<template>
	
  <div class="newsitemcontent">
    <div>
      <!-- <Pageheader /> -->
      <Userheader1 />
    </div>
    <br /><br /><br /><br /><br />
    <div>
      <div class="demo-image__lazy">
        <br />
        <div>
          <center>
            <h4 style="width: 60%">
				{{contentdata.title}}
            </h4>
          </center>
        </div>
        <div v-for="item in contentdata.contents" :key="item.p" style="margin-top: 10px">
          <center>
          <el-image
            style="
            width: 92%;
              border-radius: 10px;
            "
            :src="item.img"
            lazy
          ></el-image></center>
          <div
            style="
              letter-spacing: 2px;
              margin-top: 10px;
              transition: 0.3s;
              color: #303133;
              width: 90%;
              margin-left: 5%;
              font-size: 14px;
              text-align: left;
            "
          >
            {{ item.content }}
          </div>
        </div>
        <Usercomment />
      </div>
    </div>
    <br /><br /><br /><br /><br />
    <!-- <Userfooter /> -->
    
    <div style="width: 80%;height: 60px;background: #fff;"></div>
  </div>
</template>
<script>

import Userfooter from "./Userfooter.vue";
import Usercomment from "./Usercomment.vue";
import Userheader1 from "./Userheader1.vue";
export default {
  name: "Newsitemcontent",
  components: {Userfooter,Usercomment,Userheader1},
  data() {
    return {
	  contentdata:'',
      itemcontent: [
        {
          p: "中国乒乓球队，巴黎奥运会备战周期，国乒队内单打排名世界第一的两位选手变成了孙颖莎和王楚钦。巴黎奥运会上，混双排名世界第一的孙颖莎/王楚钦组合将联袂出战，他们两人还在单打和团体项目上身兼三项。尽管外协会选手进步很大，但是在奥运会前这半年，他们还是很难对乒乓球队造成威胁。",
          url: "./static/img/4.jpg",
        },
        {
          p: "中国举重队面对本届奥运会上项目缩减的变化主动应对。李发彬、侯志慧、李雯雯这几位东京奥运会冠军在各自的级别上依然有统治力，刘焕华有望取得中国举重在男子大级别上的突破。",
          url: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        },
      ],
    };
  },
  beforeCreate: function () {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  },
  mounted(){
		this.contentdata = JSON.parse(this.$route.query.data)
		
  },
  methods: {
    backTop() {
      document.documentElement.scrollTop = document.body.scrollTop = 0;
      return;
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 1024px){
  .newsitemcontent{
      width: 60%;
      margin: auto;
  }
}
@media screen and (max-width: 768){
  
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}
</style>