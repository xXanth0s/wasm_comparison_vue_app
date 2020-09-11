<template>
    <div class="container">
        <div v-if="videoInfo">
            <div class="row mb-3">
                <div class="col">
                    <h4>{{videoInfo.title}}</h4>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-7">
                    <video id="videoPlayer" controls>
                        <source :src="videoUrl" type="video/mp4">
                    </video>
                </div>
                <div class="col-12 col-md-5">
                    <p>{{videoInfo.description}}</p>
                </div>
            </div>
        </div>
        <div v-if="!videoInfo">
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

  export default {
    name: 'VideoDetail',
    data: function () {
      return {
        id: null,
        videoInfo: null
      }
    },
    computed: {
      videoUrl: function() {
        return `${process.env.VUE_APP_API_URL}/video/data/${this.id}`
      }
    },
    mounted() {
      this.id = this.$route.params.id;
      axios.get(`${process.env.VUE_APP_API_URL}/video/${this.id}`)
          .then(response => {
            this.videoInfo = response.data
          });
    }
  }
</script>

<style scoped>
    .spinner-container {
        display: flex;
        width: 100%;
        height: 300px;
        justify-content: center;
        align-items: center;
    }

    video {
        width: 100%;
    }
</style>
