import {MovieDetails} from './Components/Pages/MovieDetails.jsx';
import {LandingPage} from './Components/Pages/LandingPage.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import styles from './Components/App.module.css';

function App() {

  return (
    <Router>
    
      <header>
        <Link to="/">
            <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>
      <main>
      <Routes>

          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/" element={<LandingPage />} />

        </Routes>
      </main>
    
    </Router>
  );
}
export default App;




