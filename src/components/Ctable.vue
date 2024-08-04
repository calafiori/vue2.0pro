<template>
	<div id="ctable">
		<ul>
			<li><i class="el-icon-user-solid"></i>&nbsp;详细信息</li>
			<li><i class="el-icon-tickets"></i>&nbsp;浏览历史</li>
			<li><i class="el-icon-folder-add"></i>&nbsp;添加地址</li>
			<li><i class="el-icon-edit-outline"></i>&nbsp;修改地址</li>
			<li><i class="el-icon-document-copy"></i>&nbsp;充值记录</li>
			<li><i class="el-icon-star-on"></i>&nbsp;我的收藏</li>
			<li><i class="el-icon-s-tools"></i>&nbsp;设置密码</li>
			<li><i class="el-icon-chat-dot-round"></i>&nbsp;联系客服</li>
		</ul>
	</div>
  </template>
  
  <script>
	export default {
	  name:'Ctable',
	  data() {
		return {
		  tableData: [{
			date: '2016-05-02',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1518 弄'
		  }, {
			date: '2016-05-04',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1517 弄'
		  }, {
			date: '2016-05-01',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1519 弄'
		  }, {
			date: '2016-05-03',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1516 弄'
		  }]
		}
	  }
	}
  </script>
<style scoped>
	#ctable col{
		width: 33%;
	}
	#ctable ul{
		margin: auto;
		width: 80%;
		margin-top: 30px;
		margin-left: 10%;
		float: left;
	}
	ul li{
		list-style: none;
		color:#606266;
		width: 42%;
		border:1px solid #C0C4CC;
		border-radius: 5%;
		height: 40px;
		line-height: 40px;
		margin-left:5%;
		margin-top:20px;
		float: left;
		text-align: center;
		font-size: 10px;
	}
</style>