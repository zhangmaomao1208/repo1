<template>
  <div class="expense">
    <el-table
      :data="tableData"
      style="width: 100%"
      max-height="780">
      <el-table-column
        fixed
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
        prop="telephone"
        label="联系电话"
        width="150">
      </el-table-column>
      <el-table-column
        prop="tag"
        label="标签"
        width="150"
        :filters="[{ text: '未完成', value: '未完成' }, { text: '完成', value: '完成' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === '完成' ? 'primary' : 'success'"
            disable-transitions>{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        align="right">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
           
        </template>
      </el-table-column>
    </el-table>

    <el-button @click="handleCreate">添加</el-button>
    <el-button @click="handleFind">查看详情</el-button>


    <el-dialog :visible.sync="showModal">
      <el-date-picker value-format="yyyy-MM-dd" type="date" placeholder="选择日期" v-model="editRow.date" style="width: 100%;"></el-date-picker>
      <el-input v-model="editRow.name" placeholder="请输入姓名"/>
      <el-input v-model="editRow.principal" placeholder="请输入负责人"/>
      <el-input v-model="editRow.telephone" placeholder="请输入手机号"/>
      <el-select v-model="editRow.tag" placeholder="请选择是否完成">
        <el-option label="完成" value="完成"></el-option>
        <el-option label="未完成" value="未完成"></el-option>
      </el-select>

      <span slot="footer" class="dialog-footer">
        <el-button @click="showModal = false">取 消</el-button>
        <el-button type="primary" @click="handleConfirm">确 定</el-button>
      </span>
    </el-dialog>
    
      
  </div>
  
</template>
<script>
  export default {
    name:"UserExpense",
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          id: 1,
          name: '仙剑3',
          principal: '李逍遥',
          telephone: '474170681',
          tag: '完成',
        }, {
          date: '2017-05-02',
          id: 2,
          name: '风筝',
          principal: '郑耀先',
          telephone: '414776081',
          tag: '完成',
        }, {
          date: '2018-05-04',
          id: 3,
          name: '双世宠妃',
          principal: '曲小檀',
          telephone: '1009640644',
          tag: '完成',
        }, {
          date: '2019-05-01',
          id: 4,
          name: '潜伏',
          principal: '孙红雷',
          telephone: '265427122',
          tag: '未完成',
        }, {
          date: '2019-12-08',
          id: 5,
          name: '讲故事变成我们',
          principal: '林俊杰',
          telephone: '14258369',
          tag: '完成',
        }, {
          date: '2021-05-06',
          id: 6,
          name: '司藤',
          principal: '秦放',
          telephone: '789456123',
          tag: '完成',
        }, {
          date: '2021-12-07',
          id: 7,
          name: '庆余年2',
          principal: '范闲',
          telephone: '321654987',
          tag: '未完成',
        }],
        search: '',
        showModal: false,
        editIndex: 0,
        editRow: {}
      }
    },
    methods: {
      resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      handleEdit(index, row) {
        // this.$router.push("/financial/editfinancial");
        this.editIndex = index
        // 深拷贝，不然会影响到原数组，这里应该有更好的处理方式，时间问题，先这样，后面你自己优化
        const newTableData = JSON.parse(JSON.stringify(this.tableData))
        this.editRow = newTableData[index]
        this.showModal = true
      },
      handleDelete(index, row) {
        this.tableData.splice(index,1)
      },
      handleConfirm() {
        this.tableData[this.editIndex] = this.editRow
        this.showModal = false
      },
      handleCreate() {
        this.showModal = true
        this.editIndex = this.tableData.length
        this.editRow = {id: this.tableData.length + 1}
      },
      handleFind(){
        this.$router.push("/financial/editfinancial");
      }
    }
   
  }
</script>
<style scoped>
</style>