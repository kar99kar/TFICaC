import { get } from "../utils/httpCliente.js";
import { useState, useEffect } from "react";
import { PeliculasCard } from "./PeliculasCard";
import "./PlataformasGrid.css";
import { useQuery } from "../hooks/useQuery.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const PeliculasGrid = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [pagina, setPagina] = useState(1);
  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
 
    const searchURL = search
      ? "/search/movie?query=" + search
      : "/discover/movie?include_adult=false&include_video=false&language=en-US&page=" +
        pagina +
        "&sort_by=popularity.desc&watch_region=AR";

    get(searchURL)
      .then((data) => {
        setPeliculas(data.results.slice(0, 5));
      })
      .finally(() => {
      });
  }, [search, pagina]);

  const handlePaginaSiguiente = () => {
    setPagina(pagina + 1);
  };

  const handlePaginaAnterior = () => {
    if (pagina > 1) {
      setPagina(pagina - 1);
    }
  };


  return (
    <div className="paginacion">
    <div>
       <button className="botonIzq" onClick={handlePaginaAnterior} disabled={pagina === 1}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
    </div>
    <div>
      <ul className="plataformasGrid">
        {peliculas.map((pelicula) => (
          <PeliculasCard key={pelicula.id} pelicula={pelicula} />
        ))}
    
      </ul>
      </div>
      <div>
      <button className="botonDer" onClick={handlePaginaSiguiente}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    
      
    </div>
  );
};

