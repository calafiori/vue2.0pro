<template>
	<div style="width: 100%;" >
	  <!-- <p>
		<el-button @click="setLoading">点我重新加载</el-button>
	  </p> -->
	  <el-skeleton style="width:100%" :loading="loading" animated >
		<template slot="template">
		  <el-skeleton-item
			variant="image"
			style="width: 200px; height: 167px;"
		  />
		  <div style="padding: 14px;">
			<el-skeleton-item variant="h3" style="width: 50%;" />
			<div
			  style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;"
			>
			  <el-skeleton-item variant="text" style="margin-right: 16px;" />
			  <el-skeleton-item variant="text" style="width: 30%;" />
			</div>
		  </div>
		</template>
		<template>
		  <el-card
			:body-style="{ padding: '0px', marginBottom: '1px' }"
			v-for="item in lists"
			:key="item.name" 
		  >
	    <div @click="loadcontent(item)" class="newitem"><img style="" :src="item.imgUrl" class="image multi-content" /></div>
			<div @click="loadcontent(item)" style="text-overflow:ellipsis;overflow:hidden; float: left;margin-left:8%;margin-top: 10px;width: 45%;height:80px;font-size:14px;text-align: left;">
				{{item.title}}</div>
			<div style="margin-left:10px;float: left;width: 80%;height: 30px;font-size:12px;text-align:left">
				<span>作者：{{item.author}}</span>
				<span>时间：{{item.ctime}}</span>

			</div>
			<div style="margin-top:-33px;margin-right:-20px;float: right;width: 90%;height: 20px;text-align:right">
				<el-rate
						v-model="item.starts"
						disabled
						show-score
						text-color="#ff9900"
						score-template="{value}">
					</el-rate>
			</div>
			<br/>
		  </el-card>
		</template>
	  </el-skeleton>
	</div>
  </template>
  <script>
  export default {
	name:'Newsitem',
	props:['items'],
    data() {
      return {
        loading: true,
        currentDate: '2021-06-01',
        lists: this.items,
		value: 3.7
      }
    },
    mounted() {
      this.loading = false
    },
    methods: {
      setLoading() {
        this.loading = true
        setTimeout(() => (this.loading = false), 500)
      },
	  loadcontent(item){
		this.$router.push('/newsitemcontent?data='+JSON.stringify(item))
	  }
    },
  }
</script>
<style scoped>
@media screen and (min-width: 1024px){
	.newitem{
		margin-left:10px;
		width: 35%;
		margin-top: 10px; 
		height: 180px;
		float: left;
		text-align: center;
	}
	.newitem img{
		width: 100%; 
		height: 150px;
		border-radius: 10px;
	}
}
@media screen and (max-width: 768px){
	.newitem{
		margin-left:10px;
		width: 35%;
		margin-top: 10px; 
		height: 100px;
		float: left;
		
	}
	.newitem img{
		width: 100%; 
		height: 80px;
		border-radius: 10px;
	}
}
</style>