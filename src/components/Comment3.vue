<template>
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
	</div>
</template>
<script>
	export default{
		name:"Comment3",
		data(){
			return {
				bshow:true,
			}
		},
		methods:{
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
}
@media screen and (min-width: 1024px){
	.comment_b1{
		display: none;
	}
}

</style>
