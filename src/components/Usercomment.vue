<template>
	<div class="usrcomment" >
		<br/>
		<center><h3>请友善发表评论！禁止不良信息。</h3></center>
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
									<span>安徽网友</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>2012.11.23</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span v-on:click.stop.prevent="replymessage(comment)">回复</span>>
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
										<span>安徽网友</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>2012.11.23</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span @click="replymessage(c)">回复</span>>
									</div>
						</div>	
					</div>
					<!-- <div v-for="(c,i) in comment.replays" :key="i" style="width: 80%;float: left;"></div> -->	
				</el-collapse-item>
			</el-collapse>	
		</div>
		<!-- <div class="comboxheader" style="">
			<div class="comboxheader_d1" style=""><center><textarea style="" ></textarea></center></div>
			<div class="comboxheader_d2" style="">
				<div style="background-color: #9FABA5;">取消发送</div>
				<div style="background-color:#00FF00">确认发送</div>
			</div>
			<div style="float: left;width: 100%;"></div>
		</div> -->
		<!-- <Comment3 :c3obj="c3obj"/> -->
		<div>
			<div class="comment_b1">
						<div @click="writeComment" style="font-size:10px;line-height: 30px;text-align:center;background-color:aliceblue;border-radius:30%;width: 35%;height: 25px;float: left;padding:2px;margin-left: 10px;">
							发评论
						</div>
						<div><i class="el-icon-edit"></i></div>
						<div><i class="el-icon-present"></i></div>
						<div><i class="el-icon-star-on"></i></div>
						<div><i class="el-icon-s-finance"></i></div>
			</div>
			<!-- :show-close = false -->
			<el-drawer
					style="font-size: 10px;"
					:title="to_reply_info"
					:visible.sync="drawer"
					:direction="direction"	
					:show-close = false>
					<div class="comboxheader" style="">
						<div class="comboxheader_d1" style=""><center><textarea v-model="textarea" style="" ></textarea></center></div>
						<div class="comboxheader_d2" style="">
							<div @click="drawer=false" style="background-color: #9FABA5;">关闭</div>
							<div @click="sendReply" style="background: linear-gradient(90deg, #0dd4f8, #22a8f5, #0dd4f8);">确认发送</div>
						</div>
						<div style="float: left;width: 100%;"></div>
					</div>
			</el-drawer>
		</div>
	</div>

</template>
<script>
  export default {
	name:'Usercommnet',
    data() {
      return {
		to_reply_info:'',
		to_reply_name:'',
		to_replay_comment:'',
		direction:'btt',
		bshow:true,
		drawer: false,
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
		sendReply(){
			if (!this.textarea.trim()) return alert('input not alone null!');
			console.log(this.textarea)
		},
		closeComment(){
				this.bshow = true
				this.dialogVisible = false
			},
		writeComment(){
				console.log(3333)
				this.textarea = ''
				this.to_reply_info = ''
				this.drawer = !this.drawer
		},
		closeComment(){
			this.bshow = true
			this.dialogVisible = false
		},
		handleClose(done) {
			this.dialogVisible = false
      	},
		load(){

		},
		replymessage(v){
			this.drawer = !this.drawer
			console.log(v)
			this.to_reply_info ="回复：" + v.name +":"+v.comment
		},
		handleChange(val) {
			console.log(val);
		}
    }
  }
</script>
<style scoped> 
@media screen and (max-width: 768px){
	
	.comment_b1{
		display: block;
		position:fixed;
		bottom:0;
		width:100%;
		height: 30px;
		background: #fff;
		z-index: 999;
	}
	.comment_b1 div{
		text-align:center;line-height: 30px;float: left;width: 12%;font-size: 23px;
	}
	.comboxheader{
		background: linear-gradient(90deg, #0dd4f8, #22a8f5, #0dd4f8);
		background: #DCD0E3;
		width: 95%;
		margin: auto;
		height:120px;
		border-radius: 3%;
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
		width: 85%;height: 60px;resize: none;border-radius: 3%;margin-top: 10px;
	}
	.combox1{
		overflow:auto;
		/* height:500px; */
		border: 1px solid #DCD0E3;
		z-index: 888;
		width: 95%;
		margin: auto;
		margin-top:10px;
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
