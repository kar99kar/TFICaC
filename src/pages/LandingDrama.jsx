import {PeliculasGrid} from "../Components/PeliculasGrid";
import {Drama} from "../Components/Drama";
import {NetflixDrama} from "../Components/NetflixDrama"
import { StarPlusDrama} from "../Components/StarPlusDrama";
import { PrimeVideoDrama } from "../Components/PrimeVideoDrama";
import { DisneyPlusDrama } from "../Components/DisneyPlusDrama";

export const LandingDrama =()=>{
    return <> 

   <PeliculasGrid/>
   <Drama/>
   <NetflixDrama/>
   <StarPlusDrama/>
   <PrimeVideoDrama/>
   <DisneyPlusDrama/>
    </>
   
}