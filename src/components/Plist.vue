<template>
	<ul class="todo-main">
		<Pitem 
			v-for="todoObj in todos" 
			:key="todoObj.id" 
			:todoObj="todoObj" 
			:checkTodo="checkTodo"
			:deleteTodo="deleteTodo"
		/>
	</ul>
</template>
<script>
import Pitem from './Pitem.vue'
export default{
  components: { Pitem },
	name:'Plist',
	props:["todos",'checkTodo','deleteTodo']
}
</script>
<style>
	/*main*/
	.todo-main{
		margin-left: 0px;
		border:1px solid #ddd;
		border-radius: 2px;
		padding: 0px;
	}
	.todo-empty{
		height:40px;
		line-height: 40px;
		border:1px solid #ddd;
		border-radius: 2px;
		padding-left: 5px;
		margin-top: 10px;
	}
</style>
