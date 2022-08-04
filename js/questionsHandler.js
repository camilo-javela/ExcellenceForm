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
          ask: "¿Cuál es tu correo electronico? Para poder enviarte nuestras recomendaciones",
          direction: "",
          behavior: "",
          icon: "",
          validationType: "email",
          type: "input",
          nextQuestions: [
            {
              ask: "¿En que país vives?",
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
                            "¿Estas embarazada o estás pensando quedarte embarazada?",
                          icon: "fas fa-baby-carriage",
                          validationType: "none",
                          type: "select",
                          nextQuestions: [
                            {
                              ask: "Si.",
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
                                    "Felicidades!!! has terminado el formulario",
                                  validationType: "none",
                                  type: "end",
                                  nextQuestions: [],
                                },
                              ],
                            },
                            {
                              ask: "No.",
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
                                    "Felicidades!!! has terminado el formulario",
                                  validationType: "none",
                                  type: "end",
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
                          icon: "fas fa-praying-hands",
                          label:
                            "¿Estas embarazada o estás pensando quedarte embarazada?",
                          validationType: "none",
                          type: "select",
                          nextQuestions: [
                            {
                              ask: "Si, las he tomado",
                              direction: "",
                              behavior: "",
                              label:
                                "¿Estás tomando suplementos vitamínicos para fertilidad o vitaminas prenatales?",
                              icon: "",
                              validationType: "none",
                              type: "select",
                              nextQuestions: [
                                {
                                  ask: "Si, lo he hecho",
                                  direction: "",
                                  behavior: "",
                                  label:
                                    "¿Has realizado algún ciclo de reproducción asistida en el que hayas obtenido menos de 6 óvulos o has sido diagnosticada como baja respondedora?",
                                  icon: "",
                                  validationType: "none",
                                  type: "select",
                                  nextQuestions: [
                                    {
                                      ask: "Si, he estado intentando",
                                      direction: "",
                                      behavior: "",
                                      label:
                                        "¿Llevas más de 6 meses intentando quedar embarazada?",
                                      icon: "",
                                      validationType: "none",
                                      type: "select",
                                      nextQuestions: [
                                        {
                                          ask: "Claro",
                                          direction: "",
                                          behavior: "",
                                          label:
                                            "¿Has consultado con tu ginecólogo acerca de este tema?",
                                          icon: "",
                                          validationType: "none",
                                          type: "select",
                                          nextQuestions: [
                                            {
                                              ask: "Si.  ",
                                              direction: "",
                                              behavior: "",
                                              icon: "",
                                              label:
                                                "¿Has realizado pruebas de reserva ovárica?",
                                              validationType: "none",
                                              type: "select",
                                              nextQuestions: [
                                                {
                                                  ask: "Si.   ",
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
                                                        "Felicidades!!! has terminado el formulario",
                                                      validationType: "none",
                                                      type: "end",
                                                      nextQuestions: [],
                                                    },
                                                  ],
                                                },
                                                {
                                                  ask: "No.   ",
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
                                                        "Felicidades!!! has terminado el formulario",
                                                      validationType: "none",
                                                      type: "end",
                                                      nextQuestions: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                            {
                                              ask: "No.  ",
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
                                                    "Felicidades!!! has terminado el formulario",
                                                  validationType: "none",
                                                  type: "end",
                                                  nextQuestions: [],
                                                },
                                              ],
                                            },
                                            {
                                              ask: "No lo sé.  ",
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
                                                    "Felicidades!!! has terminado el formulario",
                                                  validationType: "none",
                                                  type: "end",
                                                  nextQuestions: [],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          ask: "Por el momento no",
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
                                                "Felicidades!!! has terminado el formulario",
                                              validationType: "none",
                                              type: "end",
                                              nextQuestions: [],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      ask: "No. ",
                                      direction: "",
                                      behavior: "",
                                      label:
                                        "¿Llevas más de 6 meses intentando quedar embarazada?",
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
                                            "Felicidades!!! has terminado el formulario",
                                          validationType: "none",
                                          type: "end",
                                          nextQuestions: [],
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  ask: "No.",
                                  direction: "",
                                  behavior: "",
                                  label:
                                    "¿Has realizado algún ciclo de reproducción asistida en el que hayas obtenido menos de 6 óvulos o has sido diagnosticada como baja respondedora?",
                                  icon: "",
                                  validationType: "none",
                                  type: "select",
                                  nextQuestions: [
                                    {
                                      ask: "Si, lo he estado intentando",
                                      direction: "",
                                      behavior: "",
                                      label:
                                        "¿Llevas más de 6 meses intentando quedar embarazada?",
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
                                            "Felicidades!!! has terminado el formulario",
                                          validationType: "none",
                                          type: "end",
                                          nextQuestions: [],
                                        },
                                      ],
                                    },
                                    {
                                      ask: "No lo he estado intentando",
                                      direction: "",
                                      behavior: "",
                                      label:
                                        "¿Llevas más de 6 meses intentando quedar embarazada?",
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
                                            "Felicidades!!! has terminado el formulario",
                                          validationType: "none",
                                          type: "end",
                                          nextQuestions: [],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              ask: "No las he tomado",
                              direction: "",
                              behavior: "",
                              label:
                                "¿Estás tomando suplementos vitamínicos para fertilidad o vitaminas prenatales?",
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
                                    "Felicidades!!! has terminado el formulario",
                                  validationType: "none",
                                  type: "end",
                                  nextQuestions: [],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          ask: "No estoy segura",
                          direction: "column",
                          behavior: "",
                          icon: "fas fa-shish-kebab",
                          label:
                            "¿Estas embarazada o estás pensando quedarte embarazada?",
                          validationType: "none",
                          type: "select",
                          nextQuestions: [
                            {
                              ask: "Formulario finalizado",
                              direction: "",
                              behavior: "",
                              icon: "",
                              label:
                                "Felicidades!!! has terminado el formulario",
                              validationType: "none",
                              type: "end",
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
          ask: "Formulario finalizado",
          direction: "",
          behavior: "",
          icon: "",
          label: "Felicidades!!! has terminado el formulario",
          validationType: "none",
          type: "end",
          nextQuestions: [],
        },
      ],
    },
  ],
};

const landings = [
  {
    page: "",
    url: "",
  },
];

const emails = [
  {
    name: "",
    Subject: "",
    Body: "",
  },
  { name: "", Subject: "", Body: "" },
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
  var name = document.getElementById("actualAnswer").value;
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
        "Bienvenid@ " +
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
      answers.push({ [answer]: writeAnswer });
    } else {
      answers.push({ [writeAnswer]: answer });
    }

    deleteAllBlocks();
    const nextQuestionsToRenderize = nextQuestionsFinder(questions, answer);
    renderizeNextQuestions(nextQuestionsToRenderize);
  }, 1000);
}

function renderizeNextQuestions(questionsToRender) {
  questionsToRender.map(
    ({ ask, type, label, icon, direction, behavior, validationType }) => {
      createBlock(ask, type, label, icon, direction, behavior, validationType);
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
  validationType
) {
  if (type === "select") {
    createSelect(questionString, label, icon, direction);
  } else if (type === "input") {
    createInput(questionString, behavior, validationType);
  } else {
    createEnd(questionString, label);
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
    const iconElement = document.createElement("i");
    iconElement.style.marginRight = "5px";
    iconElement.style.marginLeft = "5px";
    iconElement.className = icon;
    iconElement.style.width = "30px";
    iconElement.style.height = "30px";
    iconElement.style.flexBasis = "20%";
    question.style.flexBasis = "80%";
    mainBlock.append(iconElement);
  }

  mainBlock.append(question);
  localMainInput.style.flexDirection = direction != "column" ? "row" : "column";
  localMainInput.style.alignItems =
    direction != "column" ? "baseline" : "center";
  localMainInput.style.flexWrap = "nowrap";
  if (direction == "column") {
    mainBlock.style.marginTop = "10px";
    mainBlock.style.width = "50%";
    mainBlock.style.textAlign = "left";
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

function createEnd(finishMessage, FinishTitle) {
  var localMainInput = document.getElementsByClassName("mainInput")[0];
  if (localMainInput) {
    localMainInput.remove();
  }
  document.getElementsByClassName("container")[0].append(actualQuestionTag);
  document.getElementsByClassName("container")[0].append(mainInputTag);

  document.getElementById("actualQuestion").innerHTML = FinishTitle;
  response();
}

function nextQuestionsFinder(questionObject, answer) {
  const answerFinded = !Array.isArray(questionObject)
    ? questionObject
    : questionObject.find(({ ask }) => ask == answer);

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

function response() {
  //aqui has lo que tengas que hacer para el form o como sea que quieras manejar las respuestas
  let email = "";
  const emailVal = validations.find(({ type }) => type == "email");

  answers.forEach((obj) => {
    let key = Object.keys(obj)[0];
    if (regexValidation(obj[key], emailVal) && obj[key].includes("@")) {
      email = obj[key];
    }
  });

  sendEmail(email, {
    Subject: "Completaste el test",
    Body: "te enviamos nuestros productos",
  });
  sendResponses();
}

function sendEmail(email, objToSend) {
  Email.send({
    SecureToken: "0c1cc91b-b25a-4e1a-a95b-d8cf4f98befb",
    To: email,
    From: "javelav20151@gmail.com",
    Subject: objToSend.Subject,
    Body: "Hola," + " " + answers[0] + " " + objToSend.Body,
  }).then((message) => console.log(message));
}

function sendResponses() {
  //https://script.google.com/macros/s/AKfycbw-1MBDxABAxQS8wq1EJs1DLqRJpGglUVjD_jMLhcdZ1kFOGb9g59ihovIF-CLR0OmT/exec
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbw-1MBDxABAxQS8wq1EJs1DLqRJpGglUVjD_jMLhcdZ1kFOGb9g59ihovIF-CLR0OmT/exec";
  const form = document.forms["submit-to-google-sheet"];

  // fetch(scriptURL, { method: "POST", body: new FormData(form) })
  //   .then((response) => console.log("Success!", response))
  //   .catch((error) => console.error("Error!", error.message));
}

function regexValidation(string, regexObject) {
  let isCorrect =
    regexObject.regex.test(string) ||
    countries.some((country) => string === country);
  if (!isCorrect) inputTypeError(regexObject.message);
  return isCorrect;
}

function inputTypeError(validationMessage) {}

function createResponseForm() {}
