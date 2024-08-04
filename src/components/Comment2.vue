<template>
	<div>
		<div  class="showcomment">
			<!-- <div style="text-align: right;position:relative;z-index: 999;background: #fff;">
				<div @click="closeComment"  style="text-align: right;position:fixed;width: 95%;">
					<i class="el-icon-close" style="font-size: 28px;"></i>
				</div>
			</div> -->
			<div style="width: 100%;height: 30px;background: #fff;"></div>
			<el-collapse style="width: 100%;" accordion>
				<el-collapse-item v-for="(comment,index) in commentData" :key="index" style="width: 100%;height:100%;color:#303133">
					<template slot="title">
						<div style="width:99%;">
							<div class="authorimg">
								<i class="el-icon-user" ></i>
							</div>
							<div class="combox1">
								<div style="">
									{{comment.name}}
								</div>
								<div style="">
									{{comment.comment}}
								</div>
								<div style="">
									<span>安徽网友</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>2012.11.23</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span v-on:click.stop.prevent="replymessage(2)">回复</span>>
								</div>
							</div>
						</div>
					</template>
					
					<div v-for="(c,i) in comment.replays" :key="i" style="margin-top: 10px;">
						<div style="width: 15%;float: left;margin-left:5%;text-align: right;">
								<i class="el-icon-user" style="font-size: 20px;"></i>
					</div>
				
						<div style="width: 80%;float: left;">
									<div style="margin-top:5px;float:left;width: 100%;line-height:12px;font-size: 12px;text-align: left;">
										{{c.name}}
									</div>
									<div style="margin-top:5px;float:left;width: 100%;line-height:13px;font-size: 12px;text-align: left;">
										{{c.comment}}
									</div>
									<div style="margin-top:5px;float:left;width: 100%;font-size: 10px;line-height:10px;">
										<span>安徽网友</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>2012.11.23</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span @click="replymessage(2)">回复</span>>
									</div>
						</div>	
					</div>
					
						
					<!-- <div v-for="(c,i) in comment.replays" :key="i" style="width: 80%;float: left;"></div> -->
						
				</el-collapse-item>
			</el-collapse>	
		</div>
	</div>
</template>
<script>
	export default{
		props:['commentData'],
		'name':'comment1'
	}
</script>
<style scoped>
@media screen and (max-width: 768){
	.comment_b1{
		position:fixed;
		bottom:0;
		width:60%;
		height: 30px;
		background: #fff;
		z-index: 999;
	}
	.showcomment{
		width: 100%;
		overflow:auto;
		height:500px;
		position: fixed;
		bottom: 0;
		background: #fff;
		z-index: 888;
	}
	.authorimg{
		width: 15%;
		float: left;
		text-align: right;
	}
}
@media screen and (min-width: 1024px){
	.combox1{
		margin-top:50px;
		width: 85%;
		float: left;
		margin-left: 3%;
	}
	.combox1 div{
		margin-top:20px;
		float:left;
		width: 100%;
		line-height:12px;
		font-size: 12px;
		text-align: left;
	}
	.showcomment{
		border: 1px solid #777373;
		border-radius: 2%;
		width: 100%;
		overflow:auto;
		height:500px;
		background: #fff;
		
	}
	.authorimg{
		margin-top:50px;
		width: 5%;
		float: left;
		text-align: left;
		margin-left: 5%;
		font-size: 30px;
	}
}
</style>