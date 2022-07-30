const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia &amp; Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Central Arfrican Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cuba",
  "Curacao",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauro",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre &amp; Miquelon",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "St Kitts &amp; Nevis",
  "St Lucia",
  "St Vincent",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad &amp; Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks &amp; Caicos",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const validations = [
  {
    type: "age",
    regex: /^(1[89]|[2-9]d)$/,
  },
  {
    type: "email",
    regex: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
  },
  {
    type: "name",
    regex: /^(?!\s*$).+/,
  },
  {
    type: "country",
    regex: /^(?!\s*$).+/,
  },
];

const questions = {
  ask: "Para empezar, por favor dinos cómo te llamas.",
  direction: "",
  behavior: "",
  icon: "",
  validationType: "name",
  type: "input",
  nextQuestions: [
    {
      ask: "¿Cual es tu dirección de correo?",
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
          validationType: "country",
          type: "input",
          nextQuestions: [
            {
              ask: "¿Y en qué ciudad o provincia?",
              direction: "",
              behavior: "",
              icon: "",
              validationType: "none",
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
                      icon: "fas fa-baby",
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
                      icon: "fas fa-baby-carriage",
                      label:
                        "¿Estas embarazada o estás pensando quedarte embarazada?",
                      validationType: "none",
                      type: "select",
                      nextQuestions: [
                        {
                          ask: "Si las he tomado",
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
                      ask: "No estoy segura de estar embarazada",
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
                          label: "Felicidades!!! has terminado el formulario",
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
};

const emails = [
  {
    Subject: "",
    Body: "",
  },
  { Subject: "", Body: "" },
];

let answers = [];

let mainInputTag;
let actualQuestionTag;
let auxiliarQuestion = [];

function actualQuestion() {
  mainInputTag = document.getElementsByClassName("mainInput")[0];
  actualQuestionTag = document.getElementById("actualQuestion");
  document
    .getElementById("actualAnswer")
    .addEventListener("keypress", function (e) {
      e.preventDefault();
      if (e.key === "Enter") {
        document.getElementById("button").click();
      } else if (document.getElementById("actualAnswer")) {
        document.getElementById("actualAnswer").value =
          document.getElementById("actualAnswer").value + e.key;
      }
    });
  setTimeout(function () {
    exitAnimation();
    setTimeout(function () {
      document.getElementById("actualQuestion").innerHTML = questions.ask;
      document.getElementsByClassName("mainInput")[0].style.display = "flex";

      entryAnimation();
    }, 1000);
  }, 3000);
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
  var name = document.getElementById("actualAnswer").value;
  let resultValidation = regexValidation(
    name,
    validations.find(({ type, regex }) => {
      if (type === questions.validationType) {
        return regex;
      }
    })
  );
  if (resultValidation) {
    var answer = document.getElementById("actualQuestion").innerHTML;
    exitAnimation();
    setTimeout(function () {
      document.getElementById("actualAnswer").value = "";
      document.getElementById("actualQuestion").innerHTML =
        "Hola " +
        name +
        ", te haremos unas breves preguntas para conocer más a fondo tu caso";
      document.getElementById("animation").style.animation = "none";
      entryAnimation();
      document.getElementById("button").style.display = "none";
      document.getElementById("actualAnswer").style.display = "none";

      setTimeout(function () {
        saveAnswer(answer, name);
      }, 3000);
    }, 1000);
  } else {
    console.log("error");
  }
}

function saveAnswer(answer, writeAnswer) {
  exitAnimation();
  setTimeout(function () {
    writeAnswer ? answers.push(writeAnswer) : answers.push(answer);
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
  localMainInput.style.flexWrap = "nowrap";
  if (direction == "column") {
    mainBlock.style.marginTop = "5px";
    mainBlock.style.width = "50%";
    mainBlock.style.textAlign = "left";
  } else {
    mainBlock.style.marginRight = "3%";
  }
  localMainInput.style.width = "100%";
  localMainInput.style.height = "100%";
  mainBlock.addEventListener("click", function (e) {
    const answer =
      e.target.nodeName === "P"
        ? e.target.innerHTML
        : e.target.lastChild.innerHTML;

    saveAnswer(answer);
  });
  localMainInput.appendChild(mainBlock);
}

function createInput(questionString, behavior, validationType) {
  var localMainInput = document.getElementsByClassName("mainInput")[0];
  if (localMainInput) {
    localMainInput.remove();
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
      actualAnswerClone.addEventListener("keypress", function (e) {
        e.preventDefault();
        if (e.key === "Enter") {
          document.getElementById("button").click();
        } else {
          document.getElementById("actualAnswer").value =
            document.getElementById("actualAnswer").value + e.key;
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
    if (!resultValidation) {
      console.log("error");
    } else {
      var answer = document.getElementById("actualQuestion").innerHTML;
      saveAnswer(answer, writeAnswer);
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
  sendEmail(answers[1], {
    Subject: "Completaste el test",
    Body: "te enviamos nuestros productos",
  });
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

function regexValidation(string, regexObject) {
  return regexObject.regex.test(string);
}

function inputTypeError(validationType) {}
