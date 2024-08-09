<template>
			<div class="color:white;">
				<ul style="width:20%">
					<div style="margin: auto;font-size: 30px;line-height: 60px;margin-left: 8px;">
						<i @click="goBack" class="el-icon-arrow-left"></i>
					</div>
				</ul>
				<ul>
					<li>清霜冷</li>
					<li>云海阔</li>
					<li>飞花残</li>
					<li>落叶黄</li>				
				</ul>
				<ul style="width:20%">
					<div style="font-size: 30px;text-align:right;line-height: 50px;">
						<i @click="loadtologin" class="el-icon-user"></i>&nbsp;
					</div>
				</ul>
			</div>	
</template>
<script>
	export default{
		name:'Header1',
		methods:{
			loadtologin(){
				this.$router.push('/userregister')
			},
			goBack() {
				console.log('go back');
				this.$router.go(-1)
			}
		}
	}
</script>
<style scoped>
ul{
	margin: auto;
	width: 60%;
	height: 60px;
	float: left;
}
ul li{
	list-style: none;
	width: 24%;
	height: 40px;
	line-height: 40px;
	border-bottom:1px solid #bbc2c2;
	float: left;
	margin-left: 1%;
	margin-top:30px;
	text-align: center;
	font-size: 12px;
}
</style>
