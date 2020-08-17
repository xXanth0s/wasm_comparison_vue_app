<template>
    <div>
        <h4>Hier wird gemessen, wie lange der Quicksort Algorithmus zum sortieren von 100.000 Einträgen benötigt</h4>

        <button @click="startQuickSort" :disabled="isRunning" class="btn btn-primary">Start</button>
        <p v-if="isRunning">Quicksort wird momentan ausgeführt. Bitte warten</p>

        <div v-if="showResult" class="card">
            <div class="card-body">
                <p>Quicksort wurde beendet</p>
                <p>Benötigte Zeit {{timeNeeded}}</p>
            </div>

            <div class="card-body">
                <p>Vorschau der ersten 1000 Elemente:</p>
                <p v-for="entry in resultPreview" :key="entry.ID">
                    <code>{{entry.ID}}</code>
                </p>
            </div>
        </div>
    </div>
</template>
<script>

  import { startQuickSort } from '../services/quicksort.service';
  import { sortableArray } from '../data/sortable-array.data';

  export default {
    name: 'Quicksort',
    data: function () {
      return {
        isFinished: false,
        isRunning: false,
        time: 0,
        startTimeStamp: null,
        endTimeStamp: null,
        result: []
      }
    },
    methods: {
      startQuickSort: function () {
        const data = [...sortableArray];
        this.isRunning = true;
        this.startTimeStamp = Date.now();
        this.result = startQuickSort(data, 'ID');
        this.endTimeStamp = Date.now();
        this.isRunning = false;
        this.isFinished = true;
      }
    },
    mounted() {
      this.startQuickSort()
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
