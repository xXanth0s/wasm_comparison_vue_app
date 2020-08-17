<template>
    <div>
        <div class="card">
            <div class="image-container">
                <img class="card-img-top" :src="thumbnailUrl">
            </div>
            <div class="mt-2">
                <h5 class="card-title">{{videoInfo.title}}</h5>
                <p class="card-text">{{videoInfo.description}}</p>
                <router-link class="btn btn-primary btn-block" :to="videoUrl">Zum Video</router-link>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'VideoTile',
    props: {
      videoInfo: Object
    },
    computed: {
      thumbnailUrl: function () {
        console.log(this)
        return `${process.env.VUE_APP_API_URL}/video/thumbnail/${this.videoInfo.id}`

      },
      videoUrl: function () {
        return `/videodetail/${this.videoInfo.id}`
      }
    },
  }
</script>

<style scoped>

    .card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }

    .image-container {
        display: flex;
        align-items: center;
        flex: 1;
    }
</style>
