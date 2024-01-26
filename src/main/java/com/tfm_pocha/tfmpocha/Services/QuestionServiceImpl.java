package com.tfm_pocha.tfmpocha.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tfm_pocha.tfmpocha.Models.Group;
import com.tfm_pocha.tfmpocha.Models.Question;
import com.tfm_pocha.tfmpocha.Repository.QuestionRepository;

@Service
public class QuestionServiceImpl implements QuestionService {
    @Autowired
    private QuestionRepository questionRepository;

    @Override
    public List<Question> getQuestionsByGroup(Group group) {
        return questionRepository.getQuestionByGroups(group);
    }

    @Override
    public List<Question> getQuestionsPreentreno() {
        String type = "PREENTRENO";
        return questionRepository.getQuestionsByTypeQuestion(type);
    }

    @Override
    public List<Question> getQuestionsTestCaras() {
        String type = "TEST_CARAS";
        return questionRepository.getQuestionsByTypeQuestion(type);
    }

    @Override
    public Question getQuestionById(Long id) {
        return questionRepository.getQuestionById(id);
    }
}
