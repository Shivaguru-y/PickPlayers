import React, { useState } from 'react';

function PlayerList({ players, onPlayerSelect, selectedPlayers }) {
    const [search, setSearch] = useState('');

    const filteredPlayers = players.filter(player =>
        player.player_name.toLowerCase().includes(search.toLowerCase())
    );

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <div>
            <h3>Available Players</h3>
            <div className="card">
                <div className="container1">
                    <input
                        type='text'
                        id='player'
                        value={search}
                        onChange={handleInputChange}
                        placeholder="Search for a player..."
                    />
                    <ul className='p-4'>
                        {filteredPlayers.map((player) => (
                            <li key={player.player_id} className="player-list-item">
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={selectedPlayers.includes(player)}
                                        onChange={() => onPlayerSelect(player)}
                                        className="player-checkbox"
                                    />
                                    <img
                                        src={player.player_img}
                                        alt={player.player_name}
                                        width="50"
                                        height="50"
                                        className="player-img"
                                    />
                                    <span className="player-name">{player.player_name}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PlayerList;
