<template>
	<div class="todo-footer">
		<label>
			<input type="checkbox" v-model="checked" @click="selletAll"/>
		</label>
		<label>
			<span>
				<span>complent {{doneTotl}}</span> / All {{todos.length}}
			</span>
		</label>
		<button class="btn btn-danger" @click="clearS">clear complent task!</button>
	</div>
</template>
<script>
export default{
	name:'Pfooter',
	props:['todos','checkdAll','clearSelect'],
	data(){
		return{
			checked:false
		}
	},
	computed:{
		doneTotl(){
			// let i = 0
			// this.todos.forEach((todo) => {
			// 	if(todo.done) i++
			// });
			// return i
			return this.todos.reduce((pre,current)=>{
				return pre + (current.done?1:0)
			},0)
		}
	},
	methods:{
		selletAll(){
			this.checkdAll(this.checked)
		},
		clearS(){
			if(confirm("are you sure to clear your selected!")){
				this.clearSelect()
			}
		}
	}
}
</script>
<style scoped>
/*footer */
.todo-footer{
		height: 40px;
		line-height: 40px;
		padding-left: 6px;
		margin-top: 5px;
	}
	.todo-footer label{
		display: inline-block;
		margin-right: 20px;
		cursor: pointer;
	}
	.todo-footer label input{
		position: relative;
		top:-1px;
		vertical-align: middle;
		margin-right: 5px;
	}
	.todo-footer button{
		float:right;
		margin-top:5px;
	}
</style>
