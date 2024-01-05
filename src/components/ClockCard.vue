<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="timeBox">
    <div class="clockBox">
      <canvas ref="canvas" height="100" width="100"></canvas>
    </div>
    <div class="timeItem">
      <div class="time">{{ time.time }}</div>
      <div class="second">{{ time.second }}</div>
    </div>
    <div class="dateItem">
      <div class="week">{{ time.week }}</div>
      <div class="date">{{ time.date }}</div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

export default {
  data(){
    return{
      ctx:{},
      timer:null,
      time:{
        time:'',
        second:'',
        week:'',
        date:''
      },
      canvas:null,
      radius:50,
      cWidth:100,
    }
  },
  mounted(){
    this.canvas = this.$refs.canvas;
  this.ctx = this.canvas.getContext('2d');
    this.timer = setInterval(() => {
      this.getDate();
    }, 1000);
    console.log(this.ctx);
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  },
  methods:{
    // 绘制表盘
    drawBackground() {
      const { ctx, radius, cWidth } = this;
      ctx.save();
      // ctx.translate(radius, radius); //中心原点位置
      const width = cWidth;
      const height = cWidth;
      const R = width / 2; //圆半径
      const r = (R / 3) * 2;
      //设置坐标轴原点
      ctx.translate(width / 2, height / 2);
      // 圆心
      ctx.beginPath();
      // ctx.arc(0, 0, 10, 0, 2 * Math.PI, true);
      ctx.fill();
      ctx.closePath();
      // 表盘刻度（大格）
      ctx.beginPath();
      ctx.lineWidth = 2;
      for (var i = 0; i < 12; i++) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255,255,255,1)';
        ctx.rotate(Math.PI / 6);
        ctx.moveTo(R, 0);
        ctx.lineTo(r, 0);
        ctx.stroke();
      }
      ctx.closePath();
      // 表盘刻度（小格）
      ctx.beginPath();
      ctx.lineWidth = 1;
      for (var i = 0; i < 60; i++) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255,255,255,0.7)';
        ctx.rotate(Math.PI / 30);
        ctx.moveTo(R, 0);
        ctx.lineTo(R - 10, 0);
        ctx.stroke();
      }
      ctx.closePath();
  },
    //描绘时针
    drawHour(hour, minute) {
      const {ctx , radius} = this
      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = '#FFFFFF';
      let rad = ((2 * Math.PI) / 12) * hour;
      let mrad = ((2 * Math.PI) / 12 / 60) * minute;
      ctx.rotate(rad + mrad);
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.moveTo(0, 10);
      ctx.lineTo(0, -radius + 30);
      ctx.stroke();
      ctx.restore();
    },
    //描绘分针
    drawMinute(minute) {
      const {ctx , radius} = this
      ctx.save();
      ctx.beginPath();
      let rad = ((2 * Math.PI) / 60) * minute;
      ctx.rotate(rad);
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.moveTo(0, 10);
      ctx.lineTo(0, -radius + 20);
      ctx.stroke();
      ctx.restore();
    },
    //描绘秒针
    drawSecond(second) {
      const {ctx , radius} = this
      ctx.save();
      ctx.beginPath();
      ctx.fillStyle = '#C14543';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      let rad = ((2 * Math.PI) / 60) * second;
      ctx.rotate(rad);
      ctx.moveTo(-2, 20);
      ctx.lineTo(2, 20);
      ctx.lineTo(1, -radius + 10);
      ctx.lineTo(-1, -radius + 10);
      ctx.fill();
      ctx.restore();
    },
    //中间固定园点
    drawDot() {
      const {ctx} = this
      ctx.beginPath();
      ctx.fillStyle = '#C14543';
      ctx.arc(0, 0, 4, 0, 2 * Math.PI, false);
      ctx.fill();
    },
    getDate() {
      const time = this.parseTime(new Date())
      // console.log(time);
      this.time = time
    },
    // 绘制
    draw(now) {
      const {ctx , cWidth , radius} = this
      ctx.clearRect(0, 0, cWidth, cWidth);
      let hour = now.getHours();
      let minute = now.getMinutes();
      let second = now.getSeconds();
      this.drawBackground();
      this.drawHour(hour, minute);
      this.drawMinute(minute);
      this.drawSecond(second);
      this.drawDot();
      ctx.restore();
    },
    parseTime(time) {
      this.draw(time);
      let resObj = {};
      let week = ['日', '一', '二', '三', '四', '五', '六'];
      resObj.date = dayjs(time).format('YYYY年MM月DD日');
      resObj.week = `星期${week[dayjs(time).day()]}`;
      resObj.time = dayjs(time).format('HH:mm');
      resObj.second = dayjs(time).format('ss');
      return resObj;
    },
  }
}
</script>

<style lang="scss" scoped>
.timeBox {
  margin: 0 auto;
  display: flex;
  .clockBox {
    width: 110px;
  }
  .timeItem {
    display: flex;
    color: white;
    width: 100px;
    .time {
      font: 30px/100px 'pf';
      margin-left: 10px;
    }
    .second {
      font: 14px 'pf';
      margin-left:7px;
      margin-top: 45px;
    }
  }
  .dateItem {
    width: 200px;
    color: white;
    padding-left: 40px;
    .week {
      width: 100%;
      height: 30px;
      font: 15px 'pf';
      margin-top: 20px;
    }
    .date {
      font: 12px 'pf';
    }
  }
}
</style>