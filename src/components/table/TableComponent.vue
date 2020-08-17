<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col"> #</th>
                <th scope="col"> Forename</th>
                <th scope="col"> Surname</th>
                <th scope="col"> Company</th>
                <th scope="col"> Date Registered</th>
                <th scope="col"> Phone</th>
                <th scope="col"> Personal Number</th>
                <th scope="col"> Street</th>
                <th scope="col"> City</th>
                <th scope="col"> Postal Code</th>
                <th scope="col"> Country</th>
                <th scope="col"> ID</th>
                <th scope="col"> Is Active</th>
            </tr>
        </thead>
        <tbody>
            <table-row v-for="(item, index) in personData" :person="item" :index="index" :key="item.ID"></table-row>
        </tbody>
    </table>
</template>

<script>
  import TableRow from './TableRow.vue';

  export default {
    name: 'TableComponent',
    components: { TableRow },
    props: {
      personData: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
