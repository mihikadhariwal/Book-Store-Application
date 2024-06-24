import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const CreateBook = () => {
  const navigate = useNavigate();
  const [title, setTitle] = React.useState('');
  const [author, setAuthor] = React.useState('');
  const [publishyear, setpublishyear] = React.useState('');
  function saveBook(){
    const data={
      title, 
      author,
      publishyear
    };
    axios.post('http://localhost:5555/book', data).then(()=>{
      navigate('/');
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div >
      <h1 className='font-bold text-3xl text-center mt-5 mb-28'>Add a book to the database</h1>
      <div className='flex justify-center items-center mt-10'>
        
        <div className='border-2 w-1/3 p-4 rounded-xl border-blue-700'>
          <label className='text-lg'>Title:</label><br></br>
          <input className='border w-full rounded-md border-slate-600 mb-5 p-1 ' type="text" value={title} onChange={(e) => setTitle(e.target.value)}/><br></br>
          <label className='text-lg'>Author:</label><br></br>
          <input className='border w-full rounded-md border-slate-600 mb-5 p-1' type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/><br></br>
          <label className='text-lg'>Publish Year:</label><br></br>
          <input className='border w-full rounded-md border-slate-600 mb-8 p-1' type="text" value={publishyear} onChange={(e) => setpublishyear(e.target.value)}/><br></br>
          <button className='w-full bg-teal-400 rounded-md p-2'onClick={saveBook}>Add</button>
        
        </div>
        
      </div>
    </div>
  )
}

export default CreateBook;