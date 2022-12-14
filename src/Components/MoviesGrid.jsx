import { useEffect,useState } from "react";
import { get } from "../Helpers/HttpClients";
import { MovieCard } from "./MovieCard";
import styles from './MovieGrid.module.css'
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import Empty from "./Empty";


export function MoviesGrid({search}){

 const [movies,setMovies] = useState([]);
 const [isloading,setIsloading] = useState(true);
 const [page,setPage] = useState(1);
 const [hasMore,setHasMore] = useState(true);

 
  useEffect(()=>{

    setIsloading(true);
    const searchUrl = search
    ? "/search/movie?query=" + search + "&page=" + page
    : "/discover/movie?page=" + page;

    get(searchUrl).then((data) => {
       setMovies((prevMovies) => prevMovies.concat(data.results));
       setHasMore(data.page < data.total_pages);
       setIsloading(false)
    });
  
},[search,page]);


  if(!isloading && movies.length === 0){

    return <Empty />
  }


  return(

    <InfiniteScroll 
      dataLength={movies.length}  
      hasMore={hasMore}
      next={()=>setPage((prevPage) => prevPage + 1)}
      loader={<Spinner />}
    >

    <ul className={styles.moviesGrid}>
     {movies.map(movie => (<MovieCard key={movie.id} movie={movie} />
     ))}
    </ul>

    </InfiniteScroll >
  )
}