package com.tfm_pocha.tfmpocha.Services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tfm_pocha.tfmpocha.Models.Group;
import com.tfm_pocha.tfmpocha.Models.Imagen;
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
    public List<Question> getQuestionsByGroupType(String type) {
        return questionRepository.getQuestionsByTypeQuestion(type);
    }

    @Override
    public Question getQuestionById(Long id) {
        return questionRepository.getQuestionById(id);
    }
    
    @Override
    public List<Question> makeQuestionByType(String type, List<Imagen> imgs) {
    	Map<String, Imagen> mapaImagenes = new HashMap<>();
    	for (Imagen imagen : imgs) {
    		mapaImagenes.put(imagen.getName(), imagen);
		}
    	switch (type) {
        case "PREENTRENO":
        	List<Imagen> imgForQuestion = List.of(
        			mapaImagenes.get("casa_letra"),
        			mapaImagenes.get("casa"),
        			mapaImagenes.get("coche_letra"),
        			mapaImagenes.get("perro_letra"),
        			mapaImagenes.get("coche"),
        			mapaImagenes.get("perro")
        			);
            break;
        case "TEST_CARAS":
            System.out.println("Seleccionaste la opción 2");
            break;
        case "GRUPO_C":
            System.out.println("Seleccionaste la opción 3");
            break;
        case "GRUPO_S":
            System.out.println("Seleccionaste la opción 3");
            break;
        case "GRUPO_M":
            System.out.println("Seleccionaste la opción 3");
            break;
        case "GRUPO_R":
            System.out.println("Seleccionaste la opción 3");
            break;
        default:
            System.out.println("Opción no válida");
    	}
        return null;
    }
}
