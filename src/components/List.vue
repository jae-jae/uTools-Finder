<template>
  <div class="list" v-on:keydown.down="keyDown" v-on:keydown.up="keyUp" tabindex="0">
    <ListItem v-for="(item,index) in list" :key="item.path" :item="item" :class="{ selected: selectedIndex === index }" />
  </div>
</template>

<script>
import ListItem from "./ListItem";
export default {
  name: "List",
  components: {
    ListItem
  },
  props: ['list'],
  data() {
    return {
      selectedIndex: 0
    };
  },
  mounted () {

  },
  methods: {
      keyDown () {
          if (this.selectedIndex + 1 < this.list.length) {
              this.selectedIndex ++
          }
      },
      keyUp () {
          if (this.selectedIndex - 1 >= 0) {
              this.selectedIndex --
          }
      }
  }
};
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