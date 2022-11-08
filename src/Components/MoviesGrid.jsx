import { useEffect,useState } from "react";
import { get } from "../Helpers/HttpClients";
/*import movies from "../movies.json";*/
import { MovieCard } from "./MovieCard";
import styles from './MovieGrid.module.css'

export function MoviesGrid(){

  //const  API_KEY = 'afb018b3c62b5a8b769087788271360c'
 const [movies,setMovies] = useState([])

  useEffect(()=>{

    get("/discover/movie").then((data) => {

       setMovies(data.results)
    });
  
},[]);

  return(

    <ul className={styles.moviesGrid}>
     {movies.map(movie => (<MovieCard key={movie.id} movie={movie} />
     ))}
    </ul>
  )
}