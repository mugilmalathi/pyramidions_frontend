import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import "./home.scss"

const Home = () => {

    const[data, setData]=useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        getData()
    }, [])

    const getData=()=>{
        axios.get(`https://pyramidionsbackend-production.up.railway.app/movies/list`)
        .then((res)=>{
            setData(res.data)
        })
    }

    const handleMovieData=()=>{
        axios.post(`https://pyramidionsbackend-production.up.railway.app/movies/list`,{
            store: true
        })
    }

    const handleCartData=(id, data)=>{
        axios.post(`https://pyramidionsbackend-production.up.railway.app/movies-details/create`,{
        movieName: data.movieName,
        poster: data.poster,
        desc: data.desc,
        rating: data.rating
        })
        .then((res)=>{
            console.log("Success..!");
        })
    }

    const handleMovieView=(id)=>{
        navigate(`/movie-particular-details/${id}`)
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
                                    handleMovieData()
                                    handleCartData(el._id ,el)
                                  }}
                                >Add to Store</button>
                                <button
                                  onClick={()=>{
                                    handleMovieView(el._id)
                                  }}
                                >View</button>
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