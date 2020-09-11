<template>
    <div class="container">
        <div class="row">
            <video-tile v-for="videoInfo in videos" :video-info="videoInfo" :key="videoInfo.id"
                        class="col-12 col-md-4"></video-tile>

        </div>

    </div>
</template>

<script>

  import axios from 'axios';
  import VideoTile from '../components/video/VideoTile';

  export default {
    name: 'VideoList',
    components: { VideoTile },
    data: function () {
      return {
        videos: []
      }
    },
    mounted() {
      console.log(process.env)
      axios.get(`${process.env.VUE_APP_API_URL}/video`)
          .then(response => {
            this.videos = response.data
            console.log(this.videos)
          });
    }
  }
</script>
