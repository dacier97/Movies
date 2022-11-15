import {MoviesGrid} from '../MoviesGrid.jsx'
import Search from '../Search.jsx'
/*import {useQuery} from '../Hooks/useQuery'*/
import { useDebounce } from '../Hooks/useDebounce.jsx';
import { useSearchParams } from "react-router-dom";


export function LandingPage(){

  /*const query = useQuery();*/
  const [query] = useSearchParams();
  const search = query.get('search');
  const debouncedSearch = useDebounce(search,300)
  
  return(

    <>
      <Search />
      <MoviesGrid key={debouncedSearch} search={debouncedSearch} />
    </>

  )
  
  
  
}