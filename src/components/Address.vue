<template>
	<div>
		<el-form ref="form" :model="form" label-width="80px">
					
		</el-form>
	</div>
</template>
  <script>
	export default {
	  data() {
		return {
		  form: {
			name: '',
			region: '',
			date1: '',
			date2: '',
			delivery: false,
			type: [],
			resource: '',
			desc: ''
		  }
		}
	  },
	  methods: {
		onSubmit() {
		  console.log('submit!');
		}
	  }
	}
  </script>
<style scoped>

</style>