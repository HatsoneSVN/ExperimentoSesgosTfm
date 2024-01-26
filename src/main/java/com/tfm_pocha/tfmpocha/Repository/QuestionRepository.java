package com.tfm_pocha.tfmpocha.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tfm_pocha.tfmpocha.Models.Question;
import com.tfm_pocha.tfmpocha.Models.Group;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
    Question getQuestionById(long id);

    List<Question> getQuestionsByTypeQuestion(String type);

    List<Question> getQuestionByGroups(Group group);

}