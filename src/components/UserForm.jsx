import React, { useState } from 'react';
import axios from 'axios';
import { generateCardInfo } from '../services/userService';

const UserForm = ({ addUser }) => {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        name: '',
        middleName: '',
        fLastName: '',
        sLastName: '',
        birthday: '',
        status: 'PENDIENTE',
        assignedAnalyst: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            
            const cardInfo = await generateCardInfo();

            
            const newUser = {
                ...formData,
                cardInfo: {
                    number: cardInfo.cardNumber,
                    type: cardInfo.type,
                    cvv: cardInfo.cvv,
                    pin: cardInfo.pin,
                    expiration: cardInfo.date,
                }
            };

         
            const response = await axios.post('http://localhost:5000/users', newUser);

           
            addUser(response.data);
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
            <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} placeholder="Middle Name" />
            <input type="text" name="fLastName" value={formData.fLastName} onChange={handleChange} placeholder="First Last Name" required />
            <input type="text" name="sLastName" value={formData.sLastName} onChange={handleChange} placeholder="Second Last Name" required />
            <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} required />
            <input type="text" name="assignedAnalyst" value={formData.assignedAnalyst} onChange={handleChange} placeholder="Assigned Analyst" required />
            <button type="submit">Add User</button>
        </form>
    );
};

export default UserForm;
