<template>
	<div class="new_item_list_box" style="">
		 <div v-for="(v,index) in iteslistData" :key="index" class="new_item_list" >
			<div>
				<span class="" style="opacity:0.8;"><i class="c-icon icon-top_1leHV"></i>{{index+1}}.</span>
				<a target="_blank" :title="v.content" :href="v.loadUrl" class="new_item_list_a" >
				{{ v.content }}<!--71--></a>
				<span v-show="v.isHot" class="c-text c-text-hot opr-toplist1-label_2TTrT">热</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'Newstipitem',
		data(){
			return {
				iteslistData:[
					{id:1,loadUrl:'',content:'乱花渐欲迷人眼，浅草才能磨马蹄！！！',isHot:false,isVedio:false},
					{id:2,loadUrl:'',content:'有志者、事竟成，破釜沉舟，百二秦关终属楚。苦心人、天不负，卧薪尝胆，三千越甲可吞吴！！！',isHot:false,isVedio:false},
					{id:3,loadUrl:'',content:'升官发财，请往他处；贪生怕死，勿入斯门！！革命者来！',isHot:false,isVedio:false},
					{id:4,loadUrl:'',content:'青青子吟，悠悠我心，但为君故，沉吟至今！！！',isHot:true,isVedio:false},
					{id:5,loadUrl:'',content:'慨当以慷，忧思难忘，何以解忧，唯有杜康！！！',isHot:false,isVedio:false},
					{id:6,loadUrl:'',content:'锦瑟无端五十弦，一弦一柱思华年！！！',isHot:true,isVedio:false},
					{id:7,loadUrl:'',content:'我如果爱你，绝不像攀援的凌霄花，借你的高枝炫耀自己！！！',isHot:false,isVedio:false},
					{id:8,loadUrl:'',content:'我如果爱你绝不学痴情的鸟儿，为绿荫重复单调的歌曲；！！！',isHot:false,isVedio:false},
					{id:9,content:'爱不仅爱你伟岸的身躯，也爱你坚持的位置，足下的土地。！！！',isHot:false,isVedio:false},
					{id:10,loadUrl:'',content:'但是太阳，他每时每刻都是夕阳也都是旭日。！！！',isHot:false,isVedio:false},
					{id:11,loadUrl:'',content:'当他熄灭着走下山去收尽苍凉残照之际，正是他在另一面燃烧着爬上山巅布散烈烈朝辉之时。！！！',isHot:false,isVedio:false},
					{id:12,loadUrl:'',content:'当牵牛花初开的时节，葬礼的号角就已吹响。 ！！！',isHot:false,isVedio:false},
				],
			}
		}
	}
</script>
<style scoped>
.new_item_list_box{
	border: 1px solid #999;border-radius:5% ;width: 94%;margin: auto;
}
.new_item_list{
	width: 100%;margin-top: 10px;
	font-size: 12px;
}
.new_item_list_a{
	color:#2440b3;
}
a:hover{
	color:#315efb;
	border-bottom: 1px solid #315efb;
	
}
/* .new_item_list a:hover::after{
	color: #F60;
} */
.c-text-hot {
    background-color: #F60;
}
.c-text {
    display: inline-block;
    padding: 0 2px;
    text-align: center;
    vertical-align: middle;
    font-style: normal;
    color: #fff;
    overflow: hidden;
    line-height: 16px;
    height: 16px;
    font-size: 12px;
    border-radius: 4px;
    font-weight: 200;
}
</style>
