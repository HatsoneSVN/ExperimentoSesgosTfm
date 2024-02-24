package com.tfm_pocha.tfmpocha.Models;

import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;

@Entity
@Table(name = "Groups")
public class Group {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long groupId;

    private String name;

    @OneToMany(mappedBy = "group")
    private List<User> users;

    @ManyToMany
    @JoinTable(name = "group_question", joinColumns = @JoinColumn(name = "group_id"), inverseJoinColumns = @JoinColumn(name = "question_id"))
    private Set<Question> questions = new HashSet<>();
    

    public Long getGroupId() {
        return groupId;
    }

    public void setGroupId(Long groupId) {
        this.groupId = groupId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Group() {
    }

    public Group(String name) {
        this.name = name;
    }
}
