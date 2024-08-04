<template>
	<div class="school">
		<h2> {{msg}}</h2>
		<h2 @click="showName">school name:{{name}}</h2><br/>
		<h2>school address:{{adress}}</h2><br/>
	</div>
</template>
<script>
import {mixin} from '../Mixin'
export default{
	name:'School',
	data(){
		return{
			 msg:'test',
			name:'beijindaxue',
			adress:'beijin',
		}
	},
	//混合引入，定义全局function。
	mixins:[mixin]
}
</script>
<style scoped>
	.school{
		margin-top: 40px;
		background-color: skyblue;
	}
</style>
