import React, { useState } from 'react';

export function CaptainPop({ players, onClose }) {
    const [captain, setCaptain] = useState('');
    const [show, setShow] = useState(false);  

    const handleCaptainSelect = (event) => {
        setCaptain(event.target.value);
    };

    const handleSubmit = () => {
        if (captain) {
            setShow(true);  
        } else {
            alert('Please select a captain!');
        }
    };

    const handleCloseResult = () => {
        setShow(false);
        onClose();
    };

    return (
        <>
         
            <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Choose a Captain</h5>
                            <button type="button" className="close" onClick={onClose}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h5>Selected Players:</h5>
                            <div className='row'>
                                <div className="col-12">
                                    <ul>
                                        {players.map((player) => (
                                            <li key={player.player_id}>
                                                <img src={player.player_img} alt={player.player_name} width="50" height="50" />
                                                <span>{player.player_name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>

                            <div>

                                <h6>Select Captain:</h6>
                                <select className='w-100 p-2' onChange={handleCaptainSelect} value={captain}>
                                    <option value="">Select Captain</option>
                                    {players.map((player) => (
                                        <option key={player.player_id} value={player.player_name}>
                                            {player.player_name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onClose}>
                                Close
                            </button>
                            <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>

           
            {show && (
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Captain and Players</h5>
                                <button type="button" className="close" onClick={handleCloseResult}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <h5>Team Players:</h5>
                                <ul>
                                    {players.map((player) => (
                                        <li
                                            key={player.player_id}
                                            style={{
                                                fontWeight: player.player_name === captain ? 'bold' : 'normal',
                                                color: player.player_name === captain ? 'blue' : 'black',
                                            }}
                                        >
                                            <img src={player.player_img} alt={player.player_name} width="50" height="50" />
                                            <span>{player.player_name}</span>
                                        </li>
                                    ))}
                                </ul>
                                <h6>Captain: <span style={{ fontWeight: 'bold', color: 'blue' }}>{captain}</span></h6>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={handleCloseResult}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}