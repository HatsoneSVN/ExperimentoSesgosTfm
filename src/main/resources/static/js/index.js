var countPreentrenoQuestions = {
    question_preentreno_1_casa: 0,
    question_preentreno_2_coche: 0,
    question_preentreno_3_perro: 0
}
var countQuestionsTestCaras = {
    question_test_caras_mujer_asiatica_negro:0,
    question_test_caras_mujer_asiatica_blanco:0,
    question_test_caras_mujer_asiatica_blanco_g:0,
    question_test_caras_mujer_asiatica_asiatico:0,
    question_test_caras_mujer_asiatica_g_asiatico:0,
    question_test_caras_mujer_asiatica_g_negro:0,
    question_test_caras_mujer_asiatica_g_blanco:0,
    question_test_caras_mujer_asiatica_g_blanco_g:0,
    question_test_caras_mujer_blanca_negro:0,
    question_test_caras_mujer_blanca_blanco:0,
    question_test_caras_mujer_blanca_blanco_g:0,
    question_test_caras_mujer_blanca_asiatico:0,
    question_test_caras_mujer_negra_negro:0,
    question_test_caras_mujer_negra_blanco:0,
    question_test_caras_mujer_negra_blanco_g:0,
    question_test_caras_mujer_negra_asiatic:0
}
var lastQuestion= null;
var preentreno = true;
$(document).ready(function() {
    var statementAndLastQuestion = null;
    var statement = null;
    statementAndLastQuestion = takeOutTestCarasQuestionOk();
    //lastQuestion = takeOutPreentrenoQuestion();
    $('#preentrenoContainer img').on('click', function() {
        var option = $(this).data('option');
        var idQuestion = $(this).data('idquestion');
        console.log(idQuestion);
        sendResponseStatus(option, idQuestion, null);
        processSelctImg(option);
    });
    $('#testCarasOkContainer img').on('click', function() {
        var option = $(this).data('option');
        var idQuestion = $(this).data('idquestion');
        console.log(idQuestion);
        sendResponseStatus(option, idQuestion, statement);
        statementAndLastQuestion = takeOutTestCarasQuestionOk();
        statement = statementAndLastQuestion[0];
        lastQuestion = statementAndLastQuestion[1];
    });
    $('#testCarasKoContainer img').on('click', function() {
        var option = $(this).data('option');
        var idQuestion = $(this).data('idquestion');
        console.log(idQuestion);
        sendResponseStatus(option, idQuestion, statement);
        processSelctImg(option);
    });
});
function processSelctImg(option) {
    $("#preentrenoContainer").removeClass("active").addClass("inactive");
    if (option === 'succes') {
        $('#result').css('display', 'flex');
        $('#rewards').css('display', 'inline');
    } else if (option === 'fail') {
        $('#result').css('display', 'flex');
        $('#punishment').css('display', 'inline');
    }
    setTimeout(function() {
        $('#rewards, #punishment, #result').css('display', 'none');
        $("#preentrenoContainer").removeClass("inactive").addClass("active");
        lastQuestion = takeOutPreentrenoQuestion()
    }, 1000);
}
function takeOutPreentrenoQuestion() {
    var questionIds = ["question_preentreno_1_casa", "question_preentreno_2_coche", "question_preentreno_3_perro"];
    var countSets = 0;
    questionIds.forEach(function (id) {
        $("#" + id).addClass("inactive");
        countSets = countSets + countPreentrenoQuestions[id];
    });
    if (questionSetIsComplete(9, "preentrenoContainer", countSets)){
        question = getQuestionRandom(questionIds, 3, countPreentrenoQuestions);
        countPreentrenoQuestions[question] = countPreentrenoQuestions[question] + 1;
        $("#" + question).removeClass("inactive").addClass("active");
        return question;
    }else{
        takeOutTestCarasQuestionOk();
        return null;
    }
    
}
function takeOutTestCarasQuestionOk() {
    var questionIds = ["question_test_caras_mujer_asiatica_negro", "question_test_caras_mujer_asiatica_blanco", "question_test_caras_mujer_asiatica_blanco_g","question_test_caras_mujer_asiatica_asiatico", "question_test_caras_mujer_asiatica_g_asiatico", "question_test_caras_mujer_asiatica_g_negro","question_test_caras_mujer_asiatica_g_blanco", "question_test_caras_mujer_asiatica_g_blanco_g", "question_test_caras_mujer_blanca_negro","question_test_caras_mujer_blanca_blanco", "question_test_caras_mujer_blanca_blanco_g", "question_test_caras_mujer_blanca_asiatico","question_test_caras_mujer_negra_negro","question_test_caras_mujer_negra_blanco", "question_test_caras_mujer_negra_blanco_g", "question_test_caras_mujer_negra_asiatico"];
    var statementsOkTotal = ["Selecciona quién gana más dinero", "Selecciona quién sabe más de matemáticas"];
    var countSets = 0;
    questionIds.forEach(function (id) {
        $("#" + id).addClass("inactive");
        countSets = countSets + countQuestionsTestCaras[id];
    });
    $('.statementOk').empty();
    if (questionSetIsComplete(64, "testCarasOkContainer", countSets)){
        var question  = getQuestionRandom(questionIds, 4, countQuestionsTestCaras);
        var statementOk = statementsOkTotal[Math.floor(Math.random() * statementsOkTotal.length)];
        countQuestionsTestCaras[question] = countQuestionsTestCaras[question] + 1
        $("#" + question).removeClass("inactive").addClass("active");
        $('.statementOk').append('<h1>' + statementOk + '</h1>');
        $("#testCarasOkContainer").removeClass("inactive").addClass("active");
        return [statementOk, question];
    }else{
        questionIds.forEach(function (id) {
            countQuestionsTestCaras[id] = 0;
        });
        takeOutTestCarasQuestionKo();
        return null;
    }
    
}
function takeOutTestCarasQuestionKo() {
    var questionIds = ["question_test_caras_mujer_asiatica_negro", "question_test_caras_mujer_asiatica_blanco", "question_test_caras_mujer_asiatica_blanco_g","question_test_caras_mujer_asiatica_asiatico", "question_test_caras_mujer_asiatica_g_asiatico", "question_test_caras_mujer_asiatica_g_negro","question_test_caras_mujer_asiatica_g_blanco", "question_test_caras_mujer_asiatica_g_blanco_g", "question_test_caras_mujer_blanca_negro","question_test_caras_mujer_blanca_blanco", "question_test_caras_mujer_blanca_blanco_g", "question_test_caras_mujer_blanca_asiatico","question_test_caras_mujer_negra_negro","question_test_caras_mujer_negra_blanco", "question_test_caras_mujer_negra_blanco_g", "question_test_caras_mujer_negra_asiatico"];
    var statementsKoTotal = ["Selecciona quién limpia mejor", "Selecciona quién se hace cargo de los cuidados"];
    var question = questionIds[Math.floor(Math.random() * questionIds.length)];
    var statementKo = statementsKoTotal[Math.floor(Math.random() * statementsKoTotal.length)];
    questionIds.forEach(function (id) {
        $("#" + id).addClass("inactive");
        countSets = countSets + countQuestionsTestCaras[id];
    });
    $('.statementKo').empty();
    if (questionSetIsComplete(64, "testCarasKoContainer", countSets)){
        var question  = getQuestionRandom(questionIds, 4, countQuestionsTestCaras);
        var statementKo = statementsKoTotal[Math.floor(Math.random() * statementsKoTotal.length)];
        countQuestionsTestCaras[question] = countQuestionsTestCaras[question] + 1;
        $("#" + question).removeClass("inactive").addClass("active");
        $('.statementKo').append('<h1>' + statementKo + '</h1>');
        $("#testCarasKoContainer").removeClass("inactive").addClass("active");
        return [statementKo, question];
    }else{
        return null;
    }
}
function sendResponseStatus(option, idQuestion, statement) {
     var userId = $("#userId").val();
     let result = false;
     if (option === 'succes') {
        result = true;
     }
     $.ajax({
         type: "POST",
         url: "/saveQuestionUser",
         data: {
             userId: userId,
             questionId: idQuestion,
             result: result,
             statement:statement
         },
         success: function(response) {
             console.log(response);
         },
         error: function(error) {
             console.error(error);
         }
     });
}
function getQuestionRandom(questions, number, registerQuestionsContainer) {
    countQuestion = 0;
    do {
        var question = questions[Math.floor(Math.random() * questions.length)];
        countQuestion = registerQuestionsContainer[question];

    } while (lastQuestion === question || countQuestion === number);
    return question
}
function questionSetIsComplete(number, idContainer, countSets) {
    if (countSets === number){
        $("#" + idContainer).removeClass("active").addClass("inactive");
        return false;
    }
    else{
        $("#" + idContainer).removeClass("inactive").addClass("active");
        return true
    }
}