<template>
  <div id="app">
    <!-- <router-view/> -->
     <!-- <div class="todo-container">
      <div class="todo-wrap">
        <Pheader :addTodo ="addTodo"/>
        <Plist :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
        <Pfooter :todos="todos" :clearSelect="clearSelect" :checkdAll="checkdAll"/>
      </div>
    </div>  -->
    <!-- <router-link to="/helloword">tiaozhuan</router-link>
    <router-link to="/hdp">tiaozhuan</router-link> -->
    <router-view />
    <!-- <UserHeader/>
    <Hdp/> <br/><br/>
    <Userform/>  -->
    <!-- <Gjp/>  -->
  </div>
</template>

<script>
// import Student from './components/Student.vue'
// import School from './components/School.vue';

export default {
  components: {},
  name: 'App',
  data(){
    return {
      todos:[
				{'id':1,title:'have dinner',done:true},
				{'id':2,title:'play game',done:false},
				{'id':3,title:'go to study',done:true},
        {'id':4,title:'go to work',done:true},
        {'id':5,title:'go to shopping',done:true}
			]
    }
  },
  methods:{
    addTodo(addTodo){
			console.log(addTodo)
      this.todos.unshift(addTodo)
		},
    checkTodo(id){
      this.todos.forEach((todo)=>{
        if(todo.id == id) todo.done = !todo.done
      })
      console.log(this.todos)
    },
    deleteTodo(id){
      this.todos = this.todos.filter((todo)=>{
        return todo.id !== id
      })
      console.log(this.todos)
    },
    checkdAll(checked){
      this.todos.forEach((todo)=>{
        todo.done = !checked
      })
      console.log(this.todos)
    },
    clearSelect(checked){
      // this.todos.forEach((todo)=>{
      //   todo.done = !checked
      // })
      this.todos = this.todos.filter((todo)=>{
        return todo.done !== true
      })
      console.log(this.todos)
      console.log(this.todos)
    },
  }

}
</script>

<style>
#app{
  position: absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
}
body {
		background:#fff;
	}
	.btn {
		display: inline-block;
		padding:4px 12px;
		margin-bottom:0;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
		box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0);
		border-radius: 4px;
	}
	.btn-danger {
		color:#fff;
		background-color: #da4f49;
		border:1px solid #bd362f;
	}
	.btn-danger:hover {
		color: #fff;
		background-color: #bd362f;
	}
	.btn:focus {
		outline:none;
	}
	.todo-container {
		width:600px;
		margin: 0 auto;
	}
	.todo-container .todo-wrap {
		padding:10px;
		border: 1px solid #ddd;
	}
	

	
	
	
</style>
