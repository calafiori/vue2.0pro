<template>
	<li>
	 	<label>
			<input type="checkbox" :checked="todoObj.done" @change="handleCheck(todoObj.id)"/>
				<span>{{todoObj.title}}</span>
		</label>
		<button class="btn btn-danger" @click="handleDelete(todoObj.id)">deleted</button>
	</li>
</template>
<script>
export default{
	name:'Pitem',
	data(){
		return{
		}
	},
	props:['todoObj','checkTodo','deleteTodo'],
	mounted(){
		console.log(this.todoObj)
	},
	methods:{
		handleCheck(id){
			console.log(id)
			this.checkTodo(id)
		},
		handleDelete(id){
			console.log(id)
			if(confirm('are you sure to deleted!')){
				this.deleteTodo(id)
			}
		},
	}
}
</script>
<style scoped>
/*item */
li{
		list-style: none;
		height: 36px;
		line-height: 36px;
		padding:0 5px;
		border-bottom: 1px solid #ddd;
	}
	li label{
		float:left;
		cursor:pointer

	}
	li label li input{
		vertical-align: middle;
		margin-right: 6px;
		position:relative;
		top:-1px;
	}
	li button{
		float:right;
		display: none;
		margin-top:3px;
	}
	li:before{
		content:initial;
	}
	li:last-child{
		border-bottom: none;
	}
	li:hover{
		background: #ddd;
	}
	li:hover button{
		display: block;
	}
</style>
