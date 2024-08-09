<template>
	<div>
		<Userheader />
		<br/><br/>
		<Userform />
	</div>
</template>
<script>
	import Userform from './Userform.vue';
	import Userheader1 from './Userheader1.vue';
	import Userheader from './Userheader.vue'
	export default{
		name:'Userregister',
		components:{Userform,Userheader1,Userheader}
	}
</script>
<style scoped>

</style>
