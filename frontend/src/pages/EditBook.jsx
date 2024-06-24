import React, {useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const EditBook = () => {
  const navigate = useNavigate();
  const [title, setTitle] = React.useState('');
  const [author, setAuthor] = React.useState('');
  const [publishyear, setpublishyear] = React.useState('');
  const {id} = useParams();
  useEffect(()=>{
    axios.get(`http://localhost:5555/book/${id}`).then(()=>{
      setTitle(res.data.title);
      setAuthor(res.data.author);
      setpublishyear(res.data.publishyear); 

    }).catch((err)=>{
      console.log(err);
    });
  })
  function editBook(){
    const data={
      title, 
      author,
      publishyear
    };
    axios.put(`http://localhost:5555/book/${id}`, data).then(()=>{
      navigate('/');
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div >
      <h1 className='font-bold text-3xl text-center mt-5 mb-28'>Edit Book</h1>
      <div className='flex justify-center items-center mt-10'>
        
        <div className='border-2 w-1/3 p-4 rounded-xl border-blue-700'>
          <label className='text-lg'>Title:</label><br></br>
          <input className='border w-full rounded-md border-slate-600 mb-5 p-1 ' type="text" value={title} onChange={(e) => setTitle(e.target.value)}/><br></br>
          <label className='text-lg'>Author:</label><br></br>
          <input className='border w-full rounded-md border-slate-600 mb-5 p-1' type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/><br></br>
          <label className='text-lg'>Publish Year:</label><br></br>
          <input className='border w-full rounded-md border-slate-600 mb-8 p-1' type="text" value={publishyear} onChange={(e) => setpublishyear(e.target.value)}/><br></br>
          <button className='w-full bg-teal-400 rounded-md p-2'onClick={editBook}>Edit</button>
        
        </div>
        
      </div>
    </div>
  )
}

export default EditBook;