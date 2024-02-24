package com.tfm_pocha.tfmpocha.Models;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

@Entity
public class Imagen {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	@Column(name = "name", columnDefinition = "VARCHAR(100)")
    private String name;

	@ManyToMany(mappedBy = "imagenes")
    private Set<Question> questions = new HashSet<>();
    
    public Set<Question> getQuestions() {
		return questions;
	}


	public void setQuestions(Set<Question> questions) {
		this.questions = questions;
	}


	@Column(name = "url", columnDefinition = "VARCHAR(MAX)")
    private String url;

    public String getUrl() {
		return url;
	}


	public void setUrl(String url) {
		this.url = url;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


}
