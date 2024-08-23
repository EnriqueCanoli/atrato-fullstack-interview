import axios from 'axios';

export const generateCardInfo = async () => {
    try {
        const response = await axios.get('https://randommer.io/api/Card', {
            headers: { 'X-Api-Key': 'f3b80c8d2c6a478e89445e919e625fff' }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching card info:', error);
        throw error;
    }
};
