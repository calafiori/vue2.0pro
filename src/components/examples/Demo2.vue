<template>
	<div class="" style="">
		 <div class="selectbox" style="">
				<div class="selectbox_d1" style="">
					<ul>
						<li style="width: 5%;"><i class="el-icon-d-arrow-left"></i></li>
						<li>一级菜单1</li>
						<li>一级菜单2</li>
						<li>一级菜单3</li>
						<li>一级菜单4</li>
						<li>一级菜单4</li>
						<li style="width: 5%;float: right;"><i class="el-icon-d-arrow-right"></i></li>
					</ul>
				</div>
				<div class="selectbox_d2">
					<div class="selectbox_d3" style="">
						<ul>
							<li>二级菜单1</li>
							<li>二级菜单2</li>
							<li>二级菜单3</li>
							<li>二级菜单4</li>
						</ul>
					</div>
					<div class="selectbox_d4" style="">
							<ul>
								<li>1</li>
								<li>2</li>
								<li>3</li>
								<li>4</li>
							</ul>
					</div>
				</div>
		 </div>
	</div>
</template>
<script>
	export default{
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
.selectbox{
	width: 100%;
	font-size: 12px;
	color: #fff;
}
.selectbox_d1{
	/* border: 1PX solid #F0F; */
	/* background-color: #F0F; */
	width: 100%;height: 40px;
	border-radius:5% ;
}
.selectbox_d1 li{
	background: #999;
	list-style: none;
	float: left;
	width: 15%;
	margin-top: 10px;
	/* line-height: 40px; */
	border-radius: 20%;
	margin-left: 2%;
	text-align: center;
}
.selectbox_d3{
	width: 20%;text-align: center;
	background: #303133;
	float: left;height: 100%;
}
.selectbox_d4{
	background: #303133;
	float: left;width: 80%;height: 100%;
}
.selectbox_d2 li{
	list-style: none;
	margin-top: 20px;
	height: 20px;
	border-radius: 5%;
}
</style>
