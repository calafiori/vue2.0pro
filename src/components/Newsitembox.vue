<template>
	<Pageheader/>
	<solt><Newsitemcontent /></solt>
</template>
<script>
import Pageheader from './Pageheader.vue';
import Newsitemcontent from './Newsitemcontent.vue';

	export default{
		name:'Newsitembox',
		components:{Newsitemcontent,Pageheader},
	}
</script>
<style scoped>

</style>
