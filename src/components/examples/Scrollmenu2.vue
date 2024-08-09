<template>
	<div class="editBox">
		<!-- <el-tabs  v-model="activeName" type="card" tab-position="left" @tab-click="handleTabClick">
			<el-tab-pane v-for="tab in tabs" :key="tab.name" :name="tab.name">
				<span slot="label">{{tab.label}}</span>
			</el-tab-pane>
		</el-tabs> -->
		<div class="edit-cards">
			<div  class="edit-card">	
				<div v-for="(tab,index) in tabs" :key="index" class="userTop">
					<div class="edit-card-d1" style="">
						<div class="edit-card-d2" @click="changeClick($event)">{{tab.label}}</div>
					</div>	
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				userImgsrc:'https://himg.bdimg.com/sys/portrait/item/wise.1.810ffcdf.SNLRJQZ6hafs58IAJH8wzA.jpg?time=12305&tieba_portrait_time=12305',
				activeName:'first',
				tabs:[
					{name:'first',label:'大老虎',color:'edit-red'},
					{name:'second',label:'小老鼠',color:'edit-orange'},
					{name:'third',label:'长颈鹿',color:'edit-yellow'},
					{name:'fourth',label:'鳄鱼',color:'edit-green'},
					{name:'second',label:'波斯猫',color:'edit-orange'},
					{name:'third',label:'小松鼠',color:'edit-yellow'},
					{name:'fourth',label:'鲨鱼',color:'edit-green'},
					{name:'second',label:'信天翁',color:'edit-orange'},
					{name:'third',label:'游隼',color:'edit-yellow'},
					{name:'fourth',label:'金丝雀',color:'edit-green'},
					{name:'second',label:'哈巴狗',color:'edit-orange'},
					{name:'third',label:'狮子',color:'edit-yellow'},
					{name:'fourth',label:'大象',color:'edit-green'},
				]
			}
		},
		mounted(){
			//this.bindScrollEvent();
		},
		methods:{
			changeClick(e){
				console.log(e)
			}
		}
	}
</script>
<style scoped>
.edit-card-d2{
	width: 100%;text-align: left;line-height: 50px;
}
.edit-card-d1{
	float: left;margin-left: 10px;
}
::-webkit-scrollbar{
	width:0px;
}
.editBox{
	width: 100%;
	display:flex;
}
.edit-cards{
	border: 1px solid #999;
	height: 100px;
	overflow-y: scroll;
	width: 100%;
	height: 50px;
	margin: auto;
}
.edit-card{
	width: 650px;
	font-size: 14px;
}
</style>
<!-- <template>
	<div id="flip-list-demo" class="demo">
		<button v-on:click="shuffle">Shuffle</button>
		<transition-group name="flip-list" tag="ul">
			<li v-for="item in items" v-bind:key="item" style="float:left;margin-left:1%;width: 10%;height: 50px;background: red;">
				<div >{{item}}</div>
			</li>
		</transition-group>
	</div>
</template>
<script>
export default{
	data(){
		return {
			show:true,
			items: [1,2,3,4,5,6,7,8,9]
		}
	},
	methods:{
		shuffle: function () {
			this.items = _.shuffle(this.items)
		}
	}
}
</script>
<style scoped>
.flip-list-move {
  transition: transform 1s;
}
</style> -->
