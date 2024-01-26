package com.tfm_pocha.tfmpocha.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tfm_pocha.tfmpocha.Models.UserQuestion;
import com.tfm_pocha.tfmpocha.Repository.UserQuestionRepository;

@Service
public class UserQuestionService {
    @Autowired
    private UserQuestionRepository userQuestionRepository;

    public UserQuestion saveUserQuestion(UserQuestion userQuestion) {
        return userQuestionRepository.save(userQuestion);
    }
}