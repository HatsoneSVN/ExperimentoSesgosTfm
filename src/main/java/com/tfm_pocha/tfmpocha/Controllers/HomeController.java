package com.tfm_pocha.tfmpocha.Controllers;

import java.util.List;
import java.util.Random;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.tfm_pocha.tfmpocha.Models.Group;
import com.tfm_pocha.tfmpocha.Models.Question;
import com.tfm_pocha.tfmpocha.Models.User;
import com.tfm_pocha.tfmpocha.Repository.GroupRepository;
import com.tfm_pocha.tfmpocha.Repository.UserRepository;
import com.tfm_pocha.tfmpocha.Services.GroupService;
import com.tfm_pocha.tfmpocha.Services.QuestionService;
import com.tfm_pocha.tfmpocha.Services.UserService;

@Controller
public class HomeController {
    @Autowired
    UserService userService;
    @Autowired
    GroupService groupService;
    @Autowired
    QuestionService questionService;
    @Autowired
    GroupRepository groupRepository;
    @Autowired
    UserRepository userRepository;

    @GetMapping("/home")
    public String home(Model model) {
        User newUser = new User();
        String nuevoNombre = "User_" + (userRepository.count() + 1);
        newUser.setName(nuevoNombre);
        List<Group> grupos = groupRepository.findAll();
        if (!grupos.isEmpty()) {
            Group grupoAleatorio = grupos.get(new Random().nextInt(grupos.size()));
            newUser.setGroup(grupoAleatorio);
        }
        userService.saveUser(newUser);
        Group group = newUser.getGroup();
        List<Question> gropuQuestions = questionService.getQuestionsByGroup(group);
        List<Question> preQuestions = questionService.getQuestionsPreentreno();
        List<Question> testCarasQuestions = questionService.getQuestionsTestCaras();
        model.addAttribute("user", newUser);
        model.addAttribute("gropuQuestions", gropuQuestions);
        model.addAttribute("preQuestions", preQuestions);
        model.addAttribute("testCarasQuestions", testCarasQuestions);
        return "index.html";
    }
}
