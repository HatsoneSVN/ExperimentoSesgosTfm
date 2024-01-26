package com.tfm_pocha.tfmpocha.Repository;

import java.util.List;
import java.util.Set;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.tfm_pocha.tfmpocha.Models.Group;
import com.tfm_pocha.tfmpocha.Models.Question;

@Repository
public interface GroupRepository extends JpaRepository<Group, Long> {

}
