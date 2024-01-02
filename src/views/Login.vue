<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="login-box">
    <el-card class="box-card">
      <h2>汽车管理系统</h2>
      <el-form
      :model="form"
      rules="rules"
      ref="formName"
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
          prefix-icon="el-icon-key"
          v-model="form.captchacode"
          placeholder="请输入验证码"
          class="verifyCodeInput"
          >
          </el-input>
          <el-image
          class="verifyCodeImgUrl"
          :src="verifyCode.verifyCodeImgUrl"
          @click="resetImg"
          />
        </el-form-item>
        <el-button
        type="primary"
        native-type="submit"
        plain
        @click.prevent="getData()"
        >
        登录
      </el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    var validateCaptchCode=(rule, value, callback)=>{
      if (value.toLowerCase() !== this.verifyCode.verifyCode.toLowerCase()) {
        callback('验证码错误,请重新输入');
      }
    }
    return{
      form:{
        username:'',
        password:'',
        captchacode:''
      },
      rules:{
        username:[
          {required:true,message:'请输入用户名',trigger:'blur'},
          {pattern:/^[a-zA-Z0-9_-]{4,16}$/,message:'用户名为4-16位的数字/字母/下划线/减号'}
        ],
        password:[
          {required:true,message:'请输入密码',trigger:'blur'}
        ],
        captchacode:[
          {required:true,message:'请输入验证码',trigger:'blur'},
          {validator:validateCaptchCode,trigger:'blur'}
        ]
      },
      verifyCode:{
        verifyCodeImgUrl:'',
        verifyCode:'',
        whRatio:''
      }
    }
  },
  created(){
    this.captchacode()
  },
  methods:{
    getData(){
      // const {username,password,captchacode} = this.form
      //console.log(username,password,captchacode);
      this.$refs['formName'].validate((valid) => {
          console.log(valid);
          console.log(this.$refs['formName']);
          if (valid) {
            this.$message.success('欢迎登录！')
            this.$router.replace('/home')
          } else {
            // console.log('error submit!!');
            this.$message.error({
              message:'输入的账号密码或是验证码错误,请重新输入!',
              showClose: true,
              type:'error'
            })
            // return false;
          }
        });
      // if(username==='admin' && password==='123456' && captchacode.toLowerCase() === this.verifyCode.verifyCode.toLowerCase()){
      //   this.$router.replace('/home')
      // } else {
      //   this.$message.error({
      //     message:'输入的账号密码或是验证码错误,请重新输入!',
      //     showClose: true,
      //     type:'error'
      //   })
      // }
    },
    async captchacode (){
      try{
      const {data} = await axios({
        url:'/verifycode/code',
        baseURL: 'https://www.mxnzp.com/api',
        params:{
          len:5,
          type:0,
          app_id:'xvqopyqkqb1vnusl',
          app_secret:'mlACdkAAIYaezcdM2gJGOvErsbmKL0u1'
        }
      })
      this.verifyCode.verifyCodeImgUrl = data.data.verifyCodeImgUrl
      this.verifyCode.verifyCode = data.data.verifyCode
      this.verifyCode.whRatio = data.data.whRatio
      console.log(data.data);
    } catch(error){
        throw new Error(error)
      }
    },
    async resetImg(){
      setTimeout(()=>{
        this.captchacode()
      },500)
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
    height: 350px;
    opacity: 0.9;
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
  .verifyCodeInput {
    width: 133px;
    right: 76px;
  }
  .verifyCodeImgUrl {
    cursor:pointer;
    width: 150px;
    height: 40px;
    right: 1px;
    margin-left:5px;
    position: absolute;
  }
</style>