package com.pick_players.assesment.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pick_players.assesment.models.Players;


@Repository
public interface PlayersRepo extends JpaRepository<Players, Integer> {

}
