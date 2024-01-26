package com.tfm_pocha.tfmpocha.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tfm_pocha.tfmpocha.Models.Question;
import com.tfm_pocha.tfmpocha.Models.UserQuestion;
import com.tfm_pocha.tfmpocha.Services.QuestionService;
import com.tfm_pocha.tfmpocha.Services.UserQuestionService;
import com.tfm_pocha.tfmpocha.Services.UserService;

@RestController
public class UserQuestionController {

    @Autowired
    private UserQuestionService userQuestionService;
    @Autowired
    private UserService userService;
    @Autowired
    private QuestionService questionService;

    @PostMapping("/saveQuestionUser")
    public ResponseEntity<String> saveQuestionUser(@RequestParam("userId") Long userId,
            @RequestParam("questionId") Long questionId,
            @RequestParam("result") boolean result,
            @RequestParam("statement") String statement) {
        UserQuestion userQuestion = new UserQuestion();
        userQuestion.setUser(userService.getUserById(userId));
        Question question = questionService.getQuestionById(questionId);
        userQuestion.setQuestion(question);
        userQuestion.setResponseStatus(result);
        userQuestion.setStatement(statement);
        userQuestionService.saveUserQuestion(userQuestion);
        return ResponseEntity.ok("QuestionUser guardado exitosamente");
    }
}
