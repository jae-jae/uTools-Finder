<template>
  <div>
    <Loading v-if="loading"></Loading>
    <List v-else :list="list"></List>
  </div>
</template>

<script>
import List from '../components/List'
import Loading from '../components/Loading'
import File from '../libs/file'
export default {
  name: 'FileList',
  components: {
    List,
    Loading
  },
  data () {
    return {
      list: [],
      loading: false,
      fileStream: null
    }
  },
  watch: {
    loading (val) {
      if (val) {
        this.showLoadingPanel()
      } else {
        this.list.length ? this.showPanel() : this.hidePanel()
      }
    }
  },
  mounted () {
    utools.onPluginReady(() => {
      utools.setSubInput(({ text }) => {
        this.inputChange(text)
      }, '通过文件名或文件内容搜索文件...')
    })
  },
  methods: {
    hidePanel () {
      utools.setExpendHeight(1)
    },
    showLoadingPanel () {
      utools.setExpendHeight(50)
    },
    showPanel () {
      utools.setExpendHeight(500)
    },
    inputChange (text) {
      this.fileStream && this.fileStream.destroy()
      if (text.trim()) {
        this.loading = true
        this.list = []
        this.fileStream = Finder.filter(text)
        this.fileStream
          .on('data', data => {
            this.loading = false
            this.list.push(File.item(data))
            this.fileStream.destroy()
          })
          .on('end', () => {
            this.loading = false
          })
          .on('error', () => {
            this.loading = false
          })
      } else {
        this.loading = false
        this.hidePanel()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>