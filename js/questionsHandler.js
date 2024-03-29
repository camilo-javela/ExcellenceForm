const countries = [
  "Afganistán",
  "Albania",
  "Alemania",
  "Andorra",
  "Angola",
  "Antigua y Barbuda",
  "Arabia Saudita",
  "Argelia",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaiyán",
  "Bahamas",
  "Bangladés",
  "Barbados",
  "Baréin",
  "Bélgica",
  "Belice",
  "Benín",
  "Bielorrusia",
  "Birmania",
  "Bolivia",
  "Bosnia y Herzegovina",
  "Botsuana",
  "Brasil",
  "Brunéi",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Bután",
  "Cabo Verde",
  "Camboya",
  "Camerún",
  "Canadá",
  "Catar",
  "Chad",
  "Chile",
  "China",
  "Chipre",
  "Ciudad del Vaticano",
  "Colombia",
  "Comoras",
  "Corea del Norte",
  "Corea del Sur",
  "Costa de Marfil",
  "Costa Rica",
  "Croacia",
  "Cuba",
  "Dinamarca",
  "Dominica",
  "Ecuador",
  "Egipto",
  "El Salvador",
  "Emiratos Árabes Unidos",
  "Eritrea",
  "Eslovaquia",
  "Eslovenia",
  "España",
  "Estados Unidos",
  "Estonia",
  "Etiopía",
  "Filipinas",
  "Finlandia",
  "Fiyi",
  "Francia",
  "Gabón",
  "Gambia",
  "Georgia",
  "Ghana",
  "Granada",
  "Grecia",
  "Guatemala",
  "Guyana",
  "Guinea",
  "Guinea ecuatorial",
  "Guinea-Bisáu",
  "Haití",
  "Honduras",
  "Hungría",
  "India",
  "Indonesia",
  "Irak",
  "Irán",
  "Irlanda",
  "Islandia",
  "Islas Marshall",
  "Islas Salomón",
  "Israel",
  "Italia",
  "Jamaica",
  "Japón",
  "Jordania",
  "Kazajistán",
  "Kenia",
  "Kirguistán",
  "Kiribati",
  "Kuwait",
  "Laos",
  "Lesoto",
  "Letonia",
  "Líbano",
  "Liberia",
  "Libia",
  "Liechtenstein",
  "Lituania",
  "Luxemburgo",
  "Madagascar",
  "Malasia",
  "Malaui",
  "Maldivas",
  "Malí",
  "Malta",
  "Marruecos",
  "Mauricio",
  "Mauritania",
  "México",
  "Micronesia",
  "Moldavia",
  "Mónaco",
  "Mongolia",
  "Montenegro",
  "Mozambique",
  "Namibia",
  "Nauru",
  "Nepal",
  "Nicaragua",
  "Níger",
  "Nigeria",
  "Noruega",
  "Nueva Zelanda",
  "Omán",
  "Países Bajos",
  "Pakistán",
  "Palaos",
  "Palestina",
  "Panamá",
  "Papúa Nueva Guinea",
  "Paraguay",
  "Perú",
  "Polonia",
  "Portugal",
  "Reino Unido",
  "República Centroafricana",
  "República Checa",
  "República de Macedonia",
  "República del Congo",
  "República Democrática del Congo",
  "República Dominicana",
  "República Sudafricana",
  "Ruanda",
  "Rumanía",
  "Rusia",
  "Samoa",
  "San Cristóbal y Nieves",
  "San Marino",
  "San Vicente y las Granadinas",
  "Santa Lucía",
  "Santo Tomé y Príncipe",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leona",
  "Singapur",
  "Siria",
  "Somalia",
  "Sri Lanka",
  "Suazilandia",
  "Sudán",
  "Sudán del Sur",
  "Suecia",
  "Suiza",
  "Surinam",
  "Tailandia",
  "Tanzania",
  "Tayikistán",
  "Timor Oriental",
  "Togo",
  "Tonga",
  "Trinidad y Tobago",
  "Túnez",
  "Turkmenistán",
  "Turquía",
  "Tuvalu",
  "Ucrania",
  "Uganda",
  "Uruguay",
  "Uzbekistán",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Yibuti",
  "Zambia",
  "Zimbabue",
];

const validations = [
  {
    type: "age",
    regex: /^(1[89]|[2-9]\d)$/,
    message: "",
  },
  {
    type: "email",
    regex: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
    message: "",
  },
  {
    type: "nospaces",
    regex: /^(?!\s*$).+/,
    message: "",
  },
  {
    type: "country",
    regex: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
    message: "",
  },
];

const questions = {
  ask: "Para empezar, por favor dinos cómo te llamas",
  direction: "",
  behavior: "",
  icon: "",
  validationType: "nospaces",
  type: "input",
  nextQuestions: [
    {
      ask: "Mujer",
      direction: "",
      behavior: "",
      label: "¿Eres?",
      icon: "",
      validationType: "none",
      type: "select",
      nextQuestions: [
        {
          ask: "¿Cuál es tu correo electrónico? Para poder enviarte nuestras recomendaciones",
          direction: "",
          behavior: "",
          icon: "",
          validationType: "email",
          type: "input",
          nextQuestions: [
            {
              ask: "¿En qué país vives?",
              direction: "",
              behavior: "autocomplete",
              icon: "",
              validationType: "nospaces",
              type: "input",
              nextQuestions: [
                {
                  ask: "¿Y en qué ciudad o provincia?",
                  direction: "",
                  behavior: "",
                  icon: "",
                  validationType: "nospaces",
                  type: "input",
                  nextQuestions: [
                    {
                      ask: "¿Cuántos años tienes?",
                      direction: "",
                      behavior: "",
                      icon: "",
                      validationType: "age",
                      type: "input",
                      nextQuestions: [
                        {
                          ask: "Estoy embarazada",
                          direction: "column",
                          behavior: "",
                          label:
                            "¿Estás embarazada o estás pensando quedarte embarazada?",
                          icon: "./../assets/icons/estoy_embarazada_15x15.svg",
                          validationType: "none",
                          type: "select",
                          nextQuestions: [
                            {
                              ask: "Sí ",
                              direction: "",
                              behavior: "",
                              label: "¿Estás tomando Vitaminas Prentales?",
                              icon: "",
                              validationType: "none",
                              type: "select",
                              nextQuestions: [
                                {
                                  ask: "Formulario finalizado",
                                  direction: "",
                                  behavior: "",
                                  icon: "",
                                  label:
                                    "Gracias por contestar nuestras preguntas.<br></br> Te presentamos las recomendaciones de nuestros expertos:",
                                  validationType: "none",
                                  type: "end",
                                  page: "page2",
                                  email: "email2",
                                  nextQuestions: [],
                                },
                              ],
                            },
                            {
                              ask: "No ",
                              direction: "",
                              behavior: "",
                              label: "¿Estás tomando Vitaminas Prentales?",
                              icon: "",
                              validationType: "none",
                              type: "select",
                              nextQuestions: [
                                {
                                  ask: "Formulario finalizado",
                                  direction: "",
                                  behavior: "",
                                  icon: "",
                                  label:
                                    "Gracias por contestar nuestras preguntas.<br></br> Te presentamos las recomendaciones de nuestros expertos:",
                                  validationType: "none",
                                  type: "end",
                                  page: "page1",
                                  email: "email1",
                                  nextQuestions: [],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          ask: "Quiero quedarme embarazada",
                          direction: "column",
                          behavior: "",
                          icon: "./../assets/icons/quiero_quedar_15x15.svg",
                          label:
                            "¿Estás embarazada o estás pensando quedarte embarazada?",
                          validationType: "none",
                          type: "select",
                          nextQuestions: [
                            {
                              ask: "Sí",
                              direction: "",
                              behavior: "",
                              label:
                                "¿Estás tomando suplementos vitamínicos para fertilidad o vitaminas prenatales?",
                              icon: "",
                              validationType: "none",
                              type: "select",
                              nextQuestions: [
                                {
                                  ask: " Sí ",
                                  direction: "",
                                  behavior: "",
                                  label:
                                    "¿Llevas más de 6 meses intentando quedar embarazada? ",
                                  icon: "",
                                  validationType: "none",
                                  type: "select",
                                  nextQuestions: [
                                    {
                                      ask: "  Sí  ",
                                      direction: "",
                                      behavior: "",
                                      label:
                                        "¿Has consultado con tu ginecólogo acerca de este tema?",
                                      icon: "",
                                      validationType: "none",
                                      type: "select",
                                      nextQuestions: [
                                        {
                                          ask: "Sí  ",
                                          direction: "",
                                          behavior: "",
                                          icon: "",
                                          label:
                                            "¿Has realizado pruebas de reserva ovárica?",
                                          validationType: "none",
                                          type: "select",
                                          nextQuestions: [
                                            {
                                              ask: " Sí    ",
                                              direction: "column",
                                              behavior: "",
                                              icon: "",
                                              label:
                                                "¿Has realizado o estás esperando para realizar algún tratamiento de reproducción asistida?",
                                              validationType: "none",
                                              type: "select",
                                              nextQuestions: [
                                                {
                                                  ask: "Sí    ",
                                                  direction: "",
                                                  behavior: "",
                                                  icon: "",
                                                  label:
                                                    "¿Has realizado algún ciclo de reproducción asistida en el que hayas obtenido menos de 6 óvulos o has sido diagnosticada como baja respondedora?",
                                                  validationType: "none",
                                                  type: "select",
                                                  nextQuestions: [
                                                    {
                                                      ask: "Formulario finalizado",
                                                      direction: "",
                                                      behavior: "",
                                                      icon: "fas fa-shish-kebab",
                                                      label:
                                                        "Gracias por contestar nuestras preguntas.<br></br> Te presentamos las recomendaciones de nuestros expertos:",
                                                      validationType: "none",
                                                      type: "end",
                                                      page: "page8",
                                                      email: "email8",
                                                      nextQuestions: [],
                                                    },
                                                  ],
                                                },
                                                {
                                                  ask: "No         ",
                                                  direction: "",
                                                  behavior: "",
                                                  icon: "",
                                                  label:
                                                    "¿Has realizado algún ciclo de reproducción asistida en el que hayas obtenido menos de 6 óvulos o has sido diagnosticada como baja respondedora?",
                                                  validationType: "none",
                                                  type: "select",
                                                  nextQuestions: [
                                                    {
                                                      ask: "Formulario finalizado",
                                                      direction: "",
                                                      behavior: "",
                                                      icon: "fas fa-shish-kebab",
                                                      label:
                                                        "Gracias por contestar nuestras preguntas.<br></br> Te presentamos las recomendaciones de nuestros expertos:",
                                                      validationType: "none",
                                                      type: "end",
                                                      page: "page7",
                                                      email: "email7",
                                                      nextQuestions: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                            {
                                              ask: "Estoy esperando la transferencia embrionaria",
                                              direction: "column",
                                              behavior: "",
                                              icon: "",
                                              label:
                                                "¿Has realizado o estás esperando para realizar algún tratamiento de reproducción asistida?",
                                              validationType: "none",
                                              type: "select",
                                              nextQuestions: [
                                                {
                                                  ask: "Formulario finalizado",
                                                  direction: "",
                                                  behavior: "",
                                                  icon: "fas fa-shish-kebab",
                                                  label:
                                                    "Gracias por contestar nuestras preguntas.<br></br> Te presentamos las recomendaciones de nuestros expertos:",
                                                  validationType: "none",
                                                  type: "end",
                                                  page: "page6",
                                                  email: "email6",
                                                  nextQuestions: [],
                                                },
                                              ],
                                            },
                                            {
                                              ask: "No   ",
                                              direction: "column",
                                              behavior: "",
                                              icon: "",
                                              label:
                                                "¿Has realizado o estás esperando para realizar algún tratamiento de reproducción asistida?",
                                              validationType: "none",
                                              type: "select",
                                              nextQuestions: [
                                                {
                                                  ask: "Formulario finalizado",
                                                  direction: "",
                                                  behavior: "",
                                                  icon: "fas fa-shish-kebab",
                                                  label:
                                                    "Gracias por contestar nuestras preguntas.<br></br> Te presentamos las recomendaciones de nuestros expertos:",
                                                  validationType: "none",
                                                  type: "end",
                                                  page: "page5",
                                                  email: "email5",
                                                  nextQuestions: [],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          ask: "No  ",
                                          direction: "",
                                          behavior: "",
                                          icon: "",
                                          label:
                                            "¿Has realizado pruebas de reserva ovárica?",
                                          validationType: "none",
                                          type: "select",
                                          nextQuestions: [
                                            {
                                              ask: "Formulario finalizado",
                                              direction: "",
                                              behavior: "",
                                              icon: "fas fa-shish-kebab",
                                              label:
                                                "Gracias por contestar nuestras preguntas.<br></br> Te presentamos las recomendaciones de nuestros expertos:",
                                              validationType: "none",
                                              type: "end",
                                              page: "page5",
                                              email: "email5",
                                              nextQuestions: [],
                                            },
                                          ],
                                        },
                                        {
                                          ask: "No lo sé  ",
                                          direction: "",
                                          behavior: "",
                                          icon: "",
                                          label:
                                            "¿Has realizado pruebas de reserva ovárica?",
                                          validationType: "none",
                                          type: "select",
                                          nextQuestions: [
                                            {
                                              ask: " Sí   ",
                                              direction: "column",
                                              behavior: "",
                                              icon: "",
                                              label:
                                                "¿Has realizado o estás esperando para realizar algún tratamiento de reproducción asistida?",
                                              validationType: "none",
                                              type: "select",
                                              nextQuestions: [
                                                {
                                                  ask: "Sí       ",
                                                  direction: "",
                                                  behavior: "",
                                                  icon: "",
                                                  label:
                                                    "¿Has realizado algún ciclo de reproducción asistida en el que hayas obtenido menos de 6 óvulos o has sido diagnosticada como baja respondedora?",
                                                  validationType: "none",
                                                  type: "select",
                                                  nextQuestions: [
                                                    {
                                                      ask: "Formulario finalizado",
                                                      direction: "",
                                                      behavior: "",
                                                      icon: "fas fa-shish-kebab",
                                                      label:
                                                        "Gracias por contestar nuestras preguntas.<br></br> Te presentamos las recomendaciones de nuestros expertos:",
                                                      validationType: "none",
                                                      type: "end",
                                                      page: "page8",
                                                      email: "email8",
                                                      nextQuestions: [],
                                                    },
                                                  ],
                                                },
                                                {
                                                  ask: " No ",
                                                  direction: "",
                                                  behavior: "",
                                                  icon: "",
                                                  label:
                                                    "¿Has realizado algún ciclo de reproducción asistida en el que hayas obtenido menos de 6 óvulos o has sido diagnosticada como baja respondedora?",
                                                  validationType: "none",
                                                  type: "select",
                                                  nextQuestions: [
                                                    {
                                                      ask: "Formulario finalizado",
                                                      direction: "",
                                                      behavior: "",
                                                      icon: "fas fa-shish-kebab",
                                                      label:
                                                        "Gracias por contestar nuestras preguntas.<br></br> Te presentamos las recomendaciones de nuestros expertos:",
                                                      validationType: "none",
                                                      type: "end",
                                                      page: "page7",
                                                      email: "email7",
                                                      nextQuestions: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                            {
                                              ask: "Estoy esperando la transferencia embrionaria    ",
                                              direction: "column",
                                              behavior: "",
                                              icon: "",
                                              label:
                                                "¿Has realizado o estás esperando para realizar algún tratamiento de reproducción asistida?",
                                              validationType: "none",
                                              type: "select",
                                              nextQuestions: [
                                                {
                                                  ask: "Formulario finalizado",
                                                  direction: "",
                                                  behavior: "",
                                                  icon: "fas fa-shish-kebab",
                                                  label:
                                                    "Gracias por contestar nuestras preguntas.<br></br> Te presentamos las recomendaciones de nuestros expertos:",
                                                  validationType: "none",
                                                  type: "end",
                                                  page: "page6",
                                                  email: "email6",
                                                  nextQuestions: [],
                                                },
                                              ],
                                            },
                                            {
                                              ask: "No        ",
                                              direction: "column",
                                              behavior: "",
                                              icon: "",
                                              label:
                                                "¿Has realizado o estás esperando para realizar algún tratamiento de reproducción asistida?",
                                              validationType: "none",
                                              type: "select",
                                              nextQuestions: [
                                                {
                                                  ask: "Formulario finalizado",
                                                  direction: "",
                                                  behavior: "",
                                                  icon: "fas fa-shish-kebab",
                                                  label:
                                                    "Gracias por contestar nuestras preguntas.<br></br> Te presentamos las recomendaciones de nuestros expertos:",
                                                  validationType: "none",
                                                  type: "end",
                                                  page: "page5",
                                                  email: "email5",
                                                  nextQuestions: [],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      ask: "No",
                                      direction: "",
                                      behavior: "",
                                      label:
                                        "¿Has consultado con tu ginecólogo acerca de este tema?",
                                      icon: "",
                                      validationType: "none",
                                      type: "select",
                                      nextQuestions: [
                                        {
                                          ask: "Formulario finalizado",
                                          direction: "",
                                          behavior: "",
                                          icon: "fas fa-shish-kebab",
                                          label:
                                            "Gracias por contestar nuestras preguntas.<br></br> Te presentamos las recomendaciones de nuestros expertos:",
                                          validationType: "none",
                                          type: "end",
                                          page: "page4",
                                          email: "email4",
                                          nextQuestions: [],
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  ask: " No  ",
                                  direction: "",
                                  behavior: "",
                                  label:
                                    "¿Llevas más de 6 meses intentando quedar embarazada?    ",
                                  icon: "",
                                  validationType: "none",
                                  type: "select",
                                  nextQuestions: [
                                    {
                                      ask: "Formulario finalizado",
                                      direction: "",
                                      behavior: "",
                                      icon: "fas fa-shish-kebab",
                                      label:
                                        "Gracias por contestar nuestras preguntas.<br></br> Te presentamos las recomendaciones de nuestros expertos:",
                                      validationType: "none",
                                      type: "end",
                                      page: "page3",
                                      email: "email3",
                                      nextQuestions: [],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              ask: "  No  ",
                              direction: "",
                              behavior: "",
                              label:
                                "¿Estás tomando suplementos vitamínicos para fertilidad o vitaminas prenatales?",
                              icon: "",
                              validationType: "none",
                              type: "select",
                              nextQuestions: [
                                {
                                  ask: "   Sí   ",
                                  direction: "",
                                  behavior: "",
                                  label:
                                    "¿Llevas más de 6 meses intentando quedar embarazada?   ",
                                  icon: "",
                                  validationType: "none",
                                  type: "select",
                                  nextQuestions: [
                                    {
                                      ask: "  Sí ",
                                      direction: "",
                                      behavior: "",
                                      label:
                                        "¿Has consultado con tu ginecólogo acerca de este tema?",
                                      icon: "",
                                      validationType: "none",
                                      type: "select",
                                      nextQuestions: [
                                        {
                                          ask: "Sí   ",
                                          direction: "",
                                          behavior: "",
                                          icon: "",
                                          label:
                                            "¿Has realizado pruebas de reserva ovárica?",
                                          validationType: "none",
                                          type: "select",
                                          nextQuestions: [
                                            {
                                              ask: "Sí     ",
                                              direction: "column",
                                              behavior: "",
                                              icon: "",
                                              label:
                                                "¿Has realizado o estás esperando para realizar algún tratamiento de reproducción asistida?",
                                              validationType: "none",
                                              type: "select",
                                              nextQuestions: [
                                                {
                                                  ask: "Sí      ",
                                                  direction: "",
                                                  behavior: "",
                                                  icon: "",
                                                  label:
                                                    "¿Has realizado algún ciclo de reproducción asistida en el que hayas obtenido menos de 6 óvulos o has sido diagnosticada como baja respondedora?",
                                                  validationType: "none",
                                                  type: "select",
                                                  nextQuestions: [
                                                    {
                                                      ask: "Formulario finalizado",
                                                      direction: "",
                                                      behavior: "",
                                                      icon: "fas fa-shish-kebab",
                                                      label:
                                                        "Gracias por contestar nuestras preguntas.<br></br> Te presentamos las recomendaciones de nuestros expertos:",
                                                      validationType: "none",
                                                      type: "end",
                                                      page: "page8",
                                                      email: "email8",
                                                      nextQuestions: [],
                                                    },
                                                  ],
                                                },
                                                {
                                                  ask: "No       ",
                                                  direction: "",
                                                  behavior: "",
                                                  icon: "",
                                                  label:
                                                    "¿Has realizado algún ciclo de reproducción asistida en el que hayas obtenido menos de 6 óvulos o has sido diagnosticada como baja respondedora?",
                                                  validationType: "none",
                                                  type: "select",
                                                  nextQuestions: [
                                                    {
                                                      ask: "Formulario finalizado",
                                                      direction: "",
                                                      behavior: "",
                                                      icon: "fas fa-shish-kebab",
                                                      label:
                                                        "Gracias por contestar nuestras preguntas.<br></br> Te presentamos las recomendaciones de nuestros expertos:",
                                                      validationType: "none",
                                                      type: "end",
                                                      page: "page7",
                                                      email: "email7",
                                                      nextQuestions: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                            {
                                              ask: "Estoy esperando la transferencia embrionaria ",
                                              direction: "column",
                                              behavior: "",
                                              icon: "",
                                              label:
                                                "¿Has realizado o estás esperando para realizar algún tratamiento de reproducción asistida?",
                                              validationType: "none",
                                              type: "select",
                                              nextQuestions: [
                                                {
                                                  ask: "Formulario finalizado",
                                                  direction: "",
                                                  behavior: "",
                                                  icon: "fas fa-shish-kebab",
                                                  label:
                                                    "Gracias por contestar nuestras preguntas.<br></br> Te presentamos las recomendaciones de nuestros expertos:",
                                                  validationType: "none",
                                                  type: "end",
                                                  page: "page6",
                                                  email: "email6",
                                                  nextQuestions: [],
                                                },
                                              ],
                                            },
                                            {
                                              ask: "No      ",
                                              direction: "column",
                                              behavior: "",
                                              icon: "",
                                              label:
                                                "¿Has realizado o estás esperando para realizar algún tratamiento de reproducción asistida?",
                                              validationType: "none",
                                              type: "select",
                                              nextQuestions: [
                                                {
                                                  ask: "Formulario finalizado",
                                                  direction: "",
                                                  behavior: "",
                                                  icon: "fas fa-shish-kebab",
                                                  label:
                                                    "Gracias por contestar nuestras preguntas.<br></br> Te presentamos las recomendaciones de nuestros expertos:",
                                                  validationType: "none",
                                                  type: "end",
                                                  page: "page5",
                                                  email: "email5",
                                                  nextQuestions: [],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          ask: "No     ",
                                          direction: "",
                                          behavior: "",
                                          icon: "",
                                          label:
                                            "¿Has realizado pruebas de reserva ovárica?",
                                          validationType: "none",
                                          type: "select",
                                          nextQuestions: [
                                            {
                                              ask: "Formulario finalizado",
                                              direction: "",
                                              behavior: "",
                                              icon: "fas fa-shish-kebab",
                                              label:
                                                "Gracias por contestar nuestras preguntas.<br></br> Te presentamos las recomendaciones de nuestros expertos:",
                                              validationType: "none",
                                              type: "end",
                                              page: "page5",
                                              email: "email5",
                                              nextQuestions: [],
                                            },
                                          ],
                                        },
                                        {
                                          ask: "No lo sé   ",
                                          direction: "",
                                          behavior: "",
                                          icon: "",
                                          label:
                                            "¿Has realizado pruebas de reserva ovárica?",
                                          validationType: "none",
                                          type: "select",
                                          nextQuestions: [
                                            {
                                              ask: "Sí        ",
                                              direction: "column",
                                              behavior: "",
                                              icon: "",
                                              label:
                                                "¿Has realizado o estás esperando para realizar algún tratamiento de reproducción asistida?",
                                              validationType: "none",
                                              type: "select",
                                              nextQuestions: [
                                                {
                                                  ask: "Sí          ",
                                                  direction: "",
                                                  behavior: "",
                                                  icon: "",
                                                  label:
                                                    "¿Has realizado algún ciclo de reproducción asistida en el que hayas obtenido menos de 6 óvulos o has sido diagnosticada como baja respondedora?",
                                                  validationType: "none",
                                                  type: "select",
                                                  nextQuestions: [
                                                    {
                                                      ask: "Formulario finalizado",
                                                      direction: "",
                                                      behavior: "",
                                                      icon: "fas fa-shish-kebab",
                                                      label:
                                                        "Gracias por contestar nuestras preguntas.<br></br> Te presentamos las recomendaciones de nuestros expertos:",
                                                      validationType: "none",
                                                      type: "end",
                                                      page: "page8",
                                                      email: "email8",
                                                      nextQuestions: [],
                                                    },
                                                  ],
                                                },
                                                {
                                                  ask: "No    ",
                                                  direction: "",
                                                  behavior: "",
                                                  icon: "",
                                                  label:
                                                    "¿Has realizado algún ciclo de reproducción asistida en el que hayas obtenido menos de 6 óvulos o has sido diagnosticada como baja respondedora?",
                                                  validationType: "none",
                                                  type: "select",
                                                  nextQuestions: [
                                                    {
                                                      ask: "Formulario finalizado",
                                                      direction: "",
                                                      behavior: "",
                                                      icon: "fas fa-shish-kebab",
                                                      label:
                                                        "Gracias por contestar nuestras preguntas.<br></br> Te presentamos las recomendaciones de nuestros expertos:",
                                                      validationType: "none",
                                                      type: "end",
                                                      page: "page7",
                                                      email: "email7",
                                                      nextQuestions: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                            {
                                              ask: "Estoy esperando la transferencia embrionaria  ",
                                              direction: "column",
                                              behavior: "",
                                              icon: "",
                                              label:
                                                "¿Has realizado o estás esperando para realizar algún tratamiento de reproducción asistida?",
                                              validationType: "none",
                                              type: "select",
                                              nextQuestions: [
                                                {
                                                  ask: "Formulario finalizado",
                                                  direction: "",
                                                  behavior: "",
                                                  icon: "fas fa-shish-kebab",
                                                  label:
                                                    "Gracias por contestar nuestras preguntas.<br></br> Te presentamos las recomendaciones de nuestros expertos:",
                                                  validationType: "none",
                                                  type: "end",
                                                  page: "page6",
                                                  email: "email6",
                                                  nextQuestions: [],
                                                },
                                              ],
                                            },
                                            {
                                              ask: "No          ",
                                              direction: "column",
                                              behavior: "",
                                              icon: "",
                                              label:
                                                "¿Has realizado o estás esperando para realizar algún tratamiento de reproducción asistida?",
                                              validationType: "none",
                                              type: "select",
                                              nextQuestions: [
                                                {
                                                  ask: "Formulario finalizado",
                                                  direction: "",
                                                  behavior: "",
                                                  icon: "fas fa-shish-kebab",
                                                  label:
                                                    "Gracias por contestar nuestras preguntas.<br></br> Te presentamos las recomendaciones de nuestros expertos:",
                                                  validationType: "none",
                                                  type: "end",
                                                  page: "page5",
                                                  email: "email5",
                                                  nextQuestions: [],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      ask: "No            ",
                                      direction: "",
                                      behavior: "",
                                      label:
                                        "¿Has consultado con tu ginecólogo acerca de este tema?",
                                      icon: "",
                                      validationType: "none",
                                      type: "select",
                                      nextQuestions: [
                                        {
                                          ask: "Formulario finalizado",
                                          direction: "",
                                          behavior: "",
                                          icon: "fas fa-shish-kebab",
                                          label:
                                            "Gracias por contestar nuestras preguntas.<br></br> Te presentamos las recomendaciones de nuestros expertos:",
                                          validationType: "none",
                                          type: "end",
                                          page: "page4",
                                          email: "email4",
                                          nextQuestions: [],
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  ask: "No           ",
                                  direction: "",
                                  behavior: "",
                                  label:
                                    "¿Llevas más de 6 meses intentando quedar embarazada?  ",
                                  icon: "",
                                  validationType: "none",
                                  type: "select",
                                  nextQuestions: [
                                    {
                                      ask: "Formulario finalizado",
                                      direction: "",
                                      behavior: "",
                                      icon: "fas fa-shish-kebab",
                                      label:
                                        "Gracias por contestar nuestras preguntas.<br></br> Te presentamos las recomendaciones de nuestros expertos:",
                                      validationType: "none",
                                      type: "end",
                                      page: "page3",
                                      email: "email3",
                                      nextQuestions: [],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          ask: "No estoy segura",
                          direction: "column",
                          behavior: "",
                          icon: "./../assets/icons/no_segura_15x15.svg",
                          label:
                            "¿Estás embarazada o estás pensando quedarte embarazada?",
                          validationType: "none",
                          type: "select",
                          nextQuestions: [
                            {
                              ask: "Formulario finalizado",
                              direction: "",
                              behavior: "",
                              icon: "",
                              label:
                                "Gracias por contestar nuestras preguntas.<br></br> Te presentamos las recomendaciones de nuestros expertos:",
                              validationType: "none",
                              type: "end",
                              page: "page0",
                              email: "email0",
                              nextQuestions: [],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      ask: "Hombre",
      direction: "",
      behavior: "",
      icon: "",
      label: "¿Eres?",
      validationType: "none",
      type: "select",
      nextQuestions: [
        {
          ask: " Si ",
          direction: "row",
          behavior: "",
          icon: "",
          label:
            "¿Quieres que te notifiquemos cuando tengamos nuestros productos para hombre?",
          validationType: "none",
          type: "select",
          nextQuestions: [
            {
              ask: "¿Cuál es tu correo electrónico? Para poder enviarte nuestras recomendaciones ",
              direction: "",
              behavior: "",
              icon: "",
              validationType: "email",
              type: "input",
              nextQuestions: [
                {
                  ask: "Formulario finalizado   ",
                  direction: "",
                  behavior: "",
                  icon: "",
                  label:
                    "<strong>¡Gracias por visitarnos!</strong><br></br> En este momento estamos preparando nuestro nuevo producto para fertilidad masculina y estará  muy pronto en nuestra tienda.",
                  validationType: "none",
                  type: "end",
                  page: "default",
                  email: "man",
                  nextQuestions: [],
                },
              ],
            },
          ],
        },
        {
          ask: " No      ",
          direction: "row",
          behavior: "",
          icon: "",
          label:
            "¿Quieres que te notifiquemos cuando tengamos nuestros productos para hombre?",
          validationType: "none",
          type: "select",
          nextQuestions: [
            {
              ask: "Formulario finalizado",
              direction: "",
              behavior: "",
              icon: "",
              label:
                "<strong>¡Gracias por visitarnos!</strong><br></br> En este momento estamos preparando nuestro nuevo producto para fertilidad masculina y estará  muy pronto en nuestra tienda.",
              validationType: "none",
              type: "end",
              page: "default",
              email: "man",
              nextQuestions: [],
            },
          ],
        },
      ],
    },
  ],
};

const landings = [
  {
    page: "page0",
    url: "./pages/page0.html",
  },
  {
    page: "page1",
    url: "./pages/page1.html",
  },
  {
    page: "page2",
    url: "./pages/page2.html",
  },
  {
    page: "page3",
    url: "./pages/page3.html",
  },
  {
    page: "page4",
    url: "./pages/page4.html",
  },
  {
    page: "page5",
    url: "./pages/page5.html",
  },
  {
    page: "page6",
    url: "./pages/page6.html",
  },
  {
    page: "page7",
    url: "./pages/page7.html",
  },
  {
    page: "page8",
    url: "./pages/page8.html",
  },
  {
    page: "default",
    url: "https://buscandoembarazo.com/",
  },
];

const emails = [
  {
    name: "email0",
    Subject: "Tus recomendaciones por parte de excellence",
    BodyTitle: "Excellence.",
    message:
      "Hola, name \nDe acuerdo a tus respuestas estas son las recomendaciones que tenemos para ti ",
    buttonMessage: "Tus recomendaciones",
    buttonLink:
      "https://8c78-181-234-146-191.ngrok.io/pages/page0.html?namePlaceholder=name",
  },
  {
    name: "email1",
    Subject: "Tus recomendaciones por parte de excellence",
    BodyTitle: "Excellence.",
    message:
      "Hola, name \nDe acuerdo a tus respuestas estas son las recomendaciones que tenemos para ti ",
    buttonMessage: "Tus recomendaciones",
    buttonLink:
      "https://8c78-181-234-146-191.ngrok.io/pages/page1.html?namePlaceholder=name",
  },
  {
    name: "email2",
    Subject: "Tus recomendaciones por parte de excellence",
    BodyTitle: "Excellence",
    message:
      "Hola, name \nDe acuerdo a tus respuestas estas son las recomendaciones que tenemos para ti",
    buttonMessage: "Tus recomendaciones",
    buttonLink:
      "https://8c78-181-234-146-191.ngrok.io/pages/page2.html?namePlaceholder=name",
  },
  {
    name: "email3",
    Subject: "Tus recomendaciones por parte de excellence",
    BodyTitle: "Excellence.",
    message:
      "Hola, name\n De acuerdo a tus respuestas estas son las recomendaciones que tenemos para ti",
    buttonMessage: "Tus recomendaciones",
    buttonLink:
      "https://8c78-181-234-146-191.ngrok.io/pages/page3.html?namePlaceholder=name",
  },
  {
    name: "email4",
    Subject: "Tus recomendaciones por parte de excellence",
    BodyTitle: "Excellence.",
    message:
      "Hola, name \nDe acuerdo a tus respuestas estas son las recomendaciones que tenemos para ti",
    buttonMessage: "Tus recomendaciones",
    buttonLink:
      "https://8c78-181-234-146-191.ngrok.io/pages/page4.html?namePlaceholder=name",
  },
  {
    name: "email5",
    Subject: "Tus recomendaciones por parte de excellence",
    BodyTitle: "Excellence",
    message:
      "Hola, name. \n De acuerdo a tus respuestas estas son las recomendaciones que tenemos para ti",
    buttonMessage: "Tus recomendaciones",
    buttonLink:
      "https://8c78-181-234-146-191.ngrok.io/pages/page5.html?namePlaceholder=name",
  },
  {
    name: "email6",
    Subject: "Tus recomendaciones por parte de excellence",
    BodyTitle: "Excellence",
    message:
      "Hola, name. \n De acuerdo a tus respuestas estas son las recomendaciones que tenemos para ti",
    buttonMessage: "Tus recomendaciones",
    buttonLink:
      "https://8c78-181-234-146-191.ngrok.io/pages/page6.html?namePlaceholder=name",
  },
  {
    name: "email7",
    Subject: "Tus recomendaciones por parte de excellence",
    BodyTitle: "Excellence",
    message:
      "Hola, name. \n De acuerdo a tus respuestas estas son las recomendaciones que tenemos para ti",
    buttonMessage: "Tus recomendaciones",
    buttonLink:
      "https://8c78-181-234-146-191.ngrok.io/pages/page7.html?namePlaceholder=name",
  },
  {
    name: "email8",
    Subject: "Tus recomendaciones por parte de excellence",
    BodyTitle: "Excellence",
    message:
      "Hola, name. \n De acuerdo a tus respuestas estas son las recomendaciones que tenemos para ti",
    buttonMessage: "Tus recomendaciones",
    buttonLink:
      "https://8c78-181-234-146-191.ngrok.io/pages/page8.html?namePlaceholder=name",
  },
  {
    name: "man",
    Subject: "Has completado el test",
    BodyTitle: "Hola name",
    message:
      "Gracias por visitarnos. En este momento estamos preparando nuestro nuevo producto para fertilidad masculina y estará  muy pronto en nuestra tienda.",
    buttonMessage: "Visita nuestra página!",
    buttonLink: "https://buscandoembarazo.com/",
  },
];

let checked = false;
let answers = [];
let actualAnswerTag;
let buttonTag;
let mainInputTag;
let actualQuestionTag;
let auxiliarQuestion = [];

function actualQuestion() {
  mainInputTag = document.getElementsByClassName("mainInput")[0];
  actualQuestionTag = document.getElementById("actualQuestion");
  actualAnswerTag = document.getElementById("actualAnswer");
  buttonTag = document.getElementById("button");
  document
    .getElementById("actualAnswer")
    .addEventListener("keydown", function (e) {
      if (e.keyCode == 13) {
        document.getElementById("button").click();
      }
    });
  setTimeout(function () {
    exitAnimation();
    setTimeout(function () {
      document.getElementById("actualQuestion").innerHTML = questions.ask;
      document.getElementsByClassName("mainInput")[0].style.display = "flex";
      document.getElementById("check").style.display = "block";
      entryAnimation();
    }, 1000);
  }, 3000);
}

function setChecked(element) {
  checked = !checked;
  element.checked = checked;
}

function entryAnimation() {
  document.getElementById("animation").style.animation =
    "entryAnimation 1.9s ease-in-out";
}

function exitAnimation() {
  document.getElementById("animation").style.animation =
    "exitAnimation 1.2s ease-in-out";
}

function saveName() {
  checkTag = document.getElementById("check");
  var name = capitalize(document.getElementById("actualAnswer").value);
  let resultValidation = regexValidation(
    name,
    validations.find(({ type, regex }) => {
      if (type === questions.validationType) {
        return regex;
      }
    })
  );
  if (resultValidation && checked) {
    checkTag.remove();
    var answer = document.getElementById("actualQuestion").innerHTML;

    exitAnimation();
    setTimeout(function () {
      document.getElementById("actualAnswer").value = "";
      document.getElementById("actualQuestion").innerHTML =
        "Hola " +
        name +
        ", te haremos algunas preguntas para que puedas recibir las recomendaciones de nuestros expertos ";
      document.getElementById("animation").style.animation = "none";
      entryAnimation();
      document.getElementById("button").style.display = "none";
      document.getElementById("actualAnswer").style.display = "none";

      setTimeout(function () {
        saveAnswer(answer, name, "input");
      }, 3000);
    }, 1000);
  } else {
    console.log("error");
  }
}

function saveAnswer(answer, writeAnswer, type) {
  exitAnimation();
  setTimeout(function () {
    if (type == "input") {
      answers.push({ [answer]: writeAnswer, type: type });
    } else {
      answers.push({ [writeAnswer]: answer, type: type });
    }

    deleteAllBlocks();
    const nextQuestionsToRenderize = nextQuestionsFinder(questions, answer);
    renderizeNextQuestions(nextQuestionsToRenderize);
  }, 1000);
}

function renderizeNextQuestions(questionsToRender) {
  questionsToRender.map(
    ({
      ask,
      type,
      label,
      icon,
      direction,
      behavior,
      validationType,
      page,
      email,
    }) => {
      createBlock(
        ask,
        type,
        label,
        icon,
        direction,
        behavior,
        validationType,
        page,
        email
      );
    }
  );
  entryAnimation();
}

function createBlock(
  questionString,
  type,
  label,
  icon,
  direction,
  behavior,
  validationType,
  page,
  email
) {
  if (type === "select") {
    createSelect(questionString, label, icon, direction);
  } else if (type === "input") {
    createInput(questionString, behavior, validationType);
  } else {
    createEnd(questionString, label, page, email);
  }
}

function deleteAllBlocks() {
  const arr = Array(document.getElementsByClassName("block").length ?? 0).fill(
    0
  );
  var blocks = document.getElementsByClassName("block");
  if (arr.length > 0) {
    arr.map(() => {
      blocks[0].remove();
    });
  }
}

function createSelect(questionString, label, icon, direction) {
  const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  var localMainInput = document.getElementsByClassName("mainInput")[0];
  var localActualQuestion = document.getElementById("actualQuestion");

  var actualAnswer = document.getElementById("actualAnswer");
  var button = document.getElementById("button");
  if (actualAnswer && button) {
    button.remove();
    actualAnswer.remove();
  }
  if (label != "" && localActualQuestion.innerHTML != label) {
    localActualQuestion.innerHTML = label;
  }

  const mainBlock = document.createElement("div");
  mainBlock.className = "block";
  const question = document.createElement("p");
  question.innerHTML = questionString;
  if (icon != "") {
    const iconElement = document.createElement("img");
    iconElement.style.marginRight = "5px";
    iconElement.style.marginLeft = "5px";
    iconElement.src = icon;
    iconElement.style.width = "30px";
    iconElement.style.height = "30px";
    iconElement.style.flexBasis = "20%";
    question.style.flexBasis = "80%";
    mainBlock.append(iconElement);
  }

  mainBlock.append(question);
  localMainInput.style.flexDirection = direction != "column" ? "row" : "column";
  localMainInput.style.alignItems =
    direction != "column" ? "flex-start" : "center";
  localMainInput.style.flexWrap = "nowrap";
  if (direction == "column") {
    mainBlock.style.marginTop = "10px";
    mainBlock.style.width =
      questionString.length > 26 && width <= 600 ? "60%" : "50%";
    mainBlock.style.textAlign = questionString.length > 26 ? "center" : "left";
  } else {
    mainBlock.style.marginRight = "3%";
  }
  localMainInput.style.width = "100%";
  localMainInput.style.height = "100%";
  mainBlock.addEventListener("click", function (e) {
    let answer;
    if (e.target.nodeName === "P") {
      answer = e.target.innerHTML;
    } else if (e.target.nodeName === "svg") {
      answer = e.target.parentNode.lastChild.innerHTML;
    } else if (e.target.nodeName === "path") {
      answer = e.target.parentNode.parentNode.lastChild.innerHTML;
    } else {
      answer = e.target.lastChild.innerHTML;
    }

    saveAnswer(answer, label, "select");
  });
  localMainInput.appendChild(mainBlock);
}

function createInput(questionString, behavior, validationType) {
  var localMainInput = document.getElementsByClassName("mainInput")[0];
  if (localMainInput) {
    localMainInput.remove();
  }

  if (!localMainInput.innerHTML.includes("actualAnswer")) {
    mainInputTag.append(actualAnswerTag);
    mainInputTag.append(buttonTag);
  }
  mainInputTag.style.flexDirection = "row";
  mainInputTag.style.alignItems = "baseline";
  document.getElementsByClassName("container")[0].append(actualQuestionTag);
  document.getElementsByClassName("container")[0].append(mainInputTag);
  document.getElementById("actualAnswer").value = "";

  document.getElementById("button").style.display = "block";
  document.getElementById("actualAnswer").style.display = "block";
  document.getElementsByClassName("container")[0].style.flexDirection =
    "column";

  document.getElementById("actualQuestion").innerHTML = questionString;

  var s = document.createElement("script");

  if (behavior && behavior === "autocomplete") {
    var actualAnswer = document.getElementById("actualAnswer");
    var actualAnswerClone = actualAnswer.cloneNode(true);
    actualAnswer.parentNode.replaceChild(actualAnswerClone, actualAnswer);
    document.getElementById("actualAnswer").id = "actualAnswer" + behavior;

    s.innerHTML =
      "autocomplete(document.getElementById(" +
      "actualAnswerautocomplete" +
      "), countries);";
    document.body.appendChild(s);
  }

  document.getElementById("button").onclick = function () {
    var writeAnswer = "";
    if (behavior) {
      var actualAnswer = document.getElementById("actualAnswer" + behavior);
      writeAnswer = actualAnswer.value;
      actualAnswer.id = "actualAnswer";
      var actualAnswerClone = actualAnswer.cloneNode(true);
      actualAnswerClone.addEventListener("keydown", function (e) {
        if (e.keyCode == 13) {
          document.getElementById("button").click();
        }
      });

      actualAnswer.parentNode.replaceChild(actualAnswerClone, actualAnswer);
      s.innerHTML = "";
    } else {
      writeAnswer = document.getElementById("actualAnswer").value;
    }

    let resultValidation =
      validationType !== "none"
        ? regexValidation(
            writeAnswer,
            validations.find(({ type, regex }) => {
              if (type === validationType) {
                return regex;
              }
            })
          )
        : true;
    if (resultValidation) {
      var answer = document.getElementById("actualQuestion").innerHTML;
      saveAnswer(answer, writeAnswer, "input");
    } else {
      console.log("error");
    }
  };
}

function createEnd(finishMessage, FinishTitle, page, email) {
  var actualAnswer = document.getElementById("actualAnswer");
  var button = document.getElementById("button");
  if (actualAnswer && button) {
    button.remove();
    actualAnswer.remove();
  }
  var localMainInput = document.getElementsByClassName("mainInput")[0];
  if (localMainInput) {
    localMainInput.remove();
  }
  let nameKey = Object.keys(answers[0])[0];
  let objWithName = answers[0];
  objWithName[nameKey];
  let redirectBtn = document.createElement("button");
  redirectBtn.className = "block";
  redirectBtn.innerHTML = "Ver recomendaciones";
  redirectBtn.style.minWidth = "175px";
  redirectBtn.onclick = () => {
    location.href =
      landings.find((landing) => landing.page == page).url +
      "?name=" +
      objWithName[nameKey];
  };
  mainInputTag.append(redirectBtn);
  document.getElementsByClassName("container")[0].append(actualQuestionTag);
  document.getElementsByClassName("container")[0].append(mainInputTag);

  document.getElementById("actualQuestion").innerHTML = FinishTitle;

  let emailObj = emails.find((mail) => mail.name == email);

  response(emailObj);
  setTimeout(() => {
    location.href =
      landings.find((landing) => landing.page == page).url +
      "?name=" +
      objWithName[nameKey];
  }, 300000);
}

function nextQuestionsFinder(questionObject, answer) {
  const answerFinded = !Array.isArray(questionObject)
    ? questionObject
    : questionObject.find(({ ask }) => ask == answer);

  if (
    answers.length > 1 &&
    answers[1][Object.keys(answers[1])[0]] === "Hombre"
  ) {
    const manQuestions = questionObject.nextQuestions[1].nextQuestions;

    if (answer === "Hombre") {
      return manQuestions;
    } else {
      if (answer.includes("Si")) {
        return manQuestions[0].nextQuestions;
      } else {
        return manQuestions[1].nextQuestions;
      }
    }
  }

  if (answerFinded && answerFinded.ask == answer) {
    return answerFinded.nextQuestions;
  } else {
    const nextNode = questionObject ? questionObject.nextQuestions : undefined;
    if (nextNode) {
      return nextQuestionsFinder(nextNode, answer);
    } else {
      questionObject.forEach((obj) => {
        if (obj.ask == answer) {
          return obj.nextQuestions;
        } else {
          let posibleQuestions = this.nextQuestionsFinder(
            obj.nextQuestions,
            answer
          );
          if (posibleQuestions) {
            auxiliarQuestion = posibleQuestions;
          }
        }
      });
      return findResponseArr(auxiliarQuestion);
    }
  }
}

function findResponseArr(arr) {
  if (arr[0] && arr[0].ask) {
    return arr;
  } else {
    return findResponseArr(arr[0]);
  }
}

function response(mailObj) {
  //aqui has lo que tengas que hacer para el form o como sea que quieras manejar las respuestas
  let email = "";
  const emailVal = validations.find(({ type }) => type == "email");

  answers.forEach((obj) => {
    let key = Object.keys(obj)[0];
    if (regexValidation(obj[key], emailVal) && obj[key].includes("@")) {
      email = obj[key];
    }
  });

  sendEmail(email, mailObj);
  createResponseForm();
}

function sendEmail(email, objToSend) {
  let nameKey = Object.keys(answers[0])[0];
  let objWithName = answers[0];
  objWithName[nameKey];

  var templateParams = {
    message: objToSend.message.replace("name", objWithName[nameKey]),
    button_link: objToSend.buttonLink.replace("name", objWithName[nameKey]),
    button_message: objToSend.buttonMessage,
    subject: objToSend.Subject,
    body_title: objToSend.BodyTitle.replace("name", objWithName[nameKey]),
    email: email,
    name: objWithName[nameKey],
  };

  emailjs
    .send(
      "service_pvlmw6p",
      "template_92epc7o",
      templateParams,
      "PJ7D_wGTRedtfY9ap"
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
}

function createResponseForm() {
  const form = document.createElement("form");
  console.log(1, answers);

  answers.forEach((obj) => {
    let formNode = document.createElement("input");
    const key = Object.keys(obj)[0];
    formNode.name = key;
    formNode.id = key;
    formNode.value = obj[key].trim();
    form.append(formNode);
  });
  sendResponses(form);
}

function sendResponses(form) {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzru-JqqSUASbyJcku6C3xaoRU_Wp9MOoduQSX7OSuZUU7GzPt2VZGEkLvCJBTn6OWF/exec";

  console.log(new FormData(form));

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error));
}

function regexValidation(string, regexObject) {
  let isCorrect =
    regexObject.regex.test(string) ||
    countries.some((country) => string === country);
  if (!isCorrect) inputTypeError(regexObject.message);
  return isCorrect;
}

function goBackHandler() {
  if (answers.length > 1) {
    exitAnimation();
    setTimeout(function () {
      deleteAllBlocks();
      console.log(answers);
      let questionBack = answers[answers.length - 2];
      console.log(questionBack);
      console.log(Object.keys(questionBack)[0]);
      let questionKey = Object.keys(questionBack)[0];
      answers.pop();
      var actualAnswer = document.getElementById("actualAnswer");
      if (!actualAnswer) {
        document.getElementById("actualAnswerautocomplete")
          ? (document.getElementById("actualAnswerautocomplete").id =
              "actualAnswer")
          : undefined;
      }
      console.log(answers);
      const nextQuestionsToRenderize = nextQuestionsFinder(
        questions,
        questionBack.type == "input" ? questionKey : questionBack[questionKey]
      );
      console.log(nextQuestionsToRenderize);
      renderizeNextQuestions(nextQuestionsToRenderize);
    }, 1000);
  } else {
    location.reload();
  }
}

function inputTypeError(validationMessage) {}

function reloadPage() {
  if (confirm("¿Deseas comenzar de nuevo el test?")) {
    location.reload();
  } else {
  }
}

function capitalize(string) {
  return string
    .split(" ")
    .reduce(
      (previus_string, current_string) =>
        previus_string +
        " " +
        current_string[0].toUpperCase() +
        current_string.slice(1),
      ""
    );
}
