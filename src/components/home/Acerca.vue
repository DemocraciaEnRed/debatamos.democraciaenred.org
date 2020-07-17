<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered is-vcentered">
        <div class="column is-hidden-touch">
        <div class="line"></div>
        </div>
        <div class="column is-8">
          <div class="videoWrapper">
             <iframe width="560" height="315" :src="`https://www.youtube.com/embed/MKIjGgs3Owo`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="column is-hidden-touch">
        <div class="line"></div>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column is-8 has-text-centered">
          <h1 class="title is-4 is-700 is-uppercase">
            ¿Las Redes son un campo de batalla?<br>
            ¿Por qué nos insultamos?<br>
            ¿Que estamos discutiendo? ¿A donde nos lleva?<br>
            ¿Como deconstruimos la polarización pólitica?
          </h1>
        </div>
            </div>
          <div class="columns is-centered">
            <div class="column is-6">
          <div class="content has-text-centered">

          <p class="font-secondary is-size-5 is-size-6-touch is-italic">Vivimos una época donde la dinámica de circulación de mensajes políticos cambió. Hay técnicas que son nuevas. Hay otras que son viejas y se re-inventaron en digital. </p>
          <p class="font-secondary is-size-5 is-size-6-touch is-italic">El odio nos hace mal, pero pareciera que no podemos evitarlo. Tenemos un problema, ¿podemos evitarlo? </p>
          <p class="font-secondary is-size-5 is-size-6-touch is-italic">Queremos analizar “cómo discutimos en las redes” con una mirada humana, tecnológica y política.</p>
          </div>
              
          </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.title{
  line-height: 2.5rem;
}

.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.line{
 width: 2px;
 height: 150px;
 margin: 0 auto;
 background-color: #e97e24;
}
</style>