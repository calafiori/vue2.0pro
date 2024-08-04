<template>
	<!-- <nut-cell>
		<nut-video :source="source" :options="options" @play="play" @pause="pause" @playend="playend" />
	</nut-cell> -->
    <div class="playvideo">
        <Userheader /><br/>
        <br/><br/><br/><br/><br/>
        <nut-noticebar 
            text="华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"
        ></nut-noticebar>
        <Hdp :hdpobj="hdpobj"/>
    <nut-noticebar direction='vertical' :list="horseLamp1" :speed='10' :standTime='1000'  @click='go' :closeMode="true"></nut-noticebar>
    <div>
      <h3>{{ contentdata.title }}</h3>
    </div>
    <iframe frameborder=0 allowfullscreen id="toiframe" style="width: 100%;height: 300px;margin: auto;" :src="contentdata.iframeloadUrl"></iframe>
    
    <Carditem :items="items" :reload="reload"/>
    <Usercomment />
    </div>
    
</template>  
<script>
    import Hdp from './Hdp.vue';
    import Carditem from './Carditem.vue';
    import Pageheader from './Pageheader.vue';
    import Userfooter from './Userfooter.vue';
    import Userheader from './Userheader.vue';
    import Usercomment from './Usercomment.vue';
	export default {
    name:'Playvideo',
    components:{Carditem,Pageheader,Userfooter,Userheader,Hdp,Usercomment},
    data() {
        return {
          hdpobj:[
					{
						hdpheight:"100px",
						imgheight:'width: 100%;',
						intervaltime: 3000,
						isjump:false
					},//定义样式属性
					[
						{imgUrl:'./static/img/4.jpg',loadurl:'www.baidu.com',loadaction:false},
						{imgUrl:'./static/img/1.jpg',loadurl:'www.baidu.com',loadaction:false},
						{imgUrl:'./static/img/2.jpg',loadurl:'www.baidu.com',loadaction:false},
						{imgUrl:'./static/img/3.jpg',loadurl:'www.baidu.com',loadaction:false},
					],
				],
          items:[
				{
					id:1,
          iframeloadUrl:'https://player.youku.com/embed/XMzg0MDkyNTQ5Mg==?rel=0&amp;autoplay=1',
					imgUrl:'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
					author:'佚名',
					ctime:'2022.11.23',
					starts:2,
					title:'红尘中，，我为明公叹。放翁徒撩情，却是无情男。',
				},
				{
					id:1,
          iframeloadUrl:'https://player.youku.com/embed/XMzg0MDkyNTQ5Mg==?rel=0&amp;autoplay=1',
					imgUrl:'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
					author:'陆游',
					ctime:'2022.11.23',
					starts:4.5,
					title:'红酥手。黄縢酒。满城春色宫墙柳。东风恶。欢情薄。一怀愁绪，几年离索。错错错。',
				},
				{
					id:1,
          iframeloadUrl:'https://player.youku.com/embed/XMzg0MDkyNTQ5Mg==?rel=0&amp;autoplay=1',
					imgUrl:'./static/img/3.jpg',
					author:'唐婉',
					ctime:'2022.11.23',
					starts:4.5,
					title:'春如旧。人空瘦。泪痕红浥鲛绡透。桃花落。闲池阁。山盟虽在，锦书难托。莫莫莫。',
				},
				{
					id:1,
          iframeloadUrl:'https://player.youku.com/embed/XMzg0MDkyNTQ5Mg==?rel=0&amp;autoplay=1',
					imgUrl:'./static/img/1.jpg',
					author:'宋·佚名',
					ctime:'2022.11.23',
					starts:4.5,
					title:'十八新娘八十郎，苍苍白发对红妆。鸳鸯被里成双夜，一树梨花压海棠。',
				}
			],
      contentdata:{
        id:'',
        title:'',
        detail:'',
        author:'',
        ctime:'',
        starts:'',
        imgUrl:'',
        iframeloadUrl:'https://player.youku.com/embed/XMzg0MDkyNTQ5Mg==?rel=0&amp;autoplay=1'
      },
            iframeload:'https://player.youku.com/embed/XMzg0MDkyNTQ5Mg==?rel=0&amp;autoplay=1',
            horseLamp1: ['惊喜红包免费领', '爆款准点秒', '买超值优惠', '赢百万京豆'],
            options: {
                controls: true
            },
            dataItem: [{
                name: 1
                },
                {
                name: 2
                },
                {
                name: 3
                },
                {
                name: 4
                }],
            dataImgItem: [{
          imgSrc: './static/img/4.jpg'
        },
        {
          imgSrc: './static/img/4.jpg'
        },
        {
          imgSrc: './static/img/4.jpg'
        },
        {
          imgSrc: './static/img/4.jpg'
        }],
            newCurrentPage: 1
        }
    },
    mounted() {
      const that = this
      console.log(5555)
      console.log(that.$route.params)
      that.contentdata = that.$route.params
      // console.log(that.contentdata)
      // setTimeout(() => {
      //   this.dataItem = [
      //     {
      //       name: 1
      //     },
      //     {
      //       name: 2
      //     },
      //     {
      //       name: 3
      //     },
      //     {
      //       name: 4
      //     }
      //   ];

      //   this.dataImgItem = [
      //   {
      //       imgSrc: './static/img/4.jpg'
      //     },
      //     {
      //       imgSrc: './static/img/4.jpg'
      //     },
      //     {
      //       imgSrc: './static/img/4.jpg'
      //     },
      //     {
      //       imgSrc: './static/img/4.jpg'
      //     }
      //   ];
      // }, 300);
  },
    methods: {
       reload(info){
          this.contentdata = info
          console.log(info)
       },
        toweb(){
            var a= document.getElementById('toiframe').Window;
           
            // a.scroll(0,300)
            console.log(a)
            //this.iframeload ="https://music.163.com/"
        },
        go(item){
            console.log(item)
        },
        play(elm){
            console.log('play',elm)
        },
        pause(e){
            console.log('pause')
        },
        playend(e){
            alert('播放结束')
        },
        slideChangeEnd(page) {
        console.log(page);
        },
        slideMove(page) {
        console.log(page);
        },
        slideChangeStart(page) {
        console.log(page);
        },
        add() {
        this.newCurrentPage = this.newCurrentPage + 1;
        },
        sub() {
        this.newCurrentPage = this.newCurrentPage - 1;
        }
    }

};
</script>
<style scoped>
@media screen and (min-width: 1024px){
	.playvideo{
		width: 60%;
		margin: auto;
	}
}
</style>
