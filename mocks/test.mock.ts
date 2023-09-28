import flocon from "@/public/images/flocon.svg"
import soleil from "@/public/images/soleil.svg"
import sacDos from "@/public/images/sac_dos.svg"
import sacPlage from "@/public/images/sac_plage.svg"
import cartePapier from "@/public/images/carte_papier.svg"
import cocktailCoco from "@/public/images/cocktail_coco.svg"
import hikingShoes from "@/public/images/hiking_shoes.svg"
import velo from "@/public/images/velo.svg"
import { TQuestionnaireData } from "@/types/test.types"

export const dataMock: TQuestionnaireData[] = [
    {
        question : {
        content: "Tu es plutôt ?",
        id: 1
        },
        answer : {
            oneHand : {
                content : "Froid",
                image: flocon.src,
                id: 1
            },
            otherHand : {
                content : "Chaud",
                image: soleil.src,
                id: 2
            }
        }
    },
    {
        question : {
        content: "Tu es plutôt ?",
        id: 2
        },
        answer : {
            oneHand : {
                content : "Aventure",
                image: sacDos.src,
                id: 1
            },
            otherHand : {
                content : "Détente",
                image: cocktailCoco.src,
                id: 2
            }
        }
    },
    {
        question : {
        content: "Tu es plutôt ?",
        id: 3
        },
        answer : {
            oneHand : {
                content : "Cuisine de maman",
                image: sacPlage.src,
                id: 1
            },
            otherHand : {
                content : "Rendez-vous en terre inconnu",
                image: cartePapier.src,
                id: 2
            }
        }
    },
    {
        question : {
        content: "Tu es plutôt ?",
        id: 4
        },
        answer : {
            oneHand : {
                content : "Sentiez battu",
                image: hikingShoes.src,
                id: 1
            },
            otherHand : {
                content : "Route pavée",
                image: velo.src,
                id: 2
            }
        }
    },
]