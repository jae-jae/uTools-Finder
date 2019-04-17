<template>
  <div id="app">
    <FileList></FileList>
  </div>
</template>

<script>
import FileList from './containers/FileList'

export default {
  name: 'app',
  components: {
    FileList
  }
}
</script>

<style>
.body {
  overflow-x: hidden;
}
</style>
