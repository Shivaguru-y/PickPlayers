package com.pick_players.assesment.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Players {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer player_id;

    private String player_img;
    private String player_name;

}
