<template>
	<div id="#Kkl">
		<nut-luckycard 
			coverColor="#F9CC9D" 
			content="1000万"
			@open="opencard"
		></nut-luckycard>
	</div>
</template>
<script>
export default {
	name:'Kkl',
	methods:{
		opencard(){
			console.log('callback event!')
		}
	}
}
</script>
<style scoped>

</style>