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
    UserQuestion userQuestion = new UserQuestion(); 
    @PostMapping("/saveQuestionUserGroupM")
    public ResponseEntity<String> saveQuestionUserC(@RequestParam("userId") Long userId,
            @RequestParam("questionId") Long questionId,
            @RequestParam("result") boolean result,
            @RequestParam("statement") String statement,
            @RequestParam("mano_ok") boolean mano_ok,
            @RequestParam("estimuloAbs") boolean estimuloAbs) {
        UserQuestion userQuestion = new UserQuestion();
        userQuestion.setUser(userService.getUserById(userId));
        Question question = questionService.getQuestionById(questionId);
        userQuestion.setQuestion(question);
        userQuestion.setResponseStatus(result);
        userQuestion.setStatement(statement);
        userQuestion.setMano_ok(mano_ok);
        userQuestion.setEstimuloAbs(estimuloAbs);
        userQuestionService.saveUserQuestion(userQuestion);
        return ResponseEntity.ok("QuestionUser guardado exitosamente");
    } 
    @PostMapping("/saveQuestionUserGroupC")
    public ResponseEntity<String> saveQuestionUserM(@RequestParam("userId") Long userId,
            @RequestParam("questionId") Long questionId,
            @RequestParam("result") boolean result,
            @RequestParam("statement") String statement,
            @RequestParam("mano_ok") boolean mano_ok,
            @RequestParam("estimuloAbs") boolean estimuloAbs) {
        UserQuestion userQuestion = new UserQuestion();
        userQuestion.setUser(userService.getUserById(userId));
        Question question = questionService.getQuestionById(questionId);
        userQuestion.setQuestion(question);
        userQuestion.setResponseStatus(result);
        userQuestion.setStatement(statement);
        userQuestion.setMano_ok(mano_ok);
        userQuestion.setEstimuloAbs(estimuloAbs);
        userQuestionService.saveUserQuestion(userQuestion);
        return ResponseEntity.ok("QuestionUser guardado exitosamente");
    } 
    @PostMapping("/saveQuestionUserGroupR")
    public ResponseEntity<String> saveQuestionUserR(@RequestParam("userId") Long userId,
            @RequestParam("questionId") Long questionId,
            @RequestParam("result") boolean result,
            @RequestParam("statement") String statement,
            @RequestParam("mano_ok") boolean mano_ok,
            @RequestParam("estimuloAbs") boolean estimuloAbs) {
        UserQuestion userQuestion = new UserQuestion();
        userQuestion.setUser(userService.getUserById(userId));
        Question question = questionService.getQuestionById(questionId);
        userQuestion.setQuestion(question);
        userQuestion.setResponseStatus(result);
        userQuestion.setStatement(statement);
        userQuestion.setMano_ok(mano_ok);
        userQuestion.setEstimuloAbs(estimuloAbs);
        userQuestionService.saveUserQuestion(userQuestion);
        return ResponseEntity.ok("QuestionUser guardado exitosamente");
    } 
}
