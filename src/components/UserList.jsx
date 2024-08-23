import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import UserForm from './UserForm';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    const addUser = (user) => {
        setUsers([...users, user]);
    };

    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div>
            <h1>User Dashboard</h1>
            <UserForm addUser={addUser} />
            <div className="user-list">
                {users.map(user => (
                    <UserCard key={user.id} user={user} deleteUser={deleteUser} />
                ))}
            </div>
        </div>
    );
};

export default UserList;
