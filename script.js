let currentQuestionIndex = 1; // Índice del mensaje actual

document.addEventListener('click', function () {
  var audio = document.getElementById("audio");
  if (audio.paused) {
    audio.src = "music/taylormix.mp3";
    audio.load();
    audio.play();
  }
});

function showNextQuestion() {
  const currentQuestion = document.getElementById("question" + currentQuestionIndex);
  const nextQuestion = document.getElementById("question" + (currentQuestionIndex + 1));
  if (currentQuestion && nextQuestion) {
    currentQuestion.style.display = "none"; // Oculta la pregunta actual
    nextQuestion.style.display = "block"; // Muestra la siguiente pregunta
    currentQuestionIndex++; // Incrementa el índice
  }
  if (currentQuestionIndex === 7) {
    // Si llegamos al último mensaje, oculta el botón "Siguiente" y muestra los botones "No" y "Yes"
    document.getElementById("name").style.display = "none";
    document.getElementById("nextButton").style.display = "none";
    document.getElementById("no-button").style.display = "inline-block";
    document.getElementById("yesButton").style.display = "inline-block";

    document.getElementsByClassName("image")[0].src = "images/taylorspinning.gif";
    document.getElementById("question4.1").style.display = "block";
  }
}

function showMessage(response) {
  if (response === "No") {
    const noButton = document.getElementById("no-button");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    const noMessage = document.getElementById("no-message");
    const question = document.getElementById("question7");
    const name = document.getElementById("name");

    // Set button position to absolute
    noButton.style.position = "absolute";

    document.getElementsByClassName("image")[0].src = "images/perrolapo.gif";

    // Generate random coordinates within the visible container
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    // Apply new coordinates to the button
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    document.getElementById("question4.1").style.display = "none";
    question.style.display = "none";
    name.style.display = "none";
    noMessage.style.display = "block";
    noMessage.style.fontStyle = "normal";
  }

  if (response === "Yes") {
    // Remove name message and no button
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();

    // Update text content, show message, and change image source to "dance.gif"
    const yesMessage = document.getElementById("yes-message");
    const question = document.getElementById("question4");
    const noMessage = document.getElementById("no-message");

    question.style.display = "none";
    noMessage.style.display = "none";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "images/taylorswiftkiss.gif";
    document.getElementById("question4.1").style.display = "none";

    // Remove yes button
    document.getElementById("yesButton").remove();
  }
}