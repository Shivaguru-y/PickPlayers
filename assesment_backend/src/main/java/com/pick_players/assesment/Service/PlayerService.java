package com.pick_players.assesment.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pick_players.assesment.models.Players;
import com.pick_players.assesment.repo.PlayersRepo;

@Service
public class PlayerService {
    
    @Autowired
    private PlayersRepo playersRepo;

    public List<Players> getAllPlayers() {
        return playersRepo.findAll();
    }
}
