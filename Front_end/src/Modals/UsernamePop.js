import axios from 'axios';
import React, { useState } from 'react';

function UsernamePop({ isOpen, onClose }) {
    const [username, setUsername] = useState('');

    const Poster = (userName) => {
        const name = {
            userName: userName
        };
        console.log(name);
        axios.post('http://localhost:8080/Users/SaveUser', name)
            .then(() => {
                setUsername('');
                onClose();
            })
            .catch(error => {
                console.error('Error saving user:', error.response ? error.response.data : error.message);
                alert('Failed to save user. Please try again.');
            });
    }

    const handlePost = () => {
        if (!username) {
            alert('Username cannot be empty');
            return;
        }
        console.log(username);
        Poster(username);
    }

    const handleChange = (event) => {
        setUsername(event.target.value);
    }

    if (!isOpen) return null;

    return (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className='d-flex justify-content-between'>
                            <div>
                                <h5 className="modal-title" id="exampleModalLongTitle">Enter Username</h5>
                            </div>
                            <div>
                                <button type="button" className="close" onClick={onClose} aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>
                        
                     
                    </div>
                    <div className="modal-body">
                        <input
                            className='p-2 w-100'
                            id='userName'
                            value={username}
                            onChange={handleChange}
                            placeholder='Enter the username'
                        />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={handlePost}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UsernamePop;
