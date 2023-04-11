<template>
  <div>
    <h2>欢迎来到猩猩后台，用户数据统计系统</h2>
    <div class="charts-wrapper">
      <div class="main1" ref="main1"></div>
      <div class="main2" ref="main2"></div>
  </div>
  </div>
</template>

<script>
  import * as echarts from 'echarts'
  export default {
 mounted() {
  var myChart = echarts.init(this.$refs.main1,'dark')
  var option = {
   color: [
    '#9326E7',
    '#ffffff',
  ],
   tooltip: {},
   legend: {
    data: ['销量', '热卖']
   },
   xAxis: {
    data: ['张三', '李四', '王五', '赵六']
   },
   yAxis: {},
   series: [
    {
     name: '客户',
     type: 'bar',
     data: [5, 20, 36, 10,],
     label: {
      show: true
     },
    },
    {
     name: '教练排行',
     type: 'bar',
     data: [25, 0, 56, 10],
     label: {
      show: true
     },
    }
   ]
  }
  myChart.setOption(option)
  var myChart2 = echarts.init(this.$refs.main2,'dark')
  var option2 = {
   color: [
    '#9326E7',
    '#ffffff',
    '#9300C8',
  ],
  legend: {
    data: ['客户', '教练']
   },
   tooltip: {},
   legend: {
    data: ['直接访问', "他人介绍","搜索引擎获取"]
   },
   series: [
    {
     type: "pie",
     data: [
      {
       value: 335,
       name: "直接访问",
      },
      {
       value: 234,
       name: "他人介绍",
      },
      {
       value: 1548,
       name: "搜索引擎获取",
      }
     ]
    }
   ]
  }
  myChart2.setOption(option2)
 }
}

</script>
   
<style lang="scss" scoped>
  .main1 {
 width: 500px;
 height: 500px;
 background: white;
 float: left;
 margin: 10px;
}

.main2 {
 width: 500px;
 height: 500px;
 background: white;
 float: left;
 margin: 10px;
}
</style>