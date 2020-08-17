<template>
    <div class="home">
        <table-component :personData="personData">
        </table-component>

    </div>
</template>

<script>

  import TableComponent from '../components/table/TableComponent';
  import { PersonTestData } from '../data/person-test.data';

  export default {
    name: 'TableView',
    components: {
      TableComponent
    },
    data: () => ({
      personData: PersonTestData
    })
  }
</script>
