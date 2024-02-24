
var countPreentrenoQuestions = {
    questionPreentreno1Casa: 0,
    questionPreentreno2Casa: 0,
    questionPreentreno3Casa: 0
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
    question_test_caras_mujer_negra_asiatico:0
}
const questionIdsTestCaras = [
	"question_test_caras_mujer_asiatica_negro",
 	"question_test_caras_mujer_asiatica_blanco", 
 	"question_test_caras_mujer_asiatica_blanco_g",
 	"question_test_caras_mujer_asiatica_asiatico", 
 	"question_test_caras_mujer_asiatica_g_asiatico", 
 	"question_test_caras_mujer_asiatica_g_negro",
 	"question_test_caras_mujer_asiatica_g_blanco",
  	"question_test_caras_mujer_asiatica_g_blanco_g",
   	"question_test_caras_mujer_blanca_negro",
   	"question_test_caras_mujer_blanca_blanco", 
   	"question_test_caras_mujer_blanca_blanco_g", 
   	"question_test_caras_mujer_blanca_asiatico",
   	"question_test_caras_mujer_negra_negro",
   	"question_test_caras_mujer_negra_blanco",
    "question_test_caras_mujer_negra_blanco_g", 
    "question_test_caras_mujer_negra_asiatico"];
var countQuestionsGroup = {
	group_container_ok:0,
	group_container_ko:0
}
const questionIdsTestEquivalencia = [
	"question_test_equivalencia_mujer_asiatica",
 	"question_test_equivalencia_mujer_asiatica_gorda", 
 	"question_test_equivalencia_mujer_blanca",
 	"question_test_equivalencia_mujer_negra"];
 	
var countQuestionsTestEquivalencia = {
	question_test_equivalencia_mujer_asiatica: 0,
 	question_test_equivalencia_mujer_asiatica_gorda: 0,
 	question_test_equivalencia_mujer_blanca: 0,
 	question_test_equivalencia_mujer_negra: 0
};
var countQuestionsGroup2 = {
    question_gupo_mujer_asiatica_negro:0,
    question_gupo_mujer_asiatica_blanco:0,
	question_gupo_mujer_asiatica_blanco_g:0,
	question_gupo_mujer_asiatica_asiatico:0,
	question_gupo_mujer_asiatica_g_asiatico:0,
	question_gupo_mujer_asiatica_g_negro:0,
	question_gupo_mujer_asiatica_g_blanco:0,
	question_gupo_mujer_asiatica_g_blanco_g:0,
	question_gupo_mujer_blanca_negro:0,
	question_gupo_mujer_blanca_blanco:0,
	question_gupo_mujer_blanca_blanco_g:0,
	question_gupo_mujer_blanca_asiatico:0,
	question_gupo_mujer_negra_negro:0,
	question_gupo_mujer_negra_blanco:0,
	question_gupo_mujer_negra_blanco_g:0,
	question_gupo_mujer_negra_asiatico:0
    }
var lastQuestion= null;
var preentreno = true;

var lastQuestionGroup = null;
var lastQuestionGroup2 = null;
        
const questionIdsGrupo2 = [
	"question_gupo_mujer_asiatica_negro",
	"question_gupo_mujer_asiatica_blanco",
	"question_gupo_mujer_asiatica_blanco_g",
	"question_gupo_mujer_asiatica_asiatico",
	"question_gupo_mujer_asiatica_g_asiatico",
	"question_gupo_mujer_asiatica_g_negro",
	"question_gupo_mujer_asiatica_g_blanco",
	"question_gupo_mujer_asiatica_g_blanco_g",
	"question_gupo_mujer_blanca_negro",
	"question_gupo_mujer_blanca_blanco",
	"question_gupo_mujer_blanca_blanco_g",
	"question_gupo_mujer_blanca_asiatico",
	"question_gupo_mujer_negra_negro",
	"question_gupo_mujer_negra_blanco",
	"question_gupo_mujer_negra_blanco_g",
	"question_gupo_mujer_negra_asiatico"];
var finalStep = false;
var posibleSuccess = true;
var countSuccess = 0;

$(document).ready(function() {
    var statementAndLastQuestion = null;
    var statement = null;
    var userId = $("#userId").val();
    var questionIds = ["questionPreentreno1Casa", "questionPreentreno2Casa", "questionPreentreno3Casa"];
    $('#botonAcceso').on('click', function() {
		$("#explicacionInicial").removeClass("active").addClass("inactive");
		lastQuestion = takeOutPreentrenoQuestion(questionIds);
	}); 
    $('#preentrenoContainer img').on('click', function() {
        var option = $(this).data('option');
        var idQuestion = $(this).data('idquestion');
        sendResponseStatusGrupoR(userId, option, idQuestion, null, null);
        lastQuestion = takeOutPreentrenoQuestion(questionIds);        
        if (lastQuestion === null){			
		    takeOutTestCarasQuestionOk();	    
		}else{
			processSelctImg(option, "preentrenoContainer");
		}	
    });
    $('#testCarasOkContainer img').on('click', function() {
        var option = $(this).data('option');
        var idQuestion = $(this).data('idquestion');
        var estimuloAbs = $(this).data('estabstracto')
        console.log('estimulo abs :: '+ estimuloAbs)
        sendResponseStatusGrupoR(userId, option, idQuestion, statement, "OK", estimuloAbs);
        statementAndLastQuestion = takeOutTestCarasQuestionOk();
        if (statementAndLastQuestion === null){
			takeOutTestCarasQuestionKoNeg();
		}else{
			statement = statementAndLastQuestion[0];
        	lastQuestion = statementAndLastQuestion[1];       
		}
		
    });
    $('#testCarasKoContainer img').on('click', function() {
        var option = $(this).data('option');
        var idQuestion = $(this).data('idquestion');
        var estimuloAbs = $(this).data('estabstracto')
        console.log('estimulo abs :: '+ estimuloAbs)
        sendResponseStatusGrupoR(userId, option, idQuestion, statement, "KO", estimuloAbs);
        statementAndLastQuestion = takeOutTestCarasQuestionKoNeg();      
        if (statementAndLastQuestion === null){
			if (finalStep === true){
			}else{				
				takeTestEquivalencia();
			 	$("#testEquivalencia").removeClass("inactive").addClass("active");	
			}			
		}else{
			statement = statementAndLastQuestion[0];
        	lastQuestion = statementAndLastQuestion[1];
		}
    });
    $('#testEquivalencia img').on('click', function() {
        var option = $(this).data('option');
        var idQuestion = $(this).data('idquestion');
        var estimuloAbs = $(this).data('estabstracto');
        var statusMano = $(this).data('tipomano');
        console.log('tipo de mano' + statusMano)                     	        	
    	sendResponseStatusGrupoR(userId, option, idQuestion, null, statusMano, estimuloAbs); 
    	$("#testEquivalencia").removeClass("active").addClass("inactive"); 
    	processSelctImgGoupsAlternoFase2(option, "testEquivalencia");
    	lastQuestion = takeTestEquivalencia2();		
    });
    $('#testEquivalencia2 img').on('click', function() {
        var option = $(this).data('option');
        var idQuestion = $(this).data('idquestion');
        var estimuloAbs = $(this).data('estabstracto');
        var statusMano = $(this).data('tipomano'); 
        console.log('tipo de mano' + statusMano)        
        lastQuestion = takeTestEquivalencia();      
         if (lastQuestion === null){			
		 	takeGroupQuestion();
			$("#grupoR").removeClass("inactive").addClass("active");
			$("#testEquivalencia2").removeClass("active").addClass("inactive");				
		}else{
			sendResponseStatusGrupoR(userId, option, idQuestion, null, statusMano, estimuloAbs); 
			$("#testEquivalencia2").removeClass("active").addClass("inactive"); 
        	processSelctImgGoupsAlternoFase2(option, "testEquivalencia2");
		}
    });
    $('#grupoR img').on('click', function(){
		var option = $(this).data('option');
        var idQuestion = $(this).data('idquestion');
        var statusMano = $(this).data('tipomano');
        sendResponseStatusGrupoR(userId , option, idQuestion, null, statusMano);
        lastQuestionGroup = takeGroupQuestion();
        if (lastQuestionGroup === null){
			setTimeout(function() {
		       lastQuestionGroup = takeGroupQuestion2();
				$("#grupoR2").removeClass("inactive").addClass("active");
		    }, 500);
			countSuccess = 0;
		}else{
			if (option === 'succes'){
				countSuccess = countSuccess + 1;
				esPar(countSuccess)
				if (posibleSuccess){
					processSelctImg(option, "grupoR");
				}
			}else{
				processSelctImg(option, "grupoR");
			}			
		}        
	})
	$('#grupoR2 img').on('click', function(){
		var option = $(this).data('option');
        var idQuestion = $(this).data('idquestion');
        sendResponseStatusGrupoR(userId, option, idQuestion, null, null);
        lastQuestionGroup = takeGroupQuestion2();        
		if (option === 'succes'){
				countSuccess = countSuccess + 1;
				esPar(countSuccess)
			if (posibleSuccess){
				processSelctImg(option, "grupoR2"); 
			} 
		}else{
			processSelctImg(option, "grupoR2"); 
		}
		      
	})
});
function processSelctImg(option, questionContainer) {
    $("#" + questionContainer).removeClass("active").addClass("inactive");
    if (option === 'succes') {
		$("#correctAudio")[0].play();		
        $('#result').removeClass("inactive").addClass("active");
        $('#rewards').removeClass("inactive").addClass("active");
    } else if (option === 'fail') {
		$("#incorrectAudio")[0].play();
        $('#result').removeClass("inactive").addClass("active");
        $('#punishment').removeClass("inactive").addClass("active");
    }   
   setTimeout(function() {
        $("#rewards").removeClass("active").addClass("inactive");
	    $('#punishment').removeClass("active").addClass("inactive");
	    $("#result").removeClass("active").addClass("inactive");
	    $("#" + questionContainer).removeClass("inactive").addClass("active");
    }, 300);
}
function processSelctImgGoupsAlternoFase2(option, questionContainer) {
    $("#" + questionContainer).removeClass("active").addClass("inactive");
    if (option === 'succes') {
		$("#correctAudio")[0].play();
        $('#result').css('display', 'flex');
        $('#rewards').css('display', 'inline');
    } else if (option === 'fail') {
		$("#incorrectAudio")[0].play();
        $('#result').css('display', 'flex');
        $('#punishment').css('display', 'inline');
    }
   setTimeout(function() {	    
        $('#rewards, #punishment, #result').css('display', 'none');
        $("#" + questionContainer).removeClass("active").addClass("inactive"); 		    	              
        if (questionContainer === 'testEquivalencia'){
			$("#testEquivalencia2").removeClass("inactive").addClass("active");
		}
		if (questionContainer === 'testEquivalencia2'){
			$("#testEquivalencia").removeClass("inactive").addClass("active");
		}		         
    }, 500);      
}
function takeOutPreentrenoQuestion(questionIds) {
    var countSets = 0;
    questionIds.forEach(function (id) {
        $("#" + id).removeClass("active").addClass("inactive");
        countSets = countSets + countPreentrenoQuestions[id];
    });
    if (questionSetIsComplete(20, "preentrenoContainer", countSets)){
        question = getQuestionRandom(questionIds, 15, countPreentrenoQuestions);
        countPreentrenoQuestions[question] = countPreentrenoQuestions[question] + 1;
        $("#" + question).removeClass("inactive").addClass("active");
        return question;
    }else{
        return null;
    } 
}
function takeOutTestCarasQuestionOk() { 
    var statementsOkTotal = ["Selecciona quién sabe más de matemáticas", "Selecciona quién paga las facturas"];
    var countSets = 0;
    questionIdsTestCaras.forEach(function (id) {
        $("#" + id).removeClass("active").addClass("inactive");
        countSets = countSets + countQuestionsTestCaras[id];        
    });    
    $('.statementOk').empty();
    if (questionSetIsComplete(12, "testCarasOkContainer", countSets)){
        var question  = getQuestionRandom(questionIdsTestCaras, 4, countQuestionsTestCaras);
        var statementOk = statementsOkTotal[Math.floor(Math.random() * statementsOkTotal.length)];
        countQuestionsTestCaras[question] = countQuestionsTestCaras[question] + 1
        $("#" + question).removeClass("inactive").addClass("active");
        $('.statementOk').append('<p>' + statementOk + '</p>');
        $("#testCarasOkContainer").removeClass("inactive").addClass("active");
        return [statementOk, question];
    }else{
        questionIdsTestCaras.forEach(function (id) {
            countQuestionsTestCaras[id] = 0;
        });
        return null;
    }
    
}
function takeOutTestCarasQuestionKoNeg() {
    var statementsKoTotal = ["Selecciona quién sabe más de literatura", "Selecciona quién cuidará a sus hijos la mayor parte del tiempo"];
    var countSets = 0;
    questionIdsTestCaras.forEach(function (id) {
        $("#" + id + '-KO').removeClass("active").addClass("inactive");
        countSets = countSets + countQuestionsTestCaras[id];
    });
    $('.statementKo').empty();
    if (questionSetIsComplete(12, "testCarasKoContainer", countSets)){
        var question  = getQuestionRandom(questionIdsTestCaras, 4, countQuestionsTestCaras);
        var statementKo = statementsKoTotal[Math.floor(Math.random() * statementsKoTotal.length)];
        countQuestionsTestCaras[question] = countQuestionsTestCaras[question] + 1;
        $("#" + question + "-KO").removeClass("inactive").addClass("active");
        $('.statementKo').append('<p>' + statementKo + '</p>');
        $("#testCarasKoContainer").removeClass("inactive").addClass("active");
        return [statementKo, question];
    }else{
        questionIdsTestCaras.forEach(function (id) {
            countQuestionsTestCaras[id] = 0;
        });
        if (finalStep == true){
			$("#expFinalizado").removeClass("inactive").addClass("active");
		}
        return null;
    }
}
function takeTestEquivalencia(){
	var questionId = ["testEquivalenciaOk","testEquivalenciaKo"];
	var countSets = 0;
    questionId.forEach(function (id) {
        $("#" + id).removeClass("active").addClass("inactive");
    });   
    questionIdsTestEquivalencia.forEach(function (id) {
        $("#" + id + '-KO').removeClass("active").addClass("inactive");
        $("#" + id ).removeClass("active").addClass("inactive");
        countSets = countSets + countQuestionsTestEquivalencia[id];
    }); 
    if (questionTestEquivIsComplete(28, "testEquivalencia", countSets)){      		
	    var question  = getQuestionRandom(questionIdsTestEquivalencia, 7, countQuestionsTestEquivalencia);
	    var containerQuestion = questionId[Math.floor(Math.random() * questionId.length)];       
	    if (containerQuestion === "testEquivalenciaOk"){
			$("#testEquivalenciaOk").removeClass("inactive").addClass("active");
			$("#" + question).removeClass("inactive").addClass("active");		 
		}else{
			$("#testEquivalenciaKo").removeClass("inactive").addClass("active");
			$("#" + question + '-KO').removeClass("inactive").addClass("active");			
		}		        
	    return question;
	 }else{
		return null;
	 }    
}
function questionTestEquivIsComplete(number, idContainer, countSets){
	if (countSets === number){
        $("#" + idContainer).removeClass("active").addClass("inactive");
        return false;
    }
    else{        
        return true
    }
}
function takeTestEquivalencia2(){
	var questionId = ["testEquivalenciaOkFase2","testEquivalenciaKoFase2"];
	var countSets = 0;
    questionId.forEach(function (id) {
        $("#" + id).removeClass("active").addClass("inactive");
    });
    questionIdsTestEquivalencia.forEach(function (id) {
        $("#" + id + '-Fase2-KO').removeClass("active").addClass("inactive");
        $("#" + id + '-Fase2').removeClass("active").addClass("inactive");
        countSets = countSets + countQuestionsTestEquivalencia[id];
    });   
    console.table(countQuestionsTestEquivalencia)
    var question  = getQuestionRandom(questionIdsTestEquivalencia, 5, countQuestionsTestEquivalencia);
    var containerQuestion = questionId[Math.floor(Math.random() * questionId.length)];     
    if (containerQuestion === "testEquivalenciaOkFase2"){
		$("#testEquivalenciaOkFase2").removeClass("inactive").addClass("active");
		$("#" + question + '-Fase2').removeClass("inactive").addClass("active");
		countQuestionsTestEquivalencia[question] = countQuestionsTestEquivalencia[question] + 1;		 
	}else{
		$("#testEquivalenciaKoFase2").removeClass("inactive").addClass("active");
		$("#" + question + '-Fase2-KO').removeClass("inactive").addClass("active");	
		countQuestionsTestEquivalencia[question] = countQuestionsTestEquivalencia[question] + 1;		
	}		
    return question;   	 
}
function takeGroupQuestion(){
	var questionIds = ["groupContainerOk","groupContainerKo"];
	var countSets = 0;
    questionIds.forEach(function (id) {
        $("#" + id).removeClass("active").addClass("inactive");
        countSets = countSets + countQuestionsGroup[id];
    });
    if (groupQuestionSetIsCompleteGroup(20, "grupoR", countSets)){
        var question  = getQuestionRandom(questionIds, 11, countQuestionsGroup);
        countQuestionsGroup[question] = countQuestionsGroup[question] + 1;
        $("#" + question).removeClass("inactive").addClass("active");
        return question;
    }else{
        questionIds.forEach(function (id) {
            countQuestionsGroup[id] = 0;
        });
        return null;
    }
}
function takeGroupQuestion2(){	
	var countSets = 0;
	var questionId = ['groupContainerOk2','groupContainerKo2']
    questionId.forEach(function (id) {
        $("#" + id).removeClass("active").addClass("inactive");
    });
    questionIdsGrupo2.forEach(function (id) {
        $("#" + id + '-KO').removeClass("active").addClass("inactive");
        $("#" + id ).removeClass("active").addClass("inactive");
        countSets = countSets + countQuestionsGroup2[id];
        
    });   
    if (groupQuestionSetIsCompleteGroup(20, "grupoR2", countSets)){
        var question  = getQuestionRandom(questionIdsGrupo2, 15, countQuestionsGroup2);
        var containerQuestion = questionId[Math.floor(Math.random() * questionId.length)];
        if (containerQuestion === "group_container_ok_2"){
			$("#groupContainerOk2").removeClass("inactive").addClass("active");
			$("#" + question).removeClass("inactive").addClass("active");		 
		}else{
			$("#groupContainerKo2").removeClass("inactive").addClass("active");
			$("#" + question + '-KO').removeClass("inactive").addClass("active");			
		}		
        countQuestionsGroup2[question] = countQuestionsGroup2[question] + 1;
        return question;
    }else{
        questionIdsGrupo2.forEach(function (id) {
            countQuestionsGroup2[id] = 0;
        });        
       takeOutTestCarasQuestionOk();
       finalStep = true;
       return null;
    }
}
function sendResponseStatusGrupoR(userId, option, idQuestion, statement, mano_ok, estimuloAbs) {   
     let result = false;
     let responseMano = false;
     let respEstAbs = false;
     if (option === 'succes') {
        result = true;
     }
     if (mano_ok === 'OK'){
		 responseMano = true;
	 }
	 if (estimuloAbs === 'YES'){
		 respEstAbs = true
	 }
     $.ajax({
         type: "POST",
         url: "/saveQuestionUserGroupR",
         timeout: 5000,
         data: {
             userId: userId,
             questionId: idQuestion,
             result: result,
             statement:statement,
             mano_ok: responseMano,
             estimuloAbs:respEstAbs
         },
         success: function(response) {
             console.log(response);
         },
         error: function(error) {
             console.error(error);
         },
         complete: function(xhr, status) {
	        console.log("Completo:", status);
	    }
     });
}
function getQuestionRandom(questions, number, registerQuestionsContainer) {
    countQuestion = 0;
    do {
        var question = questions[Math.floor(Math.random() * questions.length)];
        countQuestion = registerQuestionsContainer[question];

    } while (lastQuestion === question || countQuestion === number || lastQuestionGroup === question || lastQuestionGroup === question);
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
function groupQuestionSetIsCompleteGroup(num, id, cSets) {
    if (cSets === num){
        $("#" + id).removeClass("active").addClass("inactive");
        return false;
    }else{
		return true;
	}
}
function esPar(numero) {
	if (numero % 2 === 0){
		posibleSuccess = true;
	}else{
		posibleSuccess = false;
	}
}
