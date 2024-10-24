import { useEffect, useState } from 'react';
import PlayerList from './PlayerList';
import SelectedPlayers from './SelectedPlayers';
import { CaptainPop } from '../Modals/CaptianPop';
import axios from 'axios';

function TPlayers() {
    const [players, setPlayers] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isInterfaceVisible, setIsInterfaceVisible] = useState(true);

    const Fetcher = async () => {
        try {
            const response = await axios.get('http://localhost:8080/Players/GetAllPlayers');
            setPlayers(response.data);
        } catch (err) {
            console.error('Error in fetching:', err);
        }
    };

    useEffect(() => {
        Fetcher();
    }, []);

    const handlePlayerSelect = (player) => {
        if (selectedPlayers.includes(player)) {
            setSelectedPlayers(selectedPlayers.filter(p => p !== player));
        } else {
            setSelectedPlayers([...selectedPlayers, player]);
        }
    };

    const handleSubmit = () => {
        setIsModalOpen(true);
        setIsInterfaceVisible(false); 
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsInterfaceVisible(true); 
        setSelectedPlayers([]); 
    };

    return (
        <div className="App">
            {isInterfaceVisible && ( 
                <div className="container">
                    <div className="left-panel">
                        <PlayerList players={players} onPlayerSelect={handlePlayerSelect} selectedPlayers={selectedPlayers} />
                    </div>
                    <div className="right-panel">
                        <SelectedPlayers players={selectedPlayers} onSubmit={handleSubmit} />
                    </div>
                </div>
            )}
            {isModalOpen && (
                <CaptainPop players={selectedPlayers} onClose={closeModal} />
            )}
        </div>
    );
}

export default TPlayers;
