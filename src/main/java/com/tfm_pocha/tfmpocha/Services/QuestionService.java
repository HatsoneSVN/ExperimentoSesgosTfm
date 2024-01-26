package com.tfm_pocha.tfmpocha.Services;

import java.util.List;

import com.tfm_pocha.tfmpocha.Models.Group;
import com.tfm_pocha.tfmpocha.Models.Question;

public interface QuestionService {
    List<Question> getQuestionsByGroup(Group group);

    List<Question> getQuestionsPreentreno();

    Question getQuestionById(Long id);

    List<Question> getQuestionsTestCaras();

}
