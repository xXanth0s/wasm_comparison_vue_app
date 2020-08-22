<template>
    <div class="home">
        <table-component :personData="personData">
        </table-component>

    </div>
</template>

<script>
    import axios from 'axios';
    import TableComponent from '../components/table/TableComponent';

    export default {
        name: 'TableView',
        components: {
            TableComponent
        },
        data: () => ({
            personData: []
        }),
        mounted() {
            axios.get(`${process.env.VUE_APP_API_URL}/person`)
                .then(response => {
                    this.personData = response.data;
                });
        }

    }
</script>
