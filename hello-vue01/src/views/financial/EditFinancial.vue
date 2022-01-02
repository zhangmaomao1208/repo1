<template>

    <el-table
      :data="tableData"
      style="width: 100%"
      max-height="780">
      <el-table-column
        
        prop="date"
        label="日期"
        width="150">
      </el-table-column>
      <el-table-column
        prop="id"
        label="项目id"
        width="120">
      </el-table-column>
      <el-table-column
        prop="batch"
        label="项目批次号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="项目名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="principal"
        label="负责人"
        width="120">
      </el-table-column>
      
      <el-table-column
        prop="money"
        label="报销金额"
        width="120">
      </el-table-column>
      
      <el-table-column
        prop="endtime"
        label="报销时间"
        width="150">
        </el-table-column>
        <el-table-column
        prop="checkman"
        label="项目核对人"
        width="120">
      </el-table-column>
        
      </el-table>

  </template>
<script>
  export default{
    name :"UserEditFinancial",
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          id: 1,
          batch: '2021001',
          name: '仙剑3',
          principal: '李逍遥',
          money: '50000',
          endtime: '2017-01-02',
          checkman: '胡歌',
        }, {
          date: '2017-05-02',
          id: 2,
          batch: '2021002',
          name: '风筝',
          principal: '郑耀先',
          money: '60000',
          endtime: '2017-12-12',
          checkman: '柳云龙' 
        }, {
          date: '2018-05-04',
          id: 3,
          batch: '2021003',
          name: '双世宠妃',
          principal: '曲小檀',
          telephone: '1009640644',
          money: '55555',
          endtime: '2018-06-06',
          checkman: '梁洁'
        }, {
          date: '2019-05-01',
          id: 4,
          batch: '2021004',
          name: '潜伏',
          principal: '孙红雷',
          money: '46000',
          endtime: '时间未定',
          checkman: '孙红雷'
        }, {
          date: '2019-12-08',
          id: 5,
          batch: '2021005',
          name: '讲故事变成我们',
          principal: '林俊杰',
          money: '24560',
          endtime: '2019-12-30',
          checkman: '林俊杰'
        }, {
          date: '2021-05-06',
          id: 6,
          batch: '2021006',
          name: '司藤',
          principal: '秦放',
          money: '70000',
          endtime: '2021-06-06',
          checkman: '景甜'
        }, {
          date: '2021-12-07',
          id: 7,
          batch: '2021007',
          name: '庆余年2',
          principal: '范闲',
          money: '未知',
          endtime: '未开始',
          checkman: '张若昀'
        }]
      }
    }
  }
</script>
<style scoped>
</style>