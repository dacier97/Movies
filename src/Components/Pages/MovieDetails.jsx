import styles from "./Movie.Details.module.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../../Helpers/HttpClients";
import Spinner from "../Spinner";
import { getMovieImg } from "../../Helpers/GetMoviesImg";


export function MovieDetails(){

  const {movieId} = useParams();
  const [movie,setMovie] = useState(null);
  const [isloading,setIsloading] = useState(true);

  useEffect(()=>{
    setIsloading(true)
    get("/movie/"+ movieId).then((data)=>{
      setMovie(data)
      setIsloading(false)
    })
  },[movieId]);

  if(isloading){

    console.log('loading')
    return <Spinner />
  }

  const imageUrl = getMovieImg(movie.poster_path,500);

  return <div className={styles.detailsContainer}>
         <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title} />
          <div className={`${styles.col} ${styles.movieDetails}`}>
            <p className={styles.firstItem}> 
              <strong>Title:</strong> {movie.title}
            </p>
            <p>
            <strong>Genres: </strong>
            {movie.genres.map(genre => genre.name).join(', ')}
            </p>
            <p> <strong>Description:</strong>{movie.overview}</p>
          </div>
        </div>
  
}

