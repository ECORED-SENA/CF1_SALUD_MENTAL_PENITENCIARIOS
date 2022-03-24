export default {
  global: {
    componenteFormativo: 'Lineamientos y marco normativo',
    descripcionCurso:
      'Reconocer y comprender la salud mental en los entornos penitenciarios, de acuerdo con la legislación vigente, en garantía del derecho a la atención integral en salud mental y calidad de vida para la población privada de la libertad. Así como identificar la ruta integral de atención en salud mental y las guías de manejo en salud, propuestas por el Ministerio de Salud y de la Protección Social.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Salud mental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Trastorno prevalentes',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Atención a población privada de la libertad',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Modelo de atención en salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Rutas de atención',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Manual técnico administrativo',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Salud pública y gestión del riesgo',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Congreso de Colombia. (1993). Ley 65 de 1993. Por la cual se expide el Código Penitenciario y Carcelario. 20 de agosto de 1993. Diario Oficial No. 40.999.',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (2000). Ley 599 de 2000. Por la cual se expide el Código Penal. 24 de julio 24 de 2000. Diario Oficial No. 44.097.',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (2007). Ley 1122 de 2007. Por la cual se hacen algunas modificaciones en el Sistema General de Seguridad Social en Salud y se dictan otras disposiciones. 9 de enero de 2007.',
    },
    {
      referencia:
        'Congreso de Colombia. (2012). Ley 1656 de 2012. Por la cual se dictan normas para garantizar la atención integral a personas que consumen sustancias psicoactivas y se crea el premio nacional "entidad comprometida con la prevención del consumo, abuso y adicción a sustancias" psicoactivas. 31 de julio 31 de 2012.',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (2013). Ley 1616 de 2013. Por medio de la cual se expide la Ley de Salud Mental y se dictan otras disposiciones. 21 de enero de 2013.',
    },
    {
      referencia:
        'Congreso de Colombia. (2014). Ley 1709 de 2014. Por medio de la cual se reforman algunos artículos de la Ley 65 de 1993, de la Ley 599 de 2000, de la Ley 55 de 1985 y se dictan otras disposiciones. 20 de enero de 2014. Diario Oficial No. 49.039.',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (2015). Ley 1751 de 2015. Por medio de la cual se regula el derecho fundamental a la salud y se dictan otras disposiciones. 16 de febrero de 2015.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2013). Resolución 05521 de 2013. Por la cual se define, aclara y actualiza integralmente el Plan Obligatorio de Salud (POS). 27 de diciembre 27 de 2013.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2015). Resolución 05159 de 2015. Por medio de la cual se adopta el Modelo de Atención en Salud para la población privada de la libertad bajo la custodia y vigilancia del Instituto Nacional Penitenciario y Carcelario – Inpec. 30 de noviembre 30 de 2015.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2016). Resolución 00359 de 2016. Por medio de la cual se modifica la Resolución 5159 de 2015 y se dictan otras disposiciones. 10 de agosto de 2016.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2017). Resolución 5269 de 2017. Por la cual se actualiza integralmente el Plan de Beneficios en Salud con cargo a la Unidad de Pago por Capitación (UPC). 22 de diciembre de 2015.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2018). Resolución 3280 de 2018. Por la cual se adoptan los lineamientos técnicos y operativos de la Ruta Integral de Atención para la Promoción y Mantenimiento de la Salud y la Ruta Integral de Atención en Salud para la Población Materno Perinatal y se establecen las directrices para su operación. 02 de agosto de 2018.',
      link: '',
    },
    {
      referencia:
        'Ministerios de Justicia y del Derecho, de Salud y de Hacienda. (2015). Decreto 2245 de 2015. Por el cual se adiciona un capítulo al Decreto 1069 de 2015, Único Reglamentario del Sector Justicia y del Derecho, en lo relacionado con la prestación de los servicios de salud a las personas privadas de la libertad bajo la custodia y vigilancia del Instituto Nacional Penitenciario y Carcelario -INPEC. 24 de noviembre de 2015.',
      link: '',
    },
    {
      referencia:
        'Ministerios de Justicia y del Derecho, de Salud y de Hacienda. (2012). Decreto 2496 de 2012. Por el cual se establecen normas para la Operación del Aseguramiento en Salud de la Población Reclusa y se dictan otras disposiciones. 10 de diciembre de 2012.',
      link: '',
    },
    {
      referencia:
        'OMS (2020). <em>Informe de políticas de las Naciones Unidas: la covid-19 y la necesidad de actuar en relación con la salud mental</em>.',
      link:
        'https://www.un.org/sites/un2.un.org/files/policy_brief_-_covid_and_mental_health_spanish.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Área de paso',
      significado:
        'área destinada a la recuperación de un interno después de un procedimiento que necesite mejores condiciones de asepsia o que requiera un seguimiento continuo del prestador.',
    },
    {
      termino: 'ERON',
      significado: ' Establecimiento de Reclusión del Orden Nacional.',
    },
    {
      termino: 'Enfermedad mental',
      significado:
        'alteraciones de los procesos cognitivos y afectivos del desarrollo, consideradas como anormales con respecto al grupo social de referencia del cual proviene el individuo. Se puede tratar de alteraciones en el razonamiento, el comportamiento, la facultad de reconocer la realidad o de adaptarse a las condiciones de la vida.',
    },
    {
      termino: 'EMI',
      significado: ' Examen Médico de Ingreso.',
    },
    {
      termino: 'Hospitalización en unidad de salud mental',
      significado:
        'atención en salud que se realiza a un paciente por requerimiento de su patología mental, para estabilizar y monitorear la sintomatología en salud mental, los cuales se efectúan con una estancia del paciente mayor a 24 horas en un servicio de internación externa.',
    },
    {
      termino: 'MTA',
      significado:
        ' Manual Técnico Administrativo para la prestación del servicio de salud a la PPL a cargo del Inpec.',
    },
    {
      termino: 'PPL',
      significado: ' Población o Persona Privada de la Libertad.',
    },
    {
      termino: 'PDSP',
      significado: ' Plan Decenal de Salud Pública 2012-2021.',
    },
    {
      termino: 'Prestador intramural',
      significado:
        'se consideran como tales las instituciones prestadoras de servicios de salud, los profesionales independientes y los servicios de transporte especial de pacientes, al interior de los ERON.',
    },
    {
      termino: 'PYD',
      significado: ' Programas de Protección y Detección.',
    },
    {
      termino: 'PYP',
      significado: ' Programas de Prevención y Promoción.',
    },
    {
      termino: 'RIPS',
      significado: ' Registro Individual de Prestación de Servicios de Salud',
    },
    {
      termino: 'Sanidad del Inpec del ERON',
      significado:
        'lugar administrativo a cargo del Inpec, donde se realiza toda gestión administrativa tendiente a garantizar el acceso a los servicios de salud de la PPL.',
    },
    {
      termino: 'Sivigila',
      significado:
        'Sistema de Vigilancia en Salud Pública: conjunto de usuarios, normas, procedimientos, recursos, técnicos, financieros y de talento humano, organizados entre sí para la recopilación, análisis, interpretación, actualización, divulgación y evaluación.',
    },
    {
      termino: 'Unidad Primaria de Atención (UPA)',
      significado:
        'área destinada para la atención en salud en cada ERON en donde se prestarán los servicios definidos en el modelo de atención en salud, con el objeto de brindar la mayor resolutividad para cada tipología de establecimiento de reclusión.',
    },
    {
      termino: 'Urgencia psiquiátrica',
      significado:
        'situación en la que el trastorno del pensamiento, del afecto o de la conducta son en tal grado disruptivos, que requieren de atención inmediata especializada. Pueden presentarse por manifestaciones de una alteración psicológica aguda (ansiedad, pánico, depresión, trastornos de adaptación); condiciones que implican riesgo de daño personal o interpersonal (agresión suicidio, homicidio); o por la evidencia de un comportamiento profundamente desorganizado (psicosis, delirio, etc.).',
    },
    {
      termino: 'Discapacidad mental',
      significado:
        'se presenta en una persona que padece limitaciones psíquicas o de comportamiento, que no le permiten en ocasiones comprender el alcance de sus actos; presenta dificultad para ejecutar acciones o tareas, y para participar en situaciones vitales. La discapacidad mental de un individuo puede presentarse de manera transitoria o permanente, la cual es definida bajo criterios clínicos del equipo médico tratante.',
    },
  ],
  complementario: [
    {
      texto:
        'Ley 1616 de 2013. Por medio de la cual se expide la ley de salud mental y se dictan otras disposiciones. Enero 21 de 2013.',
      tipo: 'Norma',
      descarga: '/downloads/Anexo2.pdf',
    },
    {
      texto:
        'Ministerio de Salud y Protección Social. (2018). Política Nacional de Salud Mental.',
      tipo: 'Lineamientos',
      descarga: '/downloads/Anexo3.pdf',
    },
    {
      texto:
        'Ministerio de Salud y Protección Social. (2019). <em>Política integral para la prevención y atención del consumo de sustancias psicoactivas</em>. Ministerio de Salud y Protección Social.',
      tipo: 'Lineamientos',
      descarga: '/downloads/Anexo4.pdf',
    },
    {
      texto:
        'Ministerio de Salud y Protección Social. (2018). Resolución 04886 de 2018. Por la cual se adopta la Política Nacional de Salud Mental. Ministerio de Salud y Protección Social.',
      tipo: 'Norma',
      descarga: '/downloads/Anexo5.pdf',
    },
    {
      texto:
        'Ministerio de Justicia. (2018). <em>Ruta futuro: política integral para enfrentar el problema de las drogas de 2018</em>. Ministerio de Salud y Protección Social.',
      tipo: 'Lineamientos',
      descarga: '/downloads/Anexo6.pdf',
    },
    {
      texto:
        'Ministerio de Salud y Protección Social. (2021). <em>Prevención de la conducta suicida en Colombia</em>. Ministerio de Salud y Protección Social.',
      tipo: 'Lineamientos',
      descarga: '/downloads/Anexo7.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Tulia Bermúdez',
        cargo: 'Profesional especializado',
        centro: 'INPEC',
      },
      {
        nombre: 'Franky Alexy Ortiz Peña',
        cargo: 'Profesional especializado',
        centro: 'INPEC',
      },
      {
        nombre: 'Paola Moya Peralta',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de gestión industrial - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo front-end',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Maria Eugenia Mejía López',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
