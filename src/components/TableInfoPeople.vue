<template>
<div>
<el-table :data="tableData" :default-sort="{prop: 'cell', order: 'descending'}" style="width: 100%">
  <el-table-column prop="name.first" label="first name"></el-table-column>
  <el-table-column prop="name.last" label="last name" ></el-table-column>
  <el-table-column prop="gender" label="gender"></el-table-column>
  <el-table-column prop="dob.date" label="date born"></el-table-column>
  <el-table-column prop="dob.age" label="age" ></el-table-column>
  <el-table-column prop="phone" label="phone" ></el-table-column>
  <el-table-column prop="email" label="email" ></el-table-column>    
</el-table>
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
      pageNumber: 0
    };
  },
  methods: {
    getPeopleToTable() {
      var that = this;
      var url = "https://randomuser.me/api/?results=";
      axios.get(url + 80).then(function(response) {
        that.tableData = response.data.results;
      })
    }       
  },
  created(){
    this.getPeopleToTable();
  }
}
</script>

<style>
</style>

