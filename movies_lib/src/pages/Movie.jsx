import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill    
} from 'react-icons/bs'

import MovieCard from "../components/MovieCard";
import './Movie.css'

const moviesURL = import.meta.env.VITE_API
const authorizationApi = import.meta.env.VITE_API_AUTHORIZATION

function Movie() {

    const { id } = useParams()
    const [ movie, setMovie ] = useState(null)

    async function getMovie(url){
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: authorizationApi,
            }
        })
        const data = await res.json()

        console.log(data)
        setMovie(data)
    }

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}`
        console.log(movieUrl)
        getMovie(movieUrl)
    }, [])


    function formatCurrency(number){
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
    }


    return (
       <div className="movie-page">
        {movie && <>
            <MovieCard movie={movie} showLink={false}/>
            <p className="tagline">{movie.tagline}</p>
            <div className="info">
                <h3>
                    <BsWallet2 /> Orçamento:
                </h3>
                <p>{formatCurrency(movie.budget)}</p>
            </div>
            <div className="info">
                <h3>
                    <BsGraphUp /> Receita:
                </h3>
                <p>{formatCurrency(movie.revenue)}</p>
            </div>
            <div className="info">
                <h3>
                    <BsHourglassSplit /> Duração:
                </h3>
                <p>{movie.runtime} minutos</p>
            </div>
            <div className="info description">
                <h3>
                    <BsFillFileEarmarkTextFill /> Descrição:
                </h3>
                <p>{movie.budget}</p>
            </div>
        </>}
       </div>
    );
}

export default Movie;