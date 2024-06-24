import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        //useeffect to call our backend
        axios.get("http://localhost:5555/book")
            .then(response => {
                
                setBooks(response.data);
            })
            .catch((err) => {
                console.log("Error: ", err);
            });
    });

    return (
        <div className='p-9'  >
            <div className='flex justify-between items-center font-bold text-3xl' >
                <h1 className='mr-9 mb-9'>Book List</h1>
                <Link to="/book/create"><MdOutlineAddBox className='text-sky-500' /></Link>
            </div>
            <table className='w-full'>
                <thead>
                    <tr>
                        <th className='border border-slate-600 rounded-md bg-emerald-200'>No.</th>
                        <th className='border border-slate-600 rounded-md  bg-emerald-200'>Title</th>
                        <th className='border border-slate-600 rounded-md  bg-emerald-200'>Author</th>
                        <th className='border border-slate-600 rounded-md  bg-emerald-200'>Publish Year</th>
                        <th className='border border-slate-600 rounded-md  bg-emerald-200'>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => (
                        <tr >
                            <td className='text-center p-3 border border-slate-600 rounded-md'>{index + 1}</td>
                            <td className='text-center border border-slate-600 rounded-md'>{book.title}</td>
                            <td className='text-center border border-slate-600 rounded-md'>{book.author}</td>
                            <td className='text-center border border-slate-600 rounded-md'>{book.publishyear}</td>
                            <td className='text-center border border-slate-600 rounded-md'>
                                <div className='flex justify-center gap-x-4'>
                                    <Link to={`/book/details/${book._id}`}>
                                        <BsInfoCircle className='text-green-800'/>
                                    </Link>
                                    <Link to={`/book/edit/${book._id}`}>
                                        <AiOutlineEdit className='text-yellow-600'/>
                                    </Link>
                                    <Link to={`/book/delete/${book._id}`}>
                                        <MdOutlineDelete className='text-red-600'/>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home;
