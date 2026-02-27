let questions = [
  {
    question: "JavaScript kis type ki language hai?",
    options: ["Markup", "Programming", "Database", "Styling"],
    correct: 1
  },
  {
    question: "JavaScript ka file extension kya hota hai?",
    options: [".html", ".css", ".js", ".java"],
    correct: 2
  },
  {
    question: "Page par text print karne ke liye kya use hota hai?",
    options: ["console.log()", "print()", "document.write()", "alert()"],
    correct: 2
  },
  {
    question: "Array ka index kis se start hota hai?",
    options: ["1", "0", "-1", "2"],
    correct: 1
  },
  {
    question: "Button click handle karne ke liye kya use hota hai?",
    options: ["onclick", "onhover", "onpress", "onchange"],
    correct: 0
  }
];

let quiz = document.getElementById("quiz");

for (let i = 0; i < questions.length; i++) {

  let h3 = document.createElement("h3");
  h3.innerText = (i + 1) + ". " + questions[i].question;
  quiz.appendChild(h3);

  let result = document.createElement("p");
  quiz.appendChild(result);

  for (let j = 0; j < questions[i].options.length; j++) {
    let btn = document.createElement("button");
    btn.innerText = questions[i].options[j];

    btn.onclick = function () {
      if (j === questions[i].correct) {
        result.innerText = "✔ Correct";
        result.className = "correct";
      } else {
        result.innerText = "❌ Incorrect";
        result.className = "incorrect";
      }
    };

    quiz.appendChild(btn);
  }
  
  quiz.appendChild(document.createElement("hr"));
}