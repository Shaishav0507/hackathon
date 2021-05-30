const quizData = [
  {
    question:
      "Which of the following is/are the symptoms of Black Fungus? \n \n1. Facial Swelling 2. Nasal Congestion 3. Headache",
    a: "Only 1",
    b: "Both 2",
    c: "Only 3",
    d: "1, 2 and 3",
    correct: "d",
  },
  {
    question:
      "In India, when did the second phase of COVID-19 vaccination start?",
    a: "December 2020",
    b: "January 2021",
    c: "March 2021",
    d: "Feburary 2021",
    correct: "c",
  },
  {
    question: 
    " In which age group the COVID-19 spreads?",
    a: "COVID-19 occurs in all age groups.",
    b: "Coronavirus infection is mild in children.",
    c: "Older person and persons with pre-existing medical conditions are at high risk to develop serious illness.",
    d: "All the above are correct",
    correct: "d",
  },
  {
    question:
     "The first case of novel coronavirus was identified in .....",
    a: "Beijing",
    b: "Shanghai",
    c: "Wuhan, Hubei ",
    d: "Tianjin",
    correct: "c",
  },
  {
    question:
     "Which of the following regarding Isolation during COVID-19 is correct? \n1. Got tested postive for the virus or having symptoms. \n 2. It means being separated from other people.",
    a: "Only 1",
    b: "Only 2",
    c: "Both 1 and 2",
    d: "Neither 1 or 2",
    correct: "c",
  },
  {
    question:
    "In India, when did the second phase of COVID-19 vaccination start?",
    a: "December 2020",
    b: "January 2021",
    c: "February 2021",
    d: "March 2021",
    correct: "d",
  },
  {
    question:
    "How many countries, areas, or territories are suffering from novel coronavirus outbreaks in the World?",
    a: "More than 50",
    b: "More than 100",
    c: "More than 150",
    d: "More than 200",
    correct: "d",
  },
  {
    question:
    "In a study, which cells are found in COVID-19 patients 'bode well' for long-term immunity?",
    a: "P-cell",
    b: "T-cell",
    c: "D-cell",
    d: "Endothelial Cells",
    correct: "b",
  },
  {
    question:
    "Name a clinical trial in which blood is transfused from recovered COVID-19 patients to a coronavirus patient who is in critical condition?",
    a: "Plasma Therapy",
    b: "Solidarity",
    c: "Remdesivir",
    d: "Hydroxychloroquine",
    correct: "a",
  },
  {
    question:
    "From where coronavirus got its name?",
    a: "Due to their crown-like projections",
    b: "Due to their leaf-like projections",
    c: "Due to their surface structure of bricks",
    d: "None of the above",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
              <h2>You answered ${score}/${quizData.length} questions correctly</h2>
              <button onclick="location.reload()">Reload</button>
          `;
    }
  }
});
