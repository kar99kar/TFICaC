
import "./PlataformasCard.css"
import {Link} from "react-router-dom" 

export const PlataformasCard = ({pelicula}) => {

    const imgURL= `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`

  return (
    <li className="plataformasCard">
 <Link to={`/pelicula/${pelicula.id}`}>
      <img className="plataformasImage" src={imgURL} alt={pelicula.title} />
      <div className="originalTitle">{pelicula.original_title}</div>
 </Link> 
    </li>

    
  );
};
