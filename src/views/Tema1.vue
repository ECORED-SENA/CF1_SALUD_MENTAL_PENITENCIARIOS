<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Salud mental
    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0
        p.mb-4 La salud mental es un componente integral y esencial de la salud y la Organización Mundial de la Salud (OMS) describe la salud mental como:
        .bloque-texto-c.color-secundario.px-4.pt-4
          i.fas.fa-quote-right(style="color: #FFC35E").mb-3
          h5.mb-2(style="color: #133D60") Un estado de bienestar en el cual el individuo se da cuenta de sus propias aptitudes. Puede afrontar las presiones normales de la vida, puede trabajar productiva y fructíferamente y es capaz de hacer una contribución a su comunidad.
          span.d-flex.justify-content-end.me-5.mb-0 (OMS, 2020, p. 6).
      .col-lg-4.mb-4.mb-lg-0
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img1.png').m-auto
      .col-lg-4
        p La Ley 1616 de 2013, en el artículo 3°, define la salud mental como:
        .row
          .col.bg-color1
            .p-4
              p Un estado dinámico que se expresa en la vida cotidiana a través del comportamiento y la interacción de manera tal que permite a los sujetos individuales y colectivos desplegar sus recursos emocionales, cognitivos y mentales para transitar por la vida cotidiana, para trabajar, para establecer relaciones significativas y para contribuir a la comunidad.
    .row.mb-5
      .col-lg-6.mb-4.mb-lg-0
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img2.png').m-auto
      .col-lg-6.mb-4.mb-lg-0
        p La salud mental incluye el bienestar emocional, psicológico y social que afecta la forma en que se piensa y actúa, también ayuda a determinar cómo se maneja el estrés, la relación con los demás y las decisiones que se toman. #[span.txt-deco1 Además, la salud mental es importante en todas las etapas de la vida, desde la niñez y la adolescencia hasta la edad adulta].
        .row
          .col-auto
            p.txt-deco2 Lineamientos
        p Algunos de los lineamientos expedidos por las entidades que integran el Sistema Penitenciario en Colombia son:
    .row.bg-color2.mb-5
      .col-12.px-5
        .row.my-5(data-aos="flip-right")
          .col-lg-4.bg-color3
            .p-4
              .row.my-4
                .col-12
                  figure.my-5
                    img(src='@/assets/curso/tema1/img3.png', style="width: 350px").m-auto
                .col-12(style="height: 120px")
                  p.text-center.txt-deco3 Ministerio de Salud y Protección Social
                .col-12
                  p.mb-0.text-white - Lineamiento nacional de prevención del consumo de sustancias psicoactivas.
                  p.mb-0.text-white - Manual de Gestión Integrada para la Atención Integral y Diferenciada de la Salud Mental de la Población Privada de la Libertad.
                  p.mb-0.text-white - Prevención de la Conducta Suicida en Colombia Estrategia Nacional.
                  p.text-white - ABECÉ sobre la salud mental, sus trastornos y estigma.
          .col-lg-4.bg-color4
            .p-4
              .row.my-4
                .col-12
                  figure.my-5
                    img(src='@/assets/curso/tema1/img4.png', style="width: 350px").m-auto
                .col-12(style="height: 120px")
                  p.text-center.txt-deco3 Instituto Nacional Penitenciario y Carcelario INPEC y la Unidad de Servicios Penitenciarios y Carcelarios USPEC
                .col-12
                  p.mb-0.text-white - Manual técnico administrativo para la implementación del modelo de atención en salud de la población privada de la libertad a cargo del INPEC V01.
                  p.mb-0.text-white - Guía de asistencia psicológica PM-AS-G 13.
                  p.mb-0.text-white - Guía para la atención psicojurídica PM-AS-G09.
                  p.mb-0.text-white - Guía atención en crisis emocional PM-AS-G08.
                  p.text-white - Lineamiento programa preservación de la vida.
          .col-lg-4.bg-color3
            .p-4
              .row.my-4
                .col-12
                  figure.my-5
                    img(src='@/assets/curso/tema1/img5.png', style="width: 350px").m-auto
                .col-12(style="height: 120px")
                  p.text-center.txt-deco3 Ministerio de Justicia y de Derecho
                .col-12
                  p.mb-0.text-white - Ruta futuro: política integral para enfrentar el problema de las drogas 2018 (Prevenir los factores de riesgo frente al consumo de sustancias psicoactivas).
                  p.text-white - Marco técnico de acción: para la reducción del consumo de sustancias psicoactivas en el sistema penitenciario y carcelario.
        .row.mb-5
          .col-auto
            p.txt-deco2 Referentes nacionales e internacionales
        .row.mb-4
          .col-auto
            figure
              img(src='@/assets/curso/intro/img1.svg').m-auto
          .col
            p Existen diferentes referentes nacionales e internacionales que trabajan sobre salud mental y que son un recurso importante para desarrollar y planificar servicios de salud mental dentro del país, a saber:
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 1] Instituciones y aportes en salud mental
        .row.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            .tabla-b.color-acento-contenido
              table
                tr
                  th.text-center(style="background-color: #FCD189") Instituciones
                  th.text-center(style="background-color: #FCD189") Aporte
                tr
                  th Ministerio de Justicia y del Derecho
                  td Creación de normas y lineamientos.
                tr
                  th Naciones Unidas Contra las Drogas y el Delito
                  td Elaboración e implementación ruta futuro.
                tr
                  th Secretarías de salud a nivel nacional
                  td Sistema de Salud Pública (SIVIGILA) observación y análisis de los eventos en salud - (seguimiento a las notificaciones, intentos de suicidio.
                tr
                  th Comité Internacional de la Cruz Roja - CICR
                  td Elaboración de publicidad educativa para el desarrollo de actividades de prevención y promoción para la PPL al interior de los ERON (Establecimiento de Reclusión del Orden Nacional).
                tr
                  th Organización Mundial de Salud
                  td Establece normas para el control de enfermedades.
          .col-lg-5
            figure(data-aos="zoom-in-up")
              img(src='@/assets/curso/tema1/img6.png').m-auto
    #t_1_1
    .titulo-segundo.color-secundario
      h2 1.1 Trastornos prevalentes
    .row.align-items-start.mb-5
      .col-lg-6.mb-4.mb-lg-0
        p Globalmente los trastornos mentales son más comunes en los varones. Sin embargo, al examinar la prevalencia por país se encuentra que la depresión, ansiedad, trastornos alimenticios y el trastorno bipolar son más prevalentes en las mujeres. A continuación se conocerán los trastornos prevalentes en la población privada de la libertad.
        p #[span.txt-deco1 El Examen Médico de Ingreso (EMI)] busca identificar el estado físico, mental y las patologías asociadas para identificar eventos de interés en salud pública. 
        p.mb-0 La #[span.txt-deco1 promoción de la salud y prevención de la enfermedad, la detección precoz, la demanda inducida] a los servicios y determinar las necesidades de atención en salud, contribuyendo a la estrategia de gestión del riesgo en salud, como puerta de entrada al modelo de atención en salud con enfoque de atención primaria, al ingreso de las personas privadas de la libertad a los Establecimientos de Reclusión de Orden Nacional (ERON)  a cargo del Instituto Nacional Penitenciario y Carcelario (INPEC).
      .col-lg-6
        figure(data-aos="zoom-in-up")
          img(src='@/assets/curso/tema1/img7.png').m-auto
    .row.mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img8.png').m-auto
      .col-lg-7
        .row.mb-4
          .col-auto
            figure
              img(src='@/assets/curso/intro/img1.svg', style="width: 120px").m-auto
          .col
            p #[span.txt-deco1 Es preciso citar los resultados del #[i Estudio nacional de consumo de sustancias psicoactivas en población privada de la libertad - PPL] (2016)] en el cual se encontró que se presenta un nivel de consumo de sustancias ilícitas superior a la población general.
        p El consumo de cualquier sustancia ilícita en el último año en población privada de la libertad es superior cerca de nueve veces a la población general.
        figure.my-4
          img(src='@/assets/curso/tema1/img2.svg', style="width: 350px").m-auto
        p En la Encuesta Nacional de Salud Mental (2015) se determinó que, de las sustancias con potencial de abuso y dependencia, se encuentra que el #[span.txt-deco1 6,3% de la población colombiana entre 18 y 44 años] reporta haber consumido cannabinoides, siendo mayor la proporción de hombres que lo ha hecho 10,9% hombres  vs. 2,9% en mujeres.
    p.mb-5 De acuerdo con el seguimiento a los registros individuales de prestación de servicios de salud (en los diagnósticos priorizados por salud pública) se encuentra que para el mes de octubre de 2021:
    .row.bg-color5.mb-5
      .col-12.p-5
        .row.align-items-center.justify-content-center
          .col-lg-4.mb-4.mb-lg-0
            p.mb-0 #[b Las consultas solicitadas (y en seguimiento) por personas privadas de la libertad fueron relacionadas:]
          .col-lg-6
            figure(data-aos="flip-right")
              img(src='@/assets/curso/tema1/img4.svg', style="width: 550px").m-auto
    p.mb-5 Con lo anterior se puede identificar que en la población privada de la libertad en tratamiento médico psiquiátrico, la prevalencia de diagnóstico de patología mental a corte de octubre 2021 se relaciona con los trastornos mentales y del comportamiento, debido al uso de sustancias psicoactivas seguido de los trastornos de ansiedad como se lee en la tabla a continuación:
    .row.bg-color8.mb-5
      .col-12.px-5
        .row.my-5
          .col-lg-5.mb-4.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/img9.png').m-auto
          .col-lg-7
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 2] Diagnósticos más prevalentes atendidos por el servicio de psiquiatría septiembre 2021
            .tabla-b.color-acento-contenido
              table
                caption Nota. Elaboración propia según IPS base de datos salud mental, septiembre 2021
                tr
                  th.text-center(style="background-color: #FCD189") Diagnósticos
                  th.text-center(style="background-color: #FCD189") Número PPL diagnosticada
                tr(style="background-color: #F6F6F6")
                  td Trastornos mentales y del comportamiento debido al uso de sustancias psicoactivas
                  td.text-center 1.898
                tr(style="background-color: #FFFFFF")
                  td Trastornos de ansiedad
                  td.text-center 530
                tr(style="background-color: #F6F6F6")
                  td Esquizofrenia
                  td.text-center 418
                tr(style="background-color: #FFFFFF")
                  td Trastornos bipolares
                  td.text-center 227
                tr(style="background-color: #F6F6F6")
                  td Trastornos depresivos
                  td.text-center 179
        separador
        #t_1_2
        .titulo-segundo.color-secundario
          h2 1.2 Atención a población privada de la libertad
        .row.mb-5
          .col-lg-6.mb-4.mb-lg-0
            p La prestación de los servicios de salud de la población privada de la libertad intramural (PPL), se realiza conforme a lo establecido en la Resolución 3595 de 2016, con cargo a los recursos del Fondo Nacional de Atención en Salud para la Población Privada de la Libertad que son administrados por la Unidad de Servicios Penitenciarios y Carcelarios (USPEC) a través de la contratación de una entidad fiduciaria, en este caso Fiduciaria Central S.A., quien realiza la contratación de dos instituciones prestadoras de los servicios de salud, IPS Clínica Nuestra Señora de la Paz, IPS Clínica Basilia para la atención médica psiquiátrica al interior de los establecimientos de reclusión, las cuales reportan en base de datos mensualmente el número de privados de la libertad diagnosticados con patología mental de la siguiente manera:
          .col-lg-6
            figure(data-aos="zoom-in-up")
              img(src='@/assets/curso/tema1/img10.png').m-auto
        .row.justify-content-center.mb-5
          .col-lg-7
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 3] PPL atendida por el servicio de psiquiatría septiembre 2021
            .tabla-b.color-acento-contenido
              table
                caption Nota. Elaboración propia según la base de datos patología mental - septiembre 2021
                tr
                  th.text-center(style="background-color: #FCD189", rowspan="2") Regionales
                  th.text-center(style="background-color: #FCD189; border-left: 3px solid #d6d9db", colspan="2") Total sexo por regional
                tr
                  th.text-center(style="background-color: #FCD189; border-left: 3px solid #d6d9db; border-top: 3px solid #d6d9db") Masculino
                  th.text-center(style="background-color: #FCD189; border-left: 3px solid #d6d9db; border-top: 3px solid #d6d9db") Femeninos
                tr
                  td Central
                  td(style="border-left: 3px solid #d6d9db").text-center 1.641
                  td(style="border-left: 3px solid #d6d9db").text-center 164
                tr
                  td Occidente
                  td(style="border-left: 3px solid #d6d9db").text-center 851
                  td(style="border-left: 3px solid #d6d9db").text-center 87
                tr
                  td Norte
                  td(style="border-left: 3px solid #d6d9db").text-center 402
                  td(style="border-left: 3px solid #d6d9db").text-center 11
                tr
                  td Oriente
                  td(style="border-left: 3px solid #d6d9db").text-center 322
                  td(style="border-left: 3px solid #d6d9db").text-center 75
                tr
                  td Noroeste
                  td(style="border-left: 3px solid #d6d9db").text-center 547
                  td(style="border-left: 3px solid #d6d9db").text-center 110
                tr
                  td Viejo caldas
                  td(style="border-left: 3px solid #d6d9db").text-center 693
                  td(style="border-left: 3px solid #d6d9db").text-center 124
                tr
                  td EPCS externos
                  td(style="border-left: 3px solid #d6d9db").text-center 0
                  td(style="border-left: 3px solid #d6d9db").text-center 0
                tr
                  td Fuerza aérea
                  td(style="border-left: 3px solid #d6d9db").text-center 0
                  td(style="border-left: 3px solid #d6d9db").text-center 0
                tr
                  td Policía
                  td(style="border-left: 3px solid #d6d9db").text-center 0
                  td(style="border-left: 3px solid #d6d9db").text-center 0
                tr
                  td Ejército
                  td(style="border-left: 3px solid #d6d9db").text-center 26
                  td(style="border-left: 3px solid #d6d9db").text-center 0
                tr
                  th Total sexo
                  th(style="border-left: 3px solid #d6d9db").text-center 4.482
                  th(style="border-left: 3px solid #d6d9db").text-center 571
                tr
                  th Total general 
                  th(style="border-left: 3px solid #d6d9db").text-center 5.053
                  th(style="border-left: 3px solid #d6d9db").text-center
        .row.mb-5
          .col-lg-5.mb-4.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/img11.png').m-auto
          .col-lg-7
            p Respecto a los privados de la libertad diagnosticados con patología mental, la Ley 1709 de 2014, en el artículo 16. Establecimientos de reclusión para inimputables por trastorno mental permanente o transitorio con base patológica y personas con trastorno mental sobreviniente, menciona que:
            .row
              .col-auto
                figure
                  img(src='@/assets/curso/tema1/img6.svg').m-auto
              .col
                p #[span.txt-deco1 Destinados a alojar y rehabilitar a inimputables por trastorno mental, según decisión del Juez de Conocimiento previo dictamen pericial del Instituto Nacional de Medicina Legal y Ciencias Forenses, a aquellas personas a quienes se les sustituye la pena privativa de la libertad por internamiento en este tipo de establecimientos como consecuencia de un trastorno mental sobreviniente (sic).]
        p.mb-5 No obstante, la mencionada Ley precisa que:
        .row.mb-5(data-aos="flip-right")
          .col-lg-4.bg-color6
            .p-4
              .row
                .col-12
                  figure.my-5
                    img(src='@/assets/curso/tema1/img12.png', style="width: 270px").m-auto
                .col-12
                  p.text-center.text-white.mb-5 La construcción corresponde a la Unidad de Servicios Penitenciarios y Carcelarios
          .col-lg-4.bg-color7
            .p-4
              .row
                .col-12
                  figure.my-5
                    img(src='@/assets/curso/tema1/img13.png', style="width: 300px").m-auto
                .col-12
                  p.text-center.text-white.mb-5 La dirección y coordinación al Ministerio de Salud y Protección Social
          .col-lg-4.bg-color6
            .p-4
              .row
                .col-12
                  figure.my-5
                    img(src='@/assets/curso/tema1/img14.png', style="width: 200px").m-auto
                .col-12
                  p.text-center.text-white.mb-5 La custodia y vigilancia externa al Instituto Nacional Penitenciario y Carcelario INPEC
        p.mb-5 A la fecha, lo referido por la Ley se encuentra reglamentado parcialmente; es por ello que todos los actores del sistema de salud penitenciaria en el tema de patología mental deben actuar conforme a lo normado por la #[span.txt-deco4 Ley 65 de 1993, Ley 599 de 2000, Resolución 5521 y el Decreto 2496 de 2012.]
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/tema1/img7.svg', style="width: 80px").m-auto
          .col
            p.mb-0 En consecuencia, los lineamientos generales para la atención integral e integrada en salud y las intervenciones individuales y colectivas, definidas en la normatividad vigente, con miras a la prevención de la enfermedad de la población privada de la libertad a cargo del INPEC, se encuentran definidas en el Manual Técnico Administrativo. 
  
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
