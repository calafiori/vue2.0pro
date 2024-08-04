<template>
	<div>
		<Header1/><br/><br/><br/><br/>
		<Hdp :hdpobj = 'hdpobj'/>
		<Ctable />
		<Userfooter/>
	</div>
</template>
<script>
	import Hdp from './Hdp.vue';
	import Userfooter from './Userfooter.vue';
	import Header1 from './Header1.vue';
	import Ctable from './Ctable.vue';
	export default{
		name:"Userinfo",
		components:{Hdp,Userfooter,Header1,Ctable},
		data(){
			return {
				hdpobj:[
					{
						hdpheight:"60px",
						imgheight:'width: 80%; margin-left: 10%;',
						intervaltime: 15000,
						isjump:false
					},//定义样式属性
					[
						{imgUrl:'./static/img/4.jpg',loadurl:'www.baidu.com',loadaction:false},
						{imgUrl:'./static/img/1.jpg',loadurl:'www.baidu.com',loadaction:false},
						{imgUrl:'./static/img/2.jpg',loadurl:'www.baidu.com',loadaction:false},
						{imgUrl:'./static/img/3.jpg',loadurl:'www.baidu.com',loadaction:false},
					],
				],
			}
		}
	}
</script>

<style scoped>

</style>