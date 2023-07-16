import { get } from "../utils/httpCliente.js"
import {useState,useEffect} from "react"
import { PlataformasCard } from "./PlataformasCard.jsx" 
import "./PlataformasGrid.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";


export const DisneyPlusAccion=()=>{
    
const [visibleMovies, setVisibleMovies] = useState([]);
const [pagina, setPagina] = useState(1);

  useEffect(() => {
   
    get("/discover/movie?include_adult=false&include_video=false&language=ES&page="  +
    pagina + "&sort_by=popularity.desc&with_genres=28&watch_region=AR&with_watch_providers=337").then((data) => {
        setVisibleMovies(data.results.slice(0, 7)); // Obtener las primeras 7 películas
      })
      .finally(() => {

      });
  }, [, pagina]);

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
        <a href="https://www.disneyplus.com/es-ar?gclid=f5905ee7332b1ac95d813a440f9c5fca&gclsrc=3p.ds&&cid=DSS-Search-Bing-71700000075357645&s_kwcid=AL!8468!10!79714785021056!disney%20plus&msclkid=f5905ee7332b1ac95d813a440f9c5fca"><img class="logoPlataforma" src="https://rdv-du-numerique.com/wp-content/uploads/2019/09/disney-logo.png_Image_PNG_1920-%C3%97-1081_pixels_-_2170.jpg"></img></a>
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