<template>
	<div class="usrcomment" >
		<br/>
		<div class="comboxheader" style="">
			<div class="comboxheader_d1" style=""><center><textarea style="" ></textarea></center></div>
			<div class="comboxheader_d2" style="">
				<div style="background-color: #9FABA5;">取消发送</div>
				<div style="background-color:#00FF00">确认发送</div>
			</div>
			<div style="float: left;width: 100%;"></div>
		</div>
		<div class="infinite-list combox1" v-infinite-scroll="load">
			<el-collapse>
				<el-collapse-item v-for="(comment,index) in commentData" :key="index" style="">
					<template slot="title">
						<div class='combox2'>
							<div class='combox2_d1'>
								<div class="userimg" :style="{backgroundImage:'url('+comment.himgurl+')'}" ></div>
							</div>
							<div class='combox2_d2'>
								<div style="">
									{{comment.name}}
								</div>
								<div style="line-height: 20px;">
									{{comment.comment}}
								</div>
								<div style="">
									<span>安徽网友</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>2012.11.23</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span v-on:click.stop.prevent="replymessage(2)">回复</span>>
								</div>
							</div>
						</div>
					</template>
					
					<div v-for="(c,i) in comment.replays" :key="i" style="margin-top: 10px;">
						<div class='combox2_d1' style="width: 15%;float: left;margin-left:5%;text-align: right;">
							<div class="userimg" :style="{backgroundImage:'url('+c.himgurl+')'}" ></div>
					</div>
						<div class='combox2_d2' style="width: 70%;float: left;">
									<div style="">
										{{c.name}}
									</div>
									<div style="">
										{{c.comment}}
									</div>
									<div style="">
										<span>安徽网友</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>2012.11.23</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span @click="replymessage(2)">回复</span>>
									</div>
						</div>	
					</div>
					
						
					<!-- <div v-for="(c,i) in comment.replays" :key="i" style="width: 80%;float: left;"></div> -->
						
				</el-collapse-item>
			</el-collapse>	
		</div>
		<Comment3 />
	</div>

</template>
<script>
  import Comment3 from './Comment3.vue';
  export default {
	name:'Usercommnet',
	components: { Comment3},
    data() {
      return {
		bshow:true,
		dialogVisible:false,
		count: 0,
		textarea: '',
        activeNames: ['1'],
		commentData:[
			{
				id:1,
				level:1,
				himgurl:'/static/img/header/1.jpg',
				name:'章三',
				ipAdd:'',
				comment:'今天天气不错呀！！要不要一起去跑步！气不错呀！！要气不错呀！！要气不错呀气不错呀！！要气不错呀！！要气不错呀！！要！！要',
				replays:[
					{  
						fatherId:1,
						id:2,
					    level:2,
						himgurl:'/static/img/header/2.jpg',
						name:'李四',
						ipAdd:'',
						comment:'好呀，晚点去',
						replays:[],
					},
					{  
						fatherId:1,
						id:3,
					    level:2,
						himgurl:'/static/img/header/3.jpg',
						name:'王五',
						ipAdd:'',
						comment:'你们去吧，我还要写作业！',
						replays:[],
					},
					{  
						fatherId:1,
						id:3,
					    level:2,
						himgurl:'',
						name:'王五',
						ipAdd:'',
						comment:'你们去吧，我还要写作业！',
						replays:[],
					},
					{  
						fatherId:1,
						id:3,
					    level:2,
						himgurl:'/static/img/header/1.jpg',
						name:'王五',
						ipAdd:'',
						comment:'你们去吧，我还要写作业！',
						replays:[],
					},
					{  
						fatherId:1,
						id:3,
					    level:2,
						himgurl:'',
						name:'王五',
						ipAdd:'',
						comment:'你们去吧，我还要写作业！',
						replays:[],
					},
					{  
						fatherId:1,
						id:3,
					    level:2,
						himgurl:'',
						name:'王五',
						ipAdd:'',
						comment:'你们去吧，我还要写作业！',
						replays:[],
					},
					{  
						fatherId:1,
						id:3,
					    level:2,
						himgurl:'/static/img/header/1.jpg',
						name:'王五',
						ipAdd:'',
						comment:'你们去吧，我还要写作业！',
						replays:[],
					},
				],
			},
			{
				id:1,
				level:1,
				himgurl:'/static/img/header/2.jpg',
				name:'章三',
				ipAdd:'',
				comment:'今天天气不错呀！！要不要一起去跑步！',
				replays:[
					{  
						fatherId:1,
						id:2,
					    level:2,
						himgurl:'/static/img/header/1.jpg',
						name:'李四',
						ipAdd:'',
						comment:'好呀，晚点去',
						replays:[],
					},
					{  
						fatherId:1,
						id:3,
					    level:2,
						himgurl:'/static/img/header/1.jpg',
						name:'王五',
						ipAdd:'',
						comment:'你们去吧，我还要写作业！',
						replays:[],
					},
				],
			},
			{
				id:1,
				level:1,
				himgurl:'/static/img/header/3.jpg',
				name:'章三',
				ipAdd:'',
				comment:'今天天气不错呀！！要不要一起去跑步！',
				replays:[
					{  
						fatherId:1,
						id:2,
					    level:2,
						himgurl:'/static/img/header/1.jpg',
						name:'李四',
						ipAdd:'',
						comment:'好呀，晚点去',
						replays:[],
					},
					{  
						fatherId:1,
						id:3,
					    level:2,
						himgurl:'/static/img/header/1.jpg',
						name:'王五',
						ipAdd:'',
						comment:'你们去吧，我还要写作业！',
						replays:[],
					},
				],
			},
			{
				id:1,
				level:1,
				himgurl:'/static/img/header/4.jpg',
				name:'章三',
				ipAdd:'',
				comment:'今天天气不错呀！！要不要一起去跑步！',
				replays:[
					{  
						fatherId:1,
						id:2,
					    level:2,
						himgurl:'/static/img/header/1.jpg',
						name:'李四',
						ipAdd:'',
						comment:'好呀，晚点去',
						replays:[],
					},
					{  
						fatherId:1,
						id:3,
					    level:2,
						himgurl:'/static/img/header/1.jpg',
						name:'王五',
						ipAdd:'',
						comment:'你们去吧，我还要写作业！',
						replays:[],
					},
				],
			},
			{
				id:1,
				level:1,
				himgurl:'/static/img/header/1.jpg',
				name:'章三',
				ipAdd:'',
				comment:'今天天气不错呀！！要不要一起去跑步！',
				replays:[
					{  
						fatherId:1,
						id:2,
					    level:2,
						himgurl:'/static/img/header/2.jpg',
						name:'李四',
						ipAdd:'',
						comment:'好呀，晚点去',
						replays:[],
					},
					{  
						fatherId:1,
						id:3,
					    level:2,
						himgurl:'',
						name:'王五',
						ipAdd:'',
						comment:'你们去吧，我还要写作业！',
						replays:[],
					},
				],
			},
			{
				id:1,
				level:1,
				himgurl:'/static/img/header/3.jpg',
				name:'章三',
				ipAdd:'',
				comment:'今天天气不错呀！！要不要一起去跑步！',
				replays:[
					{  
						fatherId:1,
						id:2,
					    level:2,
						himgurl:'/static/img/header/1.jpg',
						name:'李四',
						ipAdd:'',
						comment:'好呀，晚点去',
						replays:[],
					},
					{  
						fatherId:1,
						id:3,
					    level:2,
						himgurl:'/static/img/header/1.jpg',
						name:'王五',
						ipAdd:'',
						comment:'你们去吧，我还要写作业！',
						replays:[],
					},
				],
			},
			{
				id:1,
				level:1,
				himgurl:'/static/img/header/1.jpg',
				name:'章三',
				ipAdd:'',
				comment:'今天天气不错呀！！要不要一起去跑步！',
				replays:[
					{  
						fatherId:1,
						id:2,
					    level:2,
						himgurl:'/static/img/header/1.jpg',
						name:'李四',
						ipAdd:'',
						comment:'好呀，晚点去',
						replays:[],
					},
					{  
						fatherId:1,
						id:3,
					    level:2,
						himgurl:'/static/img/header/1.jpg',
						name:'王五',
						ipAdd:'',
						comment:'你们去吧，我还要写作业！',
						replays:[],
					},
				],
			},
			{
				id:1,
				level:1,
				himgurl:'/static/img/header/1.jpg',
				name:'章三',
				ipAdd:'',
				comment:'今天天气不错呀！！要不要一起去跑步！',
				replays:[
					{  
						fatherId:1,
						id:2,
					    level:2,
						himgurl:'/static/img/header/1.jpg',
						name:'李四',
						ipAdd:'',
						comment:'好呀，晚点去',
						replays:[],
					},
					{  
						fatherId:1,
						id:3,
					    level:2,
						himgurl:'/static/img/header/1.jpg',
						name:'王五',
						ipAdd:'',
						comment:'你们去吧，我还要写作业！',
						replays:[],
					},
				],
			},
			{
				id:1,
				level:1,
				himgurl:'/static/img/header/1.jpg',
				name:'章三',
				ipAdd:'',
				comment:'今天天气不错呀！！要不要一起去跑步！',
				replays:[
					{  
						fatherId:1,
						id:2,
					    level:2,
						himgurl:'/static/img/header/1.jpg',
						name:'李四',
						ipAdd:'',
						comment:'好呀，晚点去',
						replays:[],
					},
					{  
						fatherId:1,
						id:3,
					    level:2,
						himgurl:'/static/img/header/1.jpg',
						name:'王五',
						ipAdd:'',
						comment:'你们去吧，我还要写作业！',
						replays:[],
					},
				],
			},
			{
				id:1,
				level:1,
				himgurl:'/static/img/header/1.jpg',
				name:'章三',
				ipAdd:'',
				comment:'今天天气不错呀！！要不要一起去跑步！',
				replays:[
					{  
						fatherId:1,
						id:2,
					    level:2,
						himgurl:'',
						name:'李四',
						ipAdd:'',
						comment:'好呀，晚点去',
						replays:[],
					},
					{  
						fatherId:1,
						id:3,
					    level:2,
						himgurl:'/static/img/header/1.jpg',
						name:'王五',
						ipAdd:'',
						comment:'你们去吧，我还要写作业！',
						replays:[],
					},
				],
			},
			{
				id:1,
				level:1,
				himgurl:'/static/img/header/1.jpg',
				name:'章三',
				ipAdd:'',
				comment:'今天天气不错呀！！要不要一起去跑步！',
				replays:[
					{  
						fatherId:1,
						id:2,
					    level:2,
						himgurl:'/static/img/header/1.jpg',
						name:'李四',
						ipAdd:'',
						comment:'好呀，晚点去',
						replays:[],
					},
					{  
						fatherId:1,
						id:3,
					    level:2,
						himgurl:'/static/img/header/1.jpg',
						name:'王五',
						ipAdd:'',
						comment:'你们去吧，我还要写作业！',
						replays:[],
					},
				],
			},
		],
      };
    },
    methods: {
		closeComment(){
			this.bshow = true
			this.dialogVisible = false
		},
		writeComment(){
			this.textarea = ''
			this.bshow = false
			this.dialogVisible = true
		},
		handleClose(done) {
			this.dialogVisible = false
      	},
		load(){

		},
		replymessage(id){
			console.log(id)
			this.textarea = ''
			this.dialogVisible = true
		},
		handleChange(val) {
			console.log(val);
		}
    }
  }
</script>
<style scoped> 
@media screen and (max-width: 768px){
	.comboxheader{
		background: #DCD0E3;
		width: 95%;
		margin: auto;
		height:100px;
		border-radius: 5%;
	}
	.comboxheader_d1{
		margin-top:10px;
		float: left;width: 100%;
	}
	.userimg{
		position: relative;
		width: 70%;
		height: 100%;
		height: 40px;
		float: right;
		margin-top: 10px;
		background-position: 50% 50%;
		background-repeat: no-repeat;
		background-size: cover;
		border-radius: 50%;
		cursor: pointer;
		/* background-image: url("/static/img/header/2.jpg"); */
		/* background-image: url(https://himg.bdimg.com/sys/portrait/item/wise.1.810ffcdf.SNLRJQZ6hafs58IAJH8wzA.jpg?time=12305&tieba_portrait_time=12305); */
	}
	.comboxheader_d2{
		float: left;width: 100%;font-size:10px;margin-top: 5px;line-height: 20px;text-align: center;color:#FFFAF0
	}
	.comboxheader_d2 div{
		float: left;margin-left:20%;height: 20px;width:15%;
		border-radius: 15%;
	}
	.comboxheader_d1 textarea{
		width: 85%;height: 50px;resize: none;border-radius: 3%;
	}
	.combox1{
		overflow:auto;
		height:400px;
		border: 1px solid #DCD0E3;
		z-index: 888;
		width: 95%;
		margin: auto;
		margin-top:20px;
	}
	.combox2{
		width: 99%;
	}
	.combox2_d1{
		width: 15%;
		float: left;
		text-align: right;
		font-size: 20px;
	}
	.combox2_d2{
		width: 80%;
		float: left;
		margin-left: 3%;
	}
	.combox2_d2 div{
		width: 100%;
		float:left;
	}
}
@media screen and (min-width: 1024px){
	.usrcomment{
		width: 80%;
		height: 100%;
		margin: auto;
		
	}
	.userimg{
		position: relative;
		width: 60%;
		height: 100%;
		height: 45px;
		float: right;
		margin-top: 10px;
		background-position: 50% 50%;
		background-repeat: no-repeat;
		background-size: cover;
		border-radius: 50%;
		cursor: pointer;
		/* background-image: url("/static/img/header/2.jpg"); */
		/* background-image: url(https://himg.bdimg.com/sys/portrait/item/wise.1.810ffcdf.SNLRJQZ6hafs58IAJH8wzA.jpg?time=12305&tieba_portrait_time=12305); */
	}
	.comboxheader{
		width: 100%;
		overflow:auto;
		height:100px;
	
		bottom: 0;
		margin: auto;
	}
	.comboxheader_d1{
		float: left;width: 100%;
	}
	.comboxheader_d2{
		float: left;width: 100%;font-size:10px;margin-top: 5px;line-height: 20px;text-align: center;
	}
	.comboxheader_d2 div{
		float: left;margin-left:20%;height: 20px;width:15%;
		border-radius: 15%;
	}
	.comboxheader_d1 textarea{
		width: 85%;height: 50px;resize: none;border-radius: 3%;
	}
	.combox1{
		border: 1px solid #999;
		overflow:auto;
		/* height:300px; */
		bottom: 0;
		background: #fff;
		z-index: 888;
	}
	.combox2{
		width: 99%;
	}
	.combox2_d1{
		width: 15%;
		float: left;
		text-align: right;
		font-size: 20px;
	}
	.combox2_d2{
		width: 80%;
		float: left;
		margin-left: 3%;
	}
	.combox2_d2 div{
		width: 100%;
		float:left;
	}
}
</style>
