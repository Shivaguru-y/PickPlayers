package com.pick_players.assesment.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pick_players.assesment.Service.UserService;
import com.pick_players.assesment.models.Users;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin("*")
@RequestMapping("/Users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/SaveUser")
    public void SaveUser(@RequestBody Users user) {
        userService.Usersave(user);
    }
    
    
}
