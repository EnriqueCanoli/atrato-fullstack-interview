import React from 'react';
import axios from 'axios';

const UserCard = ({ user, deleteUser }) => {
    const handleDelete = () => {
        axios.delete(`http://localhost:5000/users/${user.id}`)
            .then(() => deleteUser(user.id))
            .catch(error => console.error('Error deleting user:', error));
    };

    return (
        <div className="user-card">
            <h3>{user.name} {user.middleName} {user.fLastName} {user.sLastName}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Status: {user.status}</p>
            <p>Assigned Analyst: {user.assignedAnalyst}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default UserCard;
