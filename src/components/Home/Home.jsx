import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import "./home.scss"
import { AiFillDelete } from "react-icons/ai";
import { useToast } from '@chakra-ui/react'

const Home = () => {

    const[data, setData]=useState([])
    const[movieData, setMovieData]=useState([])
    const navigate = useNavigate()
    var prevMovieData;
    let toast = useToast()

    useEffect(()=>{
        getData()
        getMoviesData()
    }, [prevMovieData])

    const getData=()=>{
        axios.get(`https://pyramidionsbackend-production.up.railway.app/movies/list`)
        .then((res)=>{
            setData(res.data)
        })
    }

    const getMoviesData=()=>{
        axios.get(`https://pyramidionsbackend-production.up.railway.app/movies-details/list`)
        .then((res)=>{
            setMovieData(res.data)
        })
    }

    const handleCartData=(id, data)=>{

        prevMovieData = movieData.find(((ele)=>ele.movieName===data.movieName))
        
        if(!prevMovieData){
            axios.post(`https://pyramidionsbackend-production.up.railway.app/movies-details/create`,{
                movieName: data.movieName,
                poster: data.poster,
                desc: data.desc,
                rating: data.rating
            })
            .then((res)=>{
                getData()
                getMoviesData()
                toast({
                    title: 'Successfully',
                    description: "Movie added to store successfully",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })
            })
        }else{
            toast({
                title: 'Movie already added.',
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
    }

    const handleMovieView=(id)=>{
        navigate(`/movie-particular-details/${id}`)
    }

    const handleDelete=(id)=>{
        axios.delete(`https://pyramidionsbackend-production.up.railway.app/movies/delete/${id}`)
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
        <div className='text-primary main-title'>List of Movies</div>
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
                                    handleCartData(el._id ,el)
                                  }}
                                >Add to Store</button>
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

export default Home