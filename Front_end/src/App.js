
import { useState } from 'react';
import './App.css';
import UsernamePop from './Modals/UsernamePop';
import Players from './PlayersPage/Players';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      {isModalOpen && <UsernamePop isOpen={isModalOpen} onClose={closeModal} />}
      {!isModalOpen && <Players />}
    </div>
  );
}

export default App;
