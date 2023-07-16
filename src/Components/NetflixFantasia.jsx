import { get } from "../utils/httpCliente"
import {useState,useEffect} from "react"
import { PlataformasCard } from "./PlataformasCard" 
import "../Components/PlataformasGrid.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const NetflixFantasia=()=>{
    
const [visibleMovies, setVisibleMovies] = useState([]);
const [pagina, setPagina] = useState(1);

  useEffect(() => {
  
    get("/discover/movie?include_adult=false&include_video=false&language=ES&page="  +
    pagina + "&sort_by=popularity.desc&with_genres=14&watch_region=AR&with_watch_providers=8").then((data) => {
        setVisibleMovies(data.results.slice(0, 7)); // Obtener las primeras 4 películas
      })
      .finally(() => {
      });
  }, [ , pagina]);
  
  const handlePaginaSiguiente = () => {
    setPagina(pagina + 1);
  };

  const handlePaginaAnterior = () => {
    if (pagina > 1) {
      setPagina(pagina - 1);
    }
  };

  return (

    <div className="container">
    <div class="resultadosPlataformas">
        <div>
        <a href="https://www.netflix.com/ar/"><img class="logoPlataforma" src="https://venturebeat.com/wp-content/uploads/2016/06/netflix-logo.png?fit=2048%2C2048&strip=all"></img></a>
        <div className="etiquetasGenero">FANTASÍA</div>
    </div>
    <div className="paginacion">
    <div>
       <button className="botonIzq" onClick={handlePaginaAnterior} disabled={pagina === 1}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
    </div>
        <div>
            <ul className="plataformasGrid">
                {visibleMovies.map((pelicula) => (<PlataformasCard key={pelicula.id} pelicula={pelicula} />))}
            </ul>
        </div>
        <div>
      <button className="botonDer" onClick={handlePaginaSiguiente}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
    </div>
    </div>
  );





}