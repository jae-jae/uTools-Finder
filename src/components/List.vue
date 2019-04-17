<template>
  <div class="list">
    <ListItem
      @mouseover.native="mouseOver(index)"
      @click.native="keyEnter"
      v-for="(item,index) in list"
      :key="item.path"
      :item="item"
      :class="{ selected: selectedIndex === index }"
    />
  </div>
</template>

<script>
import ListItem from './ListItem'
export default {
  name: 'List',
  components: {
    ListItem
  },
  props: ['list'],
  data () {
    return {
      selectedIndex: 0
    }
  },
  mounted () {
    this.bindKeybordEvent()
  },
  watch: {
    list () {
      this.selectedIndex = 0
    }
  },
  methods: {
    bindKeybordEvent () {
      document.addEventListener('keydown', (event) => {
        // console.log(event.which)
        const handlers = {
          '38': this.keyUp,
          '40': this.keyDown,
          '13': this.keyEnter,
          // '37': this.keyLeft,
          '39': this.keyRight
        }
        const handler = handlers[event.which]
        handler && handler()
      })
    },
    getSelectedFilePath () {
      return this.list[this.selectedIndex].path
    },
    keyDown () {
      document.querySelector('.list').focus()
      if (this.selectedIndex + 1 < this.list.length) {
        this.selectedIndex++
      }
    },
    keyUp () {
      if (this.selectedIndex - 1 >= 0) {
        this.selectedIndex--
      }
    },
    keyEnter () {
      const path = this.getSelectedFilePath()
      Tools.openFile(path)
    },
    keyRight () {
      const path = this.getSelectedFilePath()
      this.flash()
      Tools.showFile(path)
    },
    keyLeft () {
      const path = this.getSelectedFilePath()
      Tools.copy(path)
      this.flash()
    },
    mouseOver (index) {
      this.selectedIndex = index
    },
    flash () {
      const index = this.selectedIndex
      this.selectedIndex = -1
      setTimeout(() => {
         this.selectedIndex = index
      }, 100)
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  .selected {
    background: #ebebeb;
  }
}
</style>