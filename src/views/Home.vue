<template>
    <div>
      <div class="order-head">
        <div>
          <el-input v-model="searchWord" placeholder="搜索订单关键词">
            <template #append>
              <el-button icon="Search" @click="handleSearch" />
            </template>
          </el-input>
        </div>
        <el-radio-group v-model="orderType" @change="handleRadio">
          <el-radio-button label="所有订单" />
          <el-radio-button label="未完成订单" />
          <el-radio-button label="已完成订单" />
        </el-radio-group>
      </div>
      <el-divider />
      <el-table :data="tablePageData" border stripe style="width: 100%">
        <el-table-column prop="username" label="用户" />
        <el-table-column prop="date" label="日期" width="180" />
        <el-table-column prop="shopname" label="店铺" width="180" />
        <el-table-column prop="foodname" label="菜品" />
        <el-table-column prop="useraddress" label="收货地址" />
        <el-table-column prop="shopinfo" label="备注" />
        <el-table-column prop="userstate" label="当前状态" />
      </el-table>
      <el-pagination small background layout="prev, pager, next" :total="tableData.length" :page-size="pageSize"
        @current-change="handlePageChange" class="page-pos" />
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const orderTypes = [
    { label: '所有订单', state: '所有' },
    { label: '未完成订单', state: '未完成' },
    { label: '已完成订单', state: '已完成' },
  ];
  const searchWord = ref('')
  const orderType = ref('所有订单')
  const orderState = computed(() => orderTypes.find((v) => v.label === orderType.value).state)
  const pageSize = ref(2)   // 两个一页
  
  // tableDataOrigin -> 原始的数据
  const tableDataOrigin = [
    {
      username: '13011112222',
      date: '2016-05-03',
      shopname: '肯德基1',
      foodname: '汉堡',
      useraddress: '大连设计城9-1',
      shopinfo: '多来番茄酱',
      userstate: '未完成'
    }
  ]
  
  // tableData -> 分类的数据
  const tableData = ref(tableDataOrigin)
  
  // tablePageData -> 分页的数据
  const tablePageData = ref(tableData.value.filter((v, index) => 0 <= index && pageSize.value > index))
  const handleRadio = () => {
    tableData.value = tableDataOrigin.filter((v) => v.userstate === orderState.value || '所有' === orderState.value)
    handlePageChange(1)
  }
  const handleSearch = () => {
  }
  const handlePageChange = (num) => {
    //console.log(num) // 1 2 3 ... 
    tablePageData.value = tableData.value.filter((v, index) => (num - 1) * pageSize.value <= index && num * pageSize.value > index)
  }
  </script>
  
  <style lang="scss" scoped>
  .order-head {
    display: flex;
    justify-content: space-between;
    margin: 50px;
  }
  
  .page-pos {
    float: right;
    margin: 20px;
  }
  </style>