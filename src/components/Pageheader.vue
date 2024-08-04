<template>
  <div>
    <el-page-header style="float: left;"  @back="goBack" content="">
    </el-page-header>

  </div>
	
 
</template>
<script>
  export default {
    name:'Pageheader',
    methods: {
        goBack() {
          console.log('go back');
          this.$router.go(-1)
        }
      }
  }
</script>