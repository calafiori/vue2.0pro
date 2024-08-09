<template>
	<div class="userfooter">
		<!-- <i class="el-icon-s-home" :style="{color:color1}"></i> -->
		<router-link to="/"><i class="el-icon-s-home initcolor" style="margin-left: 5px;"></i> </router-link>
		<router-link to="cardlist"><i class="el-icon-bank-card initcolor"></i></router-link>
		<router-link to="useractive"><i class="el-icon-chat-line-round initcolor"></i></router-link>
		<router-link to="userinfo"><i class="el-icon-s-custom initcolor"></i></router-link>
	</div>
</template>
<script>
	export default{
		name:'Userfooter',
		data(){
			return {
				aa:'changecolor',
				color1:'#93ADD7',
				color2:'#D0C7D0'
			}
		}
	}
</script>
<style scoped>
@media screen and (min-width: 1024px){
	.userfooter{
		position: fixed;
		bottom: 0px;
		z-index: 999;
		width: 60%;
		background: #fff;
	}
}
@media screen and (max-width: 768px){
	.userfooter{
		position: fixed;
		bottom: 0px;
		z-index: 999;
		width: 99%;
		background: linear-gradient(90deg, #0975f9, #22a8f5, #0dd4f8);
	}
}
/* .userfooter{
	position: fixed;
	bottom: 0px;
	z-index: 999;
	width: 100%;
	background: #fff;
} */
.userfooter i{
	font-size: 30px;
	width: 23%;
	text-align: center;
	z-index: 2;
}
.initcolor{
	/* color:#010000; */
	color:white;
}

</style>
