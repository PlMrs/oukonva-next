import { openAI } from "../config/openai";
import { USER_RESPONSES, travelsPrompt } from "../constants/prompts.constants";

export class TestManager {
    async getTestResult(responses: string){

        const promptForGPT = travelsPrompt.replace(USER_RESPONSES, responses)
        const chatCompletion = await openAI.chat.completions.create({
            messages: [{ role: 'user', content: promptForGPT }],
            model: 'gpt-3.5-turbo',
        });
  
        if(!chatCompletion?.choices[0]?.message?.content) {
            throw new Error('Error in response computing')
        }

        const responseFiltered = chatCompletion.choices[0].message.content.replace("```json", "").replace("```", "")
        
        return JSON.parse(responseFiltered);
    }

    async getTestResultMock(res: String){
        return [
            {
                "country": "Suisse",
                "description": "La Suisse est un pays situé au coeur des Alpes, offrant un terrain montagneux et des paysages de campagne pittoresques. C'est l'endroit idéal pour ceux qui recherchent le calme, le froid et les petits chemins en forêt.\n\nMontagne : La Suisse est réputée pour ses sommets majestueux, ses stations de ski de renommée mondiale et ses vues panoramiques à couper le souffle. Que vous soyez un passionné de randonnée ou un skieur chevronné, vous trouverez votre bonheur dans les montagnes suisses.\n\nCampagne : Les paysages de campagne suisses offrent des vues pittoresques sur des prairies verdoyantes, des lacs scintillants et des villages charmants. Vous pourrez profiter de la tranquillité de la nature et vous détendre au milieu d'un décor enchanteur.\n\nCalme : La Suisse est réputée pour son mode de vie paisible et tranquille. Vous pourrez échapper au bruit et au stress de la vie urbaine et vous ressourcer dans un environnement calme et serein.\n\nTemps froid : En hiver, la Suisse se transforme en paysage enneigé, offrant des opportunités pour les sports d'hiver tels que le ski, le snowboard et le patinage. Les températures fraîches vous permettent également de profiter de paysages gelés uniques.\n\nPetits chemins en forêts : La Suisse possède de nombreux sentiers pittoresques à travers ses forêts luxuriantes. Vous pourrez vous promener le long de petits chemins tranquilles, en admirant la beauté de la nature suisse.\n\nEn résumé, la Suisse est une destination idéale pour les amoureux de la montagne, de la campagne, du calme, du froid et des petits chemins en forêt. Que vous soyez un passionné de nature, un amateur de sports d'hiver ou simplement à la recherche d'un endroit paisible, la Suisse saura vous combler.",
                "points_of_interest": [
                    {
                        "name": "Le Cervin",
                        "city": "Zermatt",
                        "description": "Le Cervin est l'une des montagnes les plus emblématiques de la Suisse. C'est un défi pour les alpinistes chevronnés et offre des vues spectaculaires sur les Alpes suisses et italiennes."
                    },
                    {
                        "name": "Lac Léman",
                        "city": "Genève",
                        "description": "Le lac Léman est le plus grand lac alpin d'Europe occidentale. Vous pourrez profiter de croisières en bateau, de promenades le long du rivage et de superbes vues sur les montagnes environnantes."
                    },
                    {
                        "name": "Vieux quartier de Berne",
                        "city": "Berne",
                        "description": "Le vieux quartier de Berne est classé au patrimoine mondial de l'UNESCO et offre une architecture médiévale bien préservée. Vous pourrez vous promener dans ses rues étroites et découvrir ses places pittoresques."
                    },
                    {
                        "name": "Chutes du Rhin",
                        "city": "Schaffhouse",
                        "description": "Les chutes du Rhin sont parmi les plus grandes chutes d'eau d'Europe. Vous pourrez les admirer depuis des promenades panoramiques et des bateaux touristiques."
                    },
                    {
                        "name": "Gruyères",
                        "city": "Fribourg",
                        "description": "Gruyères est un charmant village médiéval connu pour son fromage éponyme. Vous pourrez visiter la célèbre fromagerie et découvrir l'histoire locale lors d'une promenade dans ses ruelles pavées."
                    }
                ]
            }
        ]
    }
}