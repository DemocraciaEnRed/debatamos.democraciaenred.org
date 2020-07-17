<template>
  <!-- <div class="hero is-fullheight-with-navbar"> -->
  <div class="hero is-small-with-navbar">
    <img src="@/assets/line-white.svg" class="the-linea" alt="">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-8">
            <img src="@/assets/logo-wide.svg" class="image is-hidden-touch" alt />
            <img src="@/assets/logo-mobile.svg" class="image is-hidden-desktop" alt />
          </div>
        </div>
        <br>
        <div class="columns is-centered">
          <div class="column is-11">
            <div class="columns is-centered is-vcentered">
              <div class="column is-3">
                <img src="@/assets/info-column.svg" class="image is-centered lainfo" alt />
              </div>
              <div class="column is-3 is-offset-1">
                <a href="https://google.com">

                <img
                  src="@/assets/participa-button.svg"
                  class="image elboton is-centered animate__animated animate__pulse animate__infinite"
                  alt
                />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Head",
  components: {}
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
.elboton{
  width:100%;
  max-width: 200px;
}
.lainfo{
  width:100%;
  max-width: 250px;

}
</style>