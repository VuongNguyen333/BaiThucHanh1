
// Danh sách các câu hỏi
var questions = [
  {
    "questionNumber": 1,
    "type": "trueFalse",
    "question": "Câu hỏi 1: Đây là câu hỏi tích đúng/sai?",
    "answer": true
  },
  {
    "questionNumber": 2,
    "type": "trueFalse",
    "question": "Câu hỏi 2: Đây là câu hỏi tích đúng/sai?",
    "answer": true
  },
  {
    "questionNumber": 3,
    "type": "trueFalse",
    "question": "Câu hỏi 3: Đây là câu hỏi tích đúng/sai?",
    "answer": true
  },
  {
    "questionNumber": 4,
    "type": "trueFalse",
    "question": "Câu hỏi 4: Đây là câu hỏi tích đúng/sai?",
    "answer": true
  },
  {
    "questionNumber": 5,
    "type": "trueFalse",
    "question": "Câu hỏi 5: Đây là câu hỏi tích đúng/sai?",
    "answer": true
  },
  {
    "questionNumber": 6,
    "type": "trueFalse",
    "question": "Câu hỏi 6: Đây là câu hỏi tích đúng/sai?",
    "answer": true
  },
  {
    "questionNumber": 7,
    "type": "trueFalse",
    "question": "Câu hỏi 7: Đây là câu hỏi tích đúng/sai?",
    "answer": true
  },
  {
    "questionNumber": 8,
    "type": "trueFalse",
    "question": "Câu hỏi 8: Đây là câu hỏi tích đúng/sai?",
    "answer": true
  },
  {
    "questionNumber": 9,
    "type": "trueFalse",
    "question": "Câu hỏi 9: Đây là câu hỏi tích đúng/sai?",
    "answer": true
  },
  {
    "questionNumber": 10,
    "type": "trueFalse",
    "question": "Câu hỏi 10: Đây là câu hỏi tích đúng/sai?",
    "answer": true
  },
  {
    "questionNumber": 11,
    "type": "multipleChoice",
    "question": "Câu hỏi 11: Đâu là ngôn ngữ lập trình phía client?",
    "choices": ["Java", "Python", "JavaScript", "C"],
    "answer": "JavaScript"
  },
  {
    "questionNumber": 12,
    "type": "multipleChoice",
    "question": "Câu hỏi 12: Đâu là ngôn ngữ lập trình phía client?",
    "choices": ["Java", "Python", "JavaScript", "C"],
    "answer": "JavaScript"
  },
  {
    "questionNumber": 13,
    "type": "multipleChoice",
    "question": "Câu hỏi 13: Đâu là ngôn ngữ lập trình phía client?",
    "choices": ["Java", "Python", "JavaScript", "C"],
    "answer": "JavaScript"
  },
  {
    "questionNumber": 14,
    "type": "multipleChoice",
    "question": "Câu hỏi 14: Đâu là ngôn ngữ lập trình phía client?",
    "choices": ["Java", "Python", "JavaScript", "C"],
    "answer": "JavaScript"
  },
  {
    "questionNumber": 15,
    "type": "multipleChoice",
    "question": "Câu hỏi 15: Đâu là ngôn ngữ lập trình phía client?",
    "choices": ["Java", "Python", "JavaScript", "C"],
    "answer": "JavaScript"
  },
  {
    "questionNumber": 16,
    "type": "multipleChoice",
    "question": "Câu hỏi 16: Đâu là ngôn ngữ lập trình phía client?",
    "choices": ["Java", "Python", "JavaScript", "C"],
    "answer": "JavaScript"
  },
  {
    "questionNumber": 17,
    "type": "multipleChoice",
    "question": "Câu hỏi 17: Đâu là ngôn ngữ lập trình phía client?",
    "choices": ["Java", "Python", "JavaScript", "C"],
    "answer": "JavaScript"
  },
  {
    "questionNumber": 18,
    "type": "multipleChoice",
    "question": "Câu hỏi 18: Đâu là ngôn ngữ lập trình phía client?",
    "choices": ["Java", "Python", "JavaScript", "C"],
    "answer": "JavaScript"
  },
  {
    "questionNumber": 19,
    "type": "multipleChoice",
    "question": "Câu hỏi 19: Đâu là ngôn ngữ lập trình phía client?",
    "choices": ["Java", "Python", "JavaScript", "C"],
    "answer": "JavaScript"
  },
  {
    "questionNumber": 20,
    "type": "multipleChoice",
    "question": "Câu hỏi 20: Đâu là ngôn ngữ lập trình phía client?",
    "choices": ["Java", "Python", "JavaScript", "C"],
    "answer": "JavaScript"
  },
  {
    "questionNumber": 21,
    "type": "multipleAnswer",
    "question": "Câu hỏi 21: HTML là viết tắt của từ gì?",
    "choices": ["Hyper Text Markup Language", "Highly Typed Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    "answer": ["Hyper Text Markup Language"]
  },
  {
    "questionNumber": 22,
    "type": "multipleAnswer",
    "question": "Câu hỏi 22: HTML là viết tắt của từ gì?",
    "choices": ["Hyper Text Markup Language", "Highly Typed Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    "answer": ["Hyper Text Markup Language"]
  },
  {
    "questionNumber": 23,
    "type": "multipleAnswer",
    "question": "Câu hỏi 23: HTML là viết tắt của từ gì?",
    "choices": ["Hyper Text Markup Language", "Highly Typed Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    "answer": ["Hyper Text Markup Language"]
  },
  {
    "questionNumber": 24,
    "type": "multipleAnswer",
    "question": "Câu hỏi 24: HTML là viết tắt của từ gì?",
    "choices": ["Hyper Text Markup Language", "Highly Typed Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    "answer": ["Hyper Text Markup Language"]
  },
  {
    "questionNumber": 25,
    "type": "multipleAnswer",
    "question": "Câu hỏi 25: HTML là viết tắt của từ gì?",
    "choices": ["Hyper Text Markup Language", "Highly Typed Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    "answer": ["Hyper Text Markup Language"]
  },
  {
    "questionNumber": 26,
    "type": "multipleAnswer",
    "question": "Câu hỏi 26: HTML là viết tắt của từ gì?",
    "choices": ["Hyper Text Markup Language", "Highly Typed Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    "answer": ["Hyper Text Markup Language"]
  },
  {
    "questionNumber": 27,
    "type": "multipleAnswer",
    "question": "Câu hỏi 27: HTML là viết tắt của từ gì?",
    "choices": ["Hyper Text Markup Language", "Highly Typed Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    "answer": ["Hyper Text Markup Language"]
  },
  {
    "questionNumber": 28,
    "type": "multipleAnswer",
    "question": "Câu hỏi 28: HTML là viết tắt của từ gì?",
    "choices": ["Hyper Text Markup Language", "Highly Typed Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    "answer": ["Hyper Text Markup Language"]
  },
  {
    "questionNumber": 29,
    "type": "multipleAnswer",
    "question": "Câu hỏi 29: HTML là viết tắt của từ gì?",
    "choices": ["Hyper Text Markup Language", "Highly Typed Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    "answer": ["Hyper Text Markup Language"]
  },
  {
    "questionNumber": 30,
    "type": "multipleAnswer",
    "question": "Câu hỏi 30: HTML là viết tắt của từ gì?",
    "choices": ["Hyper Text Markup Language", "Highly Typed Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    "answer": ["Hyper Text Markup Language"]
  },
  {
    "questionNumber": 31,
    "type": "text",
    "question": "Câu hỏi 31: Nhập tên ngôn ngữ lập trình phía server:",
    "answer": "PHP"
  },
  {
    "questionNumber": 32,
    "type": "text",
    "question": "Câu hỏi 32: Nhập tên ngôn ngữ lập trình phía server:",
    "answer": "PHP"
  },
  {
    "questionNumber": 33,
    "type": "text",
    "question": "Câu hỏi 33: Nhập tên ngôn ngữ lập trình phía server:",
    "answer": "PHP"
  },
  {
    "questionNumber": 34,
    "type": "text",
    "question": "Câu hỏi 34: Nhập tên ngôn ngữ lập trình phía server:",
    "answer": "PHP"
  },
  {
    "questionNumber": 35,
    "type": "text",
    "question": "Câu hỏi 35: Nhập tên ngôn ngữ lập trình phía server:",
    "answer": "PHP"
  },
  {
    "questionNumber": 36,
    "type": "text",
    "question": "Câu hỏi 36: Nhập tên ngôn ngữ lập trình phía server:",
    "answer": "PHP"
  },
  {
    "questionNumber": 37,
    "type": "text",
    "question": "Câu hỏi 37: Nhập tên ngôn ngữ lập trình phía server:",
    "answer": "PHP"
  },
  {
    "questionNumber": 38,
    "type": "text",
    "question": "Câu hỏi 38: Nhập tên ngôn ngữ lập trình phía server:",
    "answer": "PHP"
  },
  {
    "questionNumber": 39,
    "type": "text",
    "question": "Câu hỏi 39: Nhập tên ngôn ngữ lập trình phía server:",
    "answer": "PHP"
  },
  {
    "questionNumber": 40,
    "type": "text",
    "question": "Câu hỏi 40: Nhập tên ngôn ngữ lập trình phía server:",
    "answer": "PHP"
  }
]

// Tạo câu hỏi ra html
var questionContainer = document.getElementById("questionContainer");

questions.forEach(function (questionObj, index) {
  var questionElement = document.createElement("div");
  questionElement.classList.add("question");

  var questionText = document.createElement("p");

  questionText.textContent = questionObj.question;

  questionElement.appendChild(questionText);
  // questionElement.innerText = questionElement.innerText + '\n';

  if (questionObj.type === "trueFalse") {
    var trueFalseId = "question" + (index + 1) + "True";
    // console.log('🚀 ~ (index + 1):', (index + 1))
    var trueFalseInput = document.createElement("input");
    trueFalseInput.type = "radio";
    trueFalseInput.name = "question" + (index + 1);
    trueFalseInput.id = trueFalseId;
    trueFalseInput.value = "true";
    questionElement.appendChild(trueFalseInput);

    var trueFalseLabel = document.createElement("label");
    // questionElement.appendChild(document.createElement("p"));
    trueFalseLabel.textContent = "Đúng";
    trueFalseLabel.htmlFor = trueFalseId;
    questionElement.appendChild(trueFalseLabel);

    var trueFalseId = "question" + (index + 1) + "False";
    var trueFalseInput = document.createElement("input");
    trueFalseInput.type = "radio";
    trueFalseInput.name = "question" + (index + 1);
    trueFalseInput.id = trueFalseId;
    trueFalseInput.value = "false";
    questionElement.appendChild(document.createElement("br"));

    questionElement.appendChild(trueFalseInput);

    var trueFalseLabel = document.createElement("label");
    trueFalseLabel.textContent = "Sai";
    trueFalseLabel.htmlFor = trueFalseId;
    questionElement.appendChild(trueFalseLabel);
  } else if (questionObj.type === "multipleChoice") {
    questionObj.choices.forEach(function (choice, choiceIndex) {
      var choiceId = "question" + (index + 1) + "Choice" + (choiceIndex + 1);
      var choiceInput = document.createElement("input");
      choiceInput.type = "radio";
      choiceInput.name = "question" + (index + 1);
      choiceInput.id = choiceId;
      choiceInput.value = choice;
      questionElement.appendChild(choiceInput);

      var choiceLabel = document.createElement("label");
      choiceLabel.textContent = choice;
      choiceLabel.htmlFor = choiceId;
      questionElement.appendChild(choiceLabel);
    });
  } else if (questionObj.type === "multipleAnswer") {
    questionObj.choices.forEach(function (choice, choiceIndex) {
      var choiceId = "question" + (index + 1) + "Choice" + (choiceIndex + 1);
      var choiceInput = document.createElement("input");
      choiceInput.type = "checkbox";
      choiceInput.name = "question" + (index + 1) + "[]";
      choiceInput.id = choiceId;
      choiceInput.value = choice;
      questionElement.appendChild(choiceInput);

      var choiceLabel = document.createElement("label");
      choiceLabel.textContent = choice;
      choiceLabel.htmlFor = choiceId;
      questionElement.appendChild(choiceLabel);
    });
  } else if (questionObj.type === "text") {
    var textInput = document.createElement("input");
    textInput.type = "text";
    textInput.name = "question" + (index + 1);
    questionElement.appendChild(textInput);
  }

  questionContainer.appendChild(questionElement);
});

function arraysEqual(arr1, arr2) {

  if (!arr1 || !arr2) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

function submitQuiz(event) {
  event.preventDefault();

  var resultElement = document.getElementById("result");

  var name = localStorage.getItem('name');
  var dob = localStorage.getItem('dob');
  var studentId = localStorage.getItem('studentId');
  var className = localStorage.getItem('className');


  resultElement.innerText = 'Sinh viên: ' + name + '\n';
  resultElement.innerText += 'Ngày sinh: ' + dob + '\n';
  resultElement.innerText += 'Mã sinh viên: ' + studentId + '\n';
  resultElement.innerText += 'Lớp: ' + className + '\n';

  var answers = [];
  var questionElements = document.getElementsByClassName("question");

  for (var i = 0; i < questionElements.length; i++) {
    var questionElement = questionElements[i];
    var questionType = questions[i].type;

    if (questionType === "trueFalse") {
      var selectedAnswer = questionElement.querySelector("input:checked");
      if (selectedAnswer) {
        if (selectedAnswer) {
          answers.push(selectedAnswer.value === "true");
        } else {
          answers.push("");
        }
      }
    } else if (questionType === "multipleChoice") {
      var selectedAnswer = questionElement.querySelector("input:checked");
      if (selectedAnswer) {
        answers.push(selectedAnswer.value);
      } else {
        answers.push("");
      }
    } else if (questionType === "multipleAnswer") {
      var selectedAnswers = [];
      var selectedCheckboxes = questionElement.querySelectorAll("input:checked");
      if (selectedCheckboxes) {
        selectedCheckboxes.forEach(function (checkbox) {
          selectedAnswers.push(checkbox.value);
        });
      } else {
        selectedAnswers.push([]);
      }
      answers.push(selectedAnswers);
    } else if (questionType === "text") {
      var textInput = questionElement.querySelector("input[type='text']");
      if (textInput) {
        answers.push(textInput.value);
      } else {
        answers.push("");
      }
    }
  }

  // Kiểm tra đáp án và đếm số câu trả lời đúng
  var correctCount = 0;
  for (var j = 0; j < questions.length; j++) {
    console.log('🚀 ~ submitQuiz ~ answers:', answers)


    var question = questions[j];
    var userAnswer = answers[j];
    var correctAnswer = question.answer;
    console.log('🚀 ~ submitQuiz ~ correctAnswer:', correctAnswer)

    if (Array.isArray(correctAnswer)) {
      if (arraysEqual(userAnswer, correctAnswer)) {
        correctCount++;
      }
    } else {
      if (userAnswer === correctAnswer) {
        correctCount++;
      }
    }
  }
  console.log('🚀 ~ submitQuiz ~ answers:', answers)
  console.log('🚀 ~ submitQuiz ~ answers:', answers)
  resultElement.innerHTML += 'Kết quả: ' + correctCount + ' câu đúng.';
  resultElement.style.display = 'block';

  return false;
}