package com.tfm_pocha.tfmpocha.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.tfm_pocha.tfmpocha.Models.UserQuestion;

@Repository
public interface UserQuestionRepository extends JpaRepository<UserQuestion, Long> {
}
