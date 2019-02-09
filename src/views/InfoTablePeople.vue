<template>
  <div>
    <table-info></table-info>
  </div>
</template>

<script>
import TableInfoPeople from '../components/TableInfoPeople.vue'
import ElTable from 'element-table'

export default {
  name: 'TableInfoPeople',
   components: {
      'table-info':TableInfoPeople
    },
}
</script>
