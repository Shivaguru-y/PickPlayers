package com.pick_players.assesment.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pick_players.assesment.models.Users;
import com.pick_players.assesment.repo.UserRepo;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

    public void Usersave(Users user) {
        userRepo.save(user);
    }
    
    
}
