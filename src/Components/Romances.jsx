import { get } from "../utils/httpCliente"
import {useState,useEffect} from "react"
import { PlataformasCard } from "./PlataformasCard" 
import "../Components/PlataformasGrid.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const Romances=()=>{
    
const [visibleMovies, setVisibleMovies] = useState([]);
const [pagina, setPagina] = useState(1);

  useEffect(() => {
  
    get("/discover/movie?include_adult=false&include_video=false&language=ES&page="  +
    pagina + "&sort_by=popularity.desc&with_genres=10749&watch_region=AR").then((data) => {
        setVisibleMovies(data.results.slice(0, 7)); // Obtener las primeras 4 películas
      })
      .finally(() => {
      });
  }, [pagina]);
  
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
    <div className="resultadosPlataformas">
        <div>
        <a href="#/"><img className="logoPlataforma" src="https://scontent.fcor10-4.fna.fbcdn.net/v/t39.30808-6/358430971_10159756745313634_1293967417719091959_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=5Exla9usSmoAX-RQigK&_nc_ht=scontent.fcor10-4.fna&oh=00_AfCZvFVzXAlViypUM2lk1jaLVcdFrXKKC1fNATi6KIhOTg&oe=64AAF81https://www.diariodemexico.com/sites/default/files/styles/max_width_770px/public/2023-05/photo_-_2023-05-30t184926.887.jpg?itok=KkvK27AP" alt =""></img></a>
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