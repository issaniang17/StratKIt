
import type { IconType } from "react-icons";


;


export type TeamProps = {
    image: string;
    nom: string;
    poste: string;
    description: string;
    socialMedia : {facebook: IconType, twitter: IconType, insta: IconType, basket: IconType}
}