<template>
	<div class="myUser">
		<div class="userTop">
			<div class="userimg" :style="{backgroundImage:'url('+userImgsrc+')'}" ></div>
			<div style="float: left;margin-top: 35px;margin-left: 10px;color: #fff;"><span>dfddsfafds</span></div>
		</div>
		<div class="userBody">
			<ul v-for="(icon,index) in iconsData" :key="index">
				<!-- <li v-show="index === 0" :style="classArr1[0]" >
					<div style="width: 100%;border-bottom: 1px solid #f8f8f8;padding: 8px 10px;font-size: 14px;position: relative;">
						<span class="banlance"> {{icon.name}}: <span style="color:red">￥0.00</span></span>
						<div class="userBtn" style="">一键归集</div>
					</div>
					<div class="userIcon">
						<div style="margin-top: 10px;">
							<div style="width: 35px;height: 35px;border-radius: 50%;background: linear-gradient(90deg, #0975f9, #22a8f5, #0dd4f8);text-align: center;line-height: 35px;font-size: 22px;color: #fff;"><i class="el-icon-s-cooperation"></i></div>
							<div style="font-size: 11px;text-align: center;overflow: clear;">充值</div>
						</div>
					</div>
					<div class="userIcon">
						<div style="margin-top: 10px;">
							<div style="width: 35px;height: 35px;border-radius: 50%;background: linear-gradient(90deg, #0975f9, #22a8f5, #0dd4f8);text-align: center;line-height: 35px;font-size: 22px;color: #fff;"><i class="el-icon-s-finance"></i></div>
							<div style="font-size: 11px;text-align: center;overflow: clear;">取款</div>
						</div>
					</div>
					<div class="userIcon">
						<div style="margin-top: 10px;">
							<div style="width: 35px;height: 35px;border-radius: 50%;background: linear-gradient(90deg, #0975f9, #22a8f5, #0dd4f8);text-align: center;line-height: 35px;font-size: 22px;color: #fff;"><i class="el-icon-s-order"></i></div>
							<div style="font-size: 11px;text-align: center;overflow: clear;">流水</div>
						</div>
					</div>
				</li> -->
				<li v-show="index === 0" :style="classArr1[0]" >
					<div style="width: 100%;border-bottom: 1px solid #f8f8f8;padding: 8px 10px;font-size: 14px;position: relative;">
						<span class="banlance"> {{icon.name}}: <span style="color:red">￥0.00</span></span>
						<div class="userBtn" style="">{{icon.showButtonName}}</div>
					</div>
					<div class="userIcon" v-for="(o,i) in icon.icons" :key="i">
						<div style="margin-top: 10px;">
							<div style="width: 35px;height: 35px;border-radius: 50%;background: linear-gradient(90deg, #0975f9, #22a8f5, #0dd4f8);text-align: center;line-height: 35px;font-size: 22px;color: #fff;"><i :class="o.iconstyle"></i></div>
							<div style="font-size: 11px;text-align: center;overflow: clear;">{{o.name}}</div>
						</div>
					</div>
					
				</li>
				<li v-show="index !== 0" :style="classArr1[1]" >
					<div style="width: 100%;border-bottom: 1px solid #f8f8f8;padding: 8px 10px;font-size: 14px;position: relative;">
						<span class="banlance"> {{icon.name}}</span>
						<div v-show="icon.showButton" class="userBtn" style="">一键归集</div>
					</div>
					<div class="userIcon" v-for="(o,i) in icon.icons" :key="i">
						<div class="userIcon_d1" style="">
							<div class="userIcon_d2" :style="icon.bstyle1"><i :class="o.iconstyle"></i></div>
							<div class="userIcon_d3" style="">{{o.name}}</div>
						</div>
					</div>
					
				</li>
			</ul>
		</div>
		<Userfooter />
	</div>
</template>
<script>
import Userfooter from '../Userfooter.vue';
export default{
	// name:"Demo1",
	components:{Userfooter},
	data(){
		return {
			userImgsrc:'https://himg.bdimg.com/sys/portrait/item/wise.1.810ffcdf.SNLRJQZ6hafs58IAJH8wzA.jpg?time=12305&tieba_portrait_time=12305',
			classArr1:["margin-top: -50px;","margin-top: 10px;"],
			style1:'color:rgb(132,156,198);',
			// firsticonData:{
			// 	name:'balance',
			// 	showButton:true,
			// 	bstyle1:"",
			// 	icons:[
			// 		{id:1,name:'充值',src:'',iconstyle:'el-icon-s-cooperation',iconcolor:''},
			// 		{id:1,name:'dfsa',src:'',iconstyle:'el-icon-s-cooperation',iconcolor:''},
			// 		{id:1,name:'dd',src:'',iconstyle:'el-icon-s-cooperation',iconcolor:''},
			// 	],
			// },
			iconsData:[
				{
					name:'余额',
					showButton:true,
					showButtonName:'水果paty',
					bstyle1:this.style1,
					icons:[
						{id:1,name:'水果',src:'',iconstyle:'el-icon-s-cooperation',iconcolor:''},
						{id:1,name:'葡萄',src:'',iconstyle:'el-icon-s-finance',iconcolor:''},
						{id:1,name:'香蕉',src:'',iconstyle:'el-icon-s-order',iconcolor:''},
					],
				},
				{
					name:'资料设置',
					showButton:false,
					bstyle1:this.style1,
					icons:[
						{id:1,name:'打麻将',src:'',iconstyle:'el-icon-s-cooperation',iconcolor:''},
						{id:1,name:'斗地主',src:'',iconstyle:'el-icon-s-finance',iconcolor:''},
						{id:1,name:'炸金花',src:'',iconstyle:'el-icon-s-order',iconcolor:''},
					],
				},
				{
					name:'记录报表',
					showButton:false,
					bstyle1:'',
					icons:[
						{id:1,name:'飞行员',src:'',iconstyle:'el-icon-s-cooperation',iconcolor:''},
						{id:1,name:'工人',src:'',iconstyle:'el-icon-s-finance',iconcolor:''},
						{id:1,name:'农民',src:'',iconstyle:'el-icon-s-order',iconcolor:''},
					],
				},
				{
					name:'活动相关',
					showButton:false,
					bstyle1:'color:rgb(132,156,198);',
					icons:[
						{id:1,name:'学生',src:'',iconstyle:'el-icon-s-cooperation',iconcolor:''},
						{id:1,name:'老师',src:'',iconstyle:'el-icon-s-finance',iconcolor:''},
						{id:1,name:'角色',src:'',iconstyle:'el-icon-s-cooperation',iconcolor:''},
					],
				},
			]
		}
	}
}
</script>
<style scoped>
.userIcon{
	float: left;
	margin-left: 20px; ;
}
.userIcon_d1{
	margin-top: 10px;margin-left: 8%;
}
.userIcon_d3{
	font-size: 14px;text-align: center;width: 50px;
}
.userIcon_d2{
	width: 50px;height: 35px;border-radius: 50%;text-align: center;line-height: 35px;font-size: 22px;color:#999
}
.userTop{
	width: 100%;
	height: 130px;
	background: linear-gradient(90deg, #0975f9, #22a8f5, #0dd4f8);
}
.userBtn{
	float: right;
	width: 25%;
	margin-right:20px;
	text-align: center;
	background-color: #0975f9;
	border-radius: 10px;
	color:white;
}
.userBody{
	width: 100%;
	height: 100%;
	background: #f2f2f2;
}
.userBody ul{
	list-style: none;
}
.banlance{
	
    line-height: 24px;
    color: #333;
}
.userBody li{
	width: 92%;
	margin-top:10px;
	margin-left: 3%;
	float: left;
	background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, .1);
}
.userimg{
		position: relative;
		width: 50px;
		height: 50px;
		float: left;
		margin-top: 20px;
		margin-left: 20px;
		background-position: 50% 50%;
		background-repeat: no-repeat;
		background-size: cover;
		border-radius: 50%;
		cursor: pointer;
		/* background-image: url("/static/img/header/2.jpg"); */
		/* background-image: url(https://himg.bdimg.com/sys/portrait/item/wise.1.810ffcdf.SNLRJQZ6hafs58IAJH8wzA.jpg?time=12305&tieba_portrait_time=12305); */
	}
</style>

