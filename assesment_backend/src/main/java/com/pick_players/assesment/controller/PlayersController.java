package com.pick_players.assesment.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pick_players.assesment.Service.PlayerService;
import com.pick_players.assesment.models.Players;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;



@RestController
@CrossOrigin("*")
@RequestMapping("/Players")

public class PlayersController {

    @Autowired
    private PlayerService playerService;

   @GetMapping("/GetAllPlayers")
   public List<Players> getMethodName() {
       return playerService.getAllPlayers();
   }
   

}