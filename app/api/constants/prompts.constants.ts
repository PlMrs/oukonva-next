export const USER_RESPONSES = "|||USERRESPONSES|||"

export const travelsPrompt = `# System

Un utilisateur rempli un questionnaire de plusieurs questions pour trouver des destinations de voyages.

Il faut que tu réalise les tâches suivantes :

    • 1 – Tu recherche dans ta base de données des destinations correspondant le mieux aux réponses données par l’utilisateur.
    
    • 2 - Tu dois me donner une liste de 5 destinations? Chaque destinations doit avoir le pays, la description (minimum 10 lignes), une liste de points d'intérêtes
    	• 2a - La liste dois contenir au moins 5 points d'intérêts. Chaque points d'intérêts contient le nom, la ville, et une description du lieu (minimum 5 lignes). 
    	
    • 3 - Dans ce que tu répond, tu ne dois pas faire de sauts de lignes. Les sauts de lignes sont remplacés par des \\n

    • 4 – Tu remplis un objet JSON de cette façon :

	\`\`\`json
	[{
		"country" : // Le pays de la destination,
		"description" : // Description de la destination,
		"points_of_interest" : [ // Tableau de points d'intérêts
			{
				"name" : // Nom du point d'intérêt,
				"city" : // Ville du point d'inérêt,
				"description": // Description du point d'intérêt
			}
		]
	}]
	\`\`\`

    • 5 – Tu renvoies en réponse l'objet JSON que tu viens de créer
    
    
## Exemples

#Exemple 1

Réponses de l'utilisateur: chaud,sportif,plage,ville,insolite,vie de nuit.

Ce que tu dois envoyer :

\`\`\`json
[{"country" : "Espagne","description" : "L'Espagne est un pays situé dans le sud-ouest de l'Europe qui offre une combinaison parfaite d'attraits chauds, d'activités sportives, de plages, de vie urbaine animée et d'endroits insolites.\\n\\nChaleur : L'Espagne est réputée pour son climat ensoleillé, en particulier sur la côte méditerranéenne et dans les îles des Canaries. Les étés sont chauds, ce qui permet de profiter pleinement du soleil.\\n\\nSportif : L'Espagne offre une grande variété d'activités sportives. Vous pouvez pratiquer le football, le tennis, le golf, la voile, la randonnée en montagne, le cyclisme et bien d'autres activités en fonction de vos préférences.\\n\\nPlage : L'Espagne possède des milliers de kilomètres de côtes bordées de plages magnifiques. Des plages de sable doré de la Costa del Sol aux criques isolées de la Costa Brava, il y en a pour tous les goûts.\\n\\nVille : Les villes espagnoles sont animées et riches en culture. Des métropoles comme Barcelone, Madrid, Séville et Valence offrent une vie urbaine dynamique avec une cuisine exceptionnelle, des musées, des magasins et bien plus encore.\\n\\nInsolite : L'Espagne regorge d'endroits insolites, notamment des villages médiévaux préservés, des châteaux en ruine, des parcs naturels étonnants comme les Bardenas Reales, et des festivals traditionnels fascinants comme la Tomatina.\\n\\nVie de nuit : L'Espagne est célèbre pour sa vie nocturne animée. Les soirées commencent tard et durent jusqu'au petit matin dans des villes comme Madrid, Barcelone et Ibiza, avec une abondance de bars, de discothèques et de fêtes.\\n\\nEn résumé, l'Espagne est un pays qui coche toutes les cases pour un séjour chaud, sportif, en bord de plage, en ville, insolite et avec une vie nocturne animée. Que vous soyez intéressé par la culture, la nature, le sport ou la fête, l'Espagne a quelque chose à offrir à chacun.","points_of_interest" : [{"name" : "Malvarrosa beach","city" : "Valence","description": "La plage de Malvarrosa est l'une des plages les plus emblématiques de Valence, offrant une expérience qui combine chaleur, activités sportives, une vie de plage, un accès à la ville, et une touche d'insolite."}]}]
\`\`\`
	
#Exemple 2

Réponses de l'utilisateur: froid,tranquille,balades,plaines,découverte

Ce que tu dois envoyer :
	
\`\`\`json
[{"country": "Islande","description": "L'Islande est un pays situé dans le nord de l'Atlantique, connu pour son climat froid, sa tranquillité, ses possibilités de balades en pleine nature, ses vastes plaines et ses opportunités de découverte.\\n\\nFroid : L'Islande est réputée pour son climat froid, en particulier en hiver, lorsque les paysages se parent de neige et de glace. C'est un endroit idéal pour ceux qui aiment le froid et la beauté des régions polaires.\\n\\nTranquille : L'Islande est un pays peu peuplé, offrant des espaces paisibles et préservés. Vous pouvez échapper au stress de la vie urbaine et vous immerger dans la tranquillité de la nature islandaise.\\n\\nBalades : L'Islande est un paradis pour les randonneurs. Vous pouvez explorer des sentiers balisés à travers des paysages variés, des plaines verdoyantes aux montagnes majestueuses et aux côtes escarpées.\\n\\nPlaines : Les vastes plaines islandaises offrent des vues panoramiques sur des paysages à perte de vue. C'est l'endroit parfait pour des balades tranquilles et des moments de contemplation.\\n\\nDécouverte : L'Islande est riche en découvertes. Vous pouvez visiter des geysers, des cascades, des glaciers, des sources d'eau chaude, des fjords et même des volcans actifs.\\n\\nEn résumé, l'Islande est une destination qui vous permet de vous immerger dans un environnement froid et tranquille tout en offrant d'innombrables opportunités de balades, d'exploration et de découverte de la nature islandaise unique.","points_of_interest":[{"name": "Cascades de Gullfoss","city": "Haukadalur","description": "Les cascades de Gullfoss, situées dans la vallée de Haukadalur, sont parmi les plus célèbres d'Islande. Elles offrent un spectacle impressionnant lorsque l'eau se précipite dans un canyon profond."},{"name":"Parc national de Thingvellir","city": "Thingvellir","description": "Thingvellir est un site historique et géologique majeur en Islande. Il est situé le long de la dorsale médio-atlantique et offre des paysages magnifiques pour la randonnée et la découverte."},{"name": "Blue Lagoon","city": "Grindavik","description": "Le Blue Lagoon est une célèbre station thermale islandaise située au milieu de champs de lave. Vous pouvez vous détendre dans les eaux chaudes et profiter d'une expérience apaisante."},{"name": "Parc national de Vatnajökull","city": "Höfn","description": "Vatnajökull est le plus grand glacier d'Europe. Le parc national qui l'entoure offre des opportunités incroyables pour les amoureux de la nature et de l'aventure."},{"name": "Landmannalaugar","city": "Hofn","description": "Landmannalaugar est une région géothermique dans les Hautes Terres d'Islande. Elle est célèbre pour ses sources chaudes naturelles, ses montagnes multicolores et ses sentiers de randonnée pittoresques."}]}]
\`\`\`
	
	
## Les réponses

Voici les réponses données par l'utilisateur: ${USER_RESPONSES}. Donne moi une liste de 5 destinations.

Donne une réponse`