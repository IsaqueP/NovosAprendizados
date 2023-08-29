import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import './MoviesGrid.css'

const moviesURL = import.meta.env.VITE_API
const authorizationApi = import.meta.env.VITE_API_AUTHORIZATION



function Home() {

    const [ topMovies, setTopMovies ] = useState([])

    async function getTopRatedMovies(url){
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: authorizationApi,
            }
        })

        const data = await res.json()

        setTopMovies(data.results)
    }

    useEffect(() => {

        const topRatedUrl = `${moviesURL}top_rated`

        getTopRatedMovies(topRatedUrl)

    }, [])

    return (
        <div className="container">
            <h2 className="title">Melhores filmes: </h2>          
            <div className="movie-container">
                {
                    topMovies.length === 0 && <p>carregando...</p>
                }
                {
                    topMovies.length > 0 && topMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                }    
            </div>  
        </div>
    );
}

export default Home;