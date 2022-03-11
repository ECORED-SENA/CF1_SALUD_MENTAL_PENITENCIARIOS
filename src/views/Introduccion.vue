<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mb-4
      .col-auto
        figure
          img(src='@/assets/curso/intro/img1.svg').m-auto
      .col
        p Este componente formativo tiene como finalidad incorporar en los aprendices elementos normativos en salud mental, desarrollados por las diferentes entidades del orden nacional e internacional, #[span.txt-deco1 así como la comprensión de lineamientos y guías establecidas por el Instituto Nacional Penitenciario y Carcelario para el tratamiento penitenciario de las personas privadas de la libertad].
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
