import {PeliculasGrid} from "../Components/PeliculasGrid";
import {NetflixRomances} from "../Components/NetflixRomances";
import { StarPlusRomances} from "../Components/StarPlusRomances";
import { PrimeVideoRomances } from "../Components/PrimeVideoRomances";
import { DisneyPlusRomances } from "../Components/DisneyPlusRomances";
import { Romances } from "../Components/Romances";

export const LandingRomances =()=>{
    return <> 

   <PeliculasGrid/>
   <Romances/>
   <NetflixRomances/>
   <StarPlusRomances/>
   <PrimeVideoRomances/>
   <DisneyPlusRomances/>
    </>
   
}