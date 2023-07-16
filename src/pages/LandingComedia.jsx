import {PeliculasGrid} from "../Components/PeliculasGrid";
import {Comedia} from "../Components/Comedia";
import {NetflixComedia} from "../Components/NetflixComedia"
import { StarPlusComedia} from "../Components/StarPlusComedia";
import { PrimeVideoComedia } from "../Components/PrimeVideoComedia";
import { DisneyPlusComedia } from "../Components/DisneyPlusComedia";

export const LandingComedia =()=>{
    return <> 

   <PeliculasGrid/>
   <Comedia/>
   <NetflixComedia/>
   <StarPlusComedia/>
   <PrimeVideoComedia/>
   <DisneyPlusComedia/>
    </>
   
}