/*import { useNavigate } from "react-router-dom";
import {useQuery} from './Hooks/useQuery'*/
import styles from './Search.module.css';
import {FaSearchengin} from 'react-icons/fa';
import { useSearchParams } from "react-router-dom";



function Search() {

  /*const query  = useQuery();
  const navigate = useNavigate();*/
  const [query, setQuery] = useSearchParams();
  const search = query.get('search');
  

  const handleSubmit = (e) =>{
    e.preventDefault();
  
  }

  return (
    <form className={styles.searchContanier} onSubmit={handleSubmit}>

      <div className={styles.searchBox}>
        <input className={styles.searchInput} 
        type="text"
        value={search}
        placeholder='Title'
        aria-label="search movies"
        onChange = {(e)=>{
          const value = e.target.value;
          setQuery({ search: value });
          /*navigate('/?search=' + value)*/

        }}
        />
          <FaSearchengin size={20} className={styles.SearchButton} />
      </div>

    </form>
  )
}

export default Search