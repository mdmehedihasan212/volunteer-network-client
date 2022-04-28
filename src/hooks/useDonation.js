import axios from 'axios';
import { useEffect, useState } from 'react';

const useDonation = () => {
    const [donation, setDonation] = useState([]);

    useEffect(() => {
        const getEvent = async () => {
            const url = `http://localhost:5000/event`;
            const { data } = await axios.get(url)
            setDonation(data);
        }
        getEvent();
    }, [])

    return [donation, setDonation];
};

export default useDonation;