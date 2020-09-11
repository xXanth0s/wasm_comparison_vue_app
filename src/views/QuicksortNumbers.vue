<template>
    <quick-sort :isNumber="true" :count="count" :auto-start="autoStart" :run-count="runCount"/>
</template>
<script>
  import QuickSort from '../components/QuickSort/QuickSort';

  export default {
    name: 'Quicksortumber',
    components: {QuickSort},
    data: function () {
      return {
        count: 0,
        autoStart: false,
        runCount: 0
      }
    },
    async beforeMount() {
      this.count = +this.$route.query.count || '';
      this.autoStart = this.$route.query.autoStart === 'true' || false;
      this.runCount = +this.$route.query.runCount || 0;
    },
  }
</script>
