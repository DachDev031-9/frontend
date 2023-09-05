import React, { useState,useEffect } from 'react'
import axios from 'axios'

function App() {
  const [books,setBooks] = useState([])

  const fetchData = () =>{
    axios.get('https://good-gray-binturong-wig.cyclic.app/api')
    .then((response)=>{
      setBooks(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <>
      <div className="d-flex align-items-center flex-column mt-5">
        <h1 className='mb-2'>All Books</h1>
          <div className="d-flex align-items-end flex-column">
              <table className="table table-bordered mt-3 w-auto">
                  <thead className="text-center">
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Name Book</th>
                        <th scope="col">Author</th>
                        <th scope="col">Tel</th>
                      </tr>
                  </thead>
                  <tbody>
                    {books.map((book,index)=>(
                      <tr key={book._id} className="align-middle">
                          <th scope="row" className="text-center">{index+1}</th>
                          <td>{book.bookname}</td>
                          <td>{book.author}</td>
                          <td>{book.tel}</td>
                      </tr>
                    ))}
                  </tbody>
              </table>
          </div>
      </div>
    </>
  );
}

export default App;
