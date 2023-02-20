import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "./index.scss"

const ParticularMovieData = () => {

    const { id } = useParams()
    const[data, setData]=useState([])

    useEffect(()=>{
        axios.get(`https://pyramidionsbackend-production.up.railway.app/movies/get/${id}`)
        .then((res)=>{
            setData(res.data)
        })
    }, [])

  return (
    <div className='pdetail'>
        <div className='pdetail-box'>
            <div><img src={data.poster} alt="" /></div>
            <div>
                <div>{data.movieName}</div>
                <div>{data.desc}</div>
                <div>Movie rating: <span className='ms-1 text-primary'>{data.rating}.0</span></div>
            </div>
        </div>
    </div>
  )
}

export default ParticularMovieData