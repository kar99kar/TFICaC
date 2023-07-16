import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { get } from "../utils/httpCliente";

import { Spinner } from "../Components/Spinner";

import "./PeliculaDetalle.css"
import Estrellas from "../Components/Estrellas.jsx"

// style

export const PeliculaDetalle = () => {
  const { peliculaId } = useParams();

  const [cargando,setCargando]= useState(true);
  const [pelicula, setPelicula]  = useState(null);
  const [proveedores, setProveedores] = useState([]);
  const [link, setLink] = useState ("");

  useEffect(() => {
    setCargando(true);
   Promise.all([
    get(`/movie/${peliculaId}`),
    get(`/movie/${peliculaId}/watch/providers`)
  ]).then(([peliculaData, proveedoresData]) => {
      setPelicula(peliculaData);
      setProveedores(proveedoresData.results.AR.flatrate || []);
      setLink(proveedoresData.results.AR.link || "");

    /*    console.log(setPelicula); */
    setCargando(false);
    });
  }, [peliculaId]);

  if(cargando){
    return <Spinner/>
  }

  const imgURL = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`;
 
  return (
    <div className="contenedorDetalle">
        <img className="col" src={imgURL} alt={pelicula.title} />
      <div className="peliculaDetalle col">
        <p className="item">
         <strong>Titulo:</strong>
          {pelicula.title}
        </p>
        <p>
            <strong>Fecha de lanzamiento: </strong>
            {pelicula.release_date}
        </p>
        
        <p>
            <strong>Promedio de votaciones: </strong>
            {pelicula.vote_average}
        </p>


        <p>
            <strong>Generos:</strong>
            {pelicula.genres.map((genre)=>genre.name).join(", ")}
        </p>
        <p>
            <strong>Descripcion</strong>
            {pelicula.overview}
        </p>

       <p>
  <strong>Proveedores:</strong>
  <br></br>
    {proveedores.map((proveedor) => (
    <a href={link} key={proveedor.provider_id} target="_blank" rel="noopener noreferrer">
      <img
        src={`https://www.themoviedb.org/t/p/original/${proveedor.logo_path}`}
        alt={proveedor.provider_name}
        className="proveedorLogo"
      />
    </a>
  ))}
</p>
<p>
<strong> Calificar: </strong> 
    <Estrellas/> <Estrellas/>  <button>Aceptar</button>
 </p>

      </div>
    </div>
  );
};
