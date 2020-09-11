<template>
    <div>
        <h4>Hier wird gemessen, wie lange der Quicksort Algorithmus zum sortieren von {{count}} {{title}} benötigt</h4>
        <div v-if="sortableData.length">
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
                        <code>{{entry}}</code>
                    </p>
                </div>
            </div>
        </div>
        <div v-if="sortableData.length === 0">
            <div class="spinner-container">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import axios from 'axios';
  import { startQuickSort } from '../../services/quicksort.service';

  export default {
    name: 'Quicksort',
    props: {
      isNumber: Boolean,
      count: Number,
      autoStart: Boolean,
      runCount: Number
    },
    data: function () {
      return {
        sortableData: [],
        isFinished: false,
        isRunning: false,
        time: 0,
        startTimeStamp: null,
        endTimeStamp: null,
        result: [],
        elementCountCollection: [
          100000, 50000, 20000, 10000, 5000, 2000, 1000, 500
        ]
      }
    },
    methods: {
      startQuickSort: function () {
        const data = [...this.sortableData];
        this.isRunning = true;
        this.startTimeStamp = Date.now();
        this.result = startQuickSort(data);
        this.endTimeStamp = Date.now();
        this.isRunning = false;
        this.isFinished = true;
        this.uploadResult(this.timeNeeded)
      },
      async uploadResult(timeNeeded) {
        const result = {
          sortType: this.isNumber ? 'number' : 'string',
          framework: 'vue',
          count: this.count,
          time: timeNeeded,
          browser: 'safari_mac'
        }
        await axios.post(`${process.env.VUE_APP_API_URL}/result`, result)

        console.log(this)
        if (this.autoStart) {
          let url;
          if (this.runCount < 100) {
            url = this.getUrl(this.isNumber, this.count, this.runCount + 1);
          }
           else {
            const nexElementCountIndex = this.elementCountCollection.indexOf(this.count) + 1

            if (nexElementCountIndex < this.elementCountCollection.length) {
              url = this.getUrl(this.isNumber, this.elementCountCollection[nexElementCountIndex], 0);
            }
            else if(this.isNumber) {
              url = this.getUrl(false, this.elementCountCollection[0], 0);
            }
          }

          if(url) {
            window.location = url;
            location.reload()
          }
        }
      },
      getUrl(isNumber, count, runCount) {

        const url = isNumber ? 'sortnumbers' : 'sortstring';
        return `#/${url}?count=${count}&autoStart=true&runCount=${runCount}`;
      }

    },
    async mounted() {

      const endpoind = this.isNumber ? 'numbers/' : ''

      const response = await axios.get(`${process.env.VUE_APP_API_URL}/sortable/${endpoind}${this.count}`)
      this.sortableData = response.data;
      if (this.autoStart) {
        this.startQuickSort();
      }
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
      },
      title() {
        return this.isNumber ? 'Zahlen' : 'Strings';
      }
    }
  }
</script>
