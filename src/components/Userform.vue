<template>
  <div>
    <el-image style="width: 100%;height: 150px;" :src="src"></el-image><br/><br/>
    
    <el-form ref="form" :model="form" label-width="80px">
			<el-form-item label="登陆账号">
			<el-input v-model="form.useraccount"></el-input>
			</el-form-item>
			<el-form-item label="邮箱">
			<el-input v-model="form.email" style="width: 60%;"></el-input>
			<el-select v-model="value" style="width: 35%;" placeholder="请选择">
			<el-option
			v-for="item in options"
			:key="item.value"
			:label="item.label"
			:value="item.value">
			</el-option>
			</el-select>
			</el-form-item>
			<el-form-item label="验证码">
				<el-input v-model="form.emailyzm" style="width: 200px;"></el-input>
				<el-button style="width:100px;font-size: 12px;" round @click="getCode">{{showcodebutton}}</el-button>
			</el-form-item>
			<el-form-item label="登陆密码">
				<el-input v-model="form.userpwd"></el-input>
			</el-form-item>
			<el-form-item label="确认密码">
				<el-input v-model="form.confirmuserpwd"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">立即注册</el-button>
				<el-button>取消注册</el-button>
			</el-form-item>
		</el-form>
		<el-row>
		<el-col :sm="12" :lg="6">
			
		<el-result icon="success" title="成功提示" v-show="result==1" subTitle="请根据提示进行操作">
		<template slot="extra">
			<el-button type="primary" size="medium">返回</el-button>
		</template>
		</el-result>
	</el-col>
	<el-col :sm="12" :lg="6" v-show="result==2">
		<el-result icon="warning" title="警告提示" subTitle="请根据提示进行操作">
		<template slot="extra">
			<el-button type="primary" size="medium">返回</el-button>
		</template>
		</el-result>
	</el-col>
	</el-row>
  </div>
</template>
<script>
export default {
  name: "Userform",
  data() {
    return {
      src: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      //src: "./static/img/3.jpg",
      result: 0,
      showcodebutton: "获取验证码",
      form: {
        useraccount: "",
        userpwd: "",
        confirmuserpwd: "",
        email: "",
        emailyzm: "",
      },
      options: [
        {
          value: "选项1",
          label: "@qq.com",
        },
        {
          value: "选项2",
          label: "@163.com",
        },
        {
          value: "选项3",
          label: "@gmail.com",
        },
      ],
      value: "",
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);
    },
    getCode() {
      let i = 3;
      this.showcodebutton = i + "秒";

      const createtimer1 = setInterval(() => {
        i--;
        if (i == 0) clearInterval(createtimer1);
        this.showcodebutton = i + "秒";
      }, 1000);
    },
    destroyed() {
      clearInterval(createtimer1);
    },
  },
};
</script>