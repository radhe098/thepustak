import React, { useEffect, useState } from "react";
import axios from "axios";
import Categoriesdemo from '../components/Home Componants/Categoriesdemo'
import Lib from '../pages/Lib'

const CommanAncesstor = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/get-files' && 'http://localhost:5000/pdf')
            .then(response => {
                setBooks(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching books:', error);
            });
    }, []);
    return (
        <>
            <Categoriesdemo books={books} /> 
            <Lib books={books} />
        </>
    );
}

export default CommanAncesstor;
