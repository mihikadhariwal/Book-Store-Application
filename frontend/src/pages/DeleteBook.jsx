import React from 'react'
import axios  from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const DeleteBook = () => {
  const navigate=useNavigate();
  const {id}=useParams();
  function handlebook(){
    axios.delete(`http://localhost:5555/book/${id}`).then(()=>{
    navigate('/')
  }).catch((err)=>{
    console.log(err);
  })
  }
  
  return (
    <div className='flex flex-col p-5 justify-center'>
      <h1 className='text-3xl font-bold mb-40 text-center'>Delete Book</h1>
    <div className='flex flex-col p-5 justify-center items-center '>
      
      <div className='border-2 border-red-500 w-1/2 p-10'>
        <h1 className='text-2xl text-center mb-10'>Are you sure you want to delete this book?</h1>
        <button className='w-full p-2 bg-red-500 rounded-md' onClick={handlebook}>Yes, Delete</button>

      </div>
    </div>
    </div>
    
  )
}

export default DeleteBook;