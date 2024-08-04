<template>
	<div id="Hdp">
		<div class="block">
			<el-carousel :height="hdpobj[0].hdpheight" :interval="hdpobj[0].intervaltime">
			<el-carousel-item v-for="(item,index) in hdpobj[1]" :key="index" style="background: #fff;">
				<h3 class="small">
					<el-image
					:style="hdpobj[0].imgheight"
					:src="item.imgUrl"
					></el-image>
				</h3>		
			</el-carousel-item>
			</el-carousel>
		</div>
	</div>
</template>
<script>
	export default{
		name:'Hdp',
		props:['hdpobj'],
		data(){
			return {
				hheight:'100px',
				fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
				url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
			}
		}
	}
</script>
<style scoped>
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
  