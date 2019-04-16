<template>
  <div>
    <Loading v-if="loading"></Loading>
    <List v-else :list="list"></List>
  </div>
</template>

<script>
import List from '../components/List'
import Loading from '../components/Loading'
export default {
  name: 'FileList',
  components: {
    List,
    Loading
  },
  data () {
    return {
      list: [
        {
          img: 'https://s2.ax1x.com/2019/04/15/Aj2Ezd.png',
          name: 'index.js',
          path: '/Users/x/Downloads/uTools'
        },
        {
          img: 'https://s2.ax1x.com/2019/04/15/Aj2Ezd.png',
          name: 'app.php',
          path: '/Users/x/Downloads/xxxx11'
        }
      ],
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
      console.log(text)
      this.fileStream && this.fileStream.destroy()
      if (text.trim()) {
        this.loading = true
        this.list = []
        this.fileStream = Finder.filter(text)
        this.fileStream
          .on('data', data => {
            console.log('on data')
            this.loading = false
            this.list.push(Finder.item(data))
            this.fileStream.destroy()
          })
          .on('end', () => {
            console.log('find end!')
            this.loading = false
          })
          .on('error', (error) => {
            console.log('find error:', error)
            this.loading = false
          })
      } else {
        console.log('hide')
        this.loading = false
        this.hidePanel()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>