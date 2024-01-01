<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="login-box">
    <el-card class="box-card">
      <h2>汽车管理系统</h2>
      <el-form
      :model="form"
      :rules="rules"
      label-position="center"
      label-width="5px"
      class="el-form"
      >
        <el-form-item prop="username">
          <el-input
          prefix-icon="el-icon-user"
          v-model="form.username"
          clearable
          placeholder="请输入用户名"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
          prefix-icon="el-icon-lock"
          v-model="form.password"
          clearable
          show-password
          placeholder="请输入密码"
          />
        </el-form-item>
        <el-form-item prop="captchacode">
          <el-input
          placeholder="请输入验证码"
          />
        </el-form-item>
        <el-button
        type="primary"
        native-type="submit"
        plain
        @click.prevent="getData"
        >
        登录
      </el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      form:{
        username:'',
        password:''
      },
      rules:{
        username:[
          {required:true,message:'请输入用户名',trigger:blur},
          {pattern:/^[a-zA-Z0-9_-]{4,16}$/,message:'用户名为4-16位的数字/字母/下划线/减号'}
        ],
        password:[
          {required:true,message:'请输入密码',trigger:blur}
        ]
      }
    }
  },
  methods:{
    async getData(){
      const {username,password} = this.form
      console.log(username,password);
      // if(username==='admin' && password==='123456'){
      //   this.$router.replace('/home')
      // }
      console.log(this);
      try{
        const data = await this.$ajax.post('/api/user/login',{
          account:username,
          password:password
        })
        console.log(data);
      }catch (error){
        console.error(error);
        // console.log(error);
      }
    }
  },
}
</script>

<style scoped>
  .login-box {
    height: 100vh;
    background-color: rgb(220, 239, 245);
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .box-card {
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 300px;
  }
  .el-form {
    margin-left: 30px;
    margin-right: 40px;
    margin-top: 30px;
  }
  .text {
    font-size: 14px;
  }
  .item {
    padding: 18px 0;
  }
  .el-button{
    width: 285px;
    margin-top: 5px;
    margin-left: 5px;
  }
</style>