<template>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col"> #</th>
                <th class="clickable" scope="col" @click="orderBy('Forename')"> Forename</th>
                <th class="clickable" scope="col" @click="orderBy('Surname')"> Surname</th>
                <th class="clickable" scope="col" @click="orderBy('Mail')"> Mail</th>
                <th class="clickable" scope="col" @click="orderBy('Company')"> Company</th>
                <th class="clickable" scope="col" @click="orderBy('DateRegistered')"> Date Registered</th>
                <th class="clickable" scope="col" @click="orderBy('Phone')"> Phone</th>
                <th class="clickable" scope="col" @click="orderBy('PersonalNumber')"> Personal Number</th>
                <th class="clickable" scope="col" @click="orderBy('Street')"> Street</th>
                <th class="clickable" scope="col" @click="orderBy('City')"> City</th>
                <th class="clickable" scope="col" @click="orderBy('PostalCode')"> Postal Code</th>
                <th class="clickable" scope="col" @click="orderBy('Country')"> Country</th>
                <th class="clickable" scope="col" @click="orderBy('ID')"> ID</th>
                <th class="clickable" scope="col" @click="orderBy('Active')"> Is Active</th>
            </tr>
            </thead>
            <tbody>
            <!--<table-row v-for="(item, index) in personData" :person="item" :index="++index" :key="item._id"></table-row>-->
            <tr v-for="(person, index) in personData" :index="++index" :key="person._id">
                <th scope="row">{{index}}</th>
                <td>{{person.Forename}}</td>
                <td>{{person.Surname}}</td>
                <td>{{person.Mail}}</td>
                <td>{{person.Company}}</td>
                <td>{{person.DateRegistered}}</td>
                <td>{{person.Phone}}</td>
                <td>{{person.PersonalNumber}}</td>
                <td>{{person.Street}}</td>
                <td>{{person.City}}</td>
                <td>{{person.PostalCode}}</td>
                <td>{{person.Country}}</td>
                <td>{{person.ID}}</td>
                <td>{{person.Active}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import TableRow from './TableRow.vue';
    import {startQuickSort} from "../../services/quicksort.service";

    export default {
        name: 'TableComponent',
        components: {TableRow},
        props: {
            personData: {
                type: Array,
                required: true
            }
        },
        methods: {
            orderBy(columnName) {
                this.personData = startQuickSort(this.personData, columnName);
                this.$forceUpdate();
                this.$nextTick().then(() => {
                    this.$nextTick().then(() => {

                        console.log('next tick 2')
                    })
                    console.log('next tick')
                })
                // $(() => {
                //     console.log('jQuery loaded')
                // })
            }

        }
    }
</script>

<style scoped>
    .clickable {
        cursor: pointer;
    }
</style>
