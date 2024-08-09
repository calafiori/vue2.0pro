<template>
	<div>
		<div class="comment_b1">
					<div @click="writeComment" style="font-size:10px;line-height: 30px;text-align:center;background-color:aliceblue;border-radius:30%;width: 35%;height: 25px;float: left;padding:2px;margin-left: 10px;">
						发评论{{c3obj.ishow}}
					</div>
					<div><i class="el-icon-edit"></i></div>
					<div><i class="el-icon-present"></i></div>
					<div><i class="el-icon-star-on"></i></div>
					<div><i class="el-icon-s-finance"></i></div>
		</div>
		<!-- :show-close = false -->
		<el-drawer
				title="回复："
				:visible.sync="drawer"
				:direction="direction"	
				:show-close = false>
				<div class="comboxheader" style="">
					<div class="comboxheader_d1" style=""><center><textarea style="" ></textarea></center></div>
					<div class="comboxheader_d2" style="">
						<div @click="drawer=false" style="background-color: #9FABA5;">关闭</div>
						<div style="background-color:#9FABA5">确认发送</div>
					</div>
					<div style="float: left;width: 100%;"></div>
				</div>
		</el-drawer>
	</div>
</template>
<script>
	export default{
		name:"Comment3",
		props:['c3obj'],
		data(){
			return {
				direction:'btt',
				bshow:true,
				drawer: this.c3obj.ishow,
			}
		},
		methods:{
			// done(){
			// 	this.drawer = false
			// },
			// handleClose(done) {
			// 	console.log(22)
			// 		done();
				
			// },
			closeComment(){
				this.bshow = true
				this.dialogVisible = false
			},
			writeComment(){
				console.log(3333)
				this.textarea = ''
				this.drawer = true
			},
			handleClose(done) {
				this.dialogVisible = false
			},
		}
	}
</script>
<style scoped>
@media screen and (max-width: 768px){
	.comboxheader{
		background: #DCD0E3;
		width: 95%;
		margin: auto;
		height:150px;
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
		width: 85%;height: 50px;resize: none;border-radius: 3%;margin-top: 35px;
	}
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
}
@media screen and (min-width: 1024px){
	.comment_b1{
		display: none;
	}
}

</style>
