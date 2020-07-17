<template>
   <b-navbar type="is-white" fixed-top>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ name: 'Home' }">
                <img
                    src="@/assets/hashtag.svg"
                    class="le-logo"
                    alt="#VolvamosADebatir"
                >
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item href="https://docs.google.com/forms/d/e/1FAIpQLSe18mgHqJPUof9o4U2z2MOuAaakrmKd7ddhe1-h575etxlyAQ/viewform" target="_blank">
                Participá
            </b-navbar-item>
            <b-navbar-item href="https://facebook.com/democraciaenred" target="_blank">
                <i class="fab fa-facebook fa-lg"></i><span class="is-hidden-desktop">&nbsp;Facebook</span>
            </b-navbar-item>
            <b-navbar-item href="https://www.instagram.com/democraciaenred" target="_blank">
                <i class="fab fa-instagram fa-lg"></i><span class="is-hidden-desktop">&nbsp;Instagram</span>
            </b-navbar-item>
            <b-navbar-item href="https://twitter.com/fundacionDER" target="_blank">
                <i class="fab fa-twitter fa-lg"></i><span class="is-hidden-desktop">&nbsp;Twitter</span>
            </b-navbar-item>
        </template>
    </b-navbar>
</template> 

<style lang="scss" scoped>
.le-logo{
  max-width: 150px;
}
</style>