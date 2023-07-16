import {PeliculasGrid} from "../Components/PeliculasGrid";
import {NetflixAccion} from "../Components/NetflixAccion";
import { Netflix } from "../Components/Netflix";
import { NetflixDrama } from "../Components/NetflixDrama";
import { NetflixComedia } from "../Components/NetflixComedia";
import { NetflixFantasia } from "../Components/NetflixFantasia";
import { NetflixRomances } from "../Components/NetflixRomances";
import { NetflixThrillers } from "../Components/NetflixThrillers";

export const LandingNetflix =()=>{
    return <> 
   <PeliculasGrid/>
   <Netflix/>
   <NetflixDrama/>
   <NetflixAccion/>
   <NetflixComedia/>
   <NetflixFantasia/>
   <NetflixRomances/>
   <NetflixThrillers/>
    </>
   
}