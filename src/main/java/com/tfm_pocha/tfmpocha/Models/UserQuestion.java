package com.tfm_pocha.tfmpocha.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "user_question")
public class UserQuestion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

	private boolean responseStatus;

    @Column(name = "statement", columnDefinition = "VARCHAR(MAX)")
    private String statement;
    
    @Column(name = "mano_ok", columnDefinition = "BIT")
    private boolean mano_ok;
    
    @Column(name = "estimulo", columnDefinition = "BIT")
    private boolean estimuloAbs;

    public boolean isMano_ok() {
		return mano_ok;
	}

	public void setMano_ok(boolean mano_ok) {
		this.mano_ok = mano_ok;
	}
	
    public boolean isEstimuloAbs() {
		return estimuloAbs;
	}

	public void setEstimuloAbs(boolean estimuloAbs) {
		this.estimuloAbs = estimuloAbs;
	}

	public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public boolean isResponseStatus() {
        return responseStatus;
    }

    public void setResponseStatus(boolean responseStatus) {
        this.responseStatus = responseStatus;
    }

    

    public UserQuestion(Long id, User user, Question question, boolean responseStatus, String statement,
			boolean mano_ok, boolean estimuloAbs) {
		super();
		this.id = id;
		this.user = user;
		this.question = question;
		this.responseStatus = responseStatus;
		this.statement = statement;
		this.mano_ok = mano_ok;
		this.estimuloAbs = estimuloAbs;
	}

	public UserQuestion() {

    }

    public String getStatement() {
        return statement;
    }

    public void setStatement(String statement) {
        this.statement = statement;
    }
}
