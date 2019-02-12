<template>
  <div>
    <el-table :data="paginationData" style="width: 100%">
      <el-table-column prop="name.first" label="first name"></el-table-column>
      <el-table-column prop="name.last" label="last name" ></el-table-column>
      <el-table-column prop="gender" label="gender"></el-table-column>
      <el-table-column prop="dob.date" label="date born"></el-table-column>
      <el-table-column prop="dob.age" label="age" ></el-table-column>
      <el-table-column prop="phone" label="phone" ></el-table-column>
      <el-table-column prop="email" label="email" ></el-table-column>    
    </el-table>
    <el-pagination background layout="prev, pager, next" style="float:left" :page-size="pageSize" :total="totalSize" @current-change="pageChange"></el-pagination>
  </div>
</template>
<script>
import ElTable from 'element-table'
import axios from 'axios' 

export default { 
  data() {
    return {
      tableData: [],
      loading: true,
      pageNumber: 0,
      totalSize:'', //show button pagination under table
      pageData: [],
      paginationData:[]
    };
  },

  props: {
    pageSize: {
      type: Number,
      default: 15,
      note: "Row size of the Table"
    },
  },

  methods: {
    getPeopleToTable() {
      var that = this;
      var url = "https://randomuser.me/api/?results=";
      axios.get(url + 80).then(function(response) {
        that.tableData = response.data.results;
        that.totalSize = that.tableData.length;
        that.pageData = that.getPage(that.pageNumber);
      })
    },

    pageChange: function(val) {
      this.pageNumber = val - 1;
      if (this.tableData) {
        this.pageData = this.getPage(this.pageNumber);
      }
      if (!this.tableData) {
       // this.$emit("pageChange", val);
      }
    },

    getPage(page) {
      let startPoint = page * this.pageSize;
      let endPoint = startPoint + this.pageSize;
      this.paginationData = this.tableData.slice(startPoint, endPoint);
        return this.paginationData
      },
    },
    
    created(){
      this.getPeopleToTable();
    },
}
</script>

<style>
</style>

