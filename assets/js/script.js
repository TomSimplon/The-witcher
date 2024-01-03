const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    document.querySelector('.onglets').style.display = 'block';
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    document.querySelector('.onglets').style.display = 'none';
    menuOpen = false;
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const articles = document.querySelectorAll('.article');
  const totalPages = Math.ceil(articles.length / 4);
  let currentPage = 1;

  const prevButton = document.querySelector('.previous_page');
  const nextButton = document.querySelector('.next_page');
  const pageNumberElement = document.querySelector('.page_number'); // Ajout de cette ligne

  function updateButtonVisibility() {
      prevButton.style.display = (currentPage > 1) ? '' : 'none';
      nextButton.style.display = (currentPage < totalPages) ? '' : 'none';
  }

  function showPage(page) {
      const start = (page - 1) * 4;
      const end = start + 4;
      articles.forEach((article, index) => {
          article.style.display = (index >= start && index < end) ? '' : 'none';
      });
      
      if (totalPages > 1) {
          pageNumberElement.textContent = 'Page ' + page + ' sur ' + totalPages;
      } else {
          pageNumberElement.textContent = ''; 
      }

      updateButtonVisibility();
  }

  prevButton.addEventListener('click', function () {
      if (currentPage > 1) {
          currentPage--;
          showPage(currentPage);
      }
  });

  nextButton.addEventListener('click', function () {
      if (currentPage < totalPages) {
          currentPage++;
          showPage(currentPage);
      }
  });

  showPage(1);
});


window.addEventListener('load', function() { // On récupère toutes les sections
  const sections = document.querySelectorAll('section:not(#accueil, #quiz)');
  sections.forEach(function(section) {
    section.classList.add('hidden');
  });

  // Déclaration des constantes
  const numberDiv1 = document.querySelector('#number1');
  const numberDiv2 = document.querySelector('#number2');
  const numberDiv3 = document.querySelector('#number3');
  const numberDiv4 = document.querySelector('#number4');
  const numberDiv5 = document.querySelector('#number5');
  const numberDiv6 = document.querySelector('#number6');
  const numberDiv7 = document.querySelector('#number7');
  const numberDiv8 = document.querySelector('#number8');
  const numberDiv9 = document.querySelector('#number9');
  const numberDiv10 = document.querySelector('#number10');

  const questionSection1 = document.querySelector('#question_1');
  const questionSection2 = document.querySelector('#question_2');
  const questionSection3 = document.querySelector('#question_3');
  const questionSection4 = document.querySelector('#question_4');
  const questionSection5 = document.querySelector('#question_5');
  const questionSection6 = document.querySelector('#question_6');
  const questionSection7 = document.querySelector('#question_7');
  const questionSection8 = document.querySelector('#question_8');
  const questionSection9 = document.querySelector('#question_9');
  const questionSection10 = document.querySelector('#question_10');
  const arrivéeSection = document.querySelector('#arrivée');

  const answerSection1 = document.querySelector('#answer_1');
  const answerSection2 = document.querySelector('#answer_2');
  const answerSection3 = document.querySelector('#answer_3');
  const answerSection4 = document.querySelector('#answer_4');
  const answerSection5 = document.querySelector('#answer_5');
  const answerSection6 = document.querySelector('#answer_6');
  const answerSection7 = document.querySelector('#answer_7');
  const answerSection8 = document.querySelector('#answer_8');
  const answerSection9 = document.querySelector('#answer_9');
  const answerSection10 = document.querySelector('#answer_10');

const question1Buttons = document.querySelectorAll('#question_1 .good_answer, #question_1 .bad_answer');
const question2Buttons = document.querySelectorAll('#question_2 .good_answer, #question_2 .bad_answer');
const question3Buttons = document.querySelectorAll('#question_3 .good_answer, #question_3 .bad_answer');
const question4Buttons = document.querySelectorAll('#question_4 .good_answer, #question_4 .bad_answer');
const question5Buttons = document.querySelectorAll('#question_5 .good_answer, #question_5 .bad_answer');
const question6Buttons = document.querySelectorAll('#question_6 .good_answer, #question_6 .bad_answer');
const question7Buttons = document.querySelectorAll('#question_7 .good_answer, #question_7 .bad_answer');
const question8Buttons = document.querySelectorAll('#question_8 .good_answer, #question_8 .bad_answer');
const question9Buttons = document.querySelectorAll('#question_9 .good_answer, #question_9 .bad_answer');

const reponse1 = document.querySelector('#question_1 .réponse_1');
const reponse2 = document.querySelector('#question_2 .réponse_2');
const reponse3 = document.querySelector('#question_3 .réponse_3');
const reponse4 = document.querySelector('#question_4 .réponse_4');
const reponse5 = document.querySelector('#question_5 .réponse_5');
const reponse6 = document.querySelector('#question_6 .réponse_6');
const reponse7 = document.querySelector('#question_7 .réponse_7');
const reponse8 = document.querySelector('#question_8 .réponse_8');
const reponse9 = document.querySelector('#question_9 .réponse_9');

const question1Reponse1 = document.querySelector('#question_1 .réponse_1');
const question2Reponse2 = document.querySelector('#question_2 .réponse_2');
const question3Reponse3 = document.querySelector('#question_3 .réponse_3');
const question4Reponse4 = document.querySelector('#question_4 .réponse_4');
const question5Reponse5 = document.querySelector('#question_5 .réponse_5');
const question6Reponse6 = document.querySelector('#question_6 .réponse_6');
const question7Reponse7 = document.querySelector('#question_7 .réponse_7');
const question8Reponse8 = document.querySelector('#question_8 .réponse_8');
const question9Reponse9 = document.querySelector('#question_9 .réponse_9');

let countdown1 = 35;
   let countdown2 = 35;
   let countdown3 = 35;
   let countdown4 = 35;
   let countdown5 = 35;
   let countdown6 = 35;
   let countdown7 = 35;
   let countdown8 = 35;
   let countdown9 = 35;
   let countdown10 = 35;

   let countdownInterval;
   

  function hideQuestionShowAnswer() {
    questionSection1.classList.add('hidden');
    answerSection1.classList.remove('hidden');
    }

    function hideQuestionShowAnswer2() {
      questionSection2.classList.add('hidden');
      answerSection2.classList.remove('hidden');
    }

    function hideQuestionShowAnswer3() {
      questionSection3.classList.add('hidden');
      answerSection3.classList.remove('hidden');
    }

    function hideQuestionShowAnswer4() {
      questionSection4.classList.add('hidden');
      answerSection4.classList.remove('hidden');
    }

    function hideQuestionShowAnswer5() {
      questionSection5.classList.add('hidden');
      answerSection5.classList.remove('hidden');
    }

    function hideQuestionShowAnswer6() {
      questionSection6.classList.add('hidden');
      answerSection6.classList.remove('hidden');
    }

    function hideQuestionShowAnswer7() {
      questionSection7.classList.add('hidden');
      answerSection7.classList.remove('hidden');
    }

    function hideQuestionShowAnswer8() {
      questionSection8.classList.add('hidden');
      answerSection8.classList.remove('hidden');
    }

    function hideQuestionShowAnswer9() {
      questionSection9.classList.add('hidden');
      answerSection9.classList.remove('hidden');
    }

    function hideQuestionShowAnswer10() {
      questionSection10.classList.add('hidden');
      answerSection10.classList.remove('hidden');
    }

    const answerBtns1 = document.querySelectorAll("#question_1 .answer-btn");
    answerBtns1.forEach(btn => {
      btn.addEventListener("click", () => {
      questionSection1.classList.add('hidden');
      answerSection1.classList.remove('hidden');
      clearInterval(countdownInterval);
      });
    });
  
    const answerBtns2 = document.querySelectorAll("#question_2 .answer-btn");
    answerBtns2.forEach(btn => {
      btn.addEventListener("click", () => {
      questionSection2.classList.add('hidden');
      answerSection2.classList.remove('hidden');
      clearInterval(countdownInterval);
      });
    });

    const answerBtns3 = document.querySelectorAll("#question_3 .answer-btn");
    answerBtns3.forEach(btn => {
      btn.addEventListener("click", () => {
      questionSection3.classList.add('hidden');
      answerSection3.classList.remove('hidden');
      clearInterval(countdownInterval);
      });
    });

    const answerBtns4 = document.querySelectorAll("#question_4 .answer-btn");
    answerBtns4.forEach(btn => {
      btn.addEventListener("click", () => {
      questionSection4.classList.add('hidden');
      answerSection4.classList.remove('hidden');
      clearInterval(countdownInterval);
      });
    });

    const answerBtns5 = document.querySelectorAll("#question_5 .answer-btn");
    answerBtns5.forEach(btn => {
      btn.addEventListener("click", () => {
      questionSection5.classList.add('hidden');
      answerSection5.classList.remove('hidden');
      clearInterval(countdownInterval);
      });
    });

    const answerBtns6 = document.querySelectorAll("#question_6 .answer-btn");
    answerBtns6.forEach(btn => {
      btn.addEventListener("click", () => {
      questionSection6.classList.add('hidden');
      answerSection6.classList.remove('hidden');
      clearInterval(countdownInterval);
      });
    });

    const answerBtns7 = document.querySelectorAll("#question_7 .answer-btn");
    answerBtns7.forEach(btn => {
      btn.addEventListener("click", () => {
      questionSection7.classList.add('hidden');
      answerSection7.classList.remove('hidden');
      clearInterval(countdownInterval);
      });
    });

    const answerBtns8 = document.querySelectorAll("#question_8 .answer-btn");
    answerBtns8.forEach(btn => {
      btn.addEventListener("click", () => {
      questionSection8.classList.add('hidden');
      answerSection8.classList.remove('hidden');
      clearInterval(countdownInterval);
      });
    })

    const answerBtns9 = document.querySelectorAll("#question_9 .answer-btn");
    answerBtns9.forEach(btn => {
      btn.addEventListener("click", () => {
      questionSection9.classList.add('hidden');
      answerSection9.classList.remove('hidden');
      clearInterval(countdownInterval);
      });
    })

    const answerBtns10 = document.querySelectorAll("#question_10 .answer-btn");
    answerBtns10.forEach(btn => {
      btn.addEventListener("click", () => {
      questionSection10.classList.add('hidden');
      answerSection10.classList.remove('hidden');
      clearInterval(countdownInterval);
      });
    })

// Question 1
question1Buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('good_answer')) {
      reponse1.style.backgroundColor = 'green';
    } else if (button.classList.contains('bad_answer')) {
      reponse1.style.backgroundColor = 'red';
    }

    const question2Progress = document.querySelector('#question_2 .progress');
    if (question1Reponse1.style.backgroundColor === 'green') {
      question2Progress.querySelector('.réponse_1').style.backgroundColor = 'green';
    } else if (question1Reponse1.style.backgroundColor === 'red') {
      question2Progress.querySelector('.réponse_1').style.backgroundColor = 'red';
    }
  });
});

document.querySelector('.begin').addEventListener('click', function() {
  document.querySelector('#accueil').classList.add('hidden');
  document.querySelector('#question_1').classList.remove('hidden');
  function startCountdown() {
    clearInterval(countdownInterval);
    countdownInterval = setInterval(function() {
      if (!questionSection1.classList.contains('hidden')) {
        countdown1--;
        numberDiv1.innerHTML = `<p><strong>${countdown1}</strong></p>`;
        if (countdown1 <= 0) {
          clearInterval(countdownInterval);
          hideQuestionShowAnswer()
          reponse1.style.backgroundColor = 'red';

          const question2Progress = document.querySelector('#question_2 .progress');
          if (question1Reponse1.style.backgroundColor === 'green') {
          question2Progress.querySelector('.réponse_1').style.backgroundColor = 'green';
          } else if (question1Reponse1.style.backgroundColor === 'red') {
          question2Progress.querySelector('.réponse_1').style.backgroundColor = 'red';
          }
        }
      }
    }, 1000);
  }
  startCountdown();
});

// Question 2
question2Buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('good_answer')) {
      reponse2.style.backgroundColor = 'green';
    } else if (button.classList.contains('bad_answer')) {
      reponse2.style.backgroundColor = 'red';
    }
    
    const question2Progress = document.querySelector('#question_3 .progress');
    if (question1Reponse1.style.backgroundColor === 'green') {
      question2Progress.querySelector('.réponse_1').style.backgroundColor = 'green';
    } else if (question1Reponse1.style.backgroundColor === 'red') {
      question2Progress.querySelector('.réponse_1').style.backgroundColor = 'red';
    }
    const question3Progress = document.querySelector('#question_3 .progress');
    if (question2Reponse2.style.backgroundColor === 'green') {
      question3Progress.querySelector('.réponse_2').style.backgroundColor = 'green';
    } else if (question2Reponse2.style.backgroundColor === 'red') {
      question3Progress.querySelector('.réponse_2').style.backgroundColor = 'red';
    }
  });
});

document.querySelector('#answer_1 .next-btn').addEventListener('click', function() {
  answerSection1.classList.add('hidden');
  questionSection2.classList.remove('hidden');
  function startCountdown2() {
    clearInterval(countdownInterval);
    countdownInterval = setInterval(function() {
      if (!questionSection2.classList.contains('hidden')) {
        countdown2--;
        numberDiv2.innerHTML = `<p><strong>${countdown2}</strong></p>`;
        if (countdown2 <= 0) {
          clearInterval(countdownInterval);
          hideQuestionShowAnswer2()
          reponse2.style.backgroundColor = 'red';

          const question2Progress = document.querySelector('#question_3 .progress');
          if (question1Reponse1.style.backgroundColor === 'green') {
          question2Progress.querySelector('.réponse_1').style.backgroundColor = 'green';
          } else if (question1Reponse1.style.backgroundColor === 'red') {
          question2Progress.querySelector('.réponse_1').style.backgroundColor = 'red';
          }
          const question3Progress = document.querySelector('#question_3 .progress');
          if (question2Reponse2.style.backgroundColor === 'green') {
          question3Progress.querySelector('.réponse_2').style.backgroundColor = 'green';
          } else if (question2Reponse2.style.backgroundColor === 'red') {
          question3Progress.querySelector('.réponse_2').style.backgroundColor = 'red';
          }
        }
      }
    }, 1000);
  }
  startCountdown2();
});

// Question 3
question3Buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('good_answer')) {
      reponse3.style.backgroundColor = 'green';
    } else if (button.classList.contains('bad_answer')) {
      reponse3.style.backgroundColor = 'red';
    }
    
    const question2Progress = document.querySelector('#question_4 .progress');
    if (question1Reponse1.style.backgroundColor === 'green') {
      question2Progress.querySelector('.réponse_1').style.backgroundColor = 'green';
    } else if (question1Reponse1.style.backgroundColor === 'red') {
      question2Progress.querySelector('.réponse_1').style.backgroundColor = 'red';
    }

    const question3Progress = document.querySelector('#question_4 .progress');
    if (question2Reponse2.style.backgroundColor === 'green') {
      question3Progress.querySelector('.réponse_2').style.backgroundColor = 'green';
    } else if (question2Reponse2.style.backgroundColor === 'red') {
      question3Progress.querySelector('.réponse_2').style.backgroundColor = 'red';
    }

    const question4Progress = document.querySelector('#question_4 .progress');
    if (question3Reponse3.style.backgroundColor === 'green') {
      question4Progress.querySelector('.réponse_3').style.backgroundColor = 'green';
    } else if (question3Reponse3.style.backgroundColor === 'red') {
      question4Progress.querySelector('.réponse_3').style.backgroundColor = 'red';
    }
  });
});

document.querySelector('#answer_2 .next-btn').addEventListener('click', function() {
  answerSection2.classList.add('hidden');
  questionSection3.classList.remove('hidden');
  function startCountdown3() {
    clearInterval(countdownInterval);
    countdownInterval = setInterval(function() {
      if (!questionSection3.classList.contains('hidden')) {
        countdown3--;
        numberDiv3.innerHTML = `<p><strong>${countdown3}</strong></p>`;
        if (countdown3 <= 0) {
          clearInterval(countdownInterval);
          hideQuestionShowAnswer3()
          reponse3.style.backgroundColor = 'red';

          const question2Progress = document.querySelector('#question_4 .progress');
          if (question1Reponse1.style.backgroundColor === 'green') {
          question2Progress.querySelector('.réponse_1').style.backgroundColor = 'green';
          } else if (question1Reponse1.style.backgroundColor === 'red') {
          question2Progress.querySelector('.réponse_1').style.backgroundColor = 'red';
          }

          const question3Progress = document.querySelector('#question_4 .progress');
          if (question2Reponse2.style.backgroundColor === 'green') {
          question3Progress.querySelector('.réponse_2').style.backgroundColor = 'green';
          } else if (question2Reponse2.style.backgroundColor === 'red') {
          question3Progress.querySelector('.réponse_2').style.backgroundColor = 'red';
          }

          const question4Progress = document.querySelector('#question_4 .progress');
          if (question3Reponse3.style.backgroundColor === 'green') {
          question4Progress.querySelector('.réponse_3').style.backgroundColor = 'green';
          } else if (question3Reponse3.style.backgroundColor === 'red') {
          question4Progress.querySelector('.réponse_3').style.backgroundColor = 'red';
          }
        }
      }
    }, 1000);
  }
  startCountdown3();
});

// Question 4
question4Buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('good_answer')) {
      reponse4.style.backgroundColor = 'green';
    } else if (button.classList.contains('bad_answer')) {
      reponse4.style.backgroundColor = 'red';
    }
    
    const question2Progress = document.querySelector('#question_5 .progress');
    if (question1Reponse1.style.backgroundColor === 'green') {
      question2Progress.querySelector('.réponse_1').style.backgroundColor = 'green';
    } else if (question1Reponse1.style.backgroundColor === 'red') {
      question2Progress.querySelector('.réponse_1').style.backgroundColor = 'red';
    }

    const question3Progress = document.querySelector('#question_5 .progress');
    if (question2Reponse2.style.backgroundColor === 'green') {
      question3Progress.querySelector('.réponse_2').style.backgroundColor = 'green';
    } else if (question2Reponse2.style.backgroundColor === 'red') {
      question3Progress.querySelector('.réponse_2').style.backgroundColor = 'red';
    }

    const question4Progress = document.querySelector('#question_5 .progress');
    if (question3Reponse3.style.backgroundColor === 'green') {
      question4Progress.querySelector('.réponse_3').style.backgroundColor = 'green';
    } else if (question3Reponse3.style.backgroundColor === 'red') {
      question4Progress.querySelector('.réponse_3').style.backgroundColor = 'red';
    }

    const question5Progress = document.querySelector('#question_5 .progress');
    if (question4Reponse4.style.backgroundColor === 'green') {
      question5Progress.querySelector('.réponse_4').style.backgroundColor = 'green';
    } else if (question4Reponse4.style.backgroundColor === 'red') {
      question5Progress.querySelector('.réponse_4').style.backgroundColor = 'red';
    }
  });
});

document.querySelector('#answer_3 .next-btn').addEventListener('click', function() {
  answerSection3.classList.add('hidden');
  questionSection4.classList.remove('hidden');
  function startCountdown4() {
    clearInterval(countdownInterval);
    countdownInterval = setInterval(function() {
      if (!questionSection4.classList.contains('hidden')) {
        countdown4--;
        numberDiv4.innerHTML = `<p><strong>${countdown4}</strong></p>`;
        if (countdown4 <= 0) {
          clearInterval(countdownInterval);
          hideQuestionShowAnswer4()
          reponse4.style.backgroundColor = 'red';

          const question2Progress = document.querySelector('#question_5 .progress');
          if (question1Reponse1.style.backgroundColor === 'green') {
          question2Progress.querySelector('.réponse_1').style.backgroundColor = 'green';
          } else if (question1Reponse1.style.backgroundColor === 'red') {
          question2Progress.querySelector('.réponse_1').style.backgroundColor = 'red';
          }

          const question3Progress = document.querySelector('#question_5 .progress');
          if (question2Reponse2.style.backgroundColor === 'green') {
          question3Progress.querySelector('.réponse_2').style.backgroundColor = 'green';
          } else if (question2Reponse2.style.backgroundColor === 'red') {
          question3Progress.querySelector('.réponse_2').style.backgroundColor = 'red';
          }

          const question4Progress = document.querySelector('#question_5 .progress');
          if (question3Reponse3.style.backgroundColor === 'green') {
          question4Progress.querySelector('.réponse_3').style.backgroundColor = 'green';
          } else if (question3Reponse3.style.backgroundColor === 'red') {
          question4Progress.querySelector('.réponse_3').style.backgroundColor = 'red';
          }

          const question5Progress = document.querySelector('#question_5 .progress');
          if (question4Reponse4.style.backgroundColor === 'green') {
          question5Progress.querySelector('.réponse_4').style.backgroundColor = 'green';
          } else if (question4Reponse4.style.backgroundColor === 'red') {
          question5Progress.querySelector('.réponse_4').style.backgroundColor = 'red';
          }
        }
      }
    }, 1000);
  }
  startCountdown4();
});

// Question 5
question5Buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('good_answer')) {
      reponse5.style.backgroundColor = 'green';
    } else if (button.classList.contains('bad_answer')) {
      reponse5.style.backgroundColor = 'red';
    }
    
    const question2Progress = document.querySelector('#question_6 .progress');
    if (question1Reponse1.style.backgroundColor === 'green') {
      question2Progress.querySelector('.réponse_1').style.backgroundColor = 'green';
    } else if (question1Reponse1.style.backgroundColor === 'red') {
      question2Progress.querySelector('.réponse_1').style.backgroundColor = 'red';
    }

    const question3Progress = document.querySelector('#question_6 .progress');
    if (question2Reponse2.style.backgroundColor === 'green') {
      question3Progress.querySelector('.réponse_2').style.backgroundColor = 'green';
    } else if (question2Reponse2.style.backgroundColor === 'red') {
      question3Progress.querySelector('.réponse_2').style.backgroundColor = 'red';
    }

    const question4Progress = document.querySelector('#question_6 .progress');
    if (question3Reponse3.style.backgroundColor === 'green') {
      question4Progress.querySelector('.réponse_3').style.backgroundColor = 'green';
    } else if (question5Reponse5.style.backgroundColor === 'red') {
      question4Progress.querySelector('.réponse_3').style.backgroundColor = 'red';
    }

    const question5Progress = document.querySelector('#question_6 .progress');
    if (question4Reponse4.style.backgroundColor === 'green') {
      question5Progress.querySelector('.réponse_4').style.backgroundColor = 'green';
    } else if (question4Reponse4.style.backgroundColor === 'red') {
      question5Progress.querySelector('.réponse_4').style.backgroundColor = 'red';
    }

  
  const question6Progress = document.querySelector('#question_6 .progress');
  if (question5Reponse5.style.backgroundColor === 'green') {
    question6Progress.querySelector('.réponse_5').style.backgroundColor = 'green';
  } else if (question5Reponse5.style.backgroundColor === 'red') {
    question6Progress.querySelector('.réponse_5').style.backgroundColor = 'red';
  }
});
});

document.querySelector('#answer_4 .next-btn').addEventListener('click', function() {
  answerSection4.classList.add('hidden');
  questionSection5.classList.remove('hidden');
  function startCountdown5() {
    clearInterval(countdownInterval);
    countdownInterval = setInterval(function() {
      if (!questionSection5.classList.contains('hidden')) {
        countdown5--;
        numberDiv5.innerHTML = `<p><strong>${countdown5}</strong></p>`;
        if (countdown5 <= 0) {
          clearInterval(countdownInterval);
          hideQuestionShowAnswer5()
          reponse5.style.backgroundColor = 'red';

          const question2Progress = document.querySelector('#question_6 .progress');
          if (question1Reponse1.style.backgroundColor === 'green') {
          question2Progress.querySelector('.réponse_1').style.backgroundColor = 'green';
          } else if (question1Reponse1.style.backgroundColor === 'red') {
          question2Progress.querySelector('.réponse_1').style.backgroundColor = 'red';
          }

          const question3Progress = document.querySelector('#question_6 .progress');
          if (question2Reponse2.style.backgroundColor === 'green') {
          question3Progress.querySelector('.réponse_2').style.backgroundColor = 'green';
          } else if (question2Reponse2.style.backgroundColor === 'red') {
          question3Progress.querySelector('.réponse_2').style.backgroundColor = 'red';
          }

          const question4Progress = document.querySelector('#question_6 .progress');
          if (question3Reponse3.style.backgroundColor === 'green') {
          question4Progress.querySelector('.réponse_3').style.backgroundColor = 'green';
          } else if (question5Reponse5.style.backgroundColor === 'red') {
          question4Progress.querySelector('.réponse_3').style.backgroundColor = 'red';
          }

          const question5Progress = document.querySelector('#question_6 .progress');
          if (question4Reponse4.style.backgroundColor === 'green') {
          question5Progress.querySelector('.réponse_4').style.backgroundColor = 'green';
          } else if (question4Reponse4.style.backgroundColor === 'red') {
          question5Progress.querySelector('.réponse_4').style.backgroundColor = 'red';
          }

  
          const question6Progress = document.querySelector('#question_6 .progress');
          if (question5Reponse5.style.backgroundColor === 'green') {
          question6Progress.querySelector('.réponse_5').style.backgroundColor = 'green';
          } else if (question5Reponse5.style.backgroundColor === 'red') {
          question6Progress.querySelector('.réponse_5').style.backgroundColor = 'red';
          }
        }
      }
    }, 1000);
  }
  startCountdown5();
});

// Question 6
question6Buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('good_answer')) {
      reponse6.style.backgroundColor = 'green';
    } else if (button.classList.contains('bad_answer')) {
      reponse6.style.backgroundColor = 'red';
    }
    
    const question2Progress = document.querySelector('#question_7 .progress');
    if (question1Reponse1.style.backgroundColor === 'green') {
      question2Progress.querySelector('.réponse_1').style.backgroundColor = 'green';
    } else if (question1Reponse1.style.backgroundColor === 'red') {
      question2Progress.querySelector('.réponse_1').style.backgroundColor = 'red';
    }

    const question3Progress = document.querySelector('#question_7 .progress');
    if (question2Reponse2.style.backgroundColor === 'green') {
      question3Progress.querySelector('.réponse_2').style.backgroundColor = 'green';
    } else if (question2Reponse2.style.backgroundColor === 'red') {
      question3Progress.querySelector('.réponse_2').style.backgroundColor = 'red';
    }

    const question4Progress = document.querySelector('#question_7 .progress');
    if (question3Reponse3.style.backgroundColor === 'green') {
      question4Progress.querySelector('.réponse_3').style.backgroundColor = 'green';
    } else if (question3Reponse3.style.backgroundColor === 'red') {
      question4Progress.querySelector('.réponse_3').style.backgroundColor = 'red';
    }

    const question5Progress = document.querySelector('#question_7 .progress');
    if (question4Reponse4.style.backgroundColor === 'green') {
      question5Progress.querySelector('.réponse_4').style.backgroundColor = 'green';
    } else if (question4Reponse4.style.backgroundColor === 'red') {
      question5Progress.querySelector('.réponse_4').style.backgroundColor = 'red';
    }
    
    const question6Progress = document.querySelector('#question_7 .progress');
  if (question5Reponse5.style.backgroundColor === 'green') {
    question6Progress.querySelector('.réponse_5').style.backgroundColor = 'green';
  } else if (question5Reponse5.style.backgroundColor === 'red') {
    question6Progress.querySelector('.réponse_5').style.backgroundColor = 'red';
  }

  const question7Progress = document.querySelector('#question_7 .progress');
  if (question6Reponse6.style.backgroundColor === 'green') {
    question7Progress.querySelector('.réponse_6').style.backgroundColor = 'green';
  } else if (question6Reponse6.style.backgroundColor === 'red') {
    question7Progress.querySelector('.réponse_6').style.backgroundColor = 'red';
  }
});
});

document.querySelector('#answer_5 .next-btn').addEventListener('click', function() {
  answerSection5.classList.add('hidden');
  questionSection6.classList.remove('hidden');
  function startCountdown6() {
    clearInterval(countdownInterval);
    countdownInterval = setInterval(function() {
      if (!questionSection6.classList.contains('hidden')) {
        countdown6--;
        numberDiv6.innerHTML = `<p><strong>${countdown6}</strong></p>`;
        if (countdown6 <= 0) {
          clearInterval(countdownInterval);
          hideQuestionShowAnswer6()
          reponse6.style.backgroundColor = 'red';

          const question2Progress = document.querySelector('#question_7 .progress');
          if (question1Reponse1.style.backgroundColor === 'green') {
          question2Progress.querySelector('.réponse_1').style.backgroundColor = 'green';
          } else if (question1Reponse1.style.backgroundColor === 'red') {
          question2Progress.querySelector('.réponse_1').style.backgroundColor = 'red';
          }

          const question3Progress = document.querySelector('#question_7 .progress');
          if (question2Reponse2.style.backgroundColor === 'green') {
          question3Progress.querySelector('.réponse_2').style.backgroundColor = 'green';
          } else if (question2Reponse2.style.backgroundColor === 'red') {
          question3Progress.querySelector('.réponse_2').style.backgroundColor = 'red';
          }

          const question4Progress = document.querySelector('#question_7 .progress');
          if (question3Reponse3.style.backgroundColor === 'green') {
          question4Progress.querySelector('.réponse_3').style.backgroundColor = 'green';
          } else if (question3Reponse3.style.backgroundColor === 'red') {
          question4Progress.querySelector('.réponse_3').style.backgroundColor = 'red';
          }

          const question5Progress = document.querySelector('#question_7 .progress');
          if (question4Reponse4.style.backgroundColor === 'green') {
          question5Progress.querySelector('.réponse_4').style.backgroundColor = 'green';
          } else if (question4Reponse4.style.backgroundColor === 'red') {
          question5Progress.querySelector('.réponse_4').style.backgroundColor = 'red';
          }
    
          const question6Progress = document.querySelector('#question_7 .progress');
          if (question5Reponse5.style.backgroundColor === 'green') {
          question6Progress.querySelector('.réponse_5').style.backgroundColor = 'green';
          } else if (question5Reponse5.style.backgroundColor === 'red') {
          question6Progress.querySelector('.réponse_5').style.backgroundColor = 'red';
          }

          const question7Progress = document.querySelector('#question_7 .progress');
          if (question6Reponse6.style.backgroundColor === 'green') {
          question7Progress.querySelector('.réponse_6').style.backgroundColor = 'green';
          } else if (question6Reponse6.style.backgroundColor === 'red') {
          question7Progress.querySelector('.réponse_6').style.backgroundColor = 'red';
          }
        }
      }
    }, 1000);
  }
  startCountdown6();
});

// Question 7
question7Buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('good_answer')) {
      reponse7.style.backgroundColor = 'green';
    } else if (button.classList.contains('bad_answer')) {
      reponse7.style.backgroundColor = 'red';
    }
    
    const question2Progress = document.querySelector('#question_8 .progress');
    if (question1Reponse1.style.backgroundColor === 'green') {
      question2Progress.querySelector('.réponse_1').style.backgroundColor = 'green';
    } else if (question1Reponse1.style.backgroundColor === 'red') {
      question2Progress.querySelector('.réponse_1').style.backgroundColor = 'red';
    }

    const question3Progress = document.querySelector('#question_8 .progress');
    if (question2Reponse2.style.backgroundColor === 'green') {
      question3Progress.querySelector('.réponse_2').style.backgroundColor = 'green';
    } else if (question2Reponse2.style.backgroundColor === 'red') {
      question3Progress.querySelector('.réponse_2').style.backgroundColor = 'red';
    }

    const question4Progress = document.querySelector('#question_8 .progress');
    if (question3Reponse3.style.backgroundColor === 'green') {
      question4Progress.querySelector('.réponse_3').style.backgroundColor = 'green';
    } else if (question3Reponse3.style.backgroundColor === 'red') {
      question4Progress.querySelector('.réponse_3').style.backgroundColor = 'red';
    }

    const question5Progress = document.querySelector('#question_8 .progress');
    if (question4Reponse4.style.backgroundColor === 'green') {
      question5Progress.querySelector('.réponse_4').style.backgroundColor = 'green';
    } else if (question4Reponse4.style.backgroundColor === 'red') {
      question5Progress.querySelector('.réponse_4').style.backgroundColor = 'red';
    }
    
    const question6Progress = document.querySelector('#question_8 .progress');
  if (question5Reponse5.style.backgroundColor === 'green') {
    question6Progress.querySelector('.réponse_5').style.backgroundColor = 'green';
  } else if (question5Reponse5.style.backgroundColor === 'red') {
    question6Progress.querySelector('.réponse_5').style.backgroundColor = 'red';
  }

  const question7Progress = document.querySelector('#question_8 .progress');
  if (question6Reponse6.style.backgroundColor === 'green') {
    question7Progress.querySelector('.réponse_6').style.backgroundColor = 'green';
  } else if (question6Reponse6.style.backgroundColor === 'red') {
    question7Progress.querySelector('.réponse_6').style.backgroundColor = 'red';
  }

  const question8Progress = document.querySelector('#question_8 .progress');
  if (question7Reponse7.style.backgroundColor === 'green') {
    question8Progress.querySelector('.réponse_7').style.backgroundColor = 'green';
  } else if (question7Reponse7.style.backgroundColor === 'red') {
    question8Progress.querySelector('.réponse_7').style.backgroundColor = 'red';
  }
});
});

document.querySelector('#answer_6 .next-btn').addEventListener('click', function() {
  answerSection6.classList.add('hidden');
  questionSection7.classList.remove('hidden');
  function startCountdown7() {
    clearInterval(countdownInterval);
    countdownInterval = setInterval(function() {
      if (!questionSection7.classList.contains('hidden')) {
        countdown7--;
        numberDiv7.innerHTML = `<p><strong>${countdown7}</strong></p>`;
        if (countdown7 <= 0) {
          clearInterval(countdownInterval);
          hideQuestionShowAnswer7()
          reponse7.style.backgroundColor = 'red';

          const question2Progress = document.querySelector('#question_8 .progress');
          if (question1Reponse1.style.backgroundColor === 'green') {
          question2Progress.querySelector('.réponse_1').style.backgroundColor = 'green';
          } else if (question1Reponse1.style.backgroundColor === 'red') {
          question2Progress.querySelector('.réponse_1').style.backgroundColor = 'red';
          }

          const question3Progress = document.querySelector('#question_8 .progress');
          if (question2Reponse2.style.backgroundColor === 'green') {
          question3Progress.querySelector('.réponse_2').style.backgroundColor = 'green';
          } else if (question2Reponse2.style.backgroundColor === 'red') {
          question3Progress.querySelector('.réponse_2').style.backgroundColor = 'red';
          }

          const question4Progress = document.querySelector('#question_8 .progress');
          if (question3Reponse3.style.backgroundColor === 'green') {
          question4Progress.querySelector('.réponse_3').style.backgroundColor = 'green';
          } else if (question3Reponse3.style.backgroundColor === 'red') {
          question4Progress.querySelector('.réponse_3').style.backgroundColor = 'red';
          }

          const question5Progress = document.querySelector('#question_8 .progress');
          if (question4Reponse4.style.backgroundColor === 'green') {
          question5Progress.querySelector('.réponse_4').style.backgroundColor = 'green';
          } else if (question4Reponse4.style.backgroundColor === 'red') {
          question5Progress.querySelector('.réponse_4').style.backgroundColor = 'red';
          }
    
          const question6Progress = document.querySelector('#question_8 .progress');
          if (question5Reponse5.style.backgroundColor === 'green') {
          question6Progress.querySelector('.réponse_5').style.backgroundColor = 'green';
          } else if (question5Reponse5.style.backgroundColor === 'red') {
          question6Progress.querySelector('.réponse_5').style.backgroundColor = 'red';
          }

          const question7Progress = document.querySelector('#question_8 .progress');
          if (question6Reponse6.style.backgroundColor === 'green') {
          question7Progress.querySelector('.réponse_6').style.backgroundColor = 'green';
          } else if (question6Reponse6.style.backgroundColor === 'red') {
          question7Progress.querySelector('.réponse_6').style.backgroundColor = 'red';
          }

          const question8Progress = document.querySelector('#question_8 .progress');
          if (question7Reponse7.style.backgroundColor === 'green') {
          question8Progress.querySelector('.réponse_7').style.backgroundColor = 'green';
          } else if (question7Reponse7.style.backgroundColor === 'red') {
          question8Progress.querySelector('.réponse_7').style.backgroundColor = 'red';
          }
        }
      }
    }, 1000);
  }
  startCountdown7();
});

// Question 8
question8Buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('good_answer')) {
      reponse8.style.backgroundColor = 'green';
    } else if (button.classList.contains('bad_answer')) {
      reponse8.style.backgroundColor = 'red';
    }
    
    const question2Progress = document.querySelector('#question_9 .progress');
    if (question1Reponse1.style.backgroundColor === 'green') {
      question2Progress.querySelector('.réponse_1').style.backgroundColor = 'green';
    } else if (question1Reponse1.style.backgroundColor === 'red') {
      question2Progress.querySelector('.réponse_1').style.backgroundColor = 'red';
    }

    const question3Progress = document.querySelector('#question_9 .progress');
    if (question2Reponse2.style.backgroundColor === 'green') {
      question3Progress.querySelector('.réponse_2').style.backgroundColor = 'green';
    } else if (question2Reponse2.style.backgroundColor === 'red') {
      question3Progress.querySelector('.réponse_2').style.backgroundColor = 'red';
    }

    const question4Progress = document.querySelector('#question_9 .progress');
    if (question3Reponse3.style.backgroundColor === 'green') {
      question4Progress.querySelector('.réponse_3').style.backgroundColor = 'green';
    } else if (question3Reponse3.style.backgroundColor === 'red') {
      question4Progress.querySelector('.réponse_3').style.backgroundColor = 'red';
    }

    const question5Progress = document.querySelector('#question_9 .progress');
    if (question4Reponse4.style.backgroundColor === 'green') {
      question5Progress.querySelector('.réponse_4').style.backgroundColor = 'green';
    } else if (question4Reponse4.style.backgroundColor === 'red') {
      question5Progress.querySelector('.réponse_4').style.backgroundColor = 'red';
    }
    
    const question6Progress = document.querySelector('#question_9 .progress');
  if (question5Reponse5.style.backgroundColor === 'green') {
    question6Progress.querySelector('.réponse_5').style.backgroundColor = 'green';
  } else if (question5Reponse5.style.backgroundColor === 'red') {
    question6Progress.querySelector('.réponse_5').style.backgroundColor = 'red';
  }

  const question7Progress = document.querySelector('#question_9 .progress');
  if (question6Reponse6.style.backgroundColor === 'green') {
    question7Progress.querySelector('.réponse_6').style.backgroundColor = 'green';
  } else if (question6Reponse6.style.backgroundColor === 'red') {
    question7Progress.querySelector('.réponse_6').style.backgroundColor = 'red';
  }

  const question8Progress = document.querySelector('#question_9 .progress');
  if (question7Reponse7.style.backgroundColor === 'green') {
    question8Progress.querySelector('.réponse_7').style.backgroundColor = 'green';
  } else if (question7Reponse7.style.backgroundColor === 'red') {
    question8Progress.querySelector('.réponse_7').style.backgroundColor = 'red';
  }
  const question9Progress = document.querySelector('#question_9 .progress');
  if (question8Reponse8.style.backgroundColor === 'green') {
    question9Progress.querySelector('.réponse_8').style.backgroundColor = 'green';
  } else if (question8Reponse8.style.backgroundColor === 'red') {
    question9Progress.querySelector('.réponse_8').style.backgroundColor = 'red';
  }
});
});

document.querySelector('#answer_7 .next-btn').addEventListener('click', function() {
  answerSection7.classList.add('hidden');
  questionSection8.classList.remove('hidden');
  function startCountdown8() {
    clearInterval(countdownInterval);
    countdownInterval = setInterval(function() {
      if (!questionSection8.classList.contains('hidden')) {
        countdown8--;
        numberDiv8.innerHTML = `<p><strong>${countdown8}</strong></p>`;
        if (countdown8 <= 0) {
          clearInterval(countdownInterval);
          hideQuestionShowAnswer8()
          reponse8.style.backgroundColor = 'red';

          const question2Progress = document.querySelector('#question_9 .progress');
          if (question1Reponse1.style.backgroundColor === 'green') {
          question2Progress.querySelector('.réponse_1').style.backgroundColor = 'green';
          } else if (question1Reponse1.style.backgroundColor === 'red') {
          question2Progress.querySelector('.réponse_1').style.backgroundColor = 'red';
          }

          const question3Progress = document.querySelector('#question_9 .progress');
          if (question2Reponse2.style.backgroundColor === 'green') {
          question3Progress.querySelector('.réponse_2').style.backgroundColor = 'green';
          } else if (question2Reponse2.style.backgroundColor === 'red') {
          question3Progress.querySelector('.réponse_2').style.backgroundColor = 'red';
          }

          const question4Progress = document.querySelector('#question_9 .progress');
          if (question3Reponse3.style.backgroundColor === 'green') {
          question4Progress.querySelector('.réponse_3').style.backgroundColor = 'green';
          } else if (question3Reponse3.style.backgroundColor === 'red') {
          question4Progress.querySelector('.réponse_3').style.backgroundColor = 'red';
          }

          const question5Progress = document.querySelector('#question_9 .progress');
          if (question4Reponse4.style.backgroundColor === 'green') {
          question5Progress.querySelector('.réponse_4').style.backgroundColor = 'green';
          } else if (question4Reponse4.style.backgroundColor === 'red') {
          question5Progress.querySelector('.réponse_4').style.backgroundColor = 'red';
          }
    
         const question6Progress = document.querySelector('#question_9 .progress');
         if (question5Reponse5.style.backgroundColor === 'green') {
         question6Progress.querySelector('.réponse_5').style.backgroundColor = 'green';
         } else if (question5Reponse5.style.backgroundColor === 'red') {
         question6Progress.querySelector('.réponse_5').style.backgroundColor = 'red';
         }

         const question7Progress = document.querySelector('#question_9 .progress');
         if (question6Reponse6.style.backgroundColor === 'green') {
         question7Progress.querySelector('.réponse_6').style.backgroundColor = 'green';
         } else if (question6Reponse6.style.backgroundColor === 'red') {
         question7Progress.querySelector('.réponse_6').style.backgroundColor = 'red';
         }

         const question8Progress = document.querySelector('#question_9 .progress');
         if (question7Reponse7.style.backgroundColor === 'green') {
         question8Progress.querySelector('.réponse_7').style.backgroundColor = 'green';
         } else if (question7Reponse7.style.backgroundColor === 'red') {
         question8Progress.querySelector('.réponse_7').style.backgroundColor = 'red';
         }

         const question9Progress = document.querySelector('#question_9 .progress');
         if (question8Reponse8.style.backgroundColor === 'green') {
         question9Progress.querySelector('.réponse_8').style.backgroundColor = 'green';
         } else if (question8Reponse8.style.backgroundColor === 'red') {
         question9Progress.querySelector('.réponse_8').style.backgroundColor = 'red';
         }
        }
      }
    }, 1000);
  }
  startCountdown8();
});

// Question 9
question9Buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('good_answer')) {
      reponse9.style.backgroundColor = 'green';
    } else if (button.classList.contains('bad_answer')) {
      reponse9.style.backgroundColor = 'red';
    }
    
    const question2Progress = document.querySelector('#question_10 .progress');
    if (question1Reponse1.style.backgroundColor === 'green') {
      question2Progress.querySelector('.réponse_1').style.backgroundColor = 'green';
    } else if (question1Reponse1.style.backgroundColor === 'red') {
      question2Progress.querySelector('.réponse_1').style.backgroundColor = 'red';
    }

    const question3Progress = document.querySelector('#question_10 .progress');
    if (question2Reponse2.style.backgroundColor === 'green') {
      question3Progress.querySelector('.réponse_2').style.backgroundColor = 'green';
    } else if (question2Reponse2.style.backgroundColor === 'red') {
      question3Progress.querySelector('.réponse_2').style.backgroundColor = 'red';
    }

    const question4Progress = document.querySelector('#question_10 .progress');
    if (question3Reponse3.style.backgroundColor === 'green') {
      question4Progress.querySelector('.réponse_3').style.backgroundColor = 'green';
    } else if (question3Reponse3.style.backgroundColor === 'red') {
      question4Progress.querySelector('.réponse_3').style.backgroundColor = 'red';
    }

    const question5Progress = document.querySelector('#question_10 .progress');
    if (question4Reponse4.style.backgroundColor === 'green') {
      question5Progress.querySelector('.réponse_4').style.backgroundColor = 'green';
    } else if (question4Reponse4.style.backgroundColor === 'red') {
      question5Progress.querySelector('.réponse_4').style.backgroundColor = 'red';
    }
    
    const question6Progress = document.querySelector('#question_10 .progress');
  if (question5Reponse5.style.backgroundColor === 'green') {
    question6Progress.querySelector('.réponse_5').style.backgroundColor = 'green';
  } else if (question5Reponse5.style.backgroundColor === 'red') {
    question6Progress.querySelector('.réponse_5').style.backgroundColor = 'red';
  }

  const question7Progress = document.querySelector('#question_10 .progress');
  if (question6Reponse6.style.backgroundColor === 'green') {
    question7Progress.querySelector('.réponse_6').style.backgroundColor = 'green';
  } else if (question6Reponse6.style.backgroundColor === 'red') {
    question7Progress.querySelector('.réponse_6').style.backgroundColor = 'red';
  }

  const question8Progress = document.querySelector('#question_10 .progress');
  if (question7Reponse7.style.backgroundColor === 'green') {
    question8Progress.querySelector('.réponse_7').style.backgroundColor = 'green';
  } else if (question7Reponse7.style.backgroundColor === 'red') {
    question8Progress.querySelector('.réponse_7').style.backgroundColor = 'red';
  }

  const question9Progress = document.querySelector('#question_10 .progress');
  if (question8Reponse8.style.backgroundColor === 'green') {
    question9Progress.querySelector('.réponse_8').style.backgroundColor = 'green';
  } else if (question8Reponse8.style.backgroundColor === 'red') {
    question9Progress.querySelector('.réponse_8').style.backgroundColor = 'red';
  }

  const question10Progress = document.querySelector('#question_10 .progress');
  if (question9Reponse9.style.backgroundColor === 'green') {
    question10Progress.querySelector('.réponse_9').style.backgroundColor = 'green';
  } else if (question9Reponse9.style.backgroundColor === 'red') {
    question10Progress.querySelector('.réponse_9').style.backgroundColor = 'red';
  }
});
});

document.querySelector('#answer_8 .next-btn').addEventListener('click', function() {
  answerSection8.classList.add('hidden');
  questionSection9.classList.remove('hidden');
  function startCountdown9() {
    clearInterval(countdownInterval);
    countdownInterval = setInterval(function() {
      if (!questionSection9.classList.contains('hidden')) {
        countdown9--;
        numberDiv9.innerHTML = `<p><strong>${countdown9}</strong></p>`;
        if (countdown9 <= 0) {
          clearInterval(countdownInterval);
          hideQuestionShowAnswer9()
          reponse9.style.backgroundColor = 'red';

          const question2Progress = document.querySelector('#question_10 .progress');
          if (question1Reponse1.style.backgroundColor === 'green') {
          question2Progress.querySelector('.réponse_1').style.backgroundColor = 'green';
          } else if (question1Reponse1.style.backgroundColor === 'red') {
          question2Progress.querySelector('.réponse_1').style.backgroundColor = 'red';
          }

          const question3Progress = document.querySelector('#question_10 .progress');
          if (question2Reponse2.style.backgroundColor === 'green') {
          question3Progress.querySelector('.réponse_2').style.backgroundColor = 'green';
          } else if (question2Reponse2.style.backgroundColor === 'red') {
          question3Progress.querySelector('.réponse_2').style.backgroundColor = 'red';
          }

          const question4Progress = document.querySelector('#question_10 .progress');
          if (question3Reponse3.style.backgroundColor === 'green') {
          question4Progress.querySelector('.réponse_3').style.backgroundColor = 'green';
          } else if (question3Reponse3.style.backgroundColor === 'red') {
          question4Progress.querySelector('.réponse_3').style.backgroundColor = 'red';
          }

          const question5Progress = document.querySelector('#question_10 .progress');
          if (question4Reponse4.style.backgroundColor === 'green') {
          question5Progress.querySelector('.réponse_4').style.backgroundColor = 'green';
          } else if (question4Reponse4.style.backgroundColor === 'red') {
          question5Progress.querySelector('.réponse_4').style.backgroundColor = 'red';
          }
    
          const question6Progress = document.querySelector('#question_10 .progress');
          if (question5Reponse5.style.backgroundColor === 'green') {
          question6Progress.querySelector('.réponse_5').style.backgroundColor = 'green';
          } else if (question5Reponse5.style.backgroundColor === 'red') {
          question6Progress.querySelector('.réponse_5').style.backgroundColor = 'red';
          }

          const question7Progress = document.querySelector('#question_10 .progress');
          if (question6Reponse6.style.backgroundColor === 'green') {
          question7Progress.querySelector('.réponse_6').style.backgroundColor = 'green';
          } else if (question6Reponse6.style.backgroundColor === 'red') {
          question7Progress.querySelector('.réponse_6').style.backgroundColor = 'red';
          }

          const question8Progress = document.querySelector('#question_10 .progress');
          if (question7Reponse7.style.backgroundColor === 'green') {
          question8Progress.querySelector('.réponse_7').style.backgroundColor = 'green';
          } else if (question7Reponse7.style.backgroundColor === 'red') {
          question8Progress.querySelector('.réponse_7').style.backgroundColor = 'red';
          }

          const question9Progress = document.querySelector('#question_10 .progress');
          if (question8Reponse8.style.backgroundColor === 'green') {
          question9Progress.querySelector('.réponse_8').style.backgroundColor = 'green';
          } else if (question8Reponse8.style.backgroundColor === 'red') {
          question9Progress.querySelector('.réponse_8').style.backgroundColor = 'red';
          }

          const question10Progress = document.querySelector('#question_10 .progress');
          if (question9Reponse9.style.backgroundColor === 'green') {
          question10Progress.querySelector('.réponse_9').style.backgroundColor = 'green';
          } else if (question9Reponse9.style.backgroundColor === 'red') {
          question10Progress.querySelector('.réponse_9').style.backgroundColor = 'red';
          }
        }
      }
    }, 1000);
  }
  startCountdown9();
});

document.querySelector('#answer_9 .next-btn').addEventListener('click', function() {
  answerSection9.classList.add('hidden');
  questionSection10.classList.remove('hidden');
  function startCountdown10() {
    clearInterval(countdownInterval);
    countdownInterval = setInterval(function() {
      if (!questionSection10.classList.contains('hidden')) {
        countdown10--;
        numberDiv10.innerHTML = `<p><strong>${countdown10}</strong></p>`;
        if (countdown10 <= 0) {
          clearInterval(countdownInterval);
          hideQuestionShowAnswer10()
        }
      }
    }, 1000);
  }
  startCountdown10();
});

document.querySelector('#answer_10 .next-btn').addEventListener('click', function() {
  answerSection10.classList.add('hidden');
  arrivéeSection.classList.remove('hidden');
});

// Système de score
const goodAnswers = document.querySelectorAll(".good_answer");
const scoreTitle = document.querySelector('#arrivée .titre h1');
let score = 0;

goodAnswers.forEach((answer) => {
  answer.addEventListener("click", () => {
    score++;  
      scoreTitle.textContent = `Vous avez eu ${score} bonnes réponses`;
      
  });
});

});