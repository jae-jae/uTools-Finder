<template>
  <List :list="list"></List>
</template>

<script>
import List from "../components/List";
export default {
  name: "FileList",
  components: {
    List
  },
  data() {
    return {
      list: [
        {
          img: "https://s2.ax1x.com/2019/04/15/Aj2Ezd.png",
          name: "index.js",
          path: "/Users/x/Downloads/uTools"
        },
        {
          img: "https://s2.ax1x.com/2019/04/15/Aj2Ezd.png",
          name: "app.php",
          path: "/Users/x/Downloads/xxxx11"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>