import { get } from "../utils/httpCliente"
import {useState,useEffect} from "react"
import { PlataformasCard } from "../Components/PlataformasCard" 
import "../Components/PlataformasGrid.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";


export const PrimeVideo=()=>{
    
const [visibleMovies, setVisibleMovies] = useState([]);
const [pagina, setPagina] = useState(1);

  useEffect(() => {
 
   
    get("/discover/movie?include_adult=false&include_video=false&language=ES&page="  +
    pagina + "&sort_by=popularity.desc&watch_region=AR&with_watch_providers=119").then((data) => {
        setVisibleMovies(data.results.slice(0, 7)); // Obtener las primeras 4 películas
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
        <a href="https://www.primevideo.com/offers/nonprimehomepage/ref=atv_gst_GettingStarted_c_9zZ8D2_1_0?language=es_ES"><img class="logoPlataforma" src="https://th.bing.com/th/id/R.f64d41bf8148204820b2ef926e579275?rik=BpaAI0WCBcuWMQ&pid=ImgRaw&r=0"></img></a>
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