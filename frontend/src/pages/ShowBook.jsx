import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();
   useEffect(() => {
    axios.get(`http://localhost:5555/book/${id}`)
      .then(response => {
        setBook(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className='p-7 border-2 border-blue-600 rounded-md w-80 h-50 m-7'>
      <h1 className='font-bold text-3xl mb-3'>{book.title}</h1>
      <p><span className='font-bold'>Author: </span>{book.author}</p>
      <p><span className='font-bold'>Published Year: </span>{book.publishyear}</p>
      
    </div>
  )
}

export default ShowBook;
