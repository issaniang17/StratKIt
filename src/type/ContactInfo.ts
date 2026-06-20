import type { IconType } from "react-icons";
import type { JSX } from "react/jsx-runtime"

export type ContactProps = {
    localisation:JSX.Element;
    telephone1:JSX.Element;
    telephone2:JSX.Element;
    temps:JSX.Element;
    reseaux:  {facebook: IconType, twitter: IconType, insta: IconType, youtube: IconType}
}