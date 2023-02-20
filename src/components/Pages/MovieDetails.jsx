import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from 'react-router';
import { useToast } from '@chakra-ui/react'

const MovieDetails = () => {

  const[data, setData]=useState([])
  const navigate = useNavigate()
  let toast = useToast()

  useEffect(()=>{
    getData()
  }, [])

  const getData=()=>{
    axios.get(`https://pyramidionsbackend-production.up.railway.app/movies-details/list`)
    .then((res)=>{
      setData(res.data)
    })
  }

  const handleMovieView=(id)=>{
    navigate(`/movie-details-single/${id}`)
}

const handleDelete=(id)=>{
    axios.delete(`https://pyramidionsbackend-production.up.railway.app/movies-details/delete/${id}`)
    .then((res)=>{
        getData()
        toast({
          title: 'Your Movie Deleted.',
          status: 'error',
          duration: 9000,
          isClosable: true,
      })
    })
}

  return (
    <div>
      <div className='text-primary main-title'>Movie Store</div>
      <div className='movie-data'>
            {
                data.map((el, i)=>{
                    return(
                        <div key={i} className='movie-card'>
                            <div><img src={el.poster} alt="" /></div>
                            <div>{el.movieName}</div>
                            <div>
                                <button
                                  onClick={()=>{
                                    handleMovieView(el._id)
                                  }}
                                >View</button>
                                <div 
                                  className='delete'
                                  onClick={()=>{
                                    handleDelete(el._id)
                                  }}
                                ><AiFillDelete /></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default MovieDetails