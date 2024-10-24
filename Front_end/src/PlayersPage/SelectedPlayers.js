import React from 'react';

function SelectedPlayers({ players, onSubmit }) {
    return (
        
        <div>
            <h3>Selected Players - count:{players.length}</h3>
            <div className='card'>
                <div className="container1">
                    <ul className='p-4 shadow-lg'>
                        {players.map((player) => (
                            <li key={player.player_id} className="player-item">
                                <img
                                    src={player.player_img}
                                    alt={player.player_name}
                                    width="50"
                                    height="50"
                                    className="player-img"
                                />
                                <span className="player-name">{player.player_name}</span>
                            </li>
                        ))}
                        {players.length == 11 && (
                            <button type="button" onClick={onSubmit} className="btn btn-secondary mb-2 w-100 mt-2" data-toggle="modal">
                                Submit
                            </button>
                        )}
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default SelectedPlayers;
