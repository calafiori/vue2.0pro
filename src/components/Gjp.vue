<template>
	<div style="width: 100%">
	  <!-- <p>
		<el-button @click="setLoading">点我重新加载</el-button>
	  </p> -->
	  <el-skeleton style="width:100%" :loading="loading" animated :count="3">
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
			<div style="width: 30%;margin-top: 10px; height: 100px;float: left;"><img style="width: 100%; height: 80px;border-radius: 10px;" :src="item.imgUrl" class="image multi-content" /></div>
			<div style="text-overflow:ellipsis;overflow:hidden; float: left;margin-left:5%;margin-top: 10px;width: 45%;height:80px;font-size:14px;text-align: left;">我買幾個橘
				子去。你就在此地，不要走動。我買幾個橘
				子去。你就在此地，不要走動。你就在此地，不要走動。你就在此地，不要走動。你就在此地，不要走動。</div>
			<div style="float: left;width: 80%;height: 30px;font-size:12px;text-align:left">
				<span>作者：丁春秋</span>
				<span>时间：公元221年</span>
			</div>
			<!-- <div style="padding: 16px;">	
			  <span style="text-align: center;line-height: 40px;">{{ item.name }}</span>
			  <div class="bottom card-header" style="border: 1px solid red;text-align: left;">
				<span class="time">{{ currentDate }}</span>
				作者：张三
			  </div>
			</div> -->
			<br/>
		  </el-card>
		 
		</template>
	  </el-skeleton>
	</div>
  </template>
  <script>
  export default {
	name:'Gjp',
    data() {
      return {
        loading: true,
        currentDate: '2021-06-01',
        lists: [],
      }
    },
    mounted() {
      this.loading = false
      this.lists = [
        {
          imgUrl:
            'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        },
        {
          imgUrl:
            'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        },
		{
          imgUrl:
            'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        },
		{
          imgUrl:
            'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        },
		{
          imgUrl:
            'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        },
		{
          imgUrl:
            'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        },
		{
          imgUrl:
            'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        },
		{
          imgUrl:
            'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        },
		{
          imgUrl:
            'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        },
		{
          imgUrl:
            'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        }
      ]
    },
    methods: {
      setLoading() {
        this.loading = true
        setTimeout(() => (this.loading = false), 500)
      },
    },
  }
</script>
<style scoped>

</style>