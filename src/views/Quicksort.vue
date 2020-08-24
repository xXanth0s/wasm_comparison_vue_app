<template>
    <div class="container">
        <h4>Hier wird gemessen, wie lange JavaScript benötigt um eine 1000x1000 Matrix um 90 Grad zu drehen</h4>
        <p>Dies ist ein </p>
        <div v-if="matrix.length">
            <button @click="startMatrixRotation" :disabled="isRunning" class="btn btn-primary">Start</button>
            <p v-if="isRunning">Quicksort wird momentan ausgeführt. Bitte warten</p>

            <div v-if="showResult" class="card">
                <div class="card-body">
                    <p>Quicksort wurde beendet</p>
                    <p>Benötigte Zeit {{timeNeeded}}</p>
                </div>

                <div class="card-body">
                    <p>Vorschau der ersten 1000 Elemente:</p>

                </div>
            </div>
        </div>
        <div v-if="!matrix.length">
            Matrixdaten werden geladen
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    import {rotateMatrix} from "../services/matrix.service";

    export default {
        name: 'Quicksort',
        data: function () {
            return {
                isFinished: false,
                isRunning: false,
                time: 0,
                startTimeStamp: null,
                endTimeStamp: null,
                result: [],
                matrix: []
            }
        },
        methods: {
            startMatrixRotation: function () {
                this.isRunning = true;
                this.startTimeStamp = Date.now();
                this.result = rotateMatrix(this.matrix);
                this.endTimeStamp = Date.now();
                this.isRunning = false;
                this.isFinished = true;
            },
            loadData() {
                axios.get(`${process.env.VUE_APP_API_URL}/matrix`)
                    .then(response => {
                        this.matrix = response.data.data;
                    });
            }
        },
        mounted() {
            this.loadData();
        },
        computed: {
            timeNeeded: function () {
                return this.endTimeStamp - this.startTimeStamp
            },
            resultPreview: function () {
                const previewArray = [...this.result];
                previewArray.length = 1000;
                return previewArray;
            },
            showResult: function () {
                return !this.isRunning && this.isFinished
            }
        }
    }
</script>
