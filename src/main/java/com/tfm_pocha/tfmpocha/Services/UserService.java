package com.tfm_pocha.tfmpocha.Services;

import java.util.Random;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tfm_pocha.tfmpocha.Models.Group;
import com.tfm_pocha.tfmpocha.Models.User;
import com.tfm_pocha.tfmpocha.Repository.GroupRepository;
import com.tfm_pocha.tfmpocha.Repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private GroupRepository groupRepository;

    public User saveUser(User user) {
        List<Group> posiblesGroups = groupRepository.findAll();

        if (!posiblesGroups.isEmpty()) {
            Group grupoAleatorio = posiblesGroups.get(new Random().nextInt(posiblesGroups.size()));
            user.setGroup(grupoAleatorio);
        }

        userRepository.save(user);
        return userRepository.save(user);
    }

    public User getUserById(Long id) {
        return userRepository.getById(id);
    }
}