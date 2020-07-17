<template>
  <div>
    <Head />
    <Organiza />
    <Acerca />
  </div>
</template>

<script>
import Head from "@/components/home/Head.vue"
import Organiza from "@/components/home/Organiza.vue"
import Acerca from "@/components/home/Acerca.vue"

export default {
  name: "Home",
  components: {
    Head,
    Organiza,
    Acerca
  }
};
</script>

<style lang="scss" scoped>
.hero{
  background-color: #eae7e7;
}
.the-linea{
  z-index: 1;
  position: absolute;
  height:100%;
  right:0;
}
.hero-body{
  z-index:10;
}
</style>