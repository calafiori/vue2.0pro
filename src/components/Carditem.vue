<template>
	<div style="width: 100%">
	  <el-skeleton style="width:100%;" :loading="loading" animated>
		<template>
		  <el-card class="carditem_c1" style=""
			:body-style="{ padding: '0px'}"
			v-for="item in lists"
			:key="item.name" 
		  >
	    <div @click="loadcontent(item)" class="carditem_c2" style=""><img  :src="item.imgUrl" class="image multi-content" /></div>
			<div class="carditem_c2_d1" style="">
				<span>{{item.title}}</span><br/>	
			</div>
			<div class="carditem_c2_d2" style="">
				<span>{{item.ctime}}{{item.author}}</span>
			</div>
			<div class="carditem_c2_d3" style="">
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
	name:'Carditem',
	props:['items','reload'],
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
    //   setLoading() {
    //     this.loading = true
    //     setTimeout(() => (this.loading = false), 500)
    //   },
	  loadcontent(item){
		this.reload(item)
		console.log(JSON.stringify(item))
		//{name:'home',params:{id:'1'}}
		this.$router.push({name:'playvideo',params:item})
		//this.$router.push('/playvideo/'+JSON.stringify(item))
	  }
    },
  }
</script>
<style scoped>
@media screen and (max-width: 768px){
	.carditem_c1{
		width:48%;margin-top: 10px;margin-left:2%;float: left;border:none
	}
	.carditem_c2{
		width: 100%; height: 180px;float: left;
	}
	.carditem_c2 img{
		width: 98%; height: 100px;
	}
	.carditem_c2_d1{
		margin-top:-70px;margin-left:10px;float: left;width: 90%;height: 30px;font-size:12px;text-align:left
	}
	.carditem_c2_d2{
		float: left;width: 90%;height: 20px;text-align:right;font-size: 12px;
	}
	.carditem_c2_d3{
		margin-right:-20px;float: right;width: 90%;height: 20px;text-align:right
	}	
}
@media screen and (min-width: 1024px){
	.carditem_c1{
		width:48%;margin-top: 10px;margin-left:2%;float: left;border:none
	}
	.carditem_c2{
		width: 100%; height: 280px;float: left;
	}
	.carditem_c2 img{
		width: 98%; height: 200px;
	}
	.carditem_c2_d1{
		margin-top:-70px;margin-left:10px;float: left;width: 90%;height: 30px;font-size:12px;text-align:left
	}
	.carditem_c2_d2{
		float: left;width: 90%;height: 20px;text-align:right;font-size: 12px;
	}
	.carditem_c2_d3{
		margin-right:-20px;float: right;width: 90%;height: 20px;text-align:right
	}	
}
</style>
