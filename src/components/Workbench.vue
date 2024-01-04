<template>
<div>
  <page-header-wrapper class="page-header">
    <el-card class="carad1">
    <el-row>
      <el-col :span="4" class="card-head-up-left">
        <!-- <el-avatar  fit="fill" :src="avatarUrl" :size="100" alt="今天又是美好的一天！"></el-avatar> -->
        <el-avatar  fit="fill" src="http://power-api.cretinzp.com:8000/girls/16/ybtylselkaookmoq.jpg" :size="150" alt="今天又是美好的一天！"></el-avatar>
      </el-col>
      <el-col span="10" class="card-head-up-middle">
        <el-card shadow="hover" class="time-box">

        </el-card>
      </el-col>
      <el-col :span="8" class="card-head-up-right">
        <el-card shadow="hover" class="weather-box">
          <div class="tem-box">
            <div>
              <span class="title">{{weather.address}}</span>
            </div>
            <div>
              <span>{{reportMinTime}}分钟前更新</span>
            </div>
            <div class="weather-box-left">
              <img src="../assets/多云.png" alt="weatherImg">
              <span class="weather">{{weather.weather}}</span>
              <span class="temperature">{{ weather.temp }}</span>
            </div>
          </div>
          <div class="climate-box">
              <a href="http://www.weather.com.cn/weather1d/101250101.shtml#input" class="more" target="__blank">查看详情</a>
              <span class="humidity">湿度:{{weather.humidity}}</span>&nbsp;&nbsp;
              <span class="windDirection">{{weather.windDirection}}风</span>
              <span class="windPower">{{ weather.windPower }}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-rol :span="12" class="card-foot-down-left">
        <span>今天又是美好的一天！</span>
      </el-rol>
      <el-rol :span="12" class="card-foot-down-right">
      </el-rol>
    </el-row>
  </el-card>
  </page-header-wrapper>
  <page-body-warapper class="page-body">
  <el-row class="container">
    <el-card shadow="hover" class="card2-1">

    </el-card>
    <el-card shadow="hover" class="card2-2">

    </el-card>
    <el-card shadow="hover" class="card2-3">

    </el-card>
  </el-row>
  <el-row class="container">
      <el-card shadow="hover" class="card3-1">
        <h3 slot="header">中国财富榜</h3>
        <div id="fbs" style="height:200px"></div>
      </el-card>
      <el-card shadow="hover" class="card3-2">
      </el-card>
  </el-row>
  <el-row class="container">
    <el-card shadow="hover" class="card4-1">
      <h3 slot="header">
        开发技术栈
        <el-button style="float: right; padding: 3px 0" type="text">vue+element</el-button>
      </h3>
      <el-descriptions border :column="2">
        <el-descriptions-item
        :label="item.technology"
        v-for="(item, index) in technologyStack"
        :key="index"
        >{{ item.version }}
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
    <el-card shadow="hover" class="card4-2">
    
    </el-card>
  </el-row>
          <!-- <a-statistic title="项目数" :value="56" />
          <a-statistic title="团队内排名" :value="8" suffix="/ 24" />
          <a-statistic title="项目访问" :value="2223" /> -->
  </page-body-warapper>
</div>
</template>

<script>
const moment= require('moment')
import { GetGirlImageApi, GetWeatherApi } from '@/utils/api'
import {Column} from '@antv/g2plot'

export default {
  name: 'HelloWorld',
  data(){
    return{
      avatarUrl:'',
      weather:{},
        // address:'',
        // // 湿度
        // temp:'',
        // // 天气描述
        // weather:'',
        // // 风向描述
        // windDirection:'',
        // // 凤力描述
        // windPower:'',
        // // 湿度
        // humidity:'',
        // // 天气发布时间
        // reportTime:''
      technologyStack:[
        { technology: 'core.js', version: '^3.8.3' },
        { technology: 'vue', version: '^2.6.14' },
        { technology: 'vuex', version: '^3.6.2' },
        { technology: 'vue-router', version: '^3.1.2' },
        { technology: 'element-ui', version: '^2.15.14' },
        { technology: 'axios', version: '^1.6.3' },
        { technology: 'moment', version: '^2.30.1' },
        { technology: 'sass', version: '^1.69.6' },
        { technology: '@antv/g2plot', version: '^2.4.31' }
      ],
      fbsOptions:[
        {type:'何恒健',sales:'234'},
        {type:'马云',sales:'235'},
        {type:'丁磊',sales:'267'},
        {type:'李兆基',sales:'295'},
        {type:'黄峥',sales:'302'},
        {type:'曾毓群',sales:'334'},
        {type:'马化腾',sales:'353'},
        {type:'李嘉诚',sales:'380'},
        {type:'张一鸣',sales:'450'},
        {type:'钟睒睒',sales:'680'},
      ]
    }
  },
  computed:{
    reportMinTime(){
      const nowTime = moment().format("YYYY-MM-DD HH:mm:ss")
      return moment(nowTime).diff(moment(this.weather.reportTime),'minutes',false)
    }
  },

  created(){
    // this.getImage()
    this.getWeather()
  },
  mounted(){
    this.initfbsPlot()
  },
  methods:{
    async getImage(){
        await GetGirlImageApi().then(res=>{
          console.log(res[0]);
          console.log(res[0].imageUrl);
          this.avatarUrl = res[0].imageUrl
        }).catch (err=>{
        console.error('Error fetching girl image:', err);
      })
    },
    async getWeather(){
      await GetWeatherApi('长沙市').then(res=>{
        console.log(res);
        this.weather = res
      }).catch (err=>{
        console.error('Error fetching weather:',err);
      })
    },
    // async getImage() {
    //   try {
    //     const res = await GetGirlImageApi();
    //     console.log(res);
    //     this.avatarUrl = res.imageUrl
    //   } catch (err) {
    //     console.error('Error fetching girl image:', err);
    //   }
    // }
    initfbsPlot(){
      const columnPlot = new Column('fbs', {
        data:this.fbsOptions,
        xField: 'type',
        yField: 'sales',
        label: {
          // 可手动配置 label 数据标签位置
          position: 'middle', // 'top', 'bottom', 'middle',
          // 配置样式
          style: {
            fill: '#fff',
            opacity: 0.6,
          },
        },
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: true,
          },
        },
        yAxis: {
          label:['0','100','200','300','400','500','600','700','800']
        },
        meta: {
          type: {
            alias: '排行',
          },
          sales: {
            alias: '资产',
          },
        },
        tooltip: {
          showMarkers: false,

        }
        // coordinate: [{ type: 'reflectY' }],
        // autoFit:true,
        // isStack:true,
        // isPercent:true
      })
      columnPlot.render()
      console.log(columnPlot);
    }
  },
}

</script>

<!-- .page-header {
  position: relative;
}
.page-body {
  position: absolute;

} -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.card-head-up-left {
  display: flex;
  align-items: center;
}
.card-head-up-middle {
  text-align: center;
  margin-left: 40px;
  margin-right: 40px;
}
.card-head-up-right {
  text-align: right;
}
span {
  font-size: 13px;
  font-weight: 300;
}
.time-box{
  height: 160.59px;
}
.weather-box-left {
  display: flex;
  align-items:start;
  img {
    margin-bottom: 20px;
  }
}
.title {
  font-size: 18px;
  font-weight: 300;
}
.temperature {
  font-size: 48px;
}
.weather {
  margin-right: 20px;
  font-size: 20px;
}
.climate-box {
  .more {
    float: left;
    padding: 0;
    text-decoration:none;
    color: rgb(22,200,200);
  }
  .more:hover{
    color: orange;
  }
}
.container {
  display: flex;
  margin-top: 20px;
  justify-content: center;
}
.card2-1,.card2-2,.card2-3 {
  margin: 10px;
  width: 280px;
  height: 180px;
}
.card3-1 {
  margin: 10px;
  height: 350px;
  width: 400px;
}
.card3-2 {
  margin: 10px;
  height: 350px;
  width: 450px;
}
.card4-1 {
  margin: 10px;
  height: 440px;
  width: 400px;
}
.card4-2 {
  margin: 10px;
  height: 500px;
  width: 450px;
}
</style>
