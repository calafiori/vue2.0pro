<template>
	<div class="todo-header">
		<input type="text" placeholder="please input your task name,then press enter" v-model="content" @keyup.enter="add"/>
	</div>
</template>
<script>
import {nanoid} from 'nanoid'
export default{
	name:'Pheader',
	props:['addTodo'],
	data(){
		return{
			'content':''
		}
	},
	methods:{
		add(e){
			if (!this.content.trim()) return alert('input not alone null!');
			//Math.random() Data.now()
			const todoObj = {id:nanoid(),title:this.content,done:false}
			console.log(todoObj)
			this.addTodo(todoObj)
			this.content = ''
		}
	}
}
</script>
<style scoped>
/*header*/
.todo-header input{
		width: 560px;
		height: 28px;
		font-size: 14px;
		border: 1px solid #ccc;
		border-radius: 4px;
		padding:4px 7px;
	}
	.todo-header input:focus{
		outline:none;
		border-color: rgba(82,168,236,0.8);
		box-shadow: inset 0 1px 1px rgba(0,0,0,0.075), 0 0 8px rgba(82,168,23,0)
	}
</style>
