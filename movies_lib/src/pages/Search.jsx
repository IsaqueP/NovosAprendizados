import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"; 
import MovieCard from '../components/MovieCard'

const searchURL = import.meta.env.VITE_SEARCH
const authorizationApi = import.meta.env.VITE_API_AUTHORIZATION


import "./MoviesGrid.css"

function Search() {

    const [searchParams] = useSearchParams()
    const [ movies, setMovies ] = useState([])
    const query = searchParams.get('q')

    async function getSearchedMovies(url){
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: authorizationApi,
            }
        })

        const data = await res.json()

        setMovies(data.results)
    }

    useEffect(() => {

        const searchWithQueryURL = `${searchURL}?query=${query}`

        getSearchedMovies(searchWithQueryURL)
        

    }, [query])


    return (
        <div className="container">
            <h2 className="title">
                Resultados para: <span className="query-text">{ query}</span>
            </h2>          
            <div className="movie-container">
                {
                    movies.length === 0 && <p>carregando...</p>
                }
                {
                    movies.length > 0 && movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                }    
            </div>  
        </div>
    );
}

export default Search;