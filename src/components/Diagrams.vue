<template>
  <div class="diagrams_block">
    <line-chart :chart-data="dataCollection"></line-chart>
    <el-button type="primary" @click="showAge()" round>Show age people</el-button>
  </div>
</template>

<script>
  import LineChart from './LineChart.js'
  import axios from 'axios' 

  export default {
    components: {
      'line-chart':LineChart
    },

    data () {
      return {
        dataCollection: null,
        tableData: null,
        age: [],
        namePeople: [],
        chart: {
      //  instance: null,
        echarts: null,
        loading: false,
        resizable: true,
        bar: null
        }
      }
    },

    methods: {      
      showAge () {
        this.dataCollection = {
          labels: this.namePeople,
          datasets: [
            {
              label: 'Age people gets from random request',
              backgroundColor: '#3fdfff',
              data: this.age
            }
          ]
        }
      }
    },

      mounted () {
        var that = this;
        var url = "https://randomuser.me/api/?results=";
        axios.get(url + 40).then(function (response) {
        that.tableData = response.data.results;
        that.tableData.forEach(function (agePeople) {
          that.age.push(agePeople.dob.age);
          that.namePeople.push(agePeople.name.first);
        })
      })
    }
  }
</script>

<style>

  .diagrams_block {
    max-width: 800px;
    margin: 150px auto;
  }

</style>
