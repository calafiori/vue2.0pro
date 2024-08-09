<template>
	<div>
		<Userheader />
		<br/><br/><br/><br/><br/><br/><br/><br/>
		<Scrollmenu2 />
		<el-collapse accordion style="width: 100%;">
				<el-collapse-item v-for="(v,i) in activeData" :key="i" style="width: 100%;">
					<template slot="title">
						<div class="userimg" :style="{backgroundImage:'url('+v.imgSrc+')'}" ></div>	
					</template>
				
					<div style="width: 90%;margin: auto;">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
					<div style="width: 90%;margin: auto;">在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
				</el-collapse-item>
			
		</el-collapse>
		<Userfooter />
	</div>
</template>
<script>
import Userheader from './Userheader.vue';
import Userfooter from './Userfooter.vue';
import Scrollmenu1 from './examples/Scrollmenu1.vue';
import Scrollmenu2 from './examples/Scrollmenu2.vue';
export default{
	name:'Useractive',
	components:{Userheader,Userfooter,Scrollmenu1,Scrollmenu2},
	data(){
		return {
			userImgsrc:'https://cdn.lyl-star.space/cl/tpl/newwap/pay/images/youhui5014422276785781537.js',
			activeName: '1',
			activeData:[
				{id:1,imgSrc:'https://cdn.lyl-star.space/cl/tpl/newwap/pay/images/youhui5014422276785781537.js',comment:''},
				{id:1,imgSrc:'https://cdn.lyl-star.space/cl/tpl/newwap/pay/images/youhui5014422276785781537.js',comment:''},
				{id:1,imgSrc:'https://cdn.lyl-star.space/cl/tpl/newwap/pay/images/youhui5014422276785781537.js',comment:''},
				{id:1,imgSrc:'https://cdn.lyl-star.space/cl/tpl/newwap/pay/images/youhui5014422276785781537.js',comment:''},
				{id:1,imgSrc:'https://cdn.lyl-star.space/cl/tpl/newwap/pay/images/youhui5014422276785781537.js',comment:''}
			],
		}
	}
}
</script>
<style scoped>
.userimg{
		position: relative;
		width: 100%;
		height: 80px;
		float: left;
		margin-top: 20px;
		margin-left: 20px;
		background-position: 50% 50%;
		background-repeat: no-repeat;
		background-size: cover;
		border-radius: 5%;
		cursor: pointer;
		/* background-image: url("/static/img/header/2.jpg"); */
		/* background-image: url(https://himg.bdimg.com/sys/portrait/item/wise.1.810ffcdf.SNLRJQZ6hafs58IAJH8wzA.jpg?time=12305&tieba_portrait_time=12305); */
	}
</style>
