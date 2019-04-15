<template>
  <div class="list-item">
    <img :src="item.img">
    <div class="name">{{ item.name }}</div>
    <div class="path">{{ item.path }}</div>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: ["item"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.list-item {
  background: #f5f5f533;
  cursor: pointer;
  height: 50px;
  img {
    float: left;
    margin: 10px;
    height: 30px;
  }
  .name {
    padding-top: 5px;
  }
  .path {
    color: #888888;
    font-size: small;
  }
}
</style>